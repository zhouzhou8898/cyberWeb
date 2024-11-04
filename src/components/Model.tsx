'use client';

import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useThree } from '@react-three/fiber';

useGLTF.preload('/sculpture.glb');

export type ModelProps = {};

export default function Model({ ...props }: ModelProps) {
  const group = useRef<Group>(null);
  const { camera } = useThree(); // 获取摄像机
  const { nodes, materials, animations, scene } = useGLTF('/sculpture.glb');

  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  //   useEffect(() => {
  //     if (actions['Armature|ReapTheWhirlwind']) {
  //       actions['Armature|ReapTheWhirlwind'].play(); // 直接播放动画
  //       actions['Armature|ReapTheWhirlwind'].timeScale = 0.2;
  //     }

  //     // camera.position.set(0, 0, 0);
  //     // camera.lookAt(0, 0, 0);

  //     return () => {
  //       actions['Armature|ReapTheWhirlwind']?.stop(); // 组件卸载时停止动画
  //     };
  //   }, [actions]);

  //   useFrame(
  //     () =>
  //       //@ts-ignore
  //       (actions['Slow Mvt'].time =
  //         //@ts-ignore
  //         (actions['Slow Mvt'].getClip().duration * scroll.offset) / 3)
  //   );

  return (
    <group
      {...props}
      rotation={[0, Math.PI, 0]}
      position={[-120, -150, 0]}
      scale={[1.1, 1.2, 1.2]}
    >
      <primitive object={scene} />
    </group>
  );
}
