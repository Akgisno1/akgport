"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="w-screen p-[3vw] bg-slate-100 dark:bg-slate-950  dark:text-white border-t text-black border-zinc-800 flex justify-between items-center font-mono">
      <span>© {new Date().getFullYear()} Anshul Kumar Godiwar</span>
            <span className="text-emerald-600 dark:text-emerald-400/80">
              Available for Opportunities
            </span>
      
    </footer>
  );
};