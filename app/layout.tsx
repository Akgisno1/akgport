import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "@/app/scrollbar.css";
import { Analytics } from "@vercel/analytics/react";

import { Toaster } from "@/components/ui/toaster";
import Stairs from "@/components/common/Stairs";
import NavContext from "@/context/NavContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Navbar from "@/components/common/Navbar";
import FullScreenNav from "@/components/common/FullScreenNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AkgPortfolio",
  description: "",
  icons: {
    icon: "/favi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeContextProvider>
          <NavContext>
            <Stairs>
              <Navbar />
              <FullScreenNav />
              {children}

              <Toaster />
              <Analytics />
            </Stairs>
          </NavContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}