"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext, TransitionContext } from "@/context/NavContext";

const NAV_ITEMS = [
  {
    id: "01",
    label: "Home",
    href: "/",
    marqueeText: "MAIN HERO • ANSHUL KUMAR GODIWAR • PORTFOLIO 2026 • ",
  },
  {
    id: "02",
    label: "Projects",
    href: "/projects",
    marqueeText: "FEATURED WORK • FULL-STACK APPS • CASE STUDIES • ",
  },
  {
    id: "03",
    label: "About",
    href: "/about",
    marqueeText: "ABOUT ME • BACKGROUND • EXPERIENCE & PASSION • ",
  },
  {
    id: "04",
    label: "Contact",
    href: "/contact",
    marqueeText: "GET IN TOUCH • AVAILABLE FOR FREELANCE & FULL TIME • ",
  },
];

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/akgisno1" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/anshul-kumar-godiwar/" },
  { name: "Instagram", href: "https://www.instagram.com/the.guy_who.asked/" },
  {
    name: "Email Me",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=anshulkumargodiwar2001@gmail.com",
  },
];

const FullScreenNav = () => {
  const fullNavLinksRef = useRef<HTMLDivElement>(null);
  const fullScreenRef = useRef<HTMLDivElement>(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const { navigateTo, isManualTransition } = useContext(TransitionContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    // Ensure clean initial state before animating
    gsap.set(".fullscreennav", { display: "block" });
    gsap.set(".navlink-extra", { opacity: 0, y: -10 });
    gsap.set(".link", { opacity: 0, rotateX: 90 });
    gsap.set(".stairing", { height: 0 });

    tl.to(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: { amount: -0.25 },
      ease: "power3.inOut",
    });
    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        stagger: { amount: 0.25 },
        ease: "power2.out",
      },
      "-=0.2"
    );
    tl.to(
      ".navlink-extra",
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".navlink-extra", { opacity: 0, y: 10, duration: 0.2 });
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 },
      ease: "power2.in",
    });
    tl.to(".stairing", {
      height: 0,
      stagger: { amount: 0.15 },
      ease: "power3.inOut",
    });
    tl.to(".fullscreennav", { display: "none" });
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      if (isManualTransition.current) {
        // Instantly hide overlay AND reset all extra elements behind Stairs
        gsap.set(".fullscreennav", { display: "none" });
        gsap.set(".link", { opacity: 0, rotateX: 90 });
        gsap.set(".stairing", { height: 0 });
        gsap.set(".navlink-extra", { opacity: 0, y: -10 }); // FIXED: Resets extra elements completely!
      } else {
        // Close button click
        gsapAnimationReverse();
      }
    }
  }, [navOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <>
      <style>{`
        .moveX { flex-shrink: 0; }
        .moveLink { display: flex; width: max-content; }
        .group:hover .moveLink { animation: moveAnimation 10s linear infinite; }
        @keyframes moveAnimation {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div
        ref={fullScreenRef}
        id="fullscreennav"
        className="fullscreennav hidden fixed inset-0 z-50 h-screen w-screen overflow-hidden select-none"
      >
        <div className="h-screen w-full fixed inset-0 z-0">
          <div className="h-full w-full flex">
            <div className="stairing h-0 w-1/5 bg-slate-50 dark:bg-zinc-950 border-t-2 border-emerald-500"></div>
            <div className="stairing h-0 w-1/5 bg-slate-50 dark:bg-zinc-950 border-t-2 border-emerald-500"></div>
            <div className="stairing h-0 w-1/5 bg-slate-50 dark:bg-zinc-950 border-t-2 border-emerald-500"></div>
            <div className="stairing h-0 w-1/5 bg-slate-50 dark:bg-zinc-950 border-t-2 border-emerald-500"></div>
            <div className="stairing h-0 w-1/5 bg-slate-50 dark:bg-zinc-950 border-t-2 border-emerald-500"></div>
          </div>
        </div>

        <div
          ref={fullNavLinksRef}
          className="relative z-10 h-screen w-screen flex flex-col justify-between p-[3vw] lg:p-[4vw]"
        >
          {/* Top Bar */}
          <div className="navlink-extra opacity-0 translate-y-[-10px] flex w-full justify-between items-center text-slate-900 dark:text-white">
            <span className="text-[1.1vw] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              
            </span>

            <button
              onClick={() => setNavOpen(false)}
              className="group flex items-center gap-[0.8vw] cursor-pointer focus:outline-none"
              aria-label="Close Navigation"
            >
              <span className="text-[0.9vw] font-mono tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                [ CLOSE ]
              </span>
              <div className="w-[3vw] h-[3vw] rounded-full border border-slate-300 dark:border-white/20 group-hover:border-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-90 bg-slate-200/50 dark:bg-white/5">
                <span className="text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-[1.4vw] font-light leading-none">
                  ✕
                </span>
              </div>
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[3vw] items-center my-auto w-full">
            <div className="lg:col-span-8 flex flex-col space-y-[0.5vw]">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="z-50 h-[6.5vw] w-full group relative overflow-hidden cursor-pointer"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="link origin-top opacity-0 flex items-center justify-between border-b border-slate-200 dark:border-white/10 group-hover:border-emerald-500 h-full transition-colors duration-300 px-[1vw] relative"
                    style={{ transform: "rotateX(90deg)" }}
                  >
                    <div className="flex items-baseline gap-[2vw] z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="text-[1.2vw] font-mono text-emerald-600 dark:text-emerald-400">
                        {item.id}
                      </span>
                      <h2 className="text-[4.5vw] font-bold uppercase text-slate-900 dark:text-white tracking-tight">
                        {item.label}
                      </h2>
                    </div>

                    <span className="text-[2vw] text-slate-400 dark:text-slate-500 transition-opacity duration-300 group-hover:opacity-0 z-10">
                      ↗
                    </span>

                    <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center overflow-hidden z-20">
                      <div className="moveLink text-slate-950 font-bold font-mono text-[2vw] tracking-wider uppercase">
                        <div className="moveX flex items-center">
                          <span>{item.marqueeText}</span>
                          <span>{item.marqueeText}</span>
                        </div>
                        <div className="moveX flex items-center">
                          <span>{item.marqueeText}</span>
                          <span>{item.marqueeText}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="navlink-extra opacity-0 lg:col-span-4 flex flex-col justify-between h-full space-y-[3vw] border-l border-slate-200 dark:border-white/10 pl-[3vw] text-slate-700 dark:text-slate-300">
              <div>
                <p className="text-[0.85vw] font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-widest mb-[1vw]">
                  
                </p>
                <ul className="space-y-[0.8vw]">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[1.3vw] font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group"
                      >
                        <span>{social.name}</span>
                        <span className="text-[1vw] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0.2vw] transition-all">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.85vw] font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-widest mb-[0.5vw]">
                  
                </p>
                <p className="text-[1.1vw] text-slate-600 dark:text-slate-400 font-light">
                  India (IST / UTC +5:30)
                </p>
              </div>
            </div>
          </div>

          <div className="navlink-extra opacity-0 translate-y-[10px] flex justify-between items-center text-[0.9vw] font-mono text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-white/10 pt-[1.5vw]">
            <span>© {new Date().getFullYear()} Anshul Kumar Godiwar</span>
            <span className="text-emerald-600 dark:text-emerald-400/80">
              Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;