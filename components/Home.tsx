import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import ShinyButton from "@/components/magicui/shiny-button";

const Home = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]  overflow-y-hidden">
      {/* <div className="w-full h-[100vh]  z-10 absolute top-0 text-[40vw] border-2 bg-indigo-950 border-white font-tiny font-extrabold text-green-500 ">
            <div className="flex flex-row">
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            </div>
            <div className="flex h-full justify-center items-center border-2 border-black"><p className="z-20 ">hello!</p></div>
            
      </div> */}
      <div id="home" className=" w-full  h-full flex flex-col z-0 ">
        <div className="">
          <Navbar />
        </div>
        <div className="h-full w-full flex flex-col justify-center overflow-hidden px-20 max-sm:px-7 text-white">
          <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
            <p className="text-8xl font-semibold  bg-clip-text  max-sm:text-6xl  font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
              Welcome to my Portfolio<span className="text-[#00CCCC]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
            <h2 className="mt-[.5rem] text-4xl max-sm:text-3xl font-oxo font-bold">
              Hello! I’m{" "}
              <span className="text-[#00CCCC] font-rubik">
                Anshul Kumar Godiwar,
              </span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
            <div className="mt-[1.5rem] text-2xl max-sm:text-xl font-mono">
              <p>
                -&gt; a passionate full-stack web developer with a knack for
                creating dynamic and responsive web applications. With expertise
                in both front-end and back-end development, I bring a holistic
                approach to building robust and user-friendly digital solutions.
                . <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
            <div className="flex flex-row max-sm:flex-col gap-4 mt-4 ">
              <ShinyButton text="Resume" />
              <ShinyButton text="Email" />
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default Home;
