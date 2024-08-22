"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Twitter,
  ArrowUp,
  Globe,
} from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";

export default function AnimatedFooter() {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  const navItems = [
    { name: "HOME", href: "home" },
    { name: "ABOUT", href: "about" },
    { name: "OUR STORY", href: "our-story" },
    { name: "SERVICES", href: "services" },
    { name: "CLIENTS", href: "clients" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("animated-footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (footerPosition < windowHeight) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        staggerChildren: 0.05,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="animated-footer"
      className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-12 px-4 md:px-6 relative"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={smoothScroll}
                    className="hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Insights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <Link
              href="#contact"
              onClick={smoothScroll}
              className="inline-block bg-[#FF5C00] text-white py-2 px-6 rounded-md hover:bg-[#FF7D00] transition-colors duration-300"
            >
              CONTACT US
            </Link>
            <div className="mt-6 space-y-1">
              <p className="flex items-center gap-x-3">
                <Globe size={20} className="inline-block" />{" "}
                Hebron, Palestine
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 flex flex-col items-center">
          <motion.div
            className="text-6xl md:text-8xl font-bold mb-8 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {" Adeeb Al-Junaidi".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex justify-between items-center w-full flex-wrap gap-4">
            <div className="flex space-x-4">
              <Link href="#" className="text-sm hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                Terms of Use
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                Trust
              </Link>
            </div>
            <p className="text-sm">
              &copy; 2024 Adeeb Al-Junaidi. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-600">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Github size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <motion.button
        onClick={goToTop}
        className="fixed bottom-8 right-8 bg-[#e6f0de] text-white p-3 rounded-full shadow-lg hover:bg-[#84C454] transition-colors duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}
