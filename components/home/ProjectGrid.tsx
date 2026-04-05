"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Urban Pulse",
    category: "Commercial • Short Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1025",
    color: "rgba(59, 130, 246, 0.5)",
  },
  {
    title: "Mountain Whisper",
    category: "Documentary • Travel",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1170",
    color: "rgba(168, 85, 247, 0.5)",
  },
  {
    title: "Neon Dreams",
    category: "Music Video • Creative",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1170",
    color: "rgba(236, 72, 153, 0.5)",
  },
  {
    title: "Velocity",
    category: "Automotive • High Energy",
    image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?auto=format&fit=crop&q=80&w=1170",
    color: "rgba(245, 158, 11, 0.5)",
  },
];

export default function ProjectGrid() {
  return (
    <section className="!max-w-7xl !mx-auto !px-4 sm:!px-8 lg:!px-10 !py-20 md:!py-32">
      <div className="!flex !flex-col md:!flex-row !items-start md:!items-end !justify-between !mb-12 md:!mb-20 !gap-6 md:!gap-8">
        <div className="!max-w-xl">
          <span className="!text-[10px] md:!text-xs !uppercase !tracking-[0.3em] !text-neutral-500 !font-bold !mb-3 md:!mb-4 !block">
            Featured Projects
          </span>
          <h2 className="!text-3xl sm:!text-4xl md:!text-6xl !font-bold !tracking-tight !text-white !leading-tight">
            SELECTED <span className="!text-neutral-500">WORKS.</span>
          </h2>
        </div>
        <p className="!text-neutral-400 !max-w-sm !text-base md:!text-lg !leading-relaxed">
          A curated collection of high-impact visual narratives, commercials, and creative films.
        </p>
      </div>

      <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6 md:!gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="!group !relative !rounded-[2.5rem] !overflow-hidden !aspect-video !cursor-pointer !bg-neutral-900"
          >
            {/* Background image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="!w-full !h-full !object-cover !transition-all !duration-700 !group-hover:scale-110 !group-hover:opacity-40"
            />

            {/* Hover overlay color gradient */}
            <div 
              className="!absolute !inset-0 !opacity-0 !transition-opacity !duration-500 group-hover:!opacity-100"
              style={{ background: `linear-gradient(to top, ${project.color}, transparent)` }}
            />

            {/* Content overlay */}
            <div className="!absolute !inset-0 !p-8 md:!p-12 !flex !flex-col !justify-end">
              <div className="!relative !z-10 !translate-y-8 group-hover:!translate-y-0 !transition-transform !duration-500">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <span className="!text-xs !uppercase !tracking-[0.2em] !font-bold !text-white/60">
                    {project.category}
                  </span>
                </div>
                <div className="!flex !items-center !justify-between !gap-4">
                  <h3 className="!text-2xl md:!text-4xl !font-bold !text-white !tracking-tight">
                    {project.title}
                  </h3>
                  <div className="!w-14 !h-14 !rounded-full !bg-white !text-black !flex !items-center !justify-center !opacity-0 !scale-50 group-hover:!opacity-100 group-hover:!scale-100 !transition-all !duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Indicator (Decorative) */}
            <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-max !h-max !z-20 !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-500">
              <div className="!w-24 !h-24 !rounded-full !bg-white/10 !backdrop-blur-md !border !border-white/20 !flex !items-center !justify-center">
                <Play size={40} fill="white" className="!ml-2" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="!mt-24 !text-center">
        <button className="!group !relative !px-10 !py-5 !rounded-full !border !border-white/10 hover:!border-white/30 !transition-all !duration-300">
          <span className="!relative !z-10 !text-neutral-400 group-hover:!text-white !font-bold !tracking-widest !uppercase !text-sm">
            Explore All Projects
          </span>
          <div className="!absolute !inset-0 !bg-white/5 !scale-0 group-hover:!scale-100 !rounded-full !transition-transform !duration-300" />
        </button>
      </div>
    </section>
  );
}
