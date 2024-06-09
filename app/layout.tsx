import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AkgPortfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      
            {children}
            
            
            </body>
          
      
    </html>
  );
}
