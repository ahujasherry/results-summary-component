import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ecf2ff",
};

export const metadata: Metadata = {
  title: "Frontend Mentor - Results summary component",
  description:
    "This website is a solution for the Results summary component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: [
    "Frontend Mentor",
    "Results summary component",
    "Results summary component solution",
    "Results summary component challenge",
    "Results summary component challenge solution",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Arda Eker",
  ],
  metadataBase: new URL(
    "https://results-summary-component-gamma-blue.vercel.app/"
  ),
  openGraph: {
    title: "Frontend Mentor - Results summary component",
    description:
      "This website is a solution to the Results summary component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.",
    siteName: "Frontend Mentor - Results summary component",
    images: [
      {
        url: "open-graph-image.png",
      },
    ],
  },
  alternates: {
    canonical: "https://results-summary-component-gamma-blue.vercel.app",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} font-hankenGrotesk  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
