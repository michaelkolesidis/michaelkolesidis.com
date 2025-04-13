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
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Duck } from './Duck';

export default function Scene() {
  const duck = useRef();
  const [ambientOn, setAmbientOn] = useState(false);

  const toggleAmbientLight = () => {
    setAmbientOn((prev) => !prev);
  };

  function useDuckScale() {
    const [scale, setScale] = useState(getScale());

    function getScale() {
      return window.innerWidth > 1001 ? 5.5 : 4.5;
    }

    useEffect(() => {
      const handleResize = () => setScale(getScale());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return scale;
  }

  const duckScale = useDuckScale();

  return (
    <Canvas
      camera={{
        near: 0.1,
        far: 50,
        position: [2, 3, 4],
      }}
      gl={{
        antialias: false,
      }}
      dpr={[1, 2]}
    >
      {ambientOn && <ambientLight intensity={1} />}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <hemisphereLight
        skyColor={'#ffffff'}
        groundColor={'#ffc900'}
        intensity={3}
      />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <Duck
          ref={duck}
          scale={[duckScale, duckScale, duckScale]}
          onToggleLight={toggleAmbientLight}
        />
      </Float>
    </Canvas>
  );
}
