import { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Duck } from './Duck';

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
        near: 0.1,
        far: 50,
        position: [2, 3, 4],
      }}
    >
      <ambientLight intensity={3.2} />
      <pointLight intensity={5} position={[0, 0, 5]} />

      <Float
        speed={2} // defaults to 1
        rotationIntensity={1} // defaults to 1
        floatIntensity={2} // defaults to 1
        floatingRange={[-0.1, 0.1]} // defaults to [-0.1,0.1]
      >
        <Duck
          ref={duck}
          // position={[0, 0, 0]}
          scale={[5, 5, 5]}
          // rotation={[0, 0, 0]}
          onClick={handleClick}
          onPointerOver={handleHover}
          onPointerOut={handleUnhover}
        />
      </Float>
    </Canvas>
  );
}
