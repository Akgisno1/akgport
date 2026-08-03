"use client";

import React, { useContext, useRef } from "react";
import { NavbarColorContext, NavbarContext } from "@/context/NavContext";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/magicui/theme-toggler";

const Navbar = () => {
  const navGreenRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);
  const { theme, setTheme } = useTheme();

  return (
    <div className="z-[40] navybaby flex fixed top-0 left-0 w-[100vw] items-start justify-between ">
      <div className="p-[1vw]"></div>

      <div className="flex items-center gap-[2vw] sm:gap-[1vw] lg:gap-[0.5vw]">
        {/* Animated Theme Toggler with matching colors & responsive dimensions */}
        <AnimatedThemeToggler
          theme={theme as "light" | "dark"}
          onThemeChange={(t) => setTheme(t)}
          variant="circle"
          className="h-[12vw] w-[12vw] sm:h-[7vw] sm:w-[7vw] lg:h-[3.5vw] lg:w-[3.5vw] bg-emerald-500 text-white dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors flex items-center justify-center cursor-pointer border-none outline-none group"
        />

        {/* Fullscreen Nav Trigger */}
        <div
          onClick={() => {
            setNavOpen(true);
          }}
          onMouseEnter={() => {
            if (navGreenRef.current) {
              navGreenRef.current.style.height = "100%";
            }
          }}
          onMouseLeave={() => {
            if (navGreenRef.current) {
              navGreenRef.current.style.height = "0%";
            }
          }}
          className="h-[12vw] w-[32vw] sm:h-[7vw] sm:w-[20vw] lg:h-[3.5vw] lg:w-[12vw] bg-emerald-500 relative cursor-pointer overflow-hidden transition-colors"
        >
          {/* Hover Overlay */}
          <div
            ref={navGreenRef}
            className="bg-black dark:bg-white transition-all duration-300 absolute top-0 left-0 h-0 w-full z-0"
          ></div>

          {/* Lines Indicator */}
          <div className="relative z-10 h-full px-[4vw] sm:px-[3vw] lg:px-[2vw] flex flex-col justify-center items-end gap-[1vw] sm:gap-[0.6vw] lg:gap-[0.3vw]">
            <div className="w-[10vw] sm:w-[6vw] lg:w-[3.5vw] h-[0.5vw] sm:h-[0.3vw] lg:h-[0.15vw] bg-white dark:bg-black transition-colors"></div>
            <div className="w-[6vw] sm:w-[3.8vw] lg:w-[2vw] h-[0.5vw] sm:h-[0.3vw] lg:h-[0.15vw] bg-white dark:bg-black transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;