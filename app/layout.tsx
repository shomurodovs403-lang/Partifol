import type { Metadata } from "next";
import { JetBrains_Mono, Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import { profileData } from "@/content/profile";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  subsets: ['latin'],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: "--font-geist-mono",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.role}`,
  description: profileData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Global Fixed Background Elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-bg-base">
          {/* Atmospheric gradient mesh orbs (Lime, Cyan, Violet, Emerald) */}
          <div className="ambient-glow ambient-glow-1" />
          <div className="ambient-glow ambient-glow-2" />
          <div className="ambient-glow ambient-glow-3" />
          <div className="ambient-glow ambient-glow-4" />

          {/* Refined Dot Matrix with radial fade mask */}
          <div className="absolute inset-0 bg-dot-matrix opacity-40" />

          {/* Soft vignette finish */}
          <div className="absolute inset-0 bg-vignette" />
        </div>

        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
