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

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
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
    return () => video.removeEventListener("timeupdate", updateProgress);
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
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-8 overflow-hidden relative">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23FFA07A" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          backgroundSize: "150px 150px",
          opacity: 0.5,
        }}
      />

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-6xl"
      >
        <motion.div
          className="text-center mb-12 relative z-10"
          variants={itemVariants}
        >
          <h1 className="text-7xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
              Culinary Delights
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Discover exquisite recipes that will tantalize your taste buds and
            elevate your culinary experience.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl relative z-10 bg-white rounded-2xl border-2 border-orange-200">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="VideoJ.mp4"
                    loop
                    muted={isMuted}
                    poster="/VideoImage.png"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 text-white">
                    <h3 className="text-lg font-semibold">
                      Iced Coffee Preparation
                    </h3>
                    <p className="text-sm">
                      Watch how to make the perfect iced coffee
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => seek("backward")}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        <SkipBackIcon className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={togglePlay}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isPlaying ? (
                          <PauseIcon className="h-8 w-8" />
                        ) : (
                          <PlayIcon className="h-8 w-8" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => seek("forward")}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        <SkipForwardIcon className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full mr-4 bg-white/30 rounded-full h-1">
                        <motion.div
                          className="bg-orange-400 h-1 rounded-full"
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
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeIcon className="h-5 w-5" />
                        ) : (
                          <Volume2Icon className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 bg-white">
                  <motion.h2
                    className="text-4xl font-bold mb-4"
                    variants={itemVariants}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
                      Iced Coffee with Maple Mousse
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    Indulge in our exquisite iced coffee creation, elevated with
                    a luscious maple mousse. This gourmet beverage promises pure
                    bliss in every sip! The perfect balance of rich coffee
                    flavors and sweet, creamy maple will satisfy your iced
                    coffee cravings all summer long.
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-4 mb-6"
                    variants={itemVariants}
                  >
                    <div className="flex items-center bg-orange-100 rounded-full px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-orange-700">
                        5 min prep
                      </span>
                    </div>
                    <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-green-700">
                        Easy to make
                      </span>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 hover:from-orange-500 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-105 text-lg font-semibold py-3">
                      DISCOVER RECIPE
                    </Button>
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
