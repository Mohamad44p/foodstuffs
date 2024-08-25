"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { ArrowRight, Flower2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations("aboutBanner");
  const locale = useLocale();
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

  const features = [
    { icon: "🍞", color: "text-yellow-400", text: t("feature1") },
    { icon: "🌾", color: "text-green-500", text: t("feature2") },
    { icon: "🇵🇸", color: "text-red-500", text: t("feature3") },
  ];

  const images = ["/ABImage1.webp", "/ABImage2.webp", "/ABImage3.webp"];

  return (
    <section
      ref={containerRef}
      className={`bg-gradient-to-b py-24 from-white to-green-50 min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
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
              {t("title1")}{" "}
              <motion.span
                variants={itemVariants}
                className="bg-blue-500 text-white px-2 py-1 rounded inline-block"
              >
                {t("titleHighlight")}
              </motion.span>
              <br />
              {t("title2")}
              <br />
              {t("title3")}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              {t("description")}
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <span className={`${item.color} text-2xl`} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Link href="#our-story">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex md:my-8 my-12 items-center text-white bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold transition-colors hover:bg-blue-700 ${
                  locale === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                {t("learnMoreButton")}
                <ArrowRight
                  className={`${
                    locale === "ar" ? "ml-2 rotate-180" : "mr-2"
                  } h-5 w-5`}
                  aria-hidden="true"
                />
              </motion.button>
            </Link>
          </div>
          <motion.div
            variants={containerVariants}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  className="relative"
                >
                  <Image
                    src={src}
                    alt={t("imageAlt", { index: index + 1 })}
                    width={300}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg shadow-lg border-4 border-yellow-400"
                  />
                  <motion.div
                    variants={flowerVariants}
                    className="absolute -top-3 -left-3"
                    aria-hidden="true"
                  >
                    <Flower2 className="text-pink-400 w-8 h-8 transform -rotate-45" />
                  </motion.div>
                  <motion.div
                    variants={flowerVariants}
                    className="absolute -bottom-3 -right-3"
                    aria-hidden="true"
                  >
                    <Flower2 className="text-purple-400 w-8 h-8 transform rotate-45" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      {[
        { className: "absolute top-12 right-12", color: "text-green-300" },
        {
          className: "absolute bottom-12 left-12",
          color: "text-yellow-300 transform rotate-45",
        },
        {
          className: "absolute top-1/4 left-8",
          color: "text-pink-300 transform -rotate-45",
        },
        {
          className: "absolute bottom-1/4 right-8",
          color: "text-purple-300 transform rotate-90",
        },
      ].map((flower, index) => (
        <motion.div
          key={index}
          variants={flowerVariants}
          initial="hidden"
          animate={controls}
          className={flower.className}
          aria-hidden="true"
        >
          <Flower2 className={`${flower.color} w-16 h-16 opacity-50`} />
        </motion.div>
      ))}
    </section>
  );
}
