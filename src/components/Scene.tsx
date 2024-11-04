'use client';

import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  useProgress,
  Html,
  ScrollControls,
  Float,
  Clouds,
  Cloud,
} from '@react-three/drei';
import Model from './Model';
import { Group } from 'three';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene({}: Props) {
  const FLOAT_SPEED = 1.5;
  const modelRef = useRef<Group>(null);
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
    >
      {/* MODEL */}
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[-0.002, 0.002]}
      >
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Float>

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
          />
        </Clouds>
      </Float>

      <ambientLight
        intensity={3}
        color='#ffffff'
      />
      <Environment
        files='/hdr/lampstudio.hdr'
        environmentIntensity={1}
        environmentRotation={[1, 1, 1]}
      />
    </Canvas>
  );
  //   <FloatingGirl floatSpeed={FLOAT_SPEED} />;
}
