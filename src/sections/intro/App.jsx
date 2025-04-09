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

import { useState, useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { Duck } from './Duck';
import { Canvas } from '@react-three/fiber';

export default function App() {
  const duck = useRef();

  const [hovered, setHovered] = useState(false);

  const handleHover = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handleUnhover = (e) => {
    e.stopPropagation();
    setHovered(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('clicked!');
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouseX(clientX);
    setMouseY(clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'inherit';
    }
  }, [hovered]);

  // Camera
  let cameraZ = window.innerWidth < 600 ? 8 : 5;

  return (
    <Canvas
      camera={{
        // fov: 45,
        near: 0.1,
        far: 50,
        position: [0, 2.5, 5],
      }}
    >
      <ambientLight intensity={3.2} />
      <pointLight intensity={5} position={[0, , 5]} />

      <Duck
        ref={duck}
        position={[0, -1.45, 1]}
        // rotation={[Math.PI / 7 - 0.3, -Math.PI / 5 - 0.3, 0]}
        scale={[4, 4, 4]}
        onClick={handleClick}
        onPointerOver={handleHover}
        onPointerOut={handleUnhover}
        mouseX={mouseX}
        mouseY={mouseY}
      />

      <Float rotationIntensity={1} floatIntensity={0.25} />
    </Canvas>
  );
}
