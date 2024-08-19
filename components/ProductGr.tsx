"use client";

import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      image: "/MAsl.png",
      color: "bg-emerald-100",
      buttonColor: "bg-emerald-500",
      href: "https://www.saadmaslamani.com",
    },
    {
      image: "/ALZh.png",
      color: "bg-pink-100",
      buttonColor: "bg-pink-500",
      href: "https://www.facebook.com/alzahra.alshamiahsweets",
    },
    {
      image: "/Lets.png",
      color: "bg-amber-100",
      buttonColor: "bg-amber-500",
      href: "#",
    },
    {
      image: "/Tians.png",
      color: "bg-sky-100",
      buttonColor: "bg-sky-500",
      href: "https://www.facebook.com/p/Tians-Pakistan-100063803573183",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container py-[24vh] mx-auto px-4  bg-[#faf7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-[20vh] bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Esteemed Clients
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:space-y-0 space-y-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group relative"
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className={`${
                  product.color
                } rounded-full w-72 h-72 flex items-center justify-center mb-6 relative overflow-hidden transform transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "scale-105 shadow-xl" : ""
                }`}
              >
                <motion.img
                  src={product.image}
                  alt="Brand Logo"
                  className="w-56 h-auto absolute"
                  style={{ rotate: -12 }}
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                    rotateY: hoveredIndex === index ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
              </div>
              <motion.button
                className={`${product.buttonColor} mt-5 text-white font-bold py-2 px-6 rounded-sm uppercase text-lg relative overflow-hidden`}
                style={{
                  clipPath:
                    "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="flex items-center justify-center gap-x-5"
                  href={product.href}
                  target="_blank"
                >
                  Visit Website <ArrowRight className="w-5 h-5 text-white" />
                </Link>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.3 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center items-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
