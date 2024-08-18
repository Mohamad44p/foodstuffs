/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Component() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const products = [
    {
      title: "EcoGlow Smart Bulb",
      description:
        "Illuminate your space with energy-efficient, color-changing smart bulbs. Control ambiance from your phone.",
      image: "/TestFeBig.jpg",
    },
    {
      title: "ZenPod Noise-Cancelling Headphones",
      description:
        "Immerse yourself in crystal-clear audio with our premium noise-cancelling headphones. Perfect for work or play.",
      image: "/Testme.jpg",
    },
    {
      title: "FitTrack Pro Smartwatch",
      description:
        "Monitor your health, fitness, and daily activities with our advanced smartwatch. Your personal health companion.",
      image: "/Testme2.jpg",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0a0b1e] to-[#0f1028]"
    >
      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 10s infinite;
        }
      `}</style>

      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Improved grid with pulsing effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px),
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />

        {/* Animated conic gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #4f46e5 0deg, transparent 60deg, transparent 300deg, #4f46e5 360deg)`,
            opacity: 0.1,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Floating shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.2, 0.8, 1],
            [0.3, 1, 1, 0.3]
          ),
          scale: useTransform(
            scrollYProgress,
            [0, 0.2, 0.8, 1],
            [0.8, 1, 1, 0.8]
          ),
        }}
      >
        <h2 className="text-5xl font-extrabold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Featured Products
          </motion.span>
        </h2>
        <div className="space-y-48">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 relative`}
            >
              <motion.div
                className="w-full md:w-1/2 relative z-10"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileInView={{
                  x: [50, 0],
                  opacity: [0, 1],
                }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 300, duration: 0.8 }}
              >
                <div
                  className="relative overflow-hidden rounded-lg shadow-2xl"
                  style={{
                    clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 mix-blend-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <div className="w-full md:w-1/2 space-y-6 relative z-20">
                <motion.div
                  className="absolute -inset-4 bg-white/5 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.h3
                  className="text-4xl font-bold text-white relative z-10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-300 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {product.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative z-10"
                >
                  <Button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    Discover More
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
