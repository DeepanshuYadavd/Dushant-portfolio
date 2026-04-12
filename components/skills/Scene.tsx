"use client";

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Sun from './Sun';
import Planet from './Planet';

// Skill data for planets
const skills = [
  { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', distance: 3.5, speed: 0.5, size: 0.4, color: '#61DAFB' },
  { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', distance: 5, speed: 0.4, size: 0.5, color: '#ffffff' },
  { name: 'Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', distance: 6.5, speed: 0.3, size: 0.45, color: '#3178C6' },
  { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', distance: 8, speed: 0.25, size: 0.4, color: '#339933' },
  { name: 'Graphic designing', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', distance: 9.5, speed: 0.2, size: 0.35, color: '#06B6D4' },
  { name: 'Motion graphics', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', distance: 11, speed: 0.15, size: 0.4, color: '#F24E1E' },
  { name: 'Digital Animation', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', distance: 12.5, speed: 0.1, size: 0.3, color: '#ffffff' },
];

function ResponsiveCamera() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5; // simplified check based on Three.js units

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, isMobile ? 25 : 15, isMobile ? 35 : 25]}
      fov={isMobile ? 55 : 45}
    />
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas eventPrefix="client">
        <ResponsiveCamera />
        <color attach="background" args={['#020202']} />

        {/* Ambient and Fog for dramatic effect */}
        <ambientLight intensity={0.1} />
        <fog attach="fog" args={['#020202', 30, 80]} />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Suspense fallback={null}>
          <Sun />
          {skills.map((skill, index) => (
            <Planet key={index} skill={skill} />
          ))}

          {/* Postprocessing for Glow Effect */}
          <EffectComposer>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
          </EffectComposer>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxDistance={50}
          minDistance={10}
          maxPolarAngle={Math.PI / 2 + 0.1}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
