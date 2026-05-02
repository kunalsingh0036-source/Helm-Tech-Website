import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainOverlay } from "@/components/GrainOverlay";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helm Tech — Websites & AI Agents That Grow Your Business",
  description:
    "We build industry-leading websites and AI-powered communication agents that drive revenue, automate customer engagement, and scale your business 24/7.",
  keywords: [
    "web development",
    "AI agents",
    "business websites",
    "digital presence",
    "Helm Tech",
    "Shotgun AI",
  ],
  openGraph: {
    title: "Helm Tech — Websites & AI Agents That Grow Your Business",
    description:
      "Industry-leading websites and AI agents that generate revenue while you sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <SmoothScroll>
          <LoadingScreen />
          <CustomCursor />
          <GrainOverlay />
          <Navigation />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
