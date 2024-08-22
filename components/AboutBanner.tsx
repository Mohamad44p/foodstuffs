/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { ArrowRight, Flower2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const flowerVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 0.5,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b py-[30vh] from-white to-green-50 min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-green-600 leading-tight"
            >
              We are dedicated{" "}
              <motion.span
                variants={itemVariants}
                className="bg-blue-500 text-white px-2 py-1 rounded inline-block"
              >
                to excellence
              </motion.span>
              <br />
              in every
              <br />
              bite.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              At Adeeb Juneidi, we are committed to providing high-quality food
              products that meet the highest standards of taste and safety.
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4">
              {[
                {
                  icon: "🍞",
                  color: "text-yellow-400",
                  text: "Freshly made, every day!",
                },
                {
                  icon: "🌾",
                  color: "text-green-500",
                  text: "Sourced from the finest ingredients!",
                },
                {
                  icon: "🇵🇸",
                  color: "text-red-500",
                  text: "Proudly Distributed in Palestine!",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <span className={`${item.color} text-2xl`}>{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Link href="#our-story">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-white bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold transition-colors hover:bg-blue-700"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </div>
          <motion.div
            variants={containerVariants}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {["/ABImage1.webp", "/ABImage2.webp", "/ABImage3.webp"].map(
                (src, index) => (
                  <motion.div
                    key={index}
                    variants={imageVariants}
                    className="relative"
                  >
                    <img
                      src={src}
                      alt={`Adeeb Juneidi product image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-lg border-4 border-yellow-400"
                    />
                    <motion.div
                      variants={flowerVariants}
                      className="absolute -top-3 -left-3"
                    >
                      <Flower2 className="text-pink-400 w-8 h-8 transform -rotate-45" />
                    </motion.div>
                    <motion.div
                      variants={flowerVariants}
                      className="absolute -bottom-3 -right-3"
                    >
                      <Flower2 className="text-purple-400 w-8 h-8 transform rotate-45" />
                    </motion.div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={flowerVariants}
        initial="hidden"
        animate={controls}
        className="absolute top-12 right-12"
      >
        <Flower2 className="text-green-300 w-16 h-16 opacity-50" />
      </motion.div>
      <motion.div
        variants={flowerVariants}
        initial="hidden"
        animate={controls}
        className="absolute bottom-12 left-12"
      >
        <Flower2 className="text-yellow-300 w-16 h-16 opacity-50 transform rotate-45" />
      </motion.div>
      <motion.div
        variants={flowerVariants}
        initial="hidden"
        animate={controls}
        className="absolute top-1/4 left-8"
      >
        <Flower2 className="text-pink-300 w-12 h-12 opacity-50 transform -rotate-45" />
      </motion.div>
      <motion.div
        variants={flowerVariants}
        initial="hidden"
        animate={controls}
        className="absolute bottom-1/4 right-8"
      >
        <Flower2 className="text-purple-300 w-12 h-12 opacity-50 transform rotate-90" />
      </motion.div>
    </div>
  );
}
