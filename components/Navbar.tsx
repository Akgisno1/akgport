import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="max-md:hidden w-full h-[10vh] flex flex-row  items-center px-8">
      <div className="flex justify-start w-[50%]"></div>
      <div className="flex justify-end w-[50%]">
        <div className=" bg-clip-text  text-transparent bg-gradient-to-r from-white to-teal-600 px-10 gap-10 flex flex-row space-x-2 items-center   font-semibold font-rubik text-xl">
          <Link href="#home" className="hover:text-white">
            Home
          </Link>
          <Link href="#skills" className="hover:text-white">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#education" className="hover:text-white ">
            Education
          </Link>
          <Link href="#contact" className="hover:text-white ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
