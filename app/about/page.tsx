"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Video, Wand2, Sparkles, Image as ImageIcon } from "lucide-react";

export default function AboutPage() {
  const tools = [
    { name: "Premiere Pro", category: "Video Editing", icon: Video },
    { name: "After Effects", category: "Motion Graphics", icon: Wand2 },
    { name: "AI Tools", category: "Generative AI", icon: Sparkles },
    { name: "Photoshop", category: "Graphic Design", icon: ImageIcon },
  ];

  const philosophies = [
    {
      title: "Story First",
      description: "Every cut, transition, and color grade is deliberately chosen to serve the narrative. Technique means nothing without a compelling story.",
      number: "01"
    },
    {
      title: "Rhythm & Pacing",
      description: "Editing is visual music. I focus intensely on the cadence of shots, ensuring the visuals flow perfectly with the emotional beats and audio.",
      number: "02"
    },
    {
      title: "Cinematic Polish",
      description: "From sound design to advanced color grading, every project receives a high-end finish that elevates it from standard video to cinematic experience.",
      number: "03"
    }
  ];

  return (
    <main className="!relative !bg-black !text-white !min-h-screen !overflow-hidden">
      {/* Ambient background glow */}
      <div className="!fixed !top-[-10%] !left-[-10%] !w-[50vw] !h-[50vw] !bg-white/[0.02] !rounded-full !blur-[120px] !pointer-events-none" />
      <div className="!fixed !bottom-[-10%] !right-[-10%] !w-[50vw] !h-[50vw] !bg-neutral-800/[0.03] !rounded-full !blur-[120px] !pointer-events-none" />

      <div className="!relative !z-10 !max-w-6xl !mx-auto !px-6 sm:!px-10 !pt-32 !pb-24">
        {/* HERO SECTION */}
        <section className="!mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="!max-w-4xl"
          >
            <span className="!text-xs !uppercase !tracking-[0.4em] !text-neutral-500 !font-bold !mb-6 !block">
              About The Editor
            </span>
            <h1 className="!text-5xl sm:!text-7xl md:!text-8xl !font-bold !tracking-tighter !mb-10 !leading-[0.95]">
              CRAFTING <br />
              <span className="!text-neutral-600">VISUAL</span> STORIES.
            </h1>
            <p className="!text-lg md:!text-xl !text-neutral-400 !leading-relaxed !max-w-2xl">
              Hi, I'm Dushant. I'm a passionate video editor and visual storyteller dedicated to transforming raw footage into compelling, high-impact cinematic experiences. With an eye for detail and a deep understanding of rhythm, I create videos that don't just look good—they make you feel something.
            </p>
          </motion.div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="!mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="!text-2xl !font-bold !tracking-tight !mb-12 !uppercase !text-white/90">
              Creative Approach
            </h2>
            <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8">
              {philosophies.map((item, index) => (
                <div key={index} className="!relative !p-8 !rounded-3xl !bg-white/[0.02] !border !border-white/[0.05] hover:!bg-white/[0.04] !transition-colors !duration-500">
                  <span className="!text-4xl !font-black !text-white/10 !mb-6 !block">{item.number}</span>
                  <h3 className="!text-lg !font-bold !text-white !mb-4 !tracking-wide">{item.title}</h3>
                  <p className="!text-sm !text-neutral-400 !leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SOFTWARE & TOOLS */}
        <section className="!mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="!text-2xl !font-bold !tracking-tight !mb-12 !uppercase !text-white/90">
              Software Arsenal
            </h2>
            <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="!flex !flex-col !items-center !justify-center !p-8 !rounded-2xl !bg-neutral-950 !border !border-white/[0.05] hover:!border-white/20 !transition-colors !duration-300 !group">
                    <div className="!w-12 !h-12 !rounded-full !bg-white/5 !flex !items-center !justify-center !mb-4 group-hover:!scale-110 !transition-transform !duration-300">
                      <Icon size={20} className="!text-neutral-400 group-hover:!text-white !transition-colors" />
                    </div>
                    <span className="!text-sm !font-bold !text-white !tracking-wider">{tool.name}</span>
                    <span className="!text-[10px] !text-neutral-500 !uppercase !tracking-widest !mt-1">{tool.category}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* TEAM SECTION */}
        <section className="!mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="!text-2xl !font-bold !tracking-tight !mb-12 !uppercase !text-white/90">
              The Team
            </h2>
            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8">
              {[
                { name: "Mohit Kumar", role: "Manager & Video Editor" },
                { name: "Dushant", role: "Co-Manager & Video Editor" }
              ].map((member, index) => (
                <div key={index} className="!relative !p-10 !rounded-3xl !bg-white/[0.02] !border !border-white/[0.05] hover:!bg-white/[0.04] !transition-all !duration-500 !group !overflow-hidden">
                  <div className="!absolute !top-0 !right-0 !p-6 !opacity-10 group-hover:!opacity-20 !transition-opacity">
                    <Video size={80} />
                  </div>
                  <h3 className="!text-2xl !font-bold !text-white !mb-2 !tracking-tight">{member.name}</h3>
                  <p className="!text-sm !text-neutral-500 !uppercase !tracking-[0.2em] !font-bold">{member.role}</p>
                  
                  {/* Subtle decorative line */}
                  <div className="!w-12 !h-1 !bg-white/20 !mt-6 group-hover:!w-24 !transition-all !duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="!pt-10 !border-t !border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="!flex !flex-col md:!flex-row !items-center !justify-between !gap-8"
          >
            <div>
              <h2 className="!text-3xl md:!text-4xl !font-bold !tracking-tight !mb-4">
                Ready to create something amazing?
              </h2>
              <p className="!text-neutral-400">Let's collaborate on your next project.</p>
            </div>
            <Link href="/contact">
              <button className="!group !relative !px-8 !py-4 !rounded-full !bg-white !text-black !font-bold !tracking-widest !uppercase !text-xs !overflow-hidden cursor-pointer">
                <span className="!relative !z-10 !flex !items-center !gap-2">
                  Get in Touch <ArrowRight size={14} className="group-hover:!translate-x-1 !transition-transform" />
                </span>
                <div className="!absolute !inset-0 !bg-neutral-200 !scale-x-0 group-hover:!scale-x-100 !origin-left !transition-transform !duration-500" />
              </button>
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
