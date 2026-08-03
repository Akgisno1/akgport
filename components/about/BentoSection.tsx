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
      // Refresh ScrollTrigger calculations
      ScrollTrigger.refresh();

      // Smooth entrance for all 7 bento cards
      gsap.from(".bento-card", {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        // Strips inline GSAP styles when done so CSS hovers work seamlessly
        clearProps: "transform,opacity,visibility",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bento-section w-full min-h-screen px-4 py-12 md:px-12 md:py-20 bg-slate-100 dark:bg-zinc-950 border-t border-slate-200 dark:border-white/10 select-none"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-slate-200 dark:border-white/10 pb-6 mb-10 max-w-7xl mx-auto gap-4">
        <div>
          <span className="text-xs md:text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest block mb-2">
            CREDENTIALS & ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-none">
            BACKGROUND & MILESTONES<span className="text-emerald-500">.</span>
          </h2>
        </div>
        <span className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-wider">
          [ ACADEMICS • CERTS • COMMUNITY ]
        </span>
      </div>

      {/* 3-Column Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* CARD 1: B.Tech CSE */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-sm hover:border-emerald-500/60 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                DEGREE
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold">
                2019 — 2023
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              B.Tech in CSE
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              RGPV University
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>GPA:</span>
            <span className="text-slate-900 dark:text-white">9.0 / 10.0</span>
          </div>
        </div>

        {/* CARD 2: 12th Grade */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-sm hover:border-emerald-500/60 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                12TH CLASS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold">
                CBSE BOARD
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              St. Aloysius Sr. Sec. School
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              Physics, Chemistry, Mathematics (PCM)
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>SCORE:</span>
            <span className="text-slate-900 dark:text-white">90.0%</span>
          </div>
        </div>

        {/* CARD 3: 10th Grade */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-sm hover:border-emerald-500/60 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                10TH CLASS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold">
                CBSE BOARD
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              St. Aloysius Sr. Sec. School
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-light">
              General Science & Mathematics
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            <span>SCORE:</span>
            <span className="text-slate-900 dark:text-white">89.0%</span>
          </div>
        </div>

        {/* CARD 4: Data Structures & Codolio Profile (Spans 2 Columns) */}
        <a
          href="https://codolio.com/profile/Akgisno1"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card md:col-span-2 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500 p-6 md:p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-300 ease-out flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer"
        >
          <div className="space-y-3 max-w-lg">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
              PROBLEM SOLVING & ALGORITHMS ↗
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Data Structures & Algorithms
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
              Solved 400+ algorithmic problems demonstrating deep computer science fundamentals, optimization techniques, and TDD practices.
            </p>
            <span className="inline-block px-4 py-2 bg-emerald-500 text-slate-950 font-mono font-bold text-xs rounded-full group-hover:bg-emerald-400 transition-colors">
              View Codolio Profile ↗
            </span>
          </div>
          <div className="sm:text-right">
            <span className="text-5xl md:text-6xl font-black text-emerald-500 font-mono leading-none block group-hover:scale-110 transition-transform duration-300">
              400+
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1 block">
              PROBLEMS SOLVED
            </span>
          </div>
        </a>

        {/* CARD 5: Hackathons */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-sm hover:border-emerald-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                INNOVATION
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold">
                HACKATHONS
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              Hackathon Contender
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-light">
              Engineered high-concurrency full-stack MVPs under strict 24-48 hour hackathon timelines with multi-disciplinary team collaboration.
            </p>
          </div>
          <div className="mt-6 text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">
            ⚡ RAPID PROTOTYPING & AGILE
          </div>
        </div>

        {/* CARD 6: NGO Contribution - Positive Interventions */}
        <div className="bento-card bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-sm hover:border-emerald-500 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                SOCIAL IMPACT
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-semibold">
                VOLUNTEER
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              Positive Interventions
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-light">
              Contributed to open-source UI design, web accessibility, and digital platforms for social impact and community wellness initiatives.
            </p>
          </div>
          <div className="mt-6 inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono font-bold w-fit">
            🌱 TECH FOR GOOD
          </div>
        </div>

        {/* CARD 7: AWS Official Certification (Spans 2 Columns) */}
        <a
          href="https://www.credly.com/users/anshul-kumar-godiwar.13140358"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card md:col-span-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 p-6 md:p-8 rounded-2xl shadow-xl hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-300 ease-out flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer"
        >
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-950/80 block">
              OFFICIAL AWS CERTIFICATION ↗
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
              AWS Academy Cloud Foundations
            </h3>
            <p className="text-sm font-medium text-slate-900/90">
              Hands-on mastery of AWS Cloud Security, IAM, S3, EC2, Serverless Lambda, and Distributed Data Protection.
            </p>
          </div>
          <span className="px-5 py-3 bg-slate-950 text-emerald-400 font-mono font-bold text-xs rounded-full group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 shadow-lg shrink-0">
            Verify Credly Profile ↗
          </span>
        </a>

      </div>
    </section>
  );
};