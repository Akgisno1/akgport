"use client";
import React, { useState } from "react";

import BoxReveal from "./magicui/box-reveal";
import IconCloud from "@/components/magicui/icon-cloud";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Skills = () => {
  const [tab, setTab] = useState("frontend");
  const frontend = {
    names: [
      "TypeScript",
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
      "Sass",
      "Chakra UI",
      "Expo",
      "GreenSock",
      "Figma",
      "shadcn/ui",
    ],
    icons: [
      "typescript",
      "javascript",
      "react",
      "html5",
      "css3",
      "nextdotjs",
      "tailwindcss",
      "bootstrap",
      "sass",
      "chakraui",
      "expo",
      "greensock",
      "figma",
      "shadcnui",
    ],
  };

  const backend = {
    names: [
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "MongoDB",
      "Mongoose",
      "Appwrite",
      "MySQL",
      "Socket.io",
    ],
    icons: [
      "nextdotjs",
      "nodedotjs",
      "express",
      "prisma",
      "mongodb",
      "mongoose",
      "appwrite",
      "mysql",
      "socketdotio",
    ],
  };

  const others = {
    names: [
      "Render",
      "Vercel",
      "Docker",
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Clerk",
      "Zod",
      "Axios",
      "Sentry",
    ],
    icons: [
      "render",
      "vercel",
      "docker",
      "git",
      "github",
      "visualstudiocode",
      "clerk",
      "zod",
      "axios",
      "sentry",
    ],
  };
  useGSAP(() => {
    gsap.from(".skillnames", {
      opacity: 0,
      y: 100,
      delay: 0.2,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, [tab]);

  const [show, setShow] = useState(frontend);

  return (
    <div className="flex flex-col h-[100vh] w-full bg-blue-950 text-white py-10 px-20 max-sm:p-10">
      <div className="relative flex flex-row max-sm:flex-col h-[100%] py-10">
        <div className="h-[100%] w-[60%] max-sm:w-[100%] flex flex-col items-start max-sm:absolute max-sm:z-10  ">
          <div className="pageTitle">
            <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
              <p className="text-8xl font-semibold bg-clip-text max-sm:text-6xl font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
                Skills<span className="text-[#00CCCC]">.</span>
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-row gap-7 text-white text-3xl max-sm:text-2xl max-sm:gap-3 font-mont font-bold py-2 mt-10">
            <div
              className={`${tab === "frontend" ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300" : ""} cursor-pointer`}
              onClick={() => {
                setTab("frontend");
                setShow(frontend);
              }}
            >
              FrontEnd
            </div>

            <div
              className={`${tab === "backend" ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300" : ""} cursor-pointer`}
              onClick={() => {
                setTab("backend");
                setShow(backend);
              }}
            >
              BackEnd
            </div>

            <div
              className={`${tab === "other" ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300" : ""} cursor-pointer`}
              onClick={() => {
                setTab("other");
                setShow(others);
              }}
            >
              Others
            </div>
          </div>
          <div className="  w-full flex flex-wrap gap-6  mt-10 max-sm:justify-center max-sm:items-center font-oxo ">
            {show.names.map((name, i) => (
              <p
                key={i}
                className="skillnames  py-3 items-center text-2xl max-sm:xl  hover:glow-text"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
        <div className="h-[100%] w-[40%] max-sm:w-[100%] max-sm:opacity-50 max-sm:pointer-events-none justify-centermax-sm:items-end">
          <div className=" flex h-full w-full max-w-[32rem] items-center  ">
            <IconCloud iconSlugs={show.icons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
