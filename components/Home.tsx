"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { TransitionLink } from "@/context/NavContext";

gsap.registerPlugin(ScrollTrigger);

const PHRASES = [
  "Hi, I am Anshul Kumar Godiwar.",
  "Full Stack Developer & UI Specialist.",
  "Turning complex ideas into seamless web apps.",
  "Let's build something extraordinary together.",
];

const AKG_LETTERS = ["A", "K", "G"];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeText1Ref = useRef<HTMLSpanElement>(null);
  const badgeText2Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isStarted, setIsStarted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Loop Effect
  useEffect(() => {
    if (!isStarted) return;

    const currentPhrase = PHRASES[phraseIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      timeoutId = setTimeout(() => setTypedText((prev) => prev.slice(0, -1)), 25);
    } else {
      timeoutId = setTimeout(
        () => setTypedText(currentPhrase.slice(0, typedText.length + 1)),
        60
      );
    }

    if (!isDeleting && typedText === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, phraseIndex, isStarted]);

  // Mouse Movement: Keeps boxes fixed, shifts ONLY the inner text in 3D space
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2); // -1 to 1
    const y = (e.clientY - top - height / 2) / (height / 2); // -1 to 1

    gsap.to([badgeText1Ref.current, badgeText2Ref.current], {
      rotateY: x * 25,
      rotateX: -y * 25,
      x: x * 18,
      y: y * 10,
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

  // GSAP Entrance Timeline (2-second initial delay)
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 1.25 });

      // 1. Reveal AKG header & start flip loop
      tl.fromTo(
        ".Akg",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" }
      );

      gsap.to(".Akg", {
        rotateY: 180,
        duration: 1,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2.6,
      });

      // 2. Headline & Badges
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3"
      )
        .fromTo(
          [badgeText1Ref.current, badgeText2Ref.current],
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .call(() => setIsStarted(true))
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[100vw] min-h-[100vh] flex flex-col justify-between p-[3vw] overflow-hidden select-none"
    >
      {/* Top Header - Rotating AKG Branding */}
      <div className="w-full flex justify-start items-center z-10">
        <div
          className="flex gap-[0.4vw] text-emerald-500 font-extrabold text-[2.8vw] tracking-wider cursor-default font-rubik"
          style={{ perspective: "1000px" }}
        >
          {AKG_LETTERS.map((letter) => (
            <span
              key={letter}
              className="Akg inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center max-w-[88vw] mx-auto w-full py-[2vw]">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-[5vw] font-black font-mont text-slate-900 dark:text-white leading-[1.18] tracking-tight mb-[2.5vw]"
        >
          Crafting Scalable{" "}
          {/* Box 1 (Fixed) -> Full-Stack */}
          <span className="inline-block bg-slate-900 dark:bg-white px-[1.8vw] py-[0.4vw] rounded-[1.5vw] shadow-2xl my-[0.2vw] relative overflow-hidden align-middle">
            {/* Text 1 (Moves) */}
            <span
              ref={badgeText1Ref}
              className="inline-block text-emerald-400 dark:text-emerald-600 transition-transform duration-100 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              Full-Stack
            </span>
          </span>{" "}
          Apps with{" "}
          {/* Box 2 (Fixed) -> Precision */}
          <span className="inline-block bg-slate-900 dark:bg-white px-[1.8vw] py-[0.4vw] rounded-[1.5vw] shadow-2xl my-[0.2vw] relative overflow-hidden align-middle">
            {/* Text 2 (Moves) */}
            <span
              ref={badgeText2Ref}
              className="inline-block text-white dark:text-slate-950 transition-transform duration-100 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              Precision
            </span>
          </span>
        </h1>

        {/* Subtitle & Action Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.5vw] items-end mt-[1vw]">
          {/* Typewriter text */}
          <div ref={subtextRef} className="space-y-[0.6vw]">
            <p className="text-[1.5vw] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-tiny">
              Interactive Portfolio
            </p>
            <div className="text-[1.5vw] font-medium text-slate-700 dark:text-slate-300 min-h-[3.5vw] flex items-center font-mont">
              <span>{typedText}</span>
              {isStarted && (
                <span className="animate-pulse ml-[0.3vw] text-emerald-500 font-bold">
                  |
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center gap-[1.2vw] lg:justify-end"
          >
            {/* Primary Button */}
            <TransitionLink
              href="projects"
              className="group relative inline-flex items-center gap-[1vw] px-[2.2vw] py-[0.9vw] rounded-[3vw] bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-[1.25vw] shadow-xl hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore Projects</span>
              <span className="relative z-10 w-[2.5vw] h-[2.5vw] rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[1.1vw] group-hover:translate-x-[0.3vw] group-hover:rotate-45 transition-transform duration-300">
                →
              </span>
            </TransitionLink>

            {/* Secondary Button */}
            <TransitionLink
              href="about"
              className="group relative inline-flex items-center gap-[0.7vw] px-[2.2vw] py-[0.9vw] rounded-[3vw] border-[0.18vw] border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-[1.25vw] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white dark:group-hover:text-slate-950 transition-colors duration-300">
                About Me
              </span>
              <span className="relative z-10 group-hover:text-white dark:group-hover:text-slate-950 transition-colors duration-300 group-hover:translate-x-[0.3vw] transition-transform">
                ↗
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;