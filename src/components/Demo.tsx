"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music, SkipForward, SkipBack } from "lucide-react";

export function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [status, setStatus] = useState("Aucune musique en cours");

  // Sync video element with state
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => setIsVideoPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  // Sync audio element with state
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(() => setIsMusicPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Logic simulation
  useEffect(() => {
    if (isVideoPlaying) {
      setStatus("Audio Détecté");
      setIsMusicPlaying(false);
    } else {
      // Video stopped.
      if (isPlayerActive) {
        setStatus("En attente...");
        const timer = setTimeout(() => {
          setStatus("Surveillance");
          setIsMusicPlaying(true);
        }, 1500);
        return () => clearTimeout(timer);
      } else {
        setStatus("Aucune musique en cours");
        setIsMusicPlaying(false);
      }
    }
  }, [isVideoPlaying, isPlayerActive]);

  const toggleMusic = () => {
    if (!hasInteracted) setHasInteracted(true);
    const newState = !isPlayerActive;
    setIsPlayerActive(newState);

    if (newState) {
      // User wants to play music
      if (!isVideoPlaying) {
        setIsMusicPlaying(true);
      }
    } else {
      // User wants to pause music
      setIsMusicPlaying(false);
    }
  };

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden flex flex-col items-center">
      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lo-fi-x-hip-hop-111874.mp3"
        loop
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Démonstration Interactive
          </h2>
          <p className="text-secondary text-lg">
            Lancez la musique, puis la vidéo pour voir MediaSync en action.
          </p>
        </div>

        {/* Desktop Container */}
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 pt-12 md:p-12 min-h-[auto] md:min-h-[600px] overflow-hidden shadow-2xl backdrop-blur-sm flex items-center justify-center w-full">
          {/* Wallpaper/Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          {/* Windows Layout */}
          <div className="relative w-full h-full flex flex-col md:flex-row gap-6 items-center justify-center z-10">
            {/* 3. MediaSync Status (Floating on Desktop, Static on Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="static w-full mb-6 md:absolute md:top-6 md:right-6 md:w-auto md:mb-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center justify-center md:justify-start gap-4 shadow-2xl z-30"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  isVideoPlaying
                    ? "bg-primary animate-pulse shadow-[0_0_10px_#30D159]"
                    : "bg-white/20"
                }`}
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                  MediaSync
                </span>
                <span
                  className={`text-sm font-medium ${
                    isVideoPlaying ? "text-primary" : "text-white"
                  }`}
                >
                  {status}
                </span>
              </div>
            </motion.div>

            {/* 1. Music Player Window (Spotify-ish) */}
            <div className="relative flex flex-col items-center w-full md:w-auto">
              <motion.div
                animate={{
                  scale: isMusicPlaying ? 1.02 : 0.98,
                  opacity: isMusicPlaying ? 1 : 0.8,
                }}
                className="w-full max-w-[320px] sm:max-w-lg md:w-64 bg-[#121212] rounded-xl border border-white/10 shadow-xl overflow-hidden flex flex-col relative z-10 shrink-0 transition-all"
              >
                {/* Header */}
                <div className="h-8 bg-[#181818] flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col sm:flex-row md:flex-col items-center gap-3 sm:gap-6 md:gap-4">
                  <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden group shrink-0">
                    <img
                      src="https://artlist-albums.imgix.net/images/997747_C1_-_Carly_Gibert_-_2.5K.jpg?auto=format&fit=max&w=1024&q=75"
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                    {/* Play Overlay on Cover */}
                    <div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={toggleMusic}
                    >
                      {isPlayerActive && !isVideoPlaying ? (
                        <Pause className="w-8 h-8 text-white fill-current" />
                      ) : (
                        <Play className="w-8 h-8 text-white fill-current" />
                      )}
                    </div>
                  </div>

                  {/* Info & Controls Wrapper */}
                  <div className="flex flex-col items-center sm:items-start md:items-center w-full gap-2 sm:gap-2 md:gap-4">
                    <div className="text-center sm:text-left md:text-center w-full">
                      <div className="font-bold text-white text-lg sm:text-base md:text-sm">
                        Lose It
                      </div>
                      <div className="text-sm sm:text-xs text-gray-400">CG</div>
                    </div>
                    {/* Controls */}
                    <div className="flex items-center gap-6 sm:gap-4 text-white">
                      <SkipBack className="w-6 h-6 sm:w-4 sm:h-4 text-gray-400" />
                      <div
                        className={`w-14 h-14 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:scale-105 active:scale-95 ${
                          isPlayerActive ? "bg-white text-black" : "bg-white/10"
                        }`}
                        onClick={toggleMusic}
                      >
                        {isPlayerActive && !isVideoPlaying ? (
                          <Pause className="w-6 h-6 sm:w-4 sm:h-4 fill-current" />
                        ) : (
                          <Play className="w-6 h-6 sm:w-4 sm:h-4 fill-current ml-0.5" />
                        )}
                      </div>
                      <SkipForward className="w-6 h-6 sm:w-4 sm:h-4 text-gray-400" />
                    </div>
                    {/* Progress & Visualizer */}
                    <div className="w-full h-8 flex items-end justify-center sm:justify-start md:justify-center gap-1">
                      {isMusicPlaying ? (
                        [1, 2, 3, 4, 5, 4, 3, 2].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, h * 4, 4] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.5,
                              delay: i * 0.1,
                            }}
                            className="w-1 bg-green-500 rounded-full"
                          />
                        ))
                      ) : (
                        <div className="text-[10px] text-primary font-medium pb-1">
                          {isVideoPlaying ? "Pause automatique" : "En pause"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. Video Editor Window (Premiere-ish) */}
            <div className="flex-1 max-w-2xl w-full bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col z-20">
              {/* Header */}
              <div className="h-8 bg-[#252525] flex items-center px-3 justify-between border-b border-black/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-400 hidden sm:block">
                  Showreel.prproj
                </div>
                <div className="w-10" />
              </div>

              {/* Workspace */}
              <div className="flex-1 flex flex-col p-2 gap-2">
                {/* Preview Monitor */}
                <div
                  className={`aspect-video bg-black rounded border border-white/5 relative overflow-hidden group ${
                    isPlayerActive
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-80"
                  }`}
                  onClick={() => {
                    if (isPlayerActive) {
                      setIsVideoPlaying(!isVideoPlaying);
                    }
                  }}
                >
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/dx0k6xzqa/video/upload/v1752081661/portfolio/accueil/general/videos/video_1752081640300_a6yp63scr.mp4"
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    onEnded={() => setIsVideoPlaying(false)}
                  />

                  {/* Overlay Play Button (only when paused) */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30 z-20">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 ${
                            isPlayerActive
                              ? "bg-white/10 group-hover:bg-primary group-hover:text-black"
                              : "bg-white/5 text-white/20"
                          }`}
                        >
                          <Play className="w-6 h-6 ml-1" />
                        </div>
                        <span
                          className={`text-xs transition-colors font-medium ${
                            isPlayerActive
                              ? "text-white/50 group-hover:text-white"
                              : "text-white/20"
                          }`}
                        >
                          {isPlayerActive
                            ? "Cliquer pour lire la vidéo"
                            : "Lancez la musique d'abord"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay UI */}
                  <div className="absolute bottom-4 left-4 text-xs font-mono flex gap-2 z-20 pointer-events-none">
                    <span
                      className={
                        isVideoPlaying ? "text-primary" : "text-red-500"
                      }
                    >
                      ● REC
                    </span>
                    <span className="text-white/50">00:01:12</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="h-24 bg-[#151515] rounded border border-white/5 relative overflow-hidden">
                  {/* Tracks */}
                  <div className="absolute top-2 left-0 right-0 h-6 bg-blue-900/30 border-b border-white/5 rounded-sm mx-1" />
                  <div className="absolute top-10 left-0 right-0 h-6 bg-green-900/30 border-b border-white/5 rounded-sm mx-1" />

                  {/* Playhead */}
                  <motion.div
                    animate={{ left: isVideoPlaying ? "100%" : "30%" }}
                    transition={
                      isVideoPlaying
                        ? { duration: 10, ease: "linear", repeat: Infinity }
                        : { duration: 0 }
                    }
                    className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
                  >
                    <div className="absolute -top-1 -left-1.5 w-3 h-3 bg-primary transform rotate-45" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
