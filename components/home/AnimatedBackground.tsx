"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  const springXSlow = useTransform(springX, (val) => val * 0.5);
  const springYSlow = useTransform(springY, (val) => val * -0.5);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden bg-black"
    >
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
          x: useTransform(springX, (val) => -val),
          y: useTransform(springY, (val) => -val),
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

      {/* Floating Particles (Canvas would be more efficient, but let's use div for simplicity & better control for now) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
          }}
        />
      ))}

      {/* Grainy Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
