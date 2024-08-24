"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(
    smoothScrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );
  const textY = useTransform(smoothScrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(smoothScrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-background text-white min-h-screen overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
        }}
      >
        <Image
          src="/HeroTest.webp"
          alt={t("backgroundAlt")}
          fill
          priority
          className="object-cover w-full h-full"
          quality={90}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
        style={{ opacity }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity,
          rotateX,
          rotateY,
        }}
      >
        <motion.div className="max-w-4xl w-full px-4" style={{ y: textY }}>
          <Card className="bg-black/50 backdrop-blur-md border-none shadow-xl overflow-hidden">
            <CardContent
              className={`p-8 space-y-6 ${locale === "ar" ? "rtl" : "ltr"}`}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("title")}
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("subtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="#our-story" className="block">
                  <Button
                    className="w-full bg-[#78AF4B] hover:bg-[#5C8A3A] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    {t("exploreButton")}
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
          <span className="sr-only">{t("scrollDown")}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
