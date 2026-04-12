"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Dynamic import with ssr: false is required for Three.js and can only be used in Client Components
const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
      <p className="text-neutral-500 animate-pulse text-sm">Loading Universe...</p>
    </div>
  )
});

export default function SkillsOrbit() {
  return (
    <div className="relative w-full h-[60vh] md:h-[calc(100vh-80px)] overflow-hidden bg-black rounded-3xl border border-white/10 shadow-2xl mt-8">
      <div className="absolute top-6 md:top-10 left-0 w-full z-10 pointer-events-none flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 drop-shadow-lg">
          Skills Orbit
        </h1>
        <p className="text-neutral-400 mt-2 text-xs md:text-base max-w-lg">
          Interactive 3D representation of my tech stack. Drag to orbit, scroll the page to continue.
        </p>
      </div>
      
      <Scene />
    </div>
  );
}
