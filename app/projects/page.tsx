"use client";

import ProjectCard, { ProjectItem } from "@/components/projects/ProjectCard";
import ProjectDrawer from "@/components/projects/ProjectDrawer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

import { PROJECTS_DATA } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FLAT_PROJECTS = PROJECTS_DATA.flatMap((row) => [row.image1, row.image2]);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop Pinning & Stacking Timeline (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const rows = gsap.utils.toArray<HTMLElement>(".desktop-row");
        if (rows.length === 0) return;

        rows.forEach((row, idx) => {
          if (idx === 0) {
            gsap.set(row, {
              autoAlpha: 1,
              scale: 1,
              filter: "blur(0px)",
              pointerEvents: "auto",
              yPercent: 0,
            });
          } else {
            gsap.set(row, {
              autoAlpha: 0,
              yPercent: 110,
              scale: 0.95,
              filter: "blur(0px)",
              pointerEvents: "none",
            });
          }
        });

        const desktopTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${rows.length * 150}%`,
            scrub: 0.8,
            pin: true,
          },
        });

        rows.forEach((row, i) => {
          if (i < rows.length - 1) {
            const nextRow = rows[i + 1];
            const label = `step-${i}`;

            desktopTl.to(
              row,
              {
                scale: 0.92,
                filter: "blur(8px)",
                opacity: 0.4,
                pointerEvents: "none",
                ease: "power2.inOut",
              },
              label
            );

            desktopTl.to(
              nextRow,
              {
                autoAlpha: 1,
                yPercent: 0,
                scale: 1,
                pointerEvents: "auto",
                ease: "power2.inOut",
              },
              `${label}+=0.02`
            );
          }
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] lg:h-[100dvh] w-screen bg-slate-50 dark:bg-zinc-950 p-[5vw] lg:p-[4vw] flex flex-col justify-between items-center overflow-hidden text-slate-900 dark:text-white transition-colors duration-300 selection:bg-emerald-500 selection:text-white dark:selection:text-black"
    >
      {/* Section Header - Moved down on Mobile */}
      <div className="w-full max-w-[90vw] lg:max-w-[82vw] flex justify-between items-center pb-[3vw] lg:pb-[1.5vw] z-30 pt-[14vw] sm:pt-[10vw] lg:pt-0 mb-[6vw] lg:mb-[2vw] border-b border-slate-200/60 dark:border-zinc-800/60 lg:border-none">
        <h2 className="font-mono text-[9vw] sm:text-[7vw] lg:text-[5.5vw] font-black leading-none uppercase tracking-tighter text-slate-900 dark:text-zinc-100">
          PROJECTS<span className="text-emerald-600 dark:text-emerald-500">.</span>
        </h2>
        <span className="font-tiny text-[1.25vw] max-sm:text-[3vw] max-lg:text-[2vw] text-slate-400">Scroll down</span>
      </div>

      {/* Desktop Container: 2 Cards per Row (>= 1024px) */}
      <div className="hidden lg:block relative w-full max-w-[82vw] h-[36vw] my-auto z-20">
        {PROJECTS_DATA.map((row, idx) => (
          <div
            key={idx}
            className="desktop-row absolute inset-0 z-10 w-full flex flex-row gap-[2vw] rounded-[2vw] p-[1.5vw] shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] will-change-transform"
          >
            <div className="w-1/2 h-full">
              <ProjectCard
                project={row.image1}
                onSelect={(p) => setSelectedProject(p)}
              />
            </div>
            <div className="w-1/2 h-full">
              <ProjectCard
                project={row.image2}
                onSelect={(p) => setSelectedProject(p)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll-Expand Cards (< 1024px) */}
      <div className="block lg:hidden w-full max-w-[90vw] z-20 flex flex-col gap-[6vw] pb-[12vw]">
        {FLAT_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="sticky top-[28vw] w-full h-[44vw] focus-within:h-[62vw] hover:h-[62vw] rounded-[3vw] overflow-hidden shadow-2xl transition-all duration-500 ease-out"
          >
            <ProjectCard
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Drawer Modal */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;