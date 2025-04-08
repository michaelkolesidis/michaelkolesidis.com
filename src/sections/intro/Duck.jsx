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

// Helper function for linear interpolation (lerp)
const lerp = (start, end, alpha) => start + (end - start) * alpha;

export const Duck = forwardRef(({ mouseX, mouseY, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/assets/3d-models/duck.glb');
  const duck = useRef();

  const initialRotation = [Math.PI / 6, -Math.PI / 6, 0]; // Your initial defined rotation

  // Smooth rotation using lerp
  useFrame(() => {
    if (duck.current) {
      const rotationSpeed = 0.05; // Lower this value to make the rotation smoother
      const maxRotation = Math.PI / 16; // Reduce the maximum rotation for more subtle effects

      // Map mouseX (horizontal) to a rotation value for the Y-axis (opposite direction)
      const targetRotationY =
        (mouseX / window.innerWidth) * maxRotation * 2 - maxRotation; // Reduced factor for subtler movement

      // Map mouseY (vertical) to a rotation value for the X-axis (opposite direction)
      const targetRotationX =
        (mouseY / window.innerHeight) * maxRotation * 0.25 - maxRotation; // Reduced factor for subtler movement

      // Lerp between the current rotation and the target rotation, adding to the initial rotation
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
