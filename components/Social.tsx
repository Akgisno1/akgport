import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex flex-col items-center justify-center font-mont">
      <div className="w-full p-3 flex flex-row gap-3 justify-between items-center">
        <h2 className="font-bold text-2xl">Follow me on LinkedIn</h2>
        <Link
          href="https://www.linkedin.com/in/anshul-kumar-godiwar-885b0b268"
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon className="h-12 w-12 origin-left transform-gpu hover:scale-110 hover:text-[#00CCCC] transition-all duration-300 ease-in-out " />
          </a>
        </Link>
      </div>
      <div className="w-full p-3 flex flex-row gap-3 justify-between items-center">
        <h2 className="font-bold text-2xl">Source Code on Github</h2>
        <Link href="https://github.com/Akgisno1" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="h-12 w-12 origin-left transform-gpu hover:scale-110 hover:text-[#00CCCC] transition-all duration-300 ease-in-out " />
          </a>
        </Link>
      </div>
      <div className="w-full p-3 flex flex-row gap-3 justify-between items-center">
        <h2 className="font-bold text-2xl">Message me on Insta</h2>
        <Link
          href="https://www.instagram.com/the.guy_who.asked/"
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <InstagramLogoIcon className="h-12 w-12 origin-left transform-gpu hover:scale-110 hover:text-[#00CCCC] transition-all duration-300 ease-in-out " />
          </a>
        </Link>
      </div>
      {/* <div className="w-full p-3 flex flex-row gap-3 justify-between items-center">
        <h2 className="font-bold text-2xl">Lets Start a Project Together</h2>
        <LinkedInLogoIcon className="h-12 w-12 origin-left transform-gpu hover:scale-110 hover:text-[#00CCCC] transition-all duration-300 ease-in-out " />
      </div> */}
    </div>
  );
};

export default Social;
