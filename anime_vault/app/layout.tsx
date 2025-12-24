import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";
import Search from "@/components/Search";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault - Home Page",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="flex flex-1 flex-col min-h-screen w-full bg-[#0F1117]">
          <Hero />
          <Search />
          <div className="flex flex-1 flex-col w-full min-h-[35vh]">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
