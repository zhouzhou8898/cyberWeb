'use client';

import { forwardRef, ReactNode } from 'react';
import { Group } from 'three';
import Model from './Model';
import { Float } from '@react-three/drei';

type FloatingModelProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingModel = forwardRef<Group, FloatingModelProps>(
  (
    {
      floatSpeed = 2,
      rotationIntensity = 0.2,
      floatIntensity = 0.5,
      floatingRange = [-0.01, 0.01],
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
          <Model />
        </Float>
      </group>
    );
  }
);

FloatingModel.displayName = 'FloatingModel';

export default FloatingModel;
