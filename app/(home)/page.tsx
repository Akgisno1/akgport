"use client";

import Home from "@/components/Home";

import React, { useState, useEffect, useRef } from "react";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (window.innerWidth <= 768) {
      gsap.to(".TheAkg", {
        x: "15vw",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
      });
      gsap.to(".menu", {
        x: "-15vw",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
      });
      gsap.to(".Akg", {
        rotateY: 180,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    } else {
      gsap.to(".TheAkg", {
        x: "5vw",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
        scrollTrigger: {
          trigger: ".TheAkg",
          scroller: "body",

          start: "center 0%",
          toggleActions: "restart none none reverse",
        },
      });

      gsap.to(".menu", {
        x: "-5vw",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
        scrollTrigger: {
          trigger: ".menu",
          scroller: "body",
          markers: true,
          start: "center 0%",
          toggleActions: "restart none none reverse",
        },
      });

      gsap.to(".Akg", {
        rotateY: 180,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [isOpen]);

  const imageRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.to(".menubar", {
        x: "-300px",
        duration: 0.5,
        ease: "power1.out",
      });
      tl.from(".menutitles", {
        x: "300px",
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      const tl = gsap.timeline();

      tl.to(".menubar", {
        x: "0px",
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isOpen]);

  const Akg = ["A", "K", "G", "."];
  return (
    <div className="relative w-full overflow-x-hidden h-screen  overflow-y-scroll ">
      <div className="TheAkg opacity-0  fixed top-1 left-[-5vw] max-md:left-[-15vw] w-fit  z-30 p-2 flex flex-col items-center justify-center   text-white  font-rubik font-extrabold text-3xl">
        {Akg.map((e) => (
          <p className="Akg" key={e}>
            {e}
          </p>
        ))}
      </div>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="menu opacity-0 fixed top-6 right-[-5vw] max-md:right-[-15vw] w-fit  z-30 p-3  items-center justify-center rounded-full bg-gradient-to-b from-teal-200 to-teal-600"
      >
        <Image
          ref={imageRef}
          src="/ham.png"
          height={45}
          width={45}
          alt="ham"
          className="menuicon hover:cursor-pointer "
        />
      </div>
      <div className="menubar  fixed  h-[100vh] w-[300px]    top-0 right-[-300px] z-20 backdrop-blur-2xl flex flex-col">
        <div className="menutitles font-rubik text-2xl font-bold flex flex-col items-center justify-center gap-[5%] bg-clip-text w-full h-full  font-3xl   text-transparent bg-gradient-to-b from-white to-teal-500">
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="#home"
            className=" hover:text-white hover:scale-110 "
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="#skills"
            className="  hover:text-white hover:scale-110 "
          >
            Skills
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="#projects"
            className=" hover:text-white hover:scale-110 "
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="#education"
            className=" hover:text-white hover:scale-110 "
          >
            Education
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="#contact"
            className=" hover:text-white hover:scale-110 "
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="snap-start">
        <AuroraBackground showRadialGradient={true}>
          <Home />
        </AuroraBackground>
      </div>
      <div className="snap-start">
        <Skills />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
    </div>
  );
}
