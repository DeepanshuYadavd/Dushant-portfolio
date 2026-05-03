"use client";

import { Project } from "@/constants/projects";
import Image from "next/image";
import { useState } from "react";

interface VideoCardProps {
  project: Project;
  onClick: () => void;
}

export default function VideoCard({ project }: VideoCardProps) {
  const isReel = project.type === "reel";
  const youtubeThumbnail = `https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`;

  return (
    <div
      className={`!group !relative !flex !flex-col !overflow-hidden !rounded-[1.5rem] !bg-neutral-900 !border !border-white/10 hover:!border-white/30 !transition-all !duration-500 !shadow-2xl ${
        isReel ? "!aspect-[9/16]" : "!aspect-[16/9]"
      }`}
    >
      {isReel ? (
        <div className="!relative !w-full !h-full">
          <iframe
            src={`https://www.instagram.com/reel/${project.id}/embed/`}
            className="!absolute !inset-0 !w-full !h-full !border-0"
            allowFullScreen
            scrolling="no"
          />
          {/* Transparent protective shield */}
          <div className="!absolute !inset-0 !z-10 !bg-transparent group-hover:!hidden" />
        </div>
      ) : (
        <div className="!relative !w-full !h-full">
          <Image
            src={youtubeThumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="!object-cover !transition-transform !duration-700 group-hover:!scale-105"
          />
          
          {/* Elegant minimalist overlay */}
          <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/90 !via-black/20 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-500" />
          
          <div className="!absolute !bottom-0 !left-0 !w-full !p-6 !translate-y-4 group-hover:!translate-y-0 !opacity-0 group-hover:!opacity-100 !transition-all !duration-500">
            <h3 className="!text-white !font-bold !text-base !tracking-tight">
              {project.title}
            </h3>
            <span className="!text-[9px] !uppercase !tracking-[0.3em] !text-neutral-400 !font-medium">
              {project.category}
            </span>
          </div>

          {/* Minimal Play Icon */}
          <div className="!absolute !inset-0 !flex !items-center !justify-center">
             <div className="!w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-md !border !border-white/20 !flex !items-center !justify-center !opacity-0 group-hover:!opacity-100 !scale-75 group-hover:!scale-100 !transition-all !duration-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
             </div>
          </div>
        </div>
      )}

      {/* Subtle top light sweep */}
      <div className="!absolute !inset-0 !bg-gradient-to-br !from-white/[0.03] !to-transparent !pointer-events-none" />
    </div>
  );
}





