import React from "react";
import BoxReveal from "./magicui/box-reveal";

const Contact = () => {
  return (
    <div className="aboutpage flex flex-col h-[100vh] w-full bg-blue-950 text-white py-10 px-20 max-sm:p-10">
      <div className="pageTitle">
        <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
          <p className="text-8xl font-semibold bg-clip-text max-sm:text-6xl font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
            Contact<span className="text-teal-400">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="flex flex-col h-full w-full"></div>
    </div>
  );
};

export default Contact;
