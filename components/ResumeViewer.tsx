import React from "react";
import { useToast } from "@/components/ui/use-toast";
const ResumeViewer = () => {
  const resumeUrl = "/AkgResume.pdf"; // Replace with your actual resume URL
  const { toast } = useToast();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "AKG_Resume.pdf"; // Customize the download file name
    link.click();
    toast({
      title: "Resume Downloaded ",
    });
  };

  return (
    <div className=" h-full w-full flex flex-col items-center p-6 justify-center ">
      <h1 className="text-2xl  mb-4 font-mont font-bold">Checkout My Resume</h1>
      <div className=" flex flex-row gap-2">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-teal-500 bg-white text-teal-500 hover:text-white font-bold py-2 px-4 rounded"
        >
          View Resume
        </a>
        <button
          onClick={handleDownload}
          className="hover:bg-teal-500 bg-white text-teal-500 hover:text-white font-bold py-2 px-4 rounded"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeViewer;
