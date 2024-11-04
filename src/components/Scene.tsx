'use client';

import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Environment,
  useProgress,
  Html,
  Float,
  Clouds,
  Cloud,
  OrbitControls,
} from '@react-three/drei';
import FloatingModel from './FloatingModel';
import { Group } from 'three';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene({}: Props) {
  const modelRef = useRef<Group>(null);

  useGSAP(() => {
    if (!modelRef.current) return;

    gsap.set(modelRef.current?.position, { x: 100 });
    gsap.set(modelRef.current?.rotation, { y: 0 });
    gsap.set(modelRef.current?.scale, { x: 1, y: 1, z: 1 });

    // const introTl = gsap.timeline({
    //   defaults: {
    //     duration: 3,
    //     ease: 'back.out(1.4)',
    //   },
    // });

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    scrollTl
      .to(modelRef.current.position, { x: -200, y: -100 }, 0)
      .to(modelRef.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, 0)
      .to(modelRef.current.rotation, { y: Math.PI }, 0);
  });

  return (
    <Canvas
      style={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 10,
      }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{ position: [100, 0, -400] }}
    >
      {/* MODEL */}

      <Suspense fallback={<Loader />}>
        <FloatingModel ref={modelRef} />
      </Suspense>

      {/* CLOUD */}
      <Float
        speed={5}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.01, 0.01]}
      >
        <Clouds>
          <Cloud
            bounds={[5, 10, 2]}
            seed={2}
            color='#ffffff'
            opacity={0.3}
            position={[0, 0, -50]}
            scale={[100, 100, 100]}
          />
        </Clouds>
      </Float>

      <ambientLight
        intensity={1}
        color='#ffffff'
      />
      <Environment
        files='/hdr/lampstudio.hdr'
        environmentIntensity={0.6}
        environmentRotation={[1, 1, 1]}
      />
    </Canvas>
  );
}
