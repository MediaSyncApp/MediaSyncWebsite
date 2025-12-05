"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Tutorial() {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Comment ça marche ?
          </h2>
          <p className="text-secondary text-lg">
            Découvrez comment MediaSync s'intègre à votre workflow en moins de 2
            minutes.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video bg-black/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Placeholder for the video - User should replace the src */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/5 group cursor-pointer">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </div>
              <p className="text-white/60 font-medium">Lire le tutoriel</p>
            </div>

            {/* 
              TODO: Remplacer par votre vidéo ou iframe YouTube
              Exemple iframe YouTube :
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VOTRE_ID_VIDEO" 
                title="MediaSync Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="absolute inset-0 w-full h-full"
              ></iframe>
              
              Exemple vidéo locale :
              <video 
                src="/videos/tuto.mp4" 
                controls 
                className="absolute inset-0 w-full h-full object-cover"
              />
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
