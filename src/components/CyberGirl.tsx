'use client';

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const metalMaterial = new THREE.MeshPhysicalMaterial({
  roughness: 1,
  metalness: 0.2,
  color: 'blue',
});

const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: '#c8b7b7',
  emissive: '#7b7474',
  roughness: 0.1,
  metalness: 0.5,
});

const textureLoader = new THREE.TextureLoader();
const colorTexture = textureLoader.load('/texture/BaseColor.jpg');
colorTexture.colorSpace = THREE.SRGBColorSpace;
const normalTexture = textureLoader.load('/texture/Normal.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/texture/AmbientOcclusion.jpg'
);
const metallicTexture = textureLoader.load('/texture/Metallic.jpg');
const roughnessTexture = textureLoader.load('/texture/Roughness.jpg');

const material = new THREE.MeshStandardMaterial({
  map: colorTexture,
  normalMap: normalTexture,
  aoMap: ambientOcclusionTexture,
  metalnessMap: metallicTexture,
  roughnessMap: roughnessTexture,
});

export type CyberGirlProps = {
  scale?: number;
};

export function CyberGirl({ ...props }: CyberGirlProps) {
  const { nodes } = useGLTF('/scene.gltf');

  return (
    <group
      {...props}
      dispose={null}
    >
      <group scale={0.01}>
        <group
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1450, 250]}
        >
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={material}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_9.geometry}
            material={material}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={material}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_13.geometry}
            material={material}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_15.geometry}
            material={material}
            skeleton={nodes.Object_15.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_17.geometry}
            material={material}
            skeleton={nodes.Object_17.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_19.geometry}
            material={material}
            skeleton={nodes.Object_19.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_21.geometry}
            material={material}
            skeleton={nodes.Object_21.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
