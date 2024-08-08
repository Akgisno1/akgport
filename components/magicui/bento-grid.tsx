"use client";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full h-full grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  Icon?: any;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-transparent [box-shadow:0_0_0_1px_rgba(0,204,204,.3),0_2px_4px_rgba(0,204,204,.3),0_12px_24px_rgba(0,204,204,.3)]",
      // dark styles
      "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(0,204,204,.3)] dark:[box-shadow:0_-20px_80px_-20px_#00CCCC1f_inset]",
      className
    )}
  >
    <div className="h-full w-full flex justify-center items-center">
      {background}
    </div>
    {window.innerWidth > 768 && (
      <div className="absolute backdrop-blur-sm pointer-events-none z-10 w-full items-center bottom-0 flex transform-gpu flex-row justify-between gap-1 p-4 transition-all duration-300 group-hover:translate-y-36">
        {name && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-[#00CCCC] transition-all duration-300 ease-in-out " />
        )}
        <h3 className="text-xl font-semibold dark:text-[#00CCCC]">{name}</h3>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#00CCCC]/[.03] " />
  </div>
);

export { BentoCard, BentoGrid };
