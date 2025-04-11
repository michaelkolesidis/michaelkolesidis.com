/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import { useRef, forwardRef, useEffect, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Outlines } from '@react-three/drei';
import * as THREE from 'three';
import variables from '../../style/variables.module.scss';

export const Duck = forwardRef(({ onToggleLight, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/assets/3d-models/duck.glb');
  const duck = useRef();
  const [useToon, setUseToon] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { cursor, pointer } = variables;

  useEffect(() => {
    document.body.style.cursor = hovered ? pointer : cursor;
  }, [hovered]);

  // Smooth camera-follow rotation
  useFrame((state, delta) => {
    const targetY = -(state.pointer.x * Math.PI) / 10;
    const targetX = (state.pointer.y * Math.PI) / 10;
    const lambda = 2;
    duck.current.rotation.y = THREE.MathUtils.damp(
      duck.current.rotation.y,
      targetY,
      lambda,
      delta
    );
    duck.current.rotation.x = THREE.MathUtils.damp(
      duck.current.rotation.x,
      targetX,
      lambda / 2,
      delta
    );
  });

  // Create gradient map
  const gradientMap = useMemo(() => {
    const size = 6;
    const data = new Uint8Array(size * 4);
    for (let i = 0; i < size; i++) {
      const shade = Math.round((i / (size - 1)) * 255);
      data[i * 4 + 0] = shade;
      data[i * 4 + 1] = shade;
      data[i * 4 + 2] = shade;
      data[i * 4 + 3] = 255;
    }
    const texture = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);

  const toonMaterial = useMemo(() => {
    return new THREE.MeshToonMaterial({
      color: materials.Duck.color,
      map: materials.Duck.map,
      normalMap: materials.Duck.normalMap,
      gradientMap,
      toneMapped: false,
    });
  }, [materials.Duck, gradientMap]);

  const handleClick = (e) => {
    e.stopPropagation();

    // Toggle materials
    setUseToon((prev) => !prev);

    // Toggle ambient light
    if (onToggleLight) onToggleLight();

    // Play sound
    const squeak = new Audio('/assets/sounds/squeak.mp3');
    squeak.playbackRate = 1.35;
    squeak.play().catch((err) => {
      console.warn('Autoplay prevented or error playing sound:', err);
    });

    // Dispatch a custom event
    window.dispatchEvent(new CustomEvent('duckClicked'));
  };

  return (
    <group {...props} ref={duck} dispose={null}>
      <mesh
        ref={ref}
        name="duck"
        geometry={nodes.Node1.geometry}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
        material={useToon ? toonMaterial : undefined}
      >
        {!useToon && (
          <meshStandardMaterial
            map={materials.Duck.map}
            color={0xffffff}
            toneMapped={false}
          />
        )}
        {useToon && <Outlines thickness={1.5} color={0x000000} />}
      </mesh>
    </group>
  );
});

useGLTF.preload('/assets/3d-models/duck.glb');
