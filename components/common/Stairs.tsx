"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef } from "react";
import { TransitionContext } from "@/context/NavContext";

const Stairs = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  const { stairTriggerRef, isManualTransition } = useContext(TransitionContext);

  const stairParentRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef(true);

  // Register cover trigger for manual link navigation
  useEffect(() => {
    stairTriggerRef.current = (onCovered: () => void) => {
      gsap.killTweensOf(".stair");
      const tl = gsap.timeline();

      tl.set(stairParentRef.current, {
        display: "block",
        pointerEvents: "auto", // Block user clicks during cover animation
      });
      tl.set(".stair", { height: "0%", y: "0%" });

      tl.to(".stair", {
        height: "100%",
        duration: 0.4,
        stagger: { amount: -0.15 },
        ease: "power2.inOut",
        onComplete: () => {
          onCovered();
        },
      });
    };
  }, [stairTriggerRef]);

  useGSAP(
    () => {
      gsap.killTweensOf(".stair");

      if (isInitialLoad.current) {
        // 1. INITIAL SITE LOAD:
        // Pure CSS has already covered the viewport instantly on HTML paint.
        // Slide stairs away to reveal the initial page.
        isInitialLoad.current = false;

        const tl = gsap.timeline();
        tl.to(".stair", {
          y: "100%",
          duration: 0.5,
          delay: 0.1, // Buffer while hydration finishes cleanly
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(stairParentRef.current, {
              display: "none",
              pointerEvents: "none",
            });
            gsap.set(".stair", { height: "0%", y: "0%" });
          },
        });
      } else if (isManualTransition.current) {
        // 2. MANUAL LINK CLICK NAVIGATION:
        // Screen is covered -> slide stairs away to reveal new route
        const tl = gsap.timeline();

        tl.to(".stair", {
          y: "100%",
          duration: 0.45,
          delay: 0.1,
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(stairParentRef.current, {
              display: "none",
              pointerEvents: "none",
            });
            gsap.set(".stair", { height: "0%", y: "0%" });
            isManualTransition.current = false;
          },
        });
      } else {
        // 3. BROWSER BACK / FORWARD BUTTONS:
        // Run full cover -> reveal sequence
        const tl = gsap.timeline();

        tl.set(stairParentRef.current, {
          display: "block",
          pointerEvents: "auto", // Lock UI interaction
        });
        tl.set(".stair", { height: "0%", y: "0%" });

        tl.to(".stair", {
          height: "100%",
          duration: 0.35,
          stagger: { amount: -0.15 },
          ease: "power2.inOut",
        });

        tl.to(".stair", {
          y: "100%",
          duration: 0.45,
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
        });

        tl.to(stairParentRef.current, {
          display: "none",
          pointerEvents: "none",
          onComplete: () => {
            gsap.set(".stair", { height: "0%", y: "0%" });
          },
        });
      }
    },
    { dependencies: [currentPath] }
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 
        Default visible overlay.
        Pure CSS covers viewport before JS/GSAP hydration executes.
      */}
      <div
        ref={stairParentRef}
        className="fixed inset-0 z-[100] h-dvh w-screen pointer-events-auto"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-emerald-500 will-change-transform"></div>
          <div className="stair h-full w-1/5 bg-emerald-500 will-change-transform"></div>
          <div className="stair h-full w-1/5 bg-emerald-500 will-change-transform"></div>
          <div className="stair h-full w-1/5 bg-emerald-500 will-change-transform"></div>
          <div className="stair h-full w-1/5 bg-emerald-500 will-change-transform"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;