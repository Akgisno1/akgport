import React from "react";

import BoxReveal from "./magicui/box-reveal";
import { MagicCard } from "./magicui/magic-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.to(".projectspage", {
      backgroundColor: "black",
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".projectspage",
        scroller: "body",
        start: "center 100%",
        end: "center -100%",
        toggleActions: "restart reverse restart reverse",
      },
    });
    if (window.innerWidth < 640) {
      gsap.to(".projects", {
        x: "-75%",
        scrollTrigger: {
          trigger: ".projectspage",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });
    } else {
      gsap.to(".projects", {
        x: "-50%",
        scrollTrigger: {
          trigger: ".projectspage",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div className="projectspage flex flex-col h-[100vh] overflow-x-hidden overflow-hidden bg-blue-950 text-gray-700">
      <div className="pageTitle my-5 ml-20 max-sm:ml-10">
        <BoxReveal boxColor={"white"} duration={0.5}>
          <p className="text-8xl font-semibold bg-clip-text max-sm:text-6xl font-oxo text-transparent bg-gradient-to-r from-white to-gray-500">
            Projects<span className="text-white">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="projects flex flex-row pl-20 pb-5 pr-5 max-sm:pl-5 w-[200vw] max-sm:w-[400vw] items-center max-sm:items-center h-[80%] gap-10">
        <div className="project1 w-[25%] h-full">
          <MagicCard>
            <div className="relative w-full h-full p-5 rounded-3xl cursor-pointer flex flex-col shadow-2xl">
              <div className="flex flex-row gap-2 h-[47%] max-sm:h-[35%] w-fit mb-3 overflow-hidden justify-center orange-filter">
                <img
                  src="/QueueDesk.PNG"
                  alt="QueueDesk"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <img
                  src="/QueueMob.PNG"
                  alt="QueueMob"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out max-sm:hidden"
                />
              </div>
              <div className="justify-between flex flex-col h-1/2 max-sm:h-full">
                <h1 className="font-oxo text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-in-out">
                  QueueOverFlow
                </h1>
                <p className="font-mont text-sm font-bold">
                  This is a FULL-STACK project using{" "}
                  <u>Next.js Server Actions</u> which features secure{" "}
                  <u>Clerk</u> authentication, a user <u>reputation</u> system,
                  and a unique global search. Users can ask, edit, delete, and
                  answer questions, including custom text and code. It supports{" "}
                  <u>responsive</u> design for PCs, tablets, and mobile devices.
                  The platform offers advanced search and filtering, with{" "}
                  <u>ChatGPT API</u> integration for generating answers.
                </p>
                <div className="flex flex-wrap">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    React
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Next.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    MongoDB
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Tailwind CSS
                  </span>
                </div>
                <Link href="https://queue-over-flow.vercel.app/" legacyBehavior>
                  <a
                    className="bg-gradient-to-r from-white to-gray-300 hover:text-white text-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-black font-bold py-2 px-4 rounded font-mont w-1/3 mt-2 flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CheckOut Project
                  </a>
                </Link>
              </div>
            </div>
          </MagicCard>
        </div>

        <div className="project2 w-[25%] h-full">
          <MagicCard>
            <div className="relative w-full h-full p-5 rounded-3xl cursor-pointer flex flex-col shadow-2xl">
              <div className="flex flex-row gap-2 h-[47%] max-sm:h-[35%] w-fit mb-3 overflow-hidden justify-center orange-filter">
                <img
                  src="/RentifyDesk.PNG"
                  alt="RentifyDesk"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <img
                  src="/RentifyMob.PNG"
                  alt="RentifyMob"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out max-sm:hidden"
                />
              </div>
              <div className="justify-between flex flex-col h-1/2 max-sm:h-full">
                <h1 className="font-oxo text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-in-out">
                  RENTIFY
                </h1>
                <p className="font-mont text-sm font-bold">
                  This is a <u>MERN-STACK</u> project using <u>Socket.io</u> for
                  real-time <u>chatting</u> with users, get chat{" "}
                  <u>notifications</u> and user authentication with{" "}
                  <u>JWT tokens</u>. <u>Leaflet maps</u> for displaying
                  properties. The platform allows users to{" "}
                  <u>search and filter</u> properties based on various criteria,
                  users can post, save, and view properties across the world.
                </p>
                <div className="flex flex-wrap">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    React
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Express.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    MongoDB
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Sass
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Socket.io
                  </span>
                </div>
                <Link href="https://rentify-8r7z.onrender.com/" legacyBehavior>
                  <a
                    className="bg-gradient-to-r from-white to-gray-300 hover:text-white text-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-black font-bold py-2 px-4 rounded font-mont w-1/3 mt-2 flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CheckOut Project
                  </a>
                </Link>
              </div>
            </div>
          </MagicCard>
        </div>

        <div className="project3 w-[25%] h-full">
          <MagicCard>
            <div className="relative w-full h-full p-5 rounded-3xl cursor-pointer flex flex-col shadow-2xl">
              <div className="flex flex-row gap-2 h-[47%] max-sm:h-[35%] w-fit mb-3 overflow-hidden justify-center orange-filter">
                <img
                  src="/AppleDesk.PNG"
                  alt="AppleDesk"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <img
                  src="/AppleMob.PNG"
                  alt="AppleMob"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out max-sm:hidden"
                />
              </div>
              <div className="justify-between flex flex-col h-1/2 max-sm:h-full">
                <h1 className="font-oxo text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-in-out">
                  Iphone Landing Page
                </h1>
                <p className="font-mont text-sm font-bold">
                  This is a responsive landing page for Apple iPhone 15 Pro,
                  featuring interactive <u>3D iPhone models</u> using{" "}
                  <u>Three.js</u> that can be customized. The page incorporates{" "}
                  <u>GSAP animations</u> and <u>scroll triggers</u> to create a{" "}
                  smooth and engaging user experience. It highlights Apple
                  technology with dynamic visuals and transitions that work
                  seamlessly across all devices.
                </p>
                <div className="flex flex-wrap">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    React
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    GSAP
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    three.js
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Tailwind CSS
                  </span>
                </div>
                <Link href="https://apple-ashy.vercel.app/" legacyBehavior>
                  <a
                    className="bg-gradient-to-r from-white to-gray-300 hover:text-white text-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-black font-bold py-2 px-4 rounded font-mont w-1/3 mt-2 flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CheckOut Project
                  </a>
                </Link>
              </div>
            </div>
          </MagicCard>
        </div>

        <div className="project4 w-[25%] h-full">
          <MagicCard>
            <div className="relative w-full h-full p-5 rounded-3xl cursor-pointer flex flex-col shadow-2xl">
              <div className="flex flex-row gap-2 h-[47%] w-fit mb-3 overflow-hidden justify-center ">
                <img
                  src="/aura4.PNG"
                  alt="aura4"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <img
                  src="/aura1.PNG"
                  alt="aura1"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out max-sm:hidden"
                />
                <img
                  src="/aura2.PNG"
                  alt="aura2"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <img
                  src="/aura3.PNG"
                  alt="aura3"
                  className="rounded-xl object-fit grayscale hover:grayscale-0 transition-all duration-300 ease-in-out max-sm:hidden"
                />
              </div>
              <div className="justify-between flex flex-col h-1/2">
                <h1 className="font-oxo text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-in-out">
                  Aura
                </h1>
                <p className="font-mont text-sm font-bold">
                  This is a feature-rich <u>FULL-STACK</u> application built
                  with React Native, utilizing <u>Appwrite</u> for managing user
                  data and authentication. The app allows users to{" "}
                  <u>post AI-generated images and videos</u> with their prompts
                  that can be liked and bookmarked by others. It also features a{" "}
                  <u>Top Posts</u> section that highlights the most popular
                  content based on user engagement. Designed with{" "}
                  <u>Expo Router</u> for smooth navigation and <u>NativeWind</u>{" "}
                  for optimized styling.
                </p>
                <div className="flex flex-wrap">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    React Native
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Expo
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    NativeWind
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Appwrite
                  </span>
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
