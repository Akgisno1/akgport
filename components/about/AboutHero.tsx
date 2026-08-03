"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeText1Ref = useRef<HTMLSpanElement>(null);
  const badgeText2Ref = useRef<HTMLSpanElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect on interactive badges on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    gsap.to([badgeText1Ref.current, badgeText2Ref.current], {
      rotateY: x * 22,
      rotateX: -y * 22,
      x: x * 14,
      y: y * 8,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    gsap.to([badgeText1Ref.current, badgeText2Ref.current], {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });

      // 1. Title Slide & Fade In
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      // 2. Interactive 3D Badges Pop Up
      .fromTo(
        [badgeText1Ref.current, badgeText2Ref.current],
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.7)" },
        "-=0.4"
      )
      // 3. Bio Summary Text Fade & Slide
      .fromTo(
        summaryRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      // 4. Staggered Core Focus Pills Reveal
      .fromTo(
        ".highlight-pill",
        { opacity: 0, scale: 0.85, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)" },
        "-=0.4"
      )
      // 5. Bottom Navigation Bar Reveal
      .fromTo(
        bottomBarRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-screen min-h-screen lg:h-screen flex flex-col justify-between p-[5vw] sm:p-[4vw] lg:p-[4vw] overflow-hidden select-none bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white font-sans"
    >
      {/* Main Content Area */}
      <div className="my-auto w-full max-w-[92vw] lg:max-w-[85vw] mx-auto py-[6vw] lg:py-0">
        {/* Main Title: ABOUT ME with 3D Tilt Badges */}
        <h1
          ref={titleRef}
          className="text-[8vw] sm:text-[6.5vw] lg:text-[5.5vw] font-black font-mont uppercase tracking-tight leading-[1.12] mb-[4vw] lg:mb-[2vw]"
        >
          ABOUT ME <br />
          <span className="text-slate-400 dark:text-zinc-600 font-light text-[6vw] sm:text-[4.8vw] lg:text-[4vw]">
            BEHIND THE
          </span>{" "}
          {/* Interactive 3D Badge 1 */}
          <span className="inline-block bg-slate-900 dark:bg-white px-[3vw] sm:px-[2vw] lg:px-[1.6vw] py-[0.8vw] sm:py-[0.5vw] lg:py-[0.3vw] rounded-[2.5vw] sm:rounded-[1.8vw] lg:rounded-[1.2vw] shadow-2xl relative overflow-hidden align-middle mx-[0.5vw] lg:mx-[0.2vw]">
            <span
              ref={badgeText1Ref}
              className="inline-block text-emerald-400 dark:text-emerald-600 font-extrabold transition-transform duration-100 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              CODE
            </span>
          </span>{" "}
          &{" "}
          {/* Interactive 3D Badge 2 */}
          <span className="inline-block bg-emerald-500 px-[3vw] sm:px-[2vw] lg:px-[1.6vw] py-[0.8vw] sm:py-[0.5vw] lg:py-[0.3vw] rounded-[2.5vw] sm:rounded-[1.8vw] lg:rounded-[1.2vw] shadow-2xl relative overflow-hidden align-middle mx-[0.5vw] lg:mx-[0.2vw]">
            <span
              ref={badgeText2Ref}
              className="inline-block text-slate-950 font-extrabold transition-transform duration-100 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              AI SYSTEMS
            </span>
          </span>
        </h1>

        {/* Bio Summary */}
        <div ref={summaryRef} className="space-y-[3vw] lg:space-y-[1.8vw] mt-[2vw] lg:mt-[1vw]">
          <p className="text-[3.8vw] sm:text-[2.2vw] lg:text-[1.45vw] leading-[1.65] text-slate-700 dark:text-slate-300 font-light">
            Full-stack software engineer with 7 months of internship experience building and shipping production applications using React.js, Node.js, and Next.js. Hands-on experience integrating LLMs (OpenAI API) and building AI-powered features into web apps—ranging from prompt engineering to RAG pipelines. Writes test-driven code with structured Git workflows and strong algorithmic problem-solving (400+ DSA problems solved).
          </p>

          {/* Core Pillars / Focus Area Pills */}
          <div className="flex flex-wrap gap-[1.5vw] lg:gap-[0.8vw] items-center pt-[1vw] lg:pt-0">
            <span className="w-full sm:w-auto text-[2.8vw] sm:text-[1.5vw] lg:text-[0.85vw] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-[1vw] sm:mb-0 mr-[0.5vw]">
              CORE FOCUS:
            </span>
            {[
              "Full-Stack (React / Node / Next)",
              "LLM Integration & RAG",
              "REST APIs",
              "Test-Driven Development (TDD)",
              "Cloud & CI/CD Pipelines",
            ].map((item) => (
              <span
                key={item}
                className="highlight-pill px-[2.8vw] sm:px-[1.8vw] lg:px-[1vw] py-[1.2vw] sm:py-[0.8vw] lg:py-[0.4vw] bg-slate-200/60 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-800 dark:text-slate-300 rounded-[1.5vw] sm:rounded-[1vw] lg:rounded-[0.6vw] text-[2.8vw] sm:text-[1.5vw] lg:text-[0.85vw] font-mono hover:border-emerald-500 hover:text-emerald-500 transition-colors duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div
        ref={bottomBarRef}
        className="flex flex-col sm:flex-row gap-[2vw] sm:gap-0 justify-between items-center text-[2.8vw] sm:text-[1.5vw] lg:text-[0.9vw] font-mono text-slate-500 border-t border-slate-200 dark:border-white/10 pt-[3vw] lg:pt-[1.5vw]"
      >
        <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center sm:text-left">
          EXPLORE MY JOURNEY & CAPABILITIES BELOW
        </span>

        <div className="flex items-center gap-[1.5vw] lg:gap-[0.8vw]">
          <span className="tracking-widest uppercase">SCROLL</span>
          <span className="px-[2vw] lg:px-[0.8vw] py-[0.8vw] lg:py-[0.3vw] rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold animate-bounce">
            [ ↓ ]
          </span>
        </div>
      </div>
    </section>
  );
};