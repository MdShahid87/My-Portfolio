import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Maximize2,
  X,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import heroVideo from "../assets/hero video/Man_speaking_at_desk_20261027203740.mp4";
const Hero = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatic video playback
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let cancelled = false;

    const playVideo = async () => {
      video.muted = false;

      try {
        await video.play();

        if (!cancelled) {
          setIsPlaying(true);
          setIsMuted(false);
        }
      } catch {
        if (cancelled) return;

        // Fallback: autoplay without sound
        video.muted = true;
        setIsMuted(true);

        try {
          await video.play();

          if (!cancelled) {
            setIsPlaying(true);
          }
        } catch {
          if (!cancelled) {
            setIsPlaying(false);
          }
        }
      }
    };

    playVideo();

    return () => {
      cancelled = true;
    };
  }, []);

  // Play / Pause
  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute
  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const newMuted = !video.muted;

    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Restart video
  const restartVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  // Update progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    setProgress((video.currentTime / video.duration) * 100);
  };

  // Scrub video timeline
  const handleScrub = (e) => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;

    video.currentTime = Math.max(
      0,
      Math.min(1, pos)
    ) * video.duration;
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 pt-20 pb-12 sm:px-6 sm:pt-24 md:pt-28 md:pb-16 lg:flex lg:min-h-[85vh] lg:items-center"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#ff385c]/10 blur-[120px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#6366f1]/[0.12] blur-[140px] sm:h-[450px] sm:w-[450px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Availability */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>Available for Work • Delhi NCR</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                MD Shahid
              </span>
              <span className="text-[#ff385c]">.</span>
            </h1>

            {/* Headline */}
            <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-300 sm:text-2xl lg:text-3xl">
              Frontend &{" "}
              <span className="bg-gradient-to-r from-[#ff385c] to-[#a855f7] bg-clip-text text-transparent">
                React.js Developer
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
              Building fast, responsive web applications with React.js,
              modern JavaScript & Tailwind CSS. Shipped 3 production apps
              with REST APIs & client-side processing.
            </p>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                ⚛️ React.js
              </span>

              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                ⚡ Tailwind CSS
              </span>

              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                🌐 REST APIs
              </span>

              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                🎓 BCA 79.87%
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff385c] to-[#7928ca] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff385c]/25 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                View Projects
                <ArrowDownRight className="h-4 w-4" />
              </a>

              {personalInfo?.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10 active:scale-95"
                >
                  <Download className="h-4 w-4 text-[#ff385c]" />
                  Resume
                </a>
              )}
            </div>
          </motion.div>

          {/* RIGHT VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex w-full justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[320px] rounded-2xl border border-white/15 bg-[#0b0e17]/90 p-2 shadow-2xl shadow-black/80 backdrop-blur-xl sm:rounded-3xl sm:p-2.5">

              {/* Video Header */}
              <div className="mb-2 flex items-center justify-between border-b border-white/10 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />

                  <span className="ml-2 text-[11px] font-bold text-slate-300">
                    Introduction Video
                  </span>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  title="Expand"
                >
                  <Maximize2 className="h-3 w-3" />
                  <span className="hidden sm:inline">Expand</span>
                </button>
              </div>

              {/* Video Player */}
              <div className="group relative w-full overflow-hidden rounded-xl bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="block h-auto w-full rounded-xl"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff385c] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
                    aria-label="Play video"
                  >
                    <Play className="h-6 w-6 translate-x-0.5 fill-white" />
                  </button>
                )}

                {/* Video Label */}
                <div className="pointer-events-none absolute left-2.5 top-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff385c]" />
                    MD Shahid
                  </span>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-3">

                  {/* Progress Bar */}
                  <div
                    onClick={handleScrub}
                    role="slider"
                    aria-label="Video progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    tabIndex={0}
                    className="mb-2.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/25 transition-all hover:h-1.5"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-[#ff385c] to-[#a855f7]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">

                      {/* Play / Pause */}
                      <button
                        onClick={togglePlay}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white transition-colors hover:bg-[#ff385c]"
                        title={isPlaying ? "Pause" : "Play"}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="h-3 w-3" />
                        ) : (
                          <Play className="h-3 w-3 fill-white" />
                        )}
                      </button>

                      {/* Mute / Unmute */}
                      <button
                        onClick={toggleMute}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white transition-colors hover:bg-white/20"
                        title={isMuted ? "Unmute" : "Mute"}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-3 w-3 text-slate-300" />
                        ) : (
                          <Volume2 className="h-3 w-3 text-emerald-400" />
                        )}
                      </button>

                      {/* Restart */}
                      <button
                        onClick={restartVideo}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white transition-colors hover:bg-white/20"
                        title="Restart"
                        aria-label="Restart video"
                      >
                        <RotateCcw className="h-3 w-3 text-slate-300" />
                      </button>
                    </div>

                    {/* Sound Status */}
                    <button
                      onClick={toggleMute}
                      className={`rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm transition-all ${isMuted
                        ? "border-white/15 bg-black/70 text-slate-300 hover:text-white"
                        : "border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
                        }`}
                    >
                      {isMuted ? "🔇 Muted - Unmute" : "🔊 Sound Active"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN VIDEO MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-[#0e121b] p-3 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
                <span className="text-sm font-bold text-white">
                  MD Shahid — Video Introduction
                </span>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mt-3 w-full overflow-hidden rounded-xl bg-black">
                <video
                  src={heroVideo}
                  autoPlay
                  controls
                  playsInline
                  className="mx-auto block h-auto max-h-[80vh] w-full rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;