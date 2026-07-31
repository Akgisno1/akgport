"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
};

export { useTheme };
