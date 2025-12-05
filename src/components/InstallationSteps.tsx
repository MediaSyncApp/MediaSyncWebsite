"use client";

import { motion } from "framer-motion";
import { Download, FolderDown, ShieldCheck, Terminal } from "lucide-react";

function Step({
  number,
  title,
  description,
  icon: Icon,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  icon: any;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 md:gap-6 items-start p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-white/40 border border-white/10 px-2 py-0.5 rounded">
            {number}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function InstallationSteps() {
  return (
    <section className="px-4 md:px-6 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Installation</h2>
          <p className="text-secondary text-lg">
            Prêt à l'emploi en moins d'une minute.
          </p>
        </motion.div>

        <div className="space-y-4">
          <Step
            number="01"
            title="Télécharger"
            description="Récupérez la dernière version de MediaSync depuis la page des releases GitHub."
            icon={Download}
            delay={0.1}
          />
          <Step
            number="02"
            title="Installer"
            description="Glissez simplement l'application MediaSync dans votre dossier Applications."
            icon={FolderDown}
            delay={0.2}
          />
          <Step
            number="03"
            title="Autoriser"
            description="Au premier lancement, faites Clic droit → Ouvrir pour autoriser l'exécution sur macOS."
            icon={ShieldCheck}
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4 text-white/60">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">Pour les développeurs</span>
            </div>
            <div className="font-mono text-sm overflow-x-auto">
              <p className="text-white/40 mb-2">
                # Cloner et compiler depuis les sources
              </p>
              <div className="flex items-center gap-2 text-primary">
                <span className="select-none opacity-50">$</span>
                <span>
                  git clone https://github.com/MediaSyncApp/MediaSync.git
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
