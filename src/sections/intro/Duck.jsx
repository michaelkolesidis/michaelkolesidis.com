import { useRef, forwardRef } from 'react';
// import { useFrame } from '@react-three/fiber';
import { useGLTF, Outlines } from '@react-three/drei';
// import * as THREE from 'three';

// const lerp = (start, end, alpha) => start + (end - start) * alpha;

export const Duck = forwardRef(({ ...props }, ref) => {
  const { nodes, materials } = useGLTF('/assets/3d-models/duck.glb');
  const duck = useRef();

  // const rotationSpeendX = 0.2;
  // const rotationSpeendY = -rotationSpeendX / 2;

  // useFrame((state) => {
    // duck.current.rotation.y = THREE.MathUtils.lerp(
    //   ref.current.rotation.y,
    //   (state.pointer.x * Math.PI) / 20,
    //   rotationSpeendX
    // );
    // duck.current.rotation.x = THREE.MathUtils.lerp(
    //   ref.current.rotation.x,
    //   (state.pointer.y * Math.PI) / 20,
    //   rotationSpeendY
    // );
  // });

  return (
    <group {...props} ref={duck} dispose={null}>
      <mesh ref={ref} name="duck" geometry={nodes.Node1.geometry}>
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
