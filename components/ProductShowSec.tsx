/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import { useRef } from "react";

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
      image: "/supernaturel_2.png",
    },
    {
      title: "ZenPod Noise-Cancelling Headphones",
      description:
        "Immerse yourself in crystal-clear audio with our premium noise-cancelling headphones. Perfect for work or play.",
      image: "/supernaturel_2.png",
    },
    {
      title: "FitTrack Pro Smartwatch",
      description:
        "Monitor your health, fitness, and daily activities with our advanced smartwatch. Your personal health companion.",
      image: "/supernaturel_2.png",
    },
  ];

  return (
    <div ref={containerRef} className="py-24 bgImageFeature relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
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
            [0.95, 1, 1, 0.95]
          ),
        }}
      >
        <h2 className="text-6xl font-extrabold text-center mb-24 text-gray-800">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-black"
          >
            Featured Products
          </motion.span>
        </h2>
        <div className="space-y-40">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16 relative`}
            >
              <motion.div
                className="w-full md:w-1/2 relative z-10"
                whileHover={{ scale: 1.03 }}
                whileInView={{
                  x: [50, 0],
                  opacity: [0, 1],
                }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 300, duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <div className="w-full md:w-1/2 space-y-8 relative z-20">
                <motion.div
                  className="absolute -inset-8 bg-[#0047BB] rounded-3xl shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.h3
                  className="text-5xl font-bold relative z-10 p-2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-white">
                    {product.title}
                  </span>
                  <motion.span
                    className="absolute -top-2 -right-2 text-white"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles size={24} />
                  </motion.span>
                </motion.h3>
                <motion.p
                  className="text-xl text-white relative z-10 p-2 backdrop-blur-sm rounded-lg"
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
                  <Button className="group bg-white text-black hover:text-black hover:bg-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl overflow-hidden">
                    <span className="relative z-10">Discover More</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
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
