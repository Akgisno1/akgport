"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initial State Setup
      // Card 1: Fully active, visible, and interactive
      gsap.set(".exp-card-1", {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        pointerEvents: "auto",
      });

      // Card 2: Invisible (visibility: hidden + opacity: 0), completely ignored by browser hit-testing
      gsap.set(".exp-card-2", {
        autoAlpha: 0,
        yPercent: 110,
        scale: 0.95,
        pointerEvents: "none",
      });

      const expTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 0.8,
          pin: true,
        },
      });

      // 2. SMOOTH STAIRS EXIT: Explicit 0.4s duration + 0.15s stagger
      expTl.to(
        ".stair-col",
        {
          yPercent: -100,
          duration: 0.4,
          stagger: { amount: 0.15, ease: "power2.in" },
          ease: "power2.inOut",
        },
        0
      );

      // Hide stair container ONLY AFTER all 5 stairs finish moving off-screen (">" position)
      expTl.set(".stair-container", { display: "none" }, ">");

      // 3. CARD TRANSITION:
      // Card 1 stays in place, blurs, scales down, dims, and disables pointer events
      expTl.to(
        ".exp-card-1",
        {
          scale: 0.92,
          filter: "blur(8px)",
          opacity: 0.4,
          pointerEvents: "none",
          ease: "power2.inOut",
        },
        0.70
      );

      // Card 2 becomes visible (autoAlpha: 1), slides up over Card 1, and enables pointer events
      expTl.to(
        ".exp-card-2",
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          pointerEvents: "auto",
          ease: "power2.inOut",
        },
        0.72
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen bg-slate-50 dark:bg-zinc-950 p-[4vw] flex flex-col justify-between items-center overflow-hidden font-rubik"
    >
      {/* 5 EMERALD STAIR COLUMNS LAYERED ON TOP (Z-40) */}
      <div className="stair-container absolute inset-0 z-40 pointer-events-none flex h-full w-full overflow-hidden">
        <div className="stair-col h-full w-1/5 bg-emerald-500 shadow-2xl pointer-events-none" />
        <div className="stair-col h-full w-1/5 bg-emerald-500 shadow-2xl pointer-events-none" />
        <div className="stair-col h-full w-1/5 bg-emerald-500 shadow-2xl pointer-events-none" />
        <div className="stair-col h-full w-1/5 bg-emerald-500 shadow-2xl pointer-events-none" />
        <div className="stair-col h-full w-1/5 bg-emerald-500 shadow-2xl pointer-events-none" />
      </div>

      {/* Section Header */}
      <div className="w-full max-w-[82vw] flex justify-between items-end pb-[1.5vw] z-10 select-none">
        <div>
          <span className="text-[0.9vw] font-oxo text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest block">
            EXPERIENCE
          </span>
          <h2 className="text-[3.2vw] font-black font-mont uppercase tracking-tight text-slate-900 dark:text-white mt-[0.2vw]">
            WORK EXPERIENCE
          </h2>
        </div>
        <span className="text-[0.85vw] font-oxo text-slate-400 uppercase tracking-wider">
          7 MONTHS INTERNSHIP EXPERIENCE
        </span>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-[82vw] h-[64vh] my-auto z-20">
        {/* CARD 1: SIDE HUSSLR */}
        <div className="exp-card-1 absolute inset-0 z-10 p-[2.8vw] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-[1.8vw] shadow-2xl flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] pointer-events-auto">
          <div className="grid grid-cols-12 gap-[2.5vw] items-start">
            {/* Left Column (Meta, Dates, Tech Stack) */}
            <div className="col-span-5 space-y-[1.2vw] pr-[1vw]">
              <div>
                <span className="px-[0.8vw] py-[0.3vw] bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[0.75vw] font-oxo font-bold uppercase">
                  FEB 2025 — JUN 2025
                </span>
                <h3 className="text-[2.2vw] font-black font-mont uppercase tracking-tight text-slate-900 dark:text-white mt-[0.8vw] leading-tight">
                  Full Stack Developer Intern
                </h3>
                <p className="text-[1.1vw] font-bold text-emerald-600 dark:text-emerald-400 font-oxo mt-[0.3vw]">
                  @ SideHusslr (Remote)
                </p>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/company/sidehusslr/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-[1.2vw] py-[0.5vw] bg-emerald-500 text-slate-950 font-black rounded-full text-[0.8vw] font-oxo hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200 cursor-pointer relative z-30"
                >
                  VIEW ON LINKEDIN ↗
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-[1vw] space-y-[0.5vw]">
                <span className="text-[0.75vw] font-oxo text-slate-400 uppercase font-bold tracking-wider block">
                  TECH USED:
                </span>
                <div className="flex flex-wrap gap-[0.4vw]">
                  {[
                    "Node.js",
                    "React.js",
                    "JavaScript",
                    "TypeScript",
                    "PostgreSQL",
                    "AWS",
                    "Cursor",
                    "GitHub Copilot",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-[0.8vw] py-[0.3vw] bg-slate-200/60 dark:bg-zinc-950 text-slate-800 dark:text-slate-300 rounded-[0.5vw] text-[0.75vw] font-tiny hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 hover:shadow-[0_0_12px_#10b981] transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Achievements & Deliverables) */}
            <div className="col-span-7 border-l border-slate-200/60 dark:border-white/10 pl-[2.5vw] space-y-[1vw]">
              <span className="text-[0.8vw] font-oxo text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-[0.5vw]">
                KEY HIGHLIGHTS & IMPACT
              </span>
              <ul className="space-y-[0.8vw] text-[1.05vw] text-slate-700 dark:text-slate-300 font-rubik font-light">
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Built full-stack applications using Node.js and React.js (8+ features, 50+ components, 30+ server actions) with end-to-end ownership.
                </li>
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Integrated REST APIs across 30+ server actions using async-await; optimized HTTP layer reducing API latency by 60% (3.5s → 1.4s).
                </li>
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Wrote test-driven code with 85% unit and integration coverage, reducing production failures by 40%.
                </li>
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Iterated on prompts using Cursor and Copilot to improve AI output quality, reducing debugging cycles by 25% across 12+ scrum demos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CARD 2: AADI FOUNDATION */}
        <div className="exp-card-2 absolute inset-0 z-20 invisible pointer-events-none p-[2.8vw] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-[1.8vw] shadow-2xl flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
          <div className="grid grid-cols-12 gap-[2.5vw] items-start">
            {/* Left Column (Meta, Dates, Tech Stack) */}
            <div className="col-span-5 space-y-[1.2vw] pr-[1vw]">
              <div>
                <span className="px-[0.8vw] py-[0.3vw] bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[0.75vw] font-oxo font-bold uppercase">
                  OCT 2024 — NOV 2024
                </span>
                <h3 className="text-[2.2vw] font-black font-mont uppercase tracking-tight text-slate-900 dark:text-white mt-[0.8vw] leading-tight">
                  Web Development Intern
                </h3>
                <p className="text-[1.1vw] font-bold text-emerald-600 dark:text-emerald-400 font-oxo mt-[0.3vw]">
                  @ Aadi Foundation (Remote)
                </p>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/company/aadi-foundation-official/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-[1.2vw] py-[0.5vw] bg-emerald-500 text-slate-950 font-black rounded-full text-[0.8vw] font-oxo hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200 cursor-pointer relative z-30"
                >
                  VIEW ON LINKEDIN ↗
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-[1vw] space-y-[0.5vw]">
                <span className="text-[0.75vw] font-oxo text-slate-400 uppercase font-bold tracking-wider block">
                  TECH USED:
                </span>
                <div className="flex flex-wrap gap-[0.4vw]">
                  {[
                    "React.js",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Git",
                    "GitHub Actions",
                    "CI/CD",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-[0.8vw] py-[0.3vw] bg-slate-200/60 dark:bg-zinc-950 text-slate-800 dark:text-slate-300 rounded-[0.5vw] text-[0.75vw] font-tiny hover:bg-emerald-500 hover:text-slate-950 hover:scale-105 hover:shadow-[0_0_12px_#10b981] transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Achievements & Deliverables) */}
            <div className="col-span-7 border-l border-slate-200/60 dark:border-white/10 pl-[2.5vw] space-y-[1vw]">
              <span className="text-[0.8vw] font-oxo text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-[0.5vw]">
                KEY HIGHLIGHTS & IMPACT
              </span>
              <ul className="space-y-[1vw] text-[1.1vw] text-slate-700 dark:text-slate-300 font-rubik font-light">
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Built 10+ responsive web components using JavaScript, HTML5, CSS3, and DOM manipulation.
                </li>
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Automated CI/CD pipelines via GitHub Actions with zero production defects shipped through continuous integration discipline.
                </li>
                <li className="flex items-start gap-[0.7vw]">
                  <span className="text-emerald-500 font-bold mt-[0.1vw]">↗</span>
                  Practiced Git workflows (branching, PRs, code reviews) alongside senior engineers, maintaining 100% sprint delivery alignment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="w-full max-w-[82vw] flex justify-between items-center text-[0.85vw] font-tiny text-slate-500 z-10 pt-[1vw] select-none">
        <span>PROVEN AGILE & TDD WORKFLOWS</span>
        <span>PRODUCTION-READY FULL STACK DEVELOPMENT</span>
      </div>
    </section>
  );
};