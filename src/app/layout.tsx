import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavyasreekumar.dev"),
  title: "Bhavya Sreekumar — Portfolio // AI & CSE Student",
  description:
    "Architectural editorial portfolio of Bhavya Sreekumar, First-year B.Tech CSE (Artificial Intelligence) student at Thejus Engineering College, Thrissur, Kerala. AI student. Builder. Curious by default.",
  keywords: [
    "Bhavya Sreekumar",
    "Bhavya",
    "Artificial Intelligence",
    "Machine Learning",
    "Thejus Engineering College",
    "CSE AI",
    "Thrissur",
    "Kerala",
    "Portfolio",
    "Swiss Minimalist",
    "Editorial Design",
  ],
  authors: [{ name: "Bhavya Sreekumar" }],
  creator: "Bhavya Sreekumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavyasreekumar.dev",
    title: "Bhavya Sreekumar — AI & CSE Student Portfolio",
    description:
      "Swiss minimalist editorial monograph documenting engineering pursuits, algorithmic experiments, and selected computational works.",
    siteName: "Bhavya Sreekumar Portfolio",
    images: [
      {
        url: "/images/hero-sculpture.svg",
        width: 1200,
        height: 630,
        alt: "Bhavya Sreekumar — Architectural Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavya Sreekumar — AI & CSE Student Portfolio",
    description:
      "AI student. Builder. Curious by default. First-year B.Tech CSE (Artificial Intelligence) at Thejus Engineering College, Thrissur.",
    images: ["/images/hero-sculpture.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F2E2" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0B08" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} antialiased`}>
      <body className="min-h-screen golden-page-bg text-[#1A150B] dark:text-[#FDF9F0] selection:bg-[#D4AF37] selection:text-black font-sans">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="w-full relative z-10 flex flex-col items-center">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
