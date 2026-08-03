"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-6 md:px-12 md:py-8 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-zinc-800 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-mono transition-colors">
      
      {/* Copyright */}
      <span className="text-slate-500 dark:text-slate-400 text-center sm:text-left">
        © {new Date().getFullYear()} Anshul Kumar Godiwar
      </span>

      {/* Availability Badge */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for Opportunities</span>
      </div>

    </footer>
  );
};