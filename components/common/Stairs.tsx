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

  // Register cover trigger for link navigation
  useEffect(() => {
    stairTriggerRef.current = (onCovered: () => void) => {
      gsap.killTweensOf(".stair");
      const tl = gsap.timeline();

      tl.set(stairParentRef.current, { display: "block" });
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
        // CSS has already covered the viewport with h-full stairs instantly on HTML paint.
        // We only slide stairs away to reveal the page.
        isInitialLoad.current = false;

        const tl = gsap.timeline();
        tl.to(".stair", {
          y: "100%",
          duration: 0.5,
          delay: 0.1, // Smooth buffer so hydration finishes cleanly behind cover
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(stairParentRef.current, { display: "none" });
            gsap.set(".stair", { height: "0%", y: "0%" });
          },
        });
      } else if (isManualTransition.current) {
        // 2. MANUAL LINK CLICK NAVIGATION:
        // Screen is already covered via navigateTo -> slide stairs away to reveal new route
        const tl = gsap.timeline();

        tl.to(".stair", {
          y: "100%",
          duration: 0.45,
          delay: 0.1,
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(stairParentRef.current, { display: "none" });
            gsap.set(".stair", { height: "0%", y: "0%" });
            isManualTransition.current = false;
          },
        });
      } else {
        // 3. BROWSER BACK / FORWARD BUTTONS:
        // Run full cover -> reveal sequence
        const tl = gsap.timeline();

        tl.set(stairParentRef.current, { display: "block" });
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
        Default visible (no 'hidden' class) and '.stair' elements set to 'h-full'.
        This ensures pure CSS covers the viewport before JS/GSAP executes.
      */}
      <div
        ref={stairParentRef}
        className="fixed inset-0 z-[100] h-screen w-screen pointer-events-none"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5  bg-emerald-500"></div>
          <div className="stair h-full w-1/5  bg-emerald-500"></div>
          <div className="stair h-full w-1/5  bg-emerald-500"></div>
          <div className="stair h-full w-1/5  bg-emerald-500"></div>
          <div className="stair h-full w-1/5  bg-emerald-500"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;