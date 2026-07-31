"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type NavbarContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
type NavbarColorContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const NavbarContext = createContext<NavbarContextType>([
  false,
  () => {},
]);

export const NavbarColorContext = createContext<NavbarColorContextType>([
  "white",
  () => {},
]);

type TransitionContextType = {
  navigateTo: (href: string) => void;
  isManualTransition: React.MutableRefObject<boolean>;
  stairTriggerRef: React.MutableRefObject<((onCovered: () => void) => void) | null>;
};

export const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isManualTransition: { current: false },
  stairTriggerRef: { current: null },
});

export const usePageNavigate = () => {
  const { navigateTo } = useContext(TransitionContext);
  return navigateTo;
};

// Reusable Transition Link component for Home page & anywhere else
export const TransitionLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const navigateTo = usePageNavigate();
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
      }}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

const NavContext = ({ children }: { children: React.ReactNode }) => {
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);

  const isManualTransition = useRef(false);
  const stairTriggerRef = useRef<((onCovered: () => void) => void) | null>(null);

  const router = useRouter();
  const locate = usePathname();

  useEffect(() => {
    if (locate === "/projects" || locate === "/agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate]);

  const navigateTo = (href: string) => {
    if (href === locate) {
      setNavOpen(false);
      return;
    }

    isManualTransition.current = true;

    if (stairTriggerRef.current) {
      stairTriggerRef.current(() => {
        // Stairs are now 100% covering screen
        setNavOpen(false);
        
        // 100ms buffer guarantees Next.js switches route behind full stair cover
        setTimeout(() => {
          router.push(href);
        }, 100);
      });
    } else {
      setNavOpen(false);
      router.push(href);
    }
  };

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        <TransitionContext.Provider
          value={{ navigateTo, isManualTransition, stairTriggerRef }}
        >
          {children}
        </TransitionContext.Provider>
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;