"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Server,
  Cpu,
  Layers,
  Bot,
  Workflow,
  Sparkles,
  Zap,
  Terminal,
} from "lucide-react";
import { ProjectItem } from "./ProjectCard";

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

// Icon helper mapping with responsive size classes
const renderTechIcon = (iconName: string) => {
  const props = {
    className:
      "w-4 h-4 lg:w-[1.2vw] lg:h-[1.2vw] text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110",
  };
  switch (iconName.toLowerCase()) {
    case "database":
    case "postgresql":
      return <Database {...props} />;
    case "server":
    case "spring boot":
      return <Server {...props} />;
    case "cpu":
    case "microservices":
      return <Cpu {...props} />;
    case "layers":
    case "full-stack":
      return <Layers {...props} />;
    case "bot":
    case "rag & genai":
      return <Bot {...props} />;
    case "workflow":
    case "docker":
      return <Workflow {...props} />;
    case "sparkles":
      return <Sparkles {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    default:
      return <Code2 {...props} />;
  }
};

const ProjectDrawer = ({ project, onClose }: ProjectDrawerProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (project) {
      document.body.style.overflow = "hidden";

      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      gsap.fromTo(
        drawerRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power3.out" }
      );
    }
  }, [project]);

  const handleClose = () => {
    document.body.style.overflow = "auto";

    gsap.to(drawerRef.current, {
      y: "100%",
      duration: 0.4,
      ease: "power3.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
      onComplete: onClose,
    });
  };

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 z-[200] w-screen h-screen bg-black/60 dark:bg-black/80 backdrop-blur-md opacity-0 pointer-events-none overflow-hidden"
    >
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="w-screen h-screen bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800/80 p-6 lg:p-[3vw] flex flex-col justify-between overflow-y-auto lg:overflow-hidden shadow-2xl relative transition-colors duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex justify-between items-center border-b border-slate-200 dark:border-zinc-800/80 pb-4 lg:pb-[1vw]">
          <div className="flex items-center gap-2 lg:gap-[1vw]">
            <span className="text-xs lg:text-[0.8vw] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              PROJECT DETAILS
            </span>
            <span className="text-slate-300 dark:text-zinc-600">|</span>
            <span className="text-xs lg:text-[0.8vw] font-mono uppercase text-slate-500 dark:text-zinc-400">
              {project.id}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="group flex items-center gap-1.5 text-xs lg:text-[0.85vw] font-mono tracking-widest text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/50 px-4 py-2 lg:px-[1.2vw] lg:py-[0.5vw] rounded-full transition-all duration-300 bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none"
          >
            <span>[ CLOSE ✕ ]</span>
          </button>
        </div>

        {/* Main Content Grid (Left & Right Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[3.5vw] items-center my-auto h-auto lg:h-full py-6 lg:py-[1.5vw]">
          
          {/* LEFT COLUMN: Title, Description, Tech Stack */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between h-auto lg:h-full py-2 lg:py-[1vw]">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[3.5vw] font-black uppercase text-slate-900 dark:text-white tracking-tight leading-none mb-4 lg:mb-[1vw]">
                {project.title}
              </h2>

              <p className="text-base lg:text-[1.05vw] text-slate-600 dark:text-zinc-300 font-light leading-relaxed mb-6 lg:mb-[2vw]">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Icons List */}
            <div>
              <h4 className="text-xs lg:text-[0.8vw] font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-widest mb-3 lg:mb-[0.8vw] font-semibold">
                TECH STACK & ARCHITECTURE
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-[0.7vw]">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-2 lg:gap-[0.5vw] bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/60 px-3 py-2 lg:px-[0.9vw] lg:py-[0.5vw] rounded-xl lg:rounded-[0.8vw] text-xs lg:text-[0.8vw] font-mono text-slate-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 cursor-default shadow-sm dark:shadow-none"
                  >
                    {renderTechIcon(tech.iconName)}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Action Links Below */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center h-auto lg:h-full py-2 lg:py-[1vw]">
            {/* Image Preview */}
            <div className="w-full h-56 sm:h-72 lg:h-[24vw] rounded-2xl lg:rounded-[1.5vw] overflow-hidden border border-slate-200 dark:border-zinc-800/80 bg-slate-100 dark:bg-zinc-900 shadow-xl group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Action Buttons Below Image */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-[1vw] mt-4 lg:mt-[1.2vw]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 lg:py-[0.8vw] px-6 lg:px-[1.5vw] rounded-full text-xs lg:text-[0.85vw] font-mono uppercase tracking-wider flex items-center justify-center gap-2 lg:gap-[0.5vw] transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
                >
                  <span>SEE LIVE PROJECT</span>
                  <span>↗</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/60 text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 py-3 lg:py-[0.8vw] px-6 lg:px-[1.5vw] rounded-full text-xs lg:text-[0.85vw] font-mono uppercase tracking-wider flex items-center justify-center gap-2 lg:gap-[0.5vw] transition-all duration-300 bg-white dark:bg-zinc-900/60 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:scale-[1.02] shadow-sm dark:shadow-none"
                >
                  <span>GITHUB REPO</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-200 dark:border-zinc-800/80 pt-4 lg:pt-[0.8vw] gap-2 text-xs lg:text-[0.75vw] font-mono text-slate-500 dark:text-zinc-500">
          <span>ANSHUL KUMAR GODIWAR • PORTFOLIO 2026</span>
          <span className="text-emerald-600/90 dark:text-emerald-400/80 font-medium">
            [ ESC OR CLICK OUTSIDE TO CLOSE ]
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDrawer;