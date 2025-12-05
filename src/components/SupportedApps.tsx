"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

export function SupportedApps() {
  return (
    <section className="px-6 py-20 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-secondary mb-12 uppercase tracking-widest text-sm font-medium">
          Compatible avec vos outils préférés
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Premiere Pro", color: "bg-accent-purple" },
            { name: "DaVinci Resolve", color: "bg-accent-orange" },
            { name: "After Effects", color: "bg-accent-blue" },
            { name: "Navigateurs Web", color: "bg-accent-red" },
          ].map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-white/5"
            >
              <div
                className={`w-12 h-12 rounded-xl ${app.color} opacity-80 blur-xl absolute`}
              />
              <div
                className={`w-12 h-12 rounded-xl ${app.color} relative flex items-center justify-center shadow-lg`}
              >
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-white/90">{app.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
