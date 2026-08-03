"use client";

import ProjectCard, { ProjectItem } from "@/components/projects/ProjectCard";
import ProjectDrawer from "@/components/projects/ProjectDrawer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS_DATA: { image1: ProjectItem; image2: ProjectItem }[] = [
  {
    image1: {
      id: "QUEUEOVERFLOW",
      title: "QueueOverflow",
      image:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      tags: ["Full-Stack", "RAG & GenAI", "Microservices"],
      description:
        "An AI-augmented developer community platform featuring instant retrieval-augmented generation answers, microservice-based architecture, and real-time thread synchronization.",
      techStack: [
        { name: "Full-Stack", iconName: "layers" },
        { name: "RAG & GenAI", iconName: "bot" },
        { name: "Microservices", iconName: "cpu" },
        { name: "Spring Boot", iconName: "server" },
        { name: "PostgreSQL", iconName: "database" },
      ],
      liveUrl: "https://queueoverflow.com",
      githubUrl: "https://github.com/akgisno1/queueoverflow",
    },
    image2: {
      id: "WIDESCAPE",
      title: "Widescape",
      image:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      tags: ["Next.js", "Tailwind CSS", "GSAP"],
      description:
        "High-performance landing experience built with interactive 3D canvas objects, custom page transitions, and responsive scroll dynamics.",
      techStack: [
        { name: "Next.js", iconName: "code2" },
        { name: "Tailwind CSS", iconName: "sparkles" },
        { name: "GSAP", iconName: "zap" },
      ],
      liveUrl: "https://widescape.ca",
      githubUrl: "https://github.com/akgisno1/widescape",
    },
  },
  {
    image1: {
      id: "OKA-EXPERIENCE",
      title: "Oka Experience",
      image:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      tags: ["Spring Boot", "PostgreSQL", "Docker"],
      description:
        "Enterprise-grade service management suite handling automated scheduling, transactional workflows, and real-time telemetry analytics.",
      techStack: [
        { name: "Spring Boot", iconName: "server" },
        { name: "PostgreSQL", iconName: "database" },
        { name: "Docker", iconName: "workflow" },
      ],
      liveUrl: "https://oka.ca",
      githubUrl: "https://github.com/akgisno1/oka-backend",
    },
    image2: {
      id: "OPTO-ANALYTICS",
      title: "Opto Analytics",
      image:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      tags: ["TypeScript", "GraphQL", "Redis"],
      description:
        "Real-time data visualization dashboard monitoring distributed microservices latency, error counts, and resource utilization.",
      techStack: [
        { name: "TypeScript", iconName: "terminal" },
        { name: "GraphQL", iconName: "layers" },
        { name: "Redis", iconName: "database" },
      ],
      liveUrl: "https://opto-analytics.io",
      githubUrl: "https://github.com/akgisno1/opto",
    },
  },
  {
    image1: {
      id: "CHALAXEUR",
      title: "Chalaxeur Audio",
      image:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      tags: ["Web Audio API", "React", "Canvas"],
      description:
        "Custom web-based audio synthesis tool enabling real-time sound spatialization, audio waveform visualization, and dynamic mixing.",
      techStack: [
        { name: "Web Audio API", iconName: "zap" },
        { name: "React", iconName: "code2" },
        { name: "Canvas", iconName: "sparkles" },
      ],
      liveUrl: "https://chalaxeur.com",
      githubUrl: "https://github.com/akgisno1/chalaxeur",
    },
    image2: {
      id: "SHELTON",
      title: "Shelton Brand",
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      tags: ["E-Commerce", "Stripe API", "Next.js"],
      description:
        "Bespoke e-commerce showcase featuring dynamic inventory sync, headless checkout flows, and tailored micro-animations.",
      techStack: [
        { name: "E-Commerce", iconName: "layers" },
        { name: "Stripe API", iconName: "zap" },
        { name: "Next.js", iconName: "code2" },
      ],
      liveUrl: "https://shelton.ca",
      githubUrl: "https://github.com/akgisno1/shelton",
    },
  },
];

// Flattened projects array for single-card mobile layout
const FLAT_PROJECTS = PROJECTS_DATA.flatMap((row) => [row.image1, row.image2]);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop Timeline (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const rows = gsap.utils.toArray<HTMLElement>(".desktop-row");
        if (rows.length === 0) return;

        // Set initial card states
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

            // Scale down, blur, and fade current row
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

            // Slide in next row
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

      // Mobile Timeline (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".mobile-card");
        if (cards.length === 0) return;

        // Set initial card states
        cards.forEach((card, idx) => {
          if (idx === 0) {
            gsap.set(card, {
              autoAlpha: 1,
              scale: 1,
              filter: "blur(0px)",
              pointerEvents: "auto",
              yPercent: 0,
            });
          } else {
            gsap.set(card, {
              autoAlpha: 0,
              yPercent: 110,
              scale: 0.95,
              filter: "blur(0px)",
              pointerEvents: "none",
            });
          }
        });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${cards.length * 120}%`,
            scrub: 0.8,
            pin: true,
          },
        });

        cards.forEach((card, i) => {
          if (i < cards.length - 1) {
            const nextCard = cards[i + 1];
            const label = `step-m-${i}`;

            // Scale down, blur, and fade current card
            mobileTl.to(
              card,
              {
                scale: 0.92,
                filter: "blur(6px)",
                opacity: 0.4,
                pointerEvents: "none",
                ease: "power2.inOut",
              },
              label
            );

            // Slide in next card
            mobileTl.to(
              nextCard,
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
      className="relative h-screen w-screen bg-slate-50 dark:bg-zinc-950 p-[4vw] flex flex-col justify-between items-center overflow-hidden text-slate-900 dark:text-white transition-colors duration-300 selection:bg-emerald-500 selection:text-white dark:selection:text-black"
    >
      {/* Persistent Section Header */}
      <div className="w-full max-w-[82vw] flex justify-between items-end pb-[1.5vw] z-10 select-none">
        <h2 className="font-mono text-[8vw] lg:text-[5.5vw] font-black leading-none uppercase tracking-tighter text-slate-900 dark:text-zinc-100">
          PROJECTS<span className="text-emerald-600 dark:text-emerald-500">.</span>
        </h2>
        <span className="hidden font-mono text-[0.85vw] uppercase tracking-wider text-slate-500 dark:text-zinc-400 md:block">
          [ SELECTED WORKS ’24–’26 ]
        </span>
      </div>

      {/* Desktop Container: 2 Cards per Row (>= 1024px) */}
      <div className="hidden lg:block relative w-full max-w-[82vw] h-[64vh] my-auto z-20">
        {PROJECTS_DATA.map((row, idx) => (
          <div
            key={idx}
            className="desktop-row absolute inset-0 z-10 w-full flex flex-row gap-[2vw] rounded-[2vw]  p-[1.5vw] shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
          >
            <ProjectCard
              project={row.image1}
              onSelect={(p) => setSelectedProject(p)}
            />
            <ProjectCard
              project={row.image2}
              onSelect={(p) => setSelectedProject(p)}
            />
          </div>
        ))}
      </div>

      {/* Mobile Container: Single Card per Stack (< 1024px) */}
      <div className="block lg:hidden relative w-full max-w-[90vw] h-[68vh] my-auto z-20">
        {FLAT_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="mobile-card absolute inset-0 z-10 w-full rounded-[2rem]  p-[4vw] shadow-2xl backdrop-blur-md transition-shadow duration-300"
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