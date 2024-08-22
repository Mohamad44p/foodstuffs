"use client";

import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";

interface Client {
  id: string;
  title: string;
  Link: string;
  ButtonColor: string;
  BackgroundColor: string;
  ImageUrl: string;
}

interface ClientComponentProps {
  clients: Client[];
}

export default function ClientComponent({ clients }: ClientComponentProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen  overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            style={{ y: textY }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our In-House Brands
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="flex flex-col items-center group relative"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="rounded-2xl w-full aspect-square flex items-center justify-center mb-6 relative overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: client.BackgroundColor,
                    boxShadow:
                      hoveredIndex === index
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                  animate={{
                    rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={client.ImageUrl}
                    alt={client.title}
                    className="w-3/4 h-auto absolute"
                    animate={{
                      y: hoveredIndex === index ? -10 : 0,
                      rotateY: hoveredIndex === index ? 15 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0"
                    animate={{ opacity: hoveredIndex === index ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.button
                  className="mt-5 text-white font-bold py-3 px-8 rounded-full uppercase text-lg relative overflow-hidden"
                  style={{
                    backgroundColor: client.ButtonColor,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="flex items-center justify-center gap-x-3"
                    href={client.Link}
                    target="_blank"
                  >
                    Visit {client.title}{" "}
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
