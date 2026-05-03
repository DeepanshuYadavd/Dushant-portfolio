"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { REELS, YOUTUBE_VIDEOS, Project } from "@/constants/projects";
import VideoCard from "@/components/shared/VideoCard";
import VideoModal from "@/components/shared/VideoModal";

type Filter = "all" | "reel" | "youtube";

const allProjects: Project[] = [...REELS, ...YOUTUBE_VIDEOS];

export default function FeaturedPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Works" },
    { key: "reel", label: "Instagram Reels" },
    { key: "youtube", label: "YouTube" },
  ];

  const filtered = allProjects.filter((p) =>
    activeFilter === "all" ? true : p.type === activeFilter
  );

  const filteredReels = filtered.filter((p) => p.type === "reel");
  const filteredYoutube = filtered.filter((p) => p.type === "youtube");

  const openVideo = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="!relative !bg-black !text-white !min-h-screen">
        {/* Ambient glow */}
        <div className="!fixed !top-0 !left-1/2 !-translate-x-1/2 !w-[800px] !h-[400px] !bg-white/[0.02] !blur-[120px] !pointer-events-none !z-0" />

        <div className="!relative !z-10 !max-w-7xl !mx-auto !px-4 sm:!px-8 lg:!px-10 !pt-24 !pb-20">

          {/* Back Link */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="!inline-flex !items-center !gap-2 !text-neutral-500 hover:!text-white !transition-colors !duration-200 !mb-14 !cursor-pointer !group"
            >
              <ArrowLeft size={16} className="group-hover:!-translate-x-1 !transition-transform !duration-200" />
              <span className="!text-sm !font-bold !uppercase !tracking-widest">Back to Home</span>
            </motion.div>
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="!mb-16"
          >
            <span className="!text-[10px] md:!text-xs !uppercase !tracking-[0.4em] !text-neutral-500 !font-bold !mb-4 !block">
              Complete Portfolio
            </span>
            <h1 className="!text-4xl sm:!text-5xl md:!text-7xl !font-bold !tracking-tight !leading-[0.95] !mb-6">
              ALL <span className="!text-neutral-600">WORKS.</span>
            </h1>
            <p className="!text-neutral-400 !max-w-lg !text-base md:!text-lg !leading-relaxed">
              Every frame crafted with intention. Browse the full collection of cinematic reels,
              music videos, and visual narratives.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="!flex !flex-wrap !gap-3 !mb-14"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`!relative !px-8 !py-3 !rounded-full !text-xs !font-bold !uppercase !tracking-[0.2em] !transition-all !duration-500 cursor-pointer ${activeFilter === f.key
                    ? "!bg-white !text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    : "!bg-white/5 !text-neutral-500 hover:!bg-white/10 hover:!text-white !border !border-white/5"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="!text-[10px] !text-neutral-600 !uppercase !tracking-[0.3em] !mb-10 !font-bold"
          >
            Displaying {filtered.length} curated {filtered.length === 1 ? "project" : "projects"}
          </motion.p>

          {/* Content Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {/* YouTube Section */}
              {filteredYoutube.length > 0 && (
                <div className="!mb-14">
                  <span className="!text-[10px] !uppercase !tracking-[0.3em] !text-neutral-600 !font-bold !mb-5 !block">
                    YouTube
                  </span>
                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 !gap-5">
                    {filteredYoutube.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <VideoCard project={project} onClick={() => openVideo(project)} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reels Section */}
              {filteredReels.length > 0 && (
                <div>
                  <span className="!text-[10px] !uppercase !tracking-[0.3em] !text-neutral-600 !font-bold !mb-5 !block">
                    Instagram Reels
                  </span>
                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-5">
                    {filteredReels.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <VideoCard project={project} onClick={() => openVideo(project)} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="!text-center !py-32"
            >
              <p className="!text-neutral-600 !text-lg !font-bold !uppercase !tracking-widest">
                Coming Soon
              </p>
              <p className="!text-neutral-700 !text-sm !mt-2">
                No {activeFilter} projects yet.
              </p>
            </motion.div>
          )}
        </div>

        {/* Video Modal */}
        <VideoModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  );
}
