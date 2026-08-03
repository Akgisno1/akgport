"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconCloud from "@/components/magicui/icon-cloud";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILL_CATEGORIES = [
  {
    id: "01",
    label: "Frontend",
    icons: [
      "typescript",
      "javascript",
      "react",
      "nextdotjs",
      "tailwindcss",
      "html5",
      "css3",
      "greensock",
      "redux",
      "figma",
    ],
    names: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "GSAP Animations",
      "Redux Toolkit",
      "Figma",
    ],
  },
  {
    id: "02",
    label: "Backend",
    icons: [
      "nodedotjs",
      "express",
      "springboot",
      "java",
      "nextdotjs",
      "prisma",
    ],
    names: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Server Actions",
      "Microservices",
    ],
  },
  {
    id: "03",
    label: "Databases",
    icons: ["postgresql", "mongodb", "mysql", "prisma", "redis", "supabase"],
    names: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "Redis",
      "Supabase",
      "Database Design",
    ],
  },
  {
    id: "04",
    label: "Cloud & DevOps",
    icons: [
      "amazonwebservices",
      "docker",
      "git",
      "github",
      "githubactions",
      "vercel",
    ],
    names: [
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Git / GitHub",
      "Vercel Deployment",
    ],
  },
];

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeOverlayRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const isAnimating = useRef(false);

  // GSAP ScrollTrigger
  useGSAP(
    () => {
      gsap.set(".banner-left", { xPercent: 0 });
      gsap.set(".banner-right", { xPercent: 0 });

      if (wipeOverlayRef.current) {
        gsap.set(wipeOverlayRef.current, { yPercent: 100 });
      }

      const bannerTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
          pin: true,
        },
      });

      bannerTl
        .to(".banner-1", { xPercent: -100, ease: "power2.inOut" }, 0.0)
        .to(".banner-2", { xPercent: 100, ease: "power2.inOut" }, 0.06)
        .to(".banner-3", { xPercent: -100, ease: "power2.inOut" }, 0.12)
        .to(".banner-4", { xPercent: 100, ease: "power2.inOut" }, 0.18);
    },
    { scope: containerRef }
  );

  // Smooth Wipe Animation
  const handleTabChange = (newIdx: number) => {
    if (newIdx === activeTab || isAnimating.current) return;
    isAnimating.current = true;

    const transitionTl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    transitionTl
      .fromTo(
        wipeOverlayRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setActiveTab(newIdx);
          },
        }
      )
      .to(wipeOverlayRef.current, {
        yPercent: 100,
        duration: 0.5,
        ease: "power2.inOut",
      });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen bg-slate-50 dark:bg-zinc-950 overflow-hidden font-rubik select-none"
    >
      {/* INTERACTIVE UNDERLYING SKILLS UI */}
      {/* MOBILE: pt-[10vw] top padding & justify-start so tabs sit directly above card */}
      <div className="absolute inset-0 flex flex-col justify-start lg:justify-between pt-[10vw] pb-[4vw] px-[4vw] lg:p-[4vw] z-10 max-w-[92vw] lg:max-w-[85vw] mx-auto">
        
        {/* HEADER & CATEGORY TABS */}
        <div className="flex flex-col gap-[2vw] lg:gap-[1vw] pb-0 lg:pb-[1vw]">
          <div>
            <span className="text-[2.8vw] sm:text-[1.5vw] lg:text-[0.9vw] font-oxo text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest block">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-[6vw] sm:text-[4vw] lg:text-[3vw] font-black font-mont uppercase tracking-tight text-slate-900 dark:text-white mt-[0.2vw]">
              SKILLS & TECH STACK
            </h2>
          </div>

          <div className="flex flex-wrap gap-[2vw] lg:gap-[0.8vw] items-center">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(idx)}
                className={`px-[3.5vw] sm:px-[2.5vw] lg:px-[1.5vw] py-[1.5vw] sm:py-[1vw] lg:py-[0.7vw] rounded-full text-[3.2vw] sm:text-[2vw] lg:text-[1.1vw] font-oxo uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-emerald-500 text-slate-950 font-black shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-105"
                    : "bg-slate-200/60 dark:bg-zinc-900/80 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA (MOBILE: mt-[2vw] tight gap to tabs, h-[70vh] longer card height) */}
        <div className="relative grid overflow-hidden max-sm:overflow-hidden grid-cols-1 lg:grid-cols-12 gap-[3vw] items-center mt-[2vw] lg:my-auto w-full h-[70vh] lg:h-[60vh] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-[4vw] sm:rounded-[2.5vw] lg:rounded-[1.8vw] p-[4vw] lg:p-[2.8vw] shadow-2xl overflow-y-auto lg:overflow-hidden">
          {/* EMERALD WIPE OVERLAY */}
          <div
            ref={wipeOverlayRef}
            className="absolute inset-0 z-30 bg-emerald-500 pointer-events-none"
          />

          {/* LISTED SKILLS BADGES */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between h-auto lg:h-full lg:pr-[1vw]">
            <div className="my-auto space-y-[2vw] lg:space-y-[1.2vw]">
              <div className="flex flex-wrap gap-[2vw] lg:gap-[0.8vw]">
                {SKILL_CATEGORIES[activeTab].names.map((name) => (
                  <span
                    key={name}
                    className="px-[3vw] sm:px-[2vw] lg:px-[1.3vw] py-[1.5vw] sm:py-[1vw] lg:py-[0.7vw] bg-slate-200/50 dark:bg-zinc-950/70 text-slate-800 dark:text-slate-200 rounded-full text-[3vw] sm:text-[1.8vw] lg:text-[1vw] font-tiny hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3D ICON CLOUD */}
          <div className="col-span-1 max-sm:-mt-[25vw] lg:col-span-5 flex justify-center items-center h-auto lg:h-full pt-[4vw] lg:pt-0 pb-[2vw] lg:pl-[2vw]">
            <div className="w-[48vw] h-[48vw] sm:w-[35vw] sm:h-[35vw] lg:w-[22vw] lg:h-[22vw] flex items-center justify-center">
              <IconCloud iconSlugs={SKILL_CATEGORIES[activeTab].icons} />
            </div>
          </div>
        </div>
      </div>

      {/* 4 BORDERLESS HORIZONTAL BANNERS (SLIDE OUT ON SCROLL) */}
      <div className="banner-1 banner-left absolute top-0 left-0 w-screen h-[25vh] bg-emerald-500 text-slate-950 font-mont font-black text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] flex items-center justify-center z-40 shadow-2xl">
        FRONTEND
      </div>
      <div className="banner-2 banner-right absolute top-[25vh] left-0 w-screen h-[25vh] bg-zinc-950 text-emerald-400 font-mont font-black text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] flex items-center justify-center z-40 shadow-2xl">
        BACKEND
      </div>
      <div className="banner-3 banner-left absolute top-[50vh] left-0 w-screen h-[25vh] bg-emerald-500 text-slate-950 font-mont font-black text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] flex items-center justify-center z-40 shadow-2xl">
        DATABASES
      </div>
      <div className="banner-4 banner-right absolute top-[75vh] left-0 w-screen h-[25vh] bg-zinc-950 text-emerald-400 font-mont font-black text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] flex items-center justify-center z-40 shadow-2xl">
        CLOUD & DEVOPS
      </div>
    </div>
  );
};