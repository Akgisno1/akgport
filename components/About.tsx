import React from "react";
import BoxReveal from "./magicui/box-reveal";
import {
  GlobeIcon,
  EnvelopeOpenIcon,
  ChatBubbleIcon,
  FileTextIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import EmailCopy from "./EmailCopy";
import { ProjectMarquee } from "./ProjectMarquee";
import ResumeViewer from "./ResumeViewer";
import Social from "./Social";

const About = () => {
  const features = [
    {
      Icon: GlobeIcon,
      name: "Some More Projects",
      background: <ProjectMarquee />,
      className:
        "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-2 max-sm:hidden",
    },
    {
      Icon: Pencil1Icon,
      name: "Education",
      background: (
        <div className="flex flex-col font-mont gap-3 h-full w-full p-3 justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-oxo font-bold">Graduation</p>
            <div className="flex flex-col">
              <p>Btech CSE, RGPV</p>
              <div className="flex flex-row justify-between items-center">
                <p>GGCT, Jabalpur</p>
                <p className="font-oxo font-bold text-xl">9 cgpa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-oxo font-bold">Intermediate</p>
            <div className="flex flex-col">
              <p>CBSE</p>
              <div className="flex flex-row justify-between items-center">
                <p>St. Aloyius School, Jabalpur</p>
                <p className="font-oxo font-bold text-xl">90.2%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-oxo font-bold">Matriculation</p>
            <div className="flex flex-col">
              <p>CBSE</p>
              <div className="flex flex-row justify-between items-center">
                <p>St. Aloyius School, Jabalpur</p>
                <p className="font-oxo font-bold text-xl">89.3%</p>
              </div>
            </div>
          </div>
        </div>
      ),
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 sm:col-start-1 sm:col-end-3 md:col-start-2 md:col-end-3",
    },
    {
      Icon: EnvelopeOpenIcon,
      name: "",
      background: <EmailCopy />,
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 sm:col-start-1 sm:col-end-2 md:col-start-1 md:col-end-2",
    },
    {
      Icon: ChatBubbleIcon,
      name: "Connect on Social",
      background: <Social />,
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 sm:col-start-2 sm:col-end-3 md:col-start-3 md:col-end-4",
    },
    {
      Icon: FileTextIcon,
      name: "",
      background: <ResumeViewer />,
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4 sm:col-start-1 sm:col-end-2 md:col-start-3 md:col-end-4",
    },
  ];

  return (
    <div className="aboutpage flex flex-col min-h-[100vh] w-full bg-blue-950 text-white py-10 px-20 max-sm:px-10 ">
      <div className="pageTitle">
        <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
          <p className="text-8xl font-semibold bg-clip-text max-sm:text-5xl font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
            About Me<span className="text-teal-400">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="flex h-full   mt-5  items-center">
        <BentoGrid className="lg:grid-rows-3 max-sm:grid-cols-1 max-sm:auto-rows-auto w-full h-full">
          {features.map((feature) => (
            <BentoCard key={feature.className} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default About;
