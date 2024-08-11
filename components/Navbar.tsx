import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to(".navbox", {
      y: "10vh",
      duration: 1,
      delay: 1,
    });
    tl.from(".navtitles", {
      duration: 1,

      y: "-10vh",
      opacity: 0,
    });
    tl.to(".Akg", {
      // color: "#00CCCC",
      rotateY: 180,
      duration: 1,
      stagger: 0.2,

      repeat: -1,
      yoyo: true,
    });
  }, []);

  const Akg = ["A", "K", "G", "."];

  return (
    <div className=" navbox max-md:hidden absolute top-[-10vh] w-full h-[10vh]  flex flex-row  items-center px-8 backdrop-blur-2xl">
      <div className=" flex justify-start w-[50%] text-white  font-rubik font-extrabold text-3xl">
        {Akg.map((e) => (
          <p className="Akg" key={e}>
            {e}
          </p>
        ))}
      </div>
      <div className="flex justify-end w-[50%]">
        <div className=" navtitles    bg-clip-text  text-transparent bg-gradient-to-r from-white to-teal-600 px-10 gap-10 flex flex-row space-x-2 items-center   font-semibold font-rubik text-xl">
          <Link
            to="home"
            spy={true}
            duration={500}
            smooth={true}
            className="hover:text-white hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="skills"
            spy={true}
            duration={500}
            smooth={true}
            className="hover:text-white hover:scale-110"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            duration={500}
            smooth={true}
            className="hover:text-white hover:scale-110"
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            duration={500}
            smooth={true}
            className="hover:text-white hover:scale-110"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            duration={500}
            smooth={true}
            className="hover:text-white hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
