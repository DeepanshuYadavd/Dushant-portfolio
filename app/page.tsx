"use client";

import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/home/ProjectGrid";
import Expertise from "@/components/home/Expertise";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const marqueeItems = [
    "ADOBE PREMIERE PRO",
    "AFTER EFFECTS",
    "Video editing",
    "Graphic designing",
    "Motion graphics",
    "Digital Animation",
  ];

  return (
    <main className="!relative !bg-black !text-white !overflow-hidden ">
      {/* HERO SECTION */}
      <Hero />

      {/* CINEMATIC MARQUEE */}
      <div className="!relative !py-12 !border-y !border-white/5 !bg-white/[0.01] !overflow-hidden !mt-2">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="!flex !whitespace-nowrap !gap-12"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="!text-sm md:!text-lg !font-bold !tracking-[0.5em] !uppercase !text-neutral-600 hover:!text-white !transition-colors !cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* PROJECTS SECTION */}
      <ProjectGrid />

      {/* EXPERTISE SECTION */}
      <Expertise />

      {/* FINAL CALL TO ACTION (CTA) */}
      <section className="!py-6 !text-center !max-w-4xl !mx-auto !px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="!text-xs !uppercase !tracking-[0.4em] !text-neutral-500 !font-bold !mb-8 !block">
            Ready to collaborate?
          </span>
          <h2 className="!text-4xl sm:!text-5xl md:!text-8xl !font-bold !tracking-tighter !mb-10 md:!mb-12 !leading-[1.1] md:!leading-[0.9]">
            LET'S <span className="!text-neutral-500">TELL</span> <br />
            YOUR STORY.
          </h2>
          <Link href="/contact">
            <button className="cursor-pointer !group !relative !px-8 md:!px-12 !py-4 md:!py-6 !rounded-full !bg-white !text-black !font-black !tracking-widest !uppercase !text-base md:!text-lg !overflow-hidden !transition-shadow hover:!shadow-[0_0_50px_rgba(255,255,255,0.6)] !w-full sm:!w-auto">
              <span className="!relative !z-10">
                Contact us & Start a Project
              </span>
              <div className="!absolute !inset-0 !bg-neutral-200 !scale-x-0 group-hover:!scale-x-100 !origin-left !transition-transform !duration-500" />
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
