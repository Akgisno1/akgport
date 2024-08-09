import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from "@/components/ui/use-toast";
export default function EmailCopy() {
  // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied
  const { toast } = useToast();
  const onCopyText = () => {
    setCopyStatus(true);
    toast({
      title: "Email Copied Successfully",
    });
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };
  const email = "anshulkumargodiwar2001@gmail.com";
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-full w-full font-mont py-2">
      <h2 className="font-bold text-2xl max-sm:text-xl">
        Start a Project With Me{" "}
      </h2>
      <CopyToClipboard text={email} onCopy={onCopyText}>
        <button className="bg-teal-500 justify-center flex hover:bg-white hover:text-teal-500 text-white font-bold py-2 px-4 rounded">
          {copyStatus ? <p>Copied to clipboard!</p> : <p>Copy my Email</p>}
        </button>
      </CopyToClipboard>
    </div>
  );
}
