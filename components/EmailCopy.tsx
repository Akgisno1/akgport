"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ShinyButton from "./magicui/shiny-button";
export default function EmailCopy() {
  // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };
  const email = "anshulkumargodiwar2001@gmail.com";
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full w-full font-mont">
      <h2 className="font-bold text-2xl">Lets Start a Project Together</h2>
      <CopyToClipboard text={email} onCopy={onCopyText}>
        <ShinyButton
          text={copyStatus ? "Copied to clipboard!" : "Copy my Email"}
        />
      </CopyToClipboard>
    </div>
  );
}
