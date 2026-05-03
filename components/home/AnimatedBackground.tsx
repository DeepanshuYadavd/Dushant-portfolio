"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

// Generate random values once outside the component
const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    initialX:
      Math.random() *
      (typeof window !== "undefined" ? window.innerWidth : 1000),
    initialY:
      Math.random() *
      (typeof window !== "undefined" ? window.innerHeight : 1000),
    initialOpacity: Math.random() * 0.5,
    initialScale: Math.random() * 0.5 + 0.5,
    animateY: Math.random() * -100 - 50,
    duration: Math.random() * 10 + 10,
    width: Math.random() * 2 + 1,
    height: Math.random() * 2 + 1,
  }));
};

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(20));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  const springXSlow = useTransform(springX, (val) => val * 0.5);
  const springYSlow = useTransform(springY, (val) => val * -0.5);
  const springXInverse = useTransform(springX, (val) => -val);
  const springYInverse = useTransform(springY, (val) => -val);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden bg-black"
    >
      {mounted && (
        <>
          {/* Mesh Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: springX,
              y: springY,
            }}
            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: springXInverse,
              y: springYInverse,
            }}
            className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: springXSlow,
              y: springYSlow,
            }}
            className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]"
          />

          {/* Floating Particles */}
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{
                x: particle.initialX,
                y: particle.initialY,
                opacity: particle.initialOpacity,
                scale: particle.initialScale,
              }}
              animate={{
                y: [particle.initialY, particle.animateY],
                opacity: [particle.initialOpacity, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
              }}
            />
          ))}
        </>
      )}

      {/* Grainy Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grainy" />
    </div>
  );
}
