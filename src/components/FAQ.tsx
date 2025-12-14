"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Pourquoi Apple bloque l'ouverture de l'application ?",
    answer:
      "L'application est open-source et gratuite, je ne paie pas l'abonnement développeur Apple (99$/an) pour la signer numériquement. C'est une sécurité standard de macOS pour les applications non signées. Il faut aller dans 'Réglages Système' > 'Confidentialité et sécurité' et en bas de la page, cliquer sur 'Ouvrir quand même' pour autoriser l'ouverture de l'application.",
  },
  {
    question:
      "Pourquoi l'application demande-t-elle l'accès à l'enregistrement d'écran ?",
    answer:
      "MediaSync utilise l'API native 'ScreenCaptureKit' d'Apple pour détecter quand une application émet du son. Nous n'enregistrons ni votre écran, ni votre audio. C'est simplement la méthode requise par macOS pour analyser les flux audio système.",
  },
  {
    question: "Quelles applications de montage sont supportées ?",
    answer:
      "Actuellement : Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro et After Effects.",
  },
  {
    question: "Quelles applications de musique sont supportées ?",
    answer:
      "Actuellement : Spotify et Apple Music (Music.app). Le support web est également disponible pour les principaux sites de streaming : YouTube, Spotify, SoundCloud, Deezer, Apple Music, Artlist, Bandcamp, Tidal, Vimeo, Twitch et Dailymotion. Compatible avec Chrome, Safari, Arc, Brave, Edge et Opera.",
  },
  {
    question: "L'application est-elle gratuite ?",
    answer: (
      <span>
        Oui, MediaSync est 100% gratuit et open-source. Si vous trouvez
        l'application utile et souhaitez soutenir son développement, vous pouvez{" "}
        <a
          href="https://www.buymeacoffee.com/arnaudgct"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          m'offrir un café ☕️
        </a>
        .
      </span>
    ),
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Questions Fréquentes
        </h2>
        <p className="text-secondary text-lg">
          Tout ce que vous devez savoir avant d'installer.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-white/10"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <span className="font-medium text-lg pr-8">{faq.question}</span>
              <div
                className={`p-2 rounded-full bg-white/5 transition-colors ${
                  openIndex === index
                    ? "bg-primary/20 text-primary"
                    : "text-secondary"
                }`}
              >
                {openIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
