import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col h-[100vh] w-full border-2 border-red-700 bg-blue-950"
    >
      <div className="">Skills</div>
      <div className="flex flex-row max-sm:flex-col h-[100%] ">
        <div className=" h-[100%] w-[50%] border-red-700">
          frontend backend tools
        </div>
        <div className=" h-[100%] w-[50%] border-red-700">clouds</div>
      </div>
    </div>
  );
};

export default Skills;
