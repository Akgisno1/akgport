"use client";

import React from "react";

export interface TechItem {
  name: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  techStack: TechItem[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <div className="group relative h-[26vw] min-h-[380px] w-full overflow-hidden rounded-2xl lg:rounded-[1.4vw] bg-slate-900 dark:bg-zinc-950 border border-slate-200/20 dark:border-zinc-800/80 shadow-lg dark:shadow-none lg:w-1/2 transition-all duration-300">
      <div
        onClick={() => onSelect(project)}
        className="relative h-full w-full cursor-pointer overflow-hidden"
      >
        {/* Parallax Image Holder */}
        <div className="h-full w-full overflow-hidden">
          <img
            className="parallax-img h-[120%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={project.image}
            alt={project.title}
          />
        </div>

        {/* Gradient Overlay Mask (Adapts to keep text readable on both themes) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/30 opacity-85 transition-opacity duration-300 group-hover:opacity-70" />

        {/* Hover Action Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 z-20">
          <div className="translate-y-[1vw] rounded-full border border-white/30 dark:border-white/20 bg-slate-950/60 dark:bg-black/50 px-5 py-2 lg:px-[1.8vw] lg:py-[0.7vw] backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0 shadow-xl">
            <span className="font-mono text-xs lg:text-[1.1vw] font-semibold tracking-wider text-white uppercase">
              VIEW CASE STUDY ↗
            </span>
          </div>
        </div>

        {/* Card Metadata Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 lg:gap-[0.6vw] p-5 lg:p-[2vw] pointer-events-none">
          <h3 className="font-mono text-xl sm:text-2xl lg:text-[2vw] font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 dark:group-hover:text-emerald-400">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 lg:gap-[0.4vw]">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-950/70 dark:bg-emerald-950/40 px-3 py-1 lg:px-[0.8vw] lg:py-[0.25vw] font-mono text-[10px] lg:text-[0.75vw] uppercase tracking-wider text-emerald-300 dark:text-emerald-400 backdrop-blur-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;