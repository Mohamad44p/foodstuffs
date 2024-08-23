"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Particle = ({ index }: { index: number }) => (
  <motion.div
    className="absolute rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 400 - 200],
      y: [0, Math.random() * 400 - 200],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: index * 0.2,
    }}
    style={{
      width: Math.random() * 4 + 1 + "px",
      height: Math.random() * 4 + 1 + "px",
      background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.7)`,
    }}
  />
);

const WavyText = ({ text }: { text: string }) => (
  <div className="flex justify-center">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: index * 0.1,
        }}
      >
        {char}
      </motion.span>
    ))}
  </div>
);

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    const ownerName = "Adeeb Al-Junaidi";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < ownerName.length) {
        setTypedName(ownerName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(typingInterval);
    };
  }, []);

  const foodIcons = ["🍔", "🍕", "🍣", "🥗", "🍰", "🍜", "🍱", "🍩"];
  const utensils = ["🍴", "🥄", "🍽️", "🥢", "🔪", "🥣"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-300 overflow-hidden">
      <div className="text-center relative">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#pattern)"
            animate={{
              x: [0, 20],
              y: [0, 20],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
            }}
          />
        </svg>

        {[...Array(30)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}

        <motion.div
          className="relative w-64 h-64 mb-8 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 50 90 A40 40 0 0 1 10 50 A40 40 0 0 1 50 10 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="0 1"
              animate={{
                strokeDasharray: ["1 0", "0 1"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
          {foodIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, Math.cos((index * Math.PI) / 4) * 100],
                y: [0, Math.sin((index * Math.PI) / 4) * 100],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {icon}
            </motion.div>
          ))}
          {utensils.map((utensil, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 360,
                x: Math.cos((index * Math.PI) / 3) * 140,
                y: Math.sin((index * Math.PI) / 3) * 140,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: index * 0.8,
              }}
            >
              {utensil}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-5xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <WavyText text="Al-Junaidi" />
        </motion.div>
        <motion.p
          className="text-xl text-gray-300 mb-6 h-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          by {typedName}
        </motion.p>

        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto relative">
          <motion.div
            className="h-full bg-gradient-to-r from-gray-400 to-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            style={{ opacity: 0.2 }}
          />
        </div>
        <motion.p
          className="text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </div>
  );
}
