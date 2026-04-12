import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  skill: {
    name: string;
    iconUrl: string;
    distance: number;
    speed: number;
    size: number;
    color: string;
  };
}

export default function Planet({ skill }: PlanetProps) {
  const planetGroupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load texture. We use a fallback geometry/color while loading or if it fails
  const texture = useTexture(skill.iconUrl);
  // Ensure the texture maps nicely without repeating too much
  // Some SVG icons from devicon might not wrap perfectly, but mapping as a decal or just standard repeating works for a cool effect.
  // We'll set wrapT and wrapS for better repeating if it's an icon.
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  // Randomize starting angle so planets don't start in a straight line
  const startAngle = useMemo(() => Math.random() * Math.PI * 2, []);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current * skill.speed + startAngle;
    
    if (planetGroupRef.current) {
      // Orbit around the Sun
      planetGroupRef.current.position.x = Math.cos(t) * skill.distance;
      planetGroupRef.current.position.z = Math.sin(t) * skill.distance;
      // Slight vertical wobble for realism
      planetGroupRef.current.position.y = Math.sin(t * 1.5) * 0.5;
    }

    if (meshRef.current) {
      // Rotation on its own axis
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      <group ref={planetGroupRef}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[skill.size, 32, 32]} />
          <meshStandardMaterial 
            map={texture} 
            color={skill.color}
            roughness={0.6}
            metalness={0.4}
          />
        </mesh>

        {/* Floating HTML Label */}
        <Html distanceFactor={15} center zIndexRange={[100, 0]}>
          <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-bold tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform hover:scale-110 cursor-default">
            {skill.name}
          </div>
        </Html>
      </group>

      {/* Orbit path ring at the center (0,0,0) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
         <ringGeometry args={[skill.distance - 0.02, skill.distance + 0.02, 64]} />
         <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
