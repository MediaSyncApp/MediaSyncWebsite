"use client";

import { motion } from "framer-motion";
import { Download, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 pt-32 pb-20 text-center max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-secondary mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Compatible macOS 14.0+ (Sonoma)
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
      >
        Votre musique, <br />
        synchronisée avec votre montage.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-secondary mb-12 max-w-4xl leading-relaxed flex flex-wrap items-center justify-center gap-2"
      >
        MediaSync met automatiquement en pause votre musique lorsque vous lancez
        la lecture dans Premiere Pro, DaVinci Resolve ou After Effects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a
          href="https://github.com/MediaSyncApp/MediaSync/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-primary text-black font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#3BE36B] hover:shadow-[0_0_20px_rgba(48,209,89,0.4)]"
        >
          <Download className="w-5 h-5" />
          Télécharger pour macOS
        </a>
        <a
          href="https://github.com/MediaSyncApp/MediaSync"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
        >
          <Github className="w-5 h-5" />
          Voir le code source
        </a>
      </motion.div>
    </section>
  );
}
