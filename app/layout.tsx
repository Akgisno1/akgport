import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./scrollbar.css";
import "./snap.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
