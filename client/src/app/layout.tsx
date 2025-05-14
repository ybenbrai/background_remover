import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClearCut - Remove Image Backgrounds Instantly",
  description: "AI-powered background remover. Fast, secure, and high-quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased bg-[color:var(--background)] text-[color:var(--brand-text)]`}
      >
        <Navbar />
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8">
          {children}
          <Toaster richColors />
        </main>
        <Footer />
      </body>
    </html>
  );
}
