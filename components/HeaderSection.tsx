"use client";

import Hero from "./HeroSlider/Hero";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <div className="relative z-20">
        <Navbar />
        <Hero />
      </div>
    </motion.div>
  );
}
