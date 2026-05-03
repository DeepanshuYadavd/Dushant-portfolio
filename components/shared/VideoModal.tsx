"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/constants/projects";

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  if (!project) return null;

  const isReel = project.type === "reel";
  
  // Clean embed URL
  const embedUrl = isReel 
    ? `https://www.instagram.com/reel/${project.id}/embed/` 
    : `https://www.youtube.com/embed/${project.id}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`relative z-10 w-full overflow-hidden rounded-[2.5rem] bg-black shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10 ${
                isReel ? "max-w-[400px]" : "max-w-5xl"
            }`}
            style={{ aspectRatio: isReel ? "9 / 16" : "16 / 9" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-black/60 text-white/50 hover:text-white hover:bg-black transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Video Iframe */}
            <div className="w-full h-full relative z-20">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Loading Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 z-10">
              <div className="w-10 h-10 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
