"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayIcon,
  PauseIcon,
  VolumeIcon,
  Volume2Icon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FoodParticles = () => {
  const particles = [
    { icon: "🍎", delay: 0 },
    { icon: "🍇", delay: 2 },
    { icon: "🍊", delay: 4 },
    { icon: "🍓", delay: 6 },
    { icon: "🥑", delay: 8 },
    { icon: "🍍", delay: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{ y: "120%", x: Math.random() * 100 + "%", opacity: 0 }}
          animate={{
            y: "-120%",
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function VideoBanner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const seek = (direction: "forward" | "backward") => {
    if (videoRef.current) {
      videoRef.current.currentTime += direction === "forward" ? 10 : -10;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen py-24 flex flex-col items-center justify-center p-8 overflow-hidden relative bg-gradient-to-br from-green-50 to-orange-50">
      <FoodParticles />

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-6xl relative z-10"
      >
        <motion.div
          className="text-center mb-12 relative z-10"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-green-700 font-playfair">
              Feeding Your Passion for Good Food!
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-700 font-merriweather max-w-3xl mx-auto font-light">
            Whether you&apos;re a home cook or a gourmet chef, our curated
            selection of premium foods will inspire your culinary creativity and
            satisfy your passion for great food.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl relative z-10 bg-white rounded-3xl border-2 border-green-200 hover:shadow-green-200/50 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  {!isVideoLoaded && (
                    <Image
                      src="/VideoImage.png"
                      alt="Video thumbnail"
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <video
                    ref={videoRef}
                    className={`w-full h-full object-cover ${
                      isVideoLoaded ? "block" : "hidden"
                    }`}
                    src="VideoJ.mp4"
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-semibold">
                      Bringing Joy to Every Bite
                    </h3>
                    <p className="text-sm">Watch how to make the perfect Joy</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => seek("backward")}
                        className="text-white hover:text-green-400 transition-colors transform hover:scale-110"
                        aria-label="Rewind 10 seconds"
                      >
                        <SkipBackIcon className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={togglePlay}
                        className="text-white hover:text-green-400 transition-colors transform hover:scale-125"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <PauseIcon className="h-12 w-12" />
                        ) : (
                          <PlayIcon className="h-12 w-12" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => seek("forward")}
                        className="text-white hover:text-green-400 transition-colors transform hover:scale-110"
                        aria-label="Forward 10 seconds"
                      >
                        <SkipForwardIcon className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full mr-4 bg-white/30 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${progress}%` }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMute}
                        className="text-white hover:text-green-400 transition-colors transform hover:scale-110"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeIcon className="h-6 w-6" />
                        ) : (
                          <Volume2Icon className="h-6 w-6" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-10 bg-white">
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    variants={itemVariants}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-orange-500">
                      Bringing Joy to Every Bite
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-8 leading-relaxed"
                    variants={itemVariants}
                  >
                    At Adeeb Aljunidi and Partners, we believe that food is more
                    than just sustenance—it&apos;s a source of happiness.
                    That&apos;s why we carefully select and distribute products
                    and brands that delight our customers with every bite. From
                    your favorite snacks to the sweetest treats, our wide range
                    of offerings is designed to bring joy and satisfaction to
                    your daily life.
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <Link
                      href="https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-105 text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl">
                        DISCOVER MORE
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
