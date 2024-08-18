"use client";

import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      name: "Hazelnut Original",
      image: "/supernaturel_2.png",
      color: "bg-pink-200",
      buttonColor: "bg-pink-600",
      volume: "1.75L",
      description:
        "Rich, creamy hazelnut flavor with 8g of plant-based protein.",
      feature: "High Protein",
    },
    {
      name: "Hazelnut Original",
      image: "/supernaturel_2.png",
      color: "bg-pink-200",
      buttonColor: "bg-pink-600",
      volume: "1.75L",
      description:
        "Rich, creamy hazelnut flavor with 8g of plant-based protein.",
      feature: "High Protein",
    },
    {
      name: "Oat Original",
      image: "/supernaturel_2.png",
      color: "bg-yellow-300",
      buttonColor: "bg-yellow-400",
      volume: "1.75L",
      description: "Smooth, delicious oat milk packed with 8g of protein.",
      feature: "Dairy Free",
    },
    {
      name: "Almond Original",
      image: "/supernaturel_2.png",
      color: "bg-blue-200",
      buttonColor: "bg-blue-600",
      volume: "1.75L",
      description: "Classic almond taste with 8g of plant-powered protein.",
      feature: "Low Calorie",
    },
    {
      name: "Almond Original",
      image: "/supernaturel_2.png",
      color: "bg-blue-200",
      buttonColor: "bg-blue-600",
      volume: "1.75L",
      description: "Classic almond taste with 8g of plant-powered protein.",
      feature: "Low Calorie",
    },
    {
      name: "Hazelnut Original",
      image: "/supernaturel_2.png",
      color: "bg-pink-200",
      buttonColor: "bg-pink-600",
      volume: "1.75L",
      description:
        "Rich, creamy hazelnut flavor with 8g of plant-based protein.",
      feature: "High Protein",
    },
    {
      name: "Hazelnut Original",
      image: "/supernaturel_2.png",
      color: "bg-pink-200",
      buttonColor: "bg-pink-600",
      volume: "1.75L",
      description:
        "Rich, creamy hazelnut flavor with 8g of plant-based protein.",
      feature: "High Protein",
    },
    {
      name: "Oat Original",
      image: "/supernaturel_2.png",
      color: "bg-yellow-300",
      buttonColor: "bg-yellow-400",
      volume: "1.75L",
      description: "Smooth, delicious oat milk packed with 8g of protein.",
      feature: "Dairy Free",
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
    <div className="container mx-auto px-4 py-16 bg-[#faf7f2] overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center md:space-x-20 lg:space-x-16 space-y-10 mb-12"
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
                alt={product.name}
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
            <motion.div
              className="absolute top-4 right-4 bg-white text-black text-xs font-bold py-1 px-2 rounded-full shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {product.feature}
            </motion.div>
            <h3 className="text-3xl font-bold mb-1">{product.name}</h3>
            <p className="text-xl text-gray-600 mb-2">{product.volume}</p>
            <p className="text-sm text-center text-gray-500 mb-4 max-w-[200px]">
              {product.description}
            </p>
            <motion.button
              className={`${product.buttonColor} text-white font-bold py-2 px-6 rounded-sm uppercase text-lg relative overflow-hidden`}
              style={{
                clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Product
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
      >
        <motion.button
          className="bg-black text-white font-bold my-6 py-3 px-8 rounded-full text-lg flex items-center space-x-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discover them all</span>
          <motion.div
            className="bg-white rounded-full p-1"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
