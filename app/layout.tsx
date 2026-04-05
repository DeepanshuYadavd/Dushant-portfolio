import type { Metadata } from "next";
import "./globals.css";
import { Sora, Playfair_Display } from "next/font/google";
import { Syne } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syne",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dushant | Video Editor",
  description: "Cinematic Video Editor Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${playfair.variable}`}>
      <body className="bg-black text-white">
        <Navbar />
        <main className="flex-1 mt-0 md:!mt-[6rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
