import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      {/* 
        A basic material for the core that glows. 
        ToneMapped false ensures the emissive color is not clamped, allowing it to bloom.
      */}
      <meshStandardMaterial 
        color="#ffcc00" 
        emissive="#ffaa00" 
        emissiveIntensity={2} 
        toneMapped={false}
      />
      {/* 
        Point light emitted from the sun to light up the orbiting planets
      */}
      <pointLight color="#ffcc00" intensity={500} distance={100} decay={2} />
    </mesh>
  );
}
