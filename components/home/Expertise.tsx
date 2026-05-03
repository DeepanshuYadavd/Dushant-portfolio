"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Music, Zap, Layers, Cpu } from "lucide-react";

const services = [
  {
    title: "Cinematic Editing",
    description:
      "Narrative-driven storytelling with a focus on rhythm, pacing, and emotional impact.",
    icon: Scissors,
    accent: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
  },
  {
    title: "Premium Color Grading",
    description:
      "Advanced color correction and stylistic grading to achieve a high-end film look.",
    icon: Palette,
    accent: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    title: "Sound Design",
    description:
      "Immersive audio soundscapes, foley, and sound effects that bring visuals to life.",
    icon: Music,
    accent: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "VFX & Compositing",
    description:
      "Seamless visual effects, cleanups, and complex compositing for stunning results.",
    icon: Zap,
    accent: "from-yellow-500/20 to-amber-500/10",
    iconColor: "text-yellow-400",
  },
  {
    title: "Motion Graphics",
    description:
      "Elegant and dynamic motion assets that enhance the overall viewer experience.",
    icon: Layers,
    accent: "from-emerald-500/20 to-green-500/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "AI & Modern Tools",
    description:
      "Using AI to create amazing videos with proficiency in Photoshop, Premiere Pro, and After Effects.",
    icon: Cpu,
    accent: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-400",
  },
];

export default function Expertise() {
  return (
    <section className="!max-w-7xl !mx-auto !px-4 sm:!px-8 lg:!px-10 !pt-6 md:!pt-10 !pb-20 md:!pb-32">
      {/* Section Header — Full width, centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="!text-center !mb-16 md:!mb-24"
      >
        <span className="!text-[10px] md:!text-xs !uppercase !tracking-[0.4em] !text-neutral-500 !font-bold !mb-4 !block">
          What I Do
        </span>
        <h2 className="!text-4xl sm:!text-5xl md:!text-7xl !font-bold !tracking-tight !text-white !leading-tight !mb-6">
          CRAFTING <span className="!text-neutral-600">VISUAL</span> STORIES.
        </h2>
        <p className="!text-neutral-400 !max-w-xl !mx-auto !text-base md:!text-lg !leading-relaxed">
          Every frame is analyzed, every sound is intentional, and every color is
          dialed for emotion. Here&apos;s how I bring your vision to life.
        </p>
      </motion.div>

      {/* Services Grid — 3 columns on desktop */}
      <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-5">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="!group !relative !p-8 !rounded-2xl !border !border-white/[0.06] !bg-white/[0.02] hover:!bg-white/[0.05] hover:!border-white/15 !transition-all !duration-500 !overflow-hidden"
          >
            {/* Accent glow on hover */}
            <div className={`!absolute !top-0 !left-0 !w-full !h-1 !bg-gradient-to-r ${service.accent} !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-500`} />

            {/* Icon */}
            <div className={`!w-12 !h-12 !rounded-xl !bg-white/[0.04] !flex !items-center !justify-center ${service.iconColor} group-hover:!bg-white/[0.08] !mb-6 !transition-all !duration-500`}>
              <service.icon size={22} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <h3 className="!text-lg !font-bold !text-white !mb-3 !tracking-tight">
              {service.title}
            </h3>
            <p className="!text-sm !text-neutral-500 !leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
