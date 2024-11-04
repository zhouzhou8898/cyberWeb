'use client';

import { forwardRef, ReactNode } from 'react';
import { Float } from '@react-three/drei';
import { CyberGirl } from '@/components/CyberGirl';
import { Group } from 'three';

type FloatingGirlProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingGirl = forwardRef<Group, FloatingGirlProps>(
  (
    {
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group
        ref={ref}
        {...props}
      >
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <CyberGirl />
        </Float>
      </group>
    );
  }
);

FloatingGirl.displayName = 'FloatingGirl';

export default FloatingGirl;
