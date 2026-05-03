"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { REELS, YOUTUBE_VIDEOS, Project } from "@/constants/projects";
import VideoCard from "@/components/shared/VideoCard";
import VideoModal from "@/components/shared/VideoModal";

// Show a mix of reels and youtube on the home page
const featuredReels = REELS.slice(0, 4);
const featuredYoutube = YOUTUBE_VIDEOS.slice(0, 4);

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideo = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="!max-w-7xl !mx-auto !px-4 sm:!px-8 lg:!px-10 !py-20 md:!py-32">
      {/* Section Header */}
      <div className="!flex !flex-col md:!flex-row !items-start md:!items-end !justify-between !mb-16 md:!mb-24 !gap-6 md:!gap-8">
        <div className="!max-w-xl">
          <span className="!text-[10px] md:!text-xs !uppercase !tracking-[0.4em] !text-neutral-500 !font-bold !mb-4 !block">
            Portfolio Highlights
          </span>
          <h2 className="!text-4xl sm:!text-5xl md:!text-7xl !font-bold !tracking-tight !text-white !leading-tight">
            SELECTED <span className="!text-neutral-600">WORKS.</span>
          </h2>
        </div>
        <p className="!text-neutral-400 !max-w-sm !text-base md:!text-lg !leading-relaxed">
          A curated collection of high-impact visual narratives, commercials,
          and creative films.
        </p>
      </div>

      {/* YouTube Row */}
      <div className="!mb-20 md:!mb-24">
        <div className="!flex !items-center !gap-4 !mb-10">
          <div className="!h-px !flex-1 !bg-white/10" />
          <span className="!text-[11px] !uppercase !tracking-[0.6em] !text-neutral-500 !font-bold">
            YouTube Originals
          </span>
          <div className="!h-px !flex-1 !bg-white/10" />
        </div>
        <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-12">
          {featuredYoutube.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VideoCard project={project} onClick={() => openVideo(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instagram Reels Row */}
      <div className="!mt-28 md:!mt-36">
        <div className="!flex !items-center !gap-4 !mb-10">
          <div className="!h-px !flex-1 !bg-white/10" />
          <span className="!text-[11px] !uppercase !tracking-[0.6em] !text-neutral-500 !font-bold">
            Latest Reels
          </span>
          <div className="!h-px !flex-1 !bg-white/10" />
        </div>
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-12">
          {featuredReels.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VideoCard project={project} onClick={() => openVideo(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="!mt-20 !text-center">
        <Link href="/featured">
          <button className="!group !relative !px-12 !py-6 !rounded-full !border !border-white/10 hover:!border-white/20 !transition-all !duration-500 cursor-pointer overflow-hidden">
            <span className="!relative !z-10 !text-neutral-500 group-hover:!text-white !font-bold !tracking-[0.3em] !uppercase !text-xs !transition-colors">
              Explore All Projects
            </span>
            <div className="!absolute !inset-0 !bg-white/[0.03] group-hover:!bg-white/[0.08] !transition-colors" />
          </button>
        </Link>
      </div>

      {/* Video Modal */}
      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
