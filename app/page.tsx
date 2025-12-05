"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Demo } from "@/components/Demo";
import { Tutorial } from "@/components/Tutorial";
import { FAQ } from "@/components/FAQ";
import { InstallationSteps } from "@/components/InstallationSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Demo />
      <Tutorial />
      <FAQ />
      <InstallationSteps />
      <Footer />
    </main>
  );
}
