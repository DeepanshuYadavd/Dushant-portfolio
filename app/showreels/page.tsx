"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function ShowreelsPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const showreels = [
    {
      id: "-fa3-2-SbEI",
      title: "Cinematic Journey 2026",
      category: "Director's Cut"
    },
    {
      id: "nmM6pYbEkc0",
      title: "Visual Narratives",
      category: "Commercial Reel"
    }
  ];

  return (
    <main className="!relative !bg-black !text-white !min-h-screen !flex !flex-col">
      {/* Cinematic ambient background */}
      <div className="!fixed !inset-0 !z-0">
        <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-[80vw] !h-[80vw] md:!w-[50vw] md:!h-[50vw] !bg-white/[0.03] !rounded-full !blur-[150px] !pointer-events-none" />
      </div>

      <div className="!relative !z-10 !flex-1 !flex !flex-col !pt-24 !pb-20 !px-4 sm:!px-8 lg:!px-10 !max-w-7xl !mx-auto !w-full">
        {/* Header & Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!flex !items-center !justify-between !mb-16 md:!mb-24"
        >
          <Link href="/">
            <div className="!inline-flex !items-center !gap-2 !text-neutral-500 hover:!text-white !transition-colors !duration-200 !cursor-pointer !group">
              <ArrowLeft size={16} className="group-hover:!-translate-x-1 !transition-transform !duration-200" />
              <span className="!text-xs !font-bold !uppercase !tracking-[0.2em]">Back to Portfolio</span>
            </div>
          </Link>
          <span className="!text-[10px] md:!text-xs !font-bold !uppercase !tracking-[0.4em] !text-neutral-600">
            Showreel Collection
          </span>
        </motion.div>

        {/* Video Grid Section */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-12 md:!gap-16 !flex-1 !items-start">
          {showreels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="!flex !flex-col !gap-8"
            >
              <div className="!relative !aspect-[16/9] !w-full !rounded-[2rem] md:!rounded-[2.5rem] !overflow-hidden !bg-neutral-950 !border !border-white/[0.05] !shadow-[0_20px_60px_rgba(0,0,0,0.8)] !group">
                {playingVideo !== reel.id ? (
                  <div className="!absolute !inset-0 !flex !items-center !justify-center !cursor-pointer" onClick={() => setPlayingVideo(reel.id)}>
                    <img 
                      src={`https://img.youtube.com/vi/${reel.id}/maxresdefault.jpg`}
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${reel.id}/hqdefault.jpg`; }}
                      alt={reel.title}
                      className="!absolute !inset-0 !w-full !h-full !object-cover !opacity-40 group-hover:!opacity-60 !transition-opacity !duration-700 !scale-105 group-hover:!scale-100 !transition-transform"
                    />
                    <div className="!absolute !inset-0 !bg-black/20 group-hover:!bg-black/0 !transition-colors" />
                    
                    {/* Play Button */}
                    <div className="!relative !z-10 !flex !flex-col !items-center !transform group-hover:!scale-110 !transition-transform !duration-500">
                      <div className="!w-20 !h-20 !rounded-full !bg-white/10 !backdrop-blur-xl !border !border-white/20 !flex !items-center !justify-center !mb-4 !shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <PlayCircle size={32} className="!text-white !ml-1" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&rel=0`}
                    className="!absolute !inset-0 !w-full !h-full !border-0"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                  />
                )}
              </div>
              
              {/* Text info for each reel */}
              <div className="!px-4">
                <span className="!text-[10px] !uppercase !tracking-[0.5em] !text-neutral-600 !font-bold !block !mb-3">
                  {reel.category}
                </span>
                <h2 className="!text-2xl md:!text-3xl !font-bold !tracking-tight !text-white">
                  {reel.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="!mt-24 !pt-12 !border-t !border-white/10 !flex !flex-col md:!flex-row !justify-between !gap-8"
        >
          <div className="!max-w-xl">
             <h3 className="!text-sm !font-bold !uppercase !tracking-[0.3em] !text-white !mb-4">Creative Philosophy</h3>
             <p className="!text-neutral-500 !text-sm !leading-relaxed">
               I believe in the power of visual rhythm and emotional storytelling. Each cut is a heartbeat, each frame a painting. My work focuses on bridging the gap between technical mastery and pure creative expression.
             </p>
          </div>
          <div className="!flex !gap-12">
             <div>
               <span className="!text-[10px] !uppercase !tracking-[0.2em] !text-neutral-600 !font-bold !block !mb-2">Services</span>
               <p className="!text-xs !font-bold !text-white/80 !tracking-widest">Editing, Color, VFX</p>
             </div>
             <div>
               <span className="!text-[10px] !uppercase !tracking-[0.2em] !text-neutral-600 !font-bold !block !mb-2">Location</span>
               <p className="!text-xs !font-bold !text-white/80 !tracking-widest">Remote / Global</p>
             </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

