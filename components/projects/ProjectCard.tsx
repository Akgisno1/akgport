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
    <div className="group relative h-full w-full overflow-hidden rounded-[3vw] lg:rounded-[1.4vw] bg-slate-900 dark:bg-zinc-950 border border-slate-200/20 dark:border-zinc-800/80 shadow-lg dark:shadow-none transition-all duration-500">
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
            loading="lazy"
          />
        </div>

        {/* Gradient Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

        {/* Action Badge */}
        <div className="absolute inset-0 flex max-sm:hidden items-center justify-center opacity-100 lg:opacity-0 transition-all duration-300 pointer-events-none lg:group-hover:opacity-100 z-20">
          <div className="translate-y-0 lg:translate-y-[1vw] rounded-full border border-white/30 dark:border-white/20 bg-slate-950/70 dark:bg-black/60 px-[4vw] py-[1.8vw] lg:px-[1.8vw] lg:py-[0.7vw] backdrop-blur-[0.8vw] transition-transform duration-300 lg:group-hover:translate-y-0 shadow-xl">
            <span className="font-mono text-[2.8vw] sm:text-[2vw] lg:text-[1.1vw] font-semibold tracking-wider text-white uppercase flex items-center gap-[1.5vw] lg:gap-[0.5vw] max-sm:hidden">
              <span>VIEW PROJECT</span>
              <span className="text-emerald-400">↗</span>
            </span>
          </div>
        </div>

        {/* Card Metadata Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-[2vw] lg:gap-[0.6vw] p-[4vw] lg:p-[2vw] pointer-events-none">
          <h3 className="font-mono text-[4.8vw] sm:text-[3.8vw] lg:text-[2vw] font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 leading-tight">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-[1.5vw] lg:gap-[0.4vw]">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-950/80 dark:bg-emerald-950/50 px-[2.8vw] py-[0.8vw] lg:px-[0.8vw] lg:py-[0.25vw] font-mono text-[2.4vw] sm:text-[1.8vw] lg:text-[0.75vw] uppercase tracking-wider text-emerald-300 dark:text-emerald-400 backdrop-blur-[0.5vw] shadow-sm"
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