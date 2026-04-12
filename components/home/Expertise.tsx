"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Music, Zap, Layers, Cpu } from "lucide-react";

const services = [
  {
    title: "Cinematic Editing",
    description:
      "Narrative-driven storytelling with a focus on rhythm, pacing, and emotional impact.",
    icon: Scissors,
  },
  {
    title: "Premium Color Grading",
    description:
      "Advanced color correction and stylistic grading to achieve a high-end film look.",
    icon: Palette,
  },
  {
    title: "Sound Design",
    description:
      "Immersive audio soundscapes, foley, and sound effects that bring visuals to life.",
    icon: Music,
  },
  {
    title: "VFX & Compositing",
    description:
      "Seamless visual effects, cleanups, and complex composting for stunning results.",
    icon: Zap,
  },
  {
    title: "Motion Graphics",
    description:
      "Elegant and dynamic motion assets that enhance the overall viewer experience.",
    icon: Layers,
  },
  {
    title: "Technical Mastery",
    description:
      "Expert proficiency in DaVinci Resolve, Premiere Pro, and After Effects.",
    icon: Cpu,
  },
];

export default function Expertise() {
  return (
    <section className="!max-w-7xl !mx-auto !px-4 sm:!px-8 lg:!px-10 !py-2 md:!py-4">
      <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12 md:!gap-20 !items-start">
        {/* Left side: Heading */}
        <div className="lg:!sticky !top-32">
          <span className="!text-[10px] md:!text-xs !uppercase !tracking-[0.3em] !text-neutral-500 !font-bold !mb-4 md:!mb-6 !block">
            Our Expertise
          </span>
          <h2 className="!text-3xl sm:!text-4xl md:!text-7xl !font-bold !tracking-tighter !text-white !mb-6 md:!mb-10 !leading-[1.1] md:!leading-[0.95]">
            ELEVATING <br />
            <span className="!text-neutral-500">EXPERIENCES</span> <br />
            THROUGH ART.
          </h2>
          <p className="!text-neutral-400 !max-w-md !text-base md:!text-lg !leading-relaxed !mb-8 md:!mb-12">
            We don't just cut clips; we build cinematic worlds. Every frame is
            analyzed, every sound is intentional, and every color is dialed for
            emotion.
          </p>

          <div className="!flex !items-center !gap-4 md:!gap-6 !p-5 md:!p-6 !rounded-3xl !border !border-white/5 !bg-white/[0.02] !w-fit mb-12 lg:mb-0">
            <div className="!w-10 md:!w-12 !h-10 md:!h-12 !rounded-full !bg-green-500/10 !flex !items-center !justify-center !text-green-500">
              <div className="!w-2 !h-2 !rounded-full !bg-green-500 !animate-pulse" />
            </div>
            <div>
              <p className="!text-sm !font-bold !text-white">
                Currently Booking
              </p>
              <p className="!text-[10px] md:!text-xs !text-neutral-500">
                Next availability: June 2026
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Services Grid */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="!group !p-8 !rounded-[2rem] !border !border-white/5 !bg-white/[0.01] hover:!bg-white/[0.04] hover:!border-white/10 !transition-all !duration-500"
            >
              <div className="!w-12 !h-12 !rounded-2xl !bg-white/5 !flex !items-center !justify-center !text-neutral-400 group-hover:!text-white group-hover:!bg-white/10 !mb-6 !transition-colors !duration-500">
                <service.icon size={24} />
              </div>
              <h3 className="!text-xl !font-bold !text-white !mb-4">
                {service.title}
              </h3>
              <p className="!text-sm !text-neutral-500 !leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
