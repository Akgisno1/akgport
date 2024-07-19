"use client";

import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Page() {
  return (
    <div className=" w-full overflow-x-hidden ">
      <AuroraBackground showRadialGradient={true}>
        <Home />
      </AuroraBackground>
      <Skills />
      <Projects />
    </div>
  );
}
