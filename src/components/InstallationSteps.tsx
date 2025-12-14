"use client";

import { motion } from "framer-motion";
import {
  Download,
  FolderDown,
  ShieldCheck,
  Terminal,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import { useState, useEffect } from "react";

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
  const [latestRelease, setLatestRelease] = useState<{
    version: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/MediaSyncApp/MediaSync/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date(data.published_at);
        const formattedDate = date.toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        setLatestRelease({
          version: data.tag_name,
          date: formattedDate,
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération de la dernière version:",
          error
        );
      });
  }, []);

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
            description="Au premier lancement, aller dans 'Réglages Système' > 'Confidentialité et sécurité' et en bas de la page, cliquer sur 'Ouvrir quand même' pour autoriser l'ouverture de l'application."
            icon={ShieldCheck}
            delay={0.3}
          />
        </div>

        {/* Section Mise à jour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Mise à jour</h2>
            <p className="text-secondary text-lg">
              Comment mettre à jour MediaSync vers la dernière version.
            </p>
          </div>

          {/* Dernière version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Dernière version disponible</h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">
                  {latestRelease?.version || "v1.1.0"}
                </span>
                <span className="text-sm text-white/40">•</span>
                <span className="text-white/60">
                  {latestRelease?.date || "14 décembre 2025"}
                </span>
              </div>
              <a
                href="https://github.com/MediaSyncApp/MediaSync/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-sm font-medium text-black"
              >
                <Download className="w-4 h-4" />
                Télécharger la dernière version
              </a>
            </div>
          </motion.div>

          {/* Instructions de mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20"
          >
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-500">
                  Important : Suppression des autorisations
                </h3>
                <p className="text-white/80 mb-4">
                  Avant d'installer la nouvelle version, il est essentiel de
                  supprimer les autorisations de l'ancienne version pour éviter
                  les conflits.
                </p>
              </div>
            </div>

            <div className="space-y-3 pl-8">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  1
                </span>
                <p className="text-white/80">
                  Ouvrez{" "}
                  <strong className="text-white">Réglages Système</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  2
                </span>
                <p className="text-white/80">
                  Allez dans{" "}
                  <strong className="text-white">
                    Confidentialité et sécurité
                  </strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  3
                </span>
                <p className="text-white/80">
                  Cliquez sur{" "}
                  <strong className="text-white">Enregistrement d'écran</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  4
                </span>
                <p className="text-white/80">
                  Supprimez <strong className="text-white">MediaSync</strong> de
                  la liste (clic sur le{" "}
                  <strong className="text-white">-</strong>)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  5
                </span>
                <p className="text-white/80">
                  Lancez la nouvelle version de MediaSync
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-bold">
                  6
                </span>
                <p className="text-white/80">
                  Autorisez à nouveau les permissions demandées
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
              <p className="text-sm text-white/60">
                <strong className="text-amber-500">💡 Pourquoi ?</strong> Les
                autorisations de l'ancienne version peuvent entrer en conflit
                avec la nouvelle, causant des dysfonctionnements. Cette
                procédure garantit un fonctionnement optimal de MediaSync.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
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
