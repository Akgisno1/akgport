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
    <div className="z-[40] navybaby flex fixed top-0 left-0 w-[100vw] items-start justify-between">
      <div className="p-[1vw]">
      </div>
      
      <div className="flex items-center gap-[0.5vw]">
        {/* Animated Theme Toggler with matching h-[3.5vw] dimensions */}
        <AnimatedThemeToggler
          theme={theme as "light" | "dark"}
          onThemeChange={(t) => setTheme(t)}
          variant="circle"
          className="h-[3.5vw] w-[3.5vw]  dark:bg-black dark:text-white text-black bg-emerald-500 hover:bg-black dark:hover:bg-white hover:text-black dark:hover:text-white transition-colors flex items-center justify-center cursor-pointer border-none outline-none"
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
          className="h-[3.5vw] bg-emerald-500 relative w-[12vw] cursor-pointer"
        >
          <div
            ref={navGreenRef}
            className="bg-black dark:bg-white transition-all absolute top-0 h-0 w-full"
          ></div>
          <div className="relative h-full px-[2vw] flex flex-col justify-center items-end gap-[0.3vw]">
            <div className="w-[3.5vw] h-[0.15vw] bg-white dark:bg-black "></div>
            <div className="w-[2vw] h-[0.15vw] bg-white dark:bg-black "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
