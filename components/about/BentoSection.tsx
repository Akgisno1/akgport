"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BentoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Responsive GSAP animations for smooth performance across screen sizes
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };

          gsap.from(".bento-card", {
            y: isMobile ? 25 : 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            stagger: isMobile ? 0.05 : 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            // Clears all GSAP inline transforms so CSS hover/active states work smoothly
            clearProps: "transform,opacity,visibility,scale",
          });
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bento-section w-full min-h-screen px-[4vw] py-[8vw] md:px-10 md:py-20 lg:px-16 bg-slate-100 dark:bg-zinc-950 border-t border-slate-200 dark:border-white/10 select-none overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-slate-200 dark:border-white/10 pb-6 mb-8 md:mb-12 max-w-7xl mx-auto gap-4">
        <div>
          <span className="text-[clamp(0.7rem,1.2vw,0.875rem)] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest block mb-2">
            CREDENTIALS & ACHIEVEMENTS
          </span>
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black uppercase tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            BACKGROUND & MILESTONES<span className="text-emerald-500">.</span>
          </h2>
        </div>
        <span className="text-[clamp(0.7rem,1.1vw,0.875rem)] font-mono text-slate-400 uppercase tracking-wider">
          [ ACADEMICS • CERTS • COMMUNITY ]
        </span>
      </div>

      {/* 1-Col (Mobile) -> 2-Col (Tablet) -> 3-Col (Desktop) Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        
        {/* CARD 1: B.Tech CSE */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:border-emerald-500/60 md:hover:-translate-y-1.5 md:hover:rotate-1 md:hover:shadow-xl active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 gap-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                DEGREE
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold whitespace-nowrap">
                2019 — 2023
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black text-slate-900 dark:text-white leading-snug">
              B.Tech in CSE
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              RGPV University
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>GPA:</span>
            <span className="text-slate-900 dark:text-white">9.0 / 10.0</span>
          </div>
        </div>

        {/* CARD 2: 12th Grade */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:border-emerald-500/60 md:hover:-translate-y-1.5 md:hover:-rotate-1 md:hover:shadow-xl active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 gap-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                12TH CLASS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold whitespace-nowrap">
                CBSE BOARD
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black text-slate-900 dark:text-white leading-snug">
              St. Aloysius Sr. Sec. School
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              Physics, Chemistry, Mathematics (PCM)
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>SCORE:</span>
            <span className="text-slate-900 dark:text-white">90.0%</span>
          </div>
        </div>

        {/* CARD 3: 10th Grade */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:border-emerald-500/60 md:hover:-translate-y-1.5 md:hover:scale-[1.01] md:hover:shadow-xl active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex justify-between items-center mb-4 gap-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                10TH CLASS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold whitespace-nowrap">
                CBSE BOARD
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black text-slate-900 dark:text-white leading-snug">
              St. Aloysius Sr. Sec. School
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              General Science & Mathematics
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>SCORE:</span>
            <span className="text-slate-900 dark:text-white">89.0%</span>
          </div>
        </div>

        {/* CARD 4: Data Structures & Codolio Profile */}
        <a
          href="https://codolio.com/profile/Akgisno1"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card md:col-span-2 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 md:hover:border-emerald-500 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:-translate-y-1.5 md:hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] active:scale-[0.99] transition-all duration-300 ease-out flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer"
        >
          <div className="space-y-3 max-w-lg">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
              PROBLEM SOLVING & ALGORITHMS ↗
            </span>
            <h3 className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-black text-slate-900 dark:text-white leading-tight">
              Data Structures & Algorithms
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Solved 400+ algorithmic problems demonstrating deep computer science fundamentals, optimization techniques, and TDD practices.
            </p>
            <span className="inline-block px-3.5 py-1.5 sm:px-4 sm:py-2 bg-emerald-500 text-slate-950 font-mono font-bold text-xs rounded-full md:group-hover:bg-emerald-400 transition-colors">
              View Codolio Profile ↗
            </span>
          </div>
          <div className="sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-baseline sm:items-end border-t sm:border-t-0 border-slate-200 dark:border-white/10 pt-4 sm:pt-0">
            <span className="text-[clamp(2.75rem,5vw,3.75rem)] font-black text-emerald-500 font-mono leading-none block md:group-hover:scale-105 transition-transform duration-300">
              400+
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest sm:mt-1">
              PROBLEMS SOLVED
            </span>
          </div>
        </a>

        {/* CARD 5: Hackathons */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:border-emerald-500 md:hover:-translate-y-1.5 md:hover:rotate-1 md:hover:shadow-xl active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 gap-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                INNOVATION
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold whitespace-nowrap">
                HACKATHONS
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black text-slate-900 dark:text-white leading-snug">
              Hackathon Contender
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-light leading-relaxed">
              Engineered high-concurrency full-stack MVPs under strict 24-48 hour hackathon timelines with multi-disciplinary team collaboration.
            </p>
          </div>
          <div className="mt-6 text-[11px] sm:text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">
            ⚡ RAPID PROTOTYPING & AGILE
          </div>
        </div>

        {/* CARD 6: NGO Contribution */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-sm md:hover:border-emerald-500 md:hover:-translate-y-1.5 md:hover:-rotate-1 md:hover:shadow-xl active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 gap-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                SOCIAL IMPACT
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold whitespace-nowrap">
                VOLUNTEER
              </span>
            </div>
            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black text-slate-900 dark:text-white leading-snug">
              Positive Interventions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-light leading-relaxed">
              Contributed to open-source UI design, web accessibility, and digital platforms for social impact and community wellness initiatives.
            </p>
          </div>
          <div className="mt-6 inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            🌱 TECH FOR GOOD
          </div>
        </div>

        {/* CARD 7: AWS Official Certification */}
        <a
          href="https://www.credly.com/users/anshul-kumar-godiwar.13140358"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card md:col-span-2 bg-gradient-to-br sm:bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl shadow-xl md:hover:scale-[1.01] md:hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] active:scale-[0.99] transition-all duration-300 ease-out flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer"
        >
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-950/80 block">
              OFFICIAL AWS CERTIFICATION ↗
            </span>
            <h3 className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-black text-slate-950 tracking-tight leading-snug">
              AWS Academy Cloud Foundations
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-900/90 leading-relaxed">
              Hands-on mastery of AWS Cloud Security, IAM, S3, EC2, Serverless Lambda, and Distributed Data Protection.
            </p>
          </div>
          <span className="px-4 py-2.5 sm:px-5 sm:py-3 bg-slate-950 text-emerald-400 font-mono font-bold text-xs rounded-full md:group-hover:bg-white md:group-hover:text-slate-950 transition-all duration-300 shadow-lg shrink-0 self-stretch sm:self-auto text-center">
            Verify Credly Profile ↗
          </span>
        </a>

      </div>
    </section>
  );
};