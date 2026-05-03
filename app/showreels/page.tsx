"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function ShowreelsPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const mainShowreelId = "ZENaEY4riQc"; // Default from projects.ts

  return (
    <main className="!relative !bg-black !text-white !min-h-screen !flex !flex-col">
      {/* Cinematic ambient background */}
      <div className="!fixed !inset-0 !z-0">
        <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-[80vw] !h-[80vw] md:!w-[50vw] md:!h-[50vw] !bg-white/[0.03] !rounded-full !blur-[150px] !pointer-events-none" />
      </div>

      <div className="!relative !z-10 !flex-1 !flex !flex-col !pt-24 !pb-12 !px-4 sm:!px-8 lg:!px-10 !max-w-[1400px] !mx-auto !w-full">
        {/* Header & Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!flex !items-center !justify-between !mb-12 md:!mb-16"
        >
          <Link href="/">
            <div className="!inline-flex !items-center !gap-2 !text-neutral-500 hover:!text-white !transition-colors !duration-200 !cursor-pointer !group">
              <ArrowLeft size={16} className="group-hover:!-translate-x-1 !transition-transform !duration-200" />
              <span className="!text-xs !font-bold !uppercase !tracking-[0.2em]">Return to Portfolio</span>
            </div>
          </Link>
          <span className="!text-[10px] md:!text-xs !font-bold !uppercase !tracking-[0.4em] !text-neutral-600">
            Director's Cut 2026
          </span>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="!relative !w-full !rounded-[2rem] md:!rounded-[3rem] !overflow-hidden !bg-neutral-950 !border !border-white/[0.05] !shadow-[0_0_80px_rgba(255,255,255,0.03)] !flex-1 !min-h-[300px] md:!min-h-[600px] !max-h-[80vh] !group"
        >
          {!isPlaying ? (
            <div className="!absolute !inset-0 !flex !items-center !justify-center !cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Thumbnail Placeholder - Fallback to YouTube HQ Default */}
              <img 
                src={`https://img.youtube.com/vi/${mainShowreelId}/maxresdefault.jpg`}
                onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${mainShowreelId}/hqdefault.jpg`; }}
                alt="Showreel Thumbnail"
                className="!absolute !inset-0 !w-full !h-full !object-cover !opacity-50 group-hover:!opacity-70 !transition-opacity !duration-700"
              />
              <div className="!absolute !inset-0 !bg-black/40 !backdrop-blur-[2px]" />
              
              {/* Play Button */}
              <div className="!relative !z-10 !flex !flex-col !items-center !transform group-hover:!scale-110 !transition-transform !duration-500">
                <div className="!w-20 !h-20 md:!w-24 md:!h-24 !rounded-full !bg-white/10 !backdrop-blur-xl !border !border-white/20 !flex !items-center !justify-center !mb-6 !shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  <PlayCircle size={40} className="!text-white !ml-2" strokeWidth={1.5} />
                </div>
                <span className="!text-xs !font-bold !uppercase !tracking-[0.5em] !text-white !drop-shadow-lg">Play Showreel</span>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${mainShowreelId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
              className="!absolute !inset-0 !w-full !h-full !border-0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            />
          )}
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="!mt-12 md:!mt-16 !grid !grid-cols-1 md:!grid-cols-3 !gap-8 md:!gap-12"
        >
          <div className="md:!col-span-2">
            <h1 className="!text-3xl md:!text-5xl !font-bold !tracking-tighter !mb-6 !leading-tight">
              A YEAR IN <span className="!text-neutral-500">MOTION.</span>
            </h1>
            <p className="!text-neutral-400 !text-base md:!text-lg !leading-relaxed !max-w-3xl">
              A curated compilation of my most impactful visual narratives from the past year. This showreel highlights a diverse range of projects including commercial work, short films, and high-energy music videos, demonstrating a versatile approach to rhythm, color, and storytelling.
            </p>
          </div>
          <div className="!flex !flex-col !justify-center !gap-6 !border-t md:!border-t-0 md:!border-l !border-white/10 !pt-8 md:!pt-0 md:!pl-12">
            <div>
              <span className="!text-[10px] !uppercase !tracking-[0.2em] !text-neutral-600 !font-bold !block !mb-1">Role</span>
              <span className="!text-sm !font-bold !text-white !tracking-wider">Lead Editor & Colorist</span>
            </div>
            <div>
              <span className="!text-[10px] !uppercase !tracking-[0.2em] !text-neutral-600 !font-bold !block !mb-1">Tools & Software</span>
              <span className="!text-sm !font-bold !text-white !tracking-wider">Premiere Pro, After Effects, AI Generation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
