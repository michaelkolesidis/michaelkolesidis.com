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

import { useRef, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Outlines } from '@react-three/drei';

const lerp = (start, end, alpha) => start + (end - start) * alpha;

export const Duck = forwardRef(({ mouseX, mouseY, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/assets/3d-models/duck.glb');
  const duck = useRef();

  // Initial defined rotation
  const initialRotation = [0.01, Math.PI / 128, 0];
  const rotationSpeed = 0.05;
  const maxRotation = Math.PI / 16; // Single variable for max rotation

  useFrame(() => {
    if (duck.current) {
      // Normalize mouse coordinates to the range of -1 to 1
      const normalizedMouseX = (mouseX / window.innerWidth) * 2 - 1;
      const normalizedMouseY = (mouseY / window.innerHeight) * 2 - 1;

      // Calculate target rotations based on normalized mouse coordinates
      const targetRotationY = normalizedMouseX * maxRotation * 2; // Increased influence
      const targetRotationX = normalizedMouseY * maxRotation;

      duck.current.rotation.y = lerp(
        duck.current.rotation.y,
        initialRotation[1] - targetRotationY,
        rotationSpeed
      );
      duck.current.rotation.x = lerp(
        duck.current.rotation.x,
        initialRotation[0] - targetRotationX,
        rotationSpeed
      );
    }
  });

  return (
    <group {...props} ref={duck} dispose={null}>
      <mesh
        ref={ref}
        name="duck"
        geometry={nodes.Node1.geometry}
        rotation={initialRotation}
      >
        <meshStandardMaterial
          map={materials.Duck.map}
          color={0xffffff}
          toneMapped={false}
        />
        <Outlines thickness={1} color={0x000000} />
      </mesh>
    </group>
  );
});

useGLTF.preload('./models/duck.glb');
