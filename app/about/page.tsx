"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";

import { ExperienceSection } from "@/components/about/ExperienceSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { BentoSection } from "@/components/about/BentoSection";
import { Footer } from "@/components/common/Footer";


const About = () => {
  return (
    <main className="relative w-screen min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white overflow-x-hidden select-none font-sans">
      <AboutHero />
      <ExperienceSection />
      <SkillsSection />
      <BentoSection />
      <Footer />
    </main>
  );
};

export default About;