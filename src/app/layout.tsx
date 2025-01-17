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
  title: "Results summary component",
  description:
    "This website is a solution. It is built with Next.js and Tailwind CSS.",
  authors: {
    name: "Sherry Ahuja",
    url: "https://github.com/ahujasherry",
  },
  keywords: [
    "Sherry Ahuja",
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
    "https://results-summary-component-dun-three.vercel.app/"
  ),
  openGraph: {
    title: "Results summary component",
    description:
      "This website is a solution . It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Sherry Ahuja.",
    siteName: "Frontend Mentor - Results summary component",
    images: [
      {
        url: "open-graph-image.png",
      },
    ],
  },
  alternates: {
    canonical: "https://results-summary-component-dun-three.vercel.app/",
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
