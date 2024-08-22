/* eslint-disable react/no-unescaped-entities */
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
    <div className="min-h-screen py-[15vh] flex flex-col items-center justify-center BgPinkImage p-8 overflow-hidden relative">
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
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-[#B02484] font-playfair">
              Feeding Your Passion for Good Food!
            </span>
          </h1>
          <p className="text-xl text-justify text-black font-merriweather max-w-3xl mx-auto font-light">
            Whether you're a home cook or a gourmet chef, our
            curated selection of premium foods will inspire your culinary
            creativity and satisfy your passion for great food.
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
                      Bringing Joy to Every Bite
                    </h3>
                    <p className="text-sm">Watch how to make the perfect Joy</p>
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
                      Bringing Joy to Every Bite
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    At Adeeb Aljunidi and Partners, we believe that food is more
                    than just sustenance—it's a source of happiness. That’s why
                    we carefully select and distribute products and brands that
                    delight our customers with every bite. From your favorite
                    snacks to the sweetest treats, our wide range of offerings
                    is designed to bring joy and satisfaction to your daily
                    life. Whether it’s a refreshing drink on a hot day or a
                    comforting biscuit with your coffee, we’re here to make
                    every moment a little more joyful.
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643"
                    >
                      <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 hover:from-orange-500 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-105 text-lg font-semibold py-3">
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
