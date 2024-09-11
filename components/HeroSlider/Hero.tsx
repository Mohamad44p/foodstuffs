"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
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
import { ChevronDown } from "lucide-react";

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
      className="relative text-white min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="max-w-4xl w-full px-4"
        style={{
          y: textY,
          opacity,
          rotateX,
          rotateY,
        }}
      >
        <Card className="bg-white/10 backdrop-blur-md border-none shadow-2xl overflow-hidden">
          <CardContent
            className={`p-10 space-y-8 ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90"
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
                  className="w-full bg-white text-[#86C353] hover:bg-[#86C353] hover:text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
                  size="lg"
                >
                  {t("exploreButton")}
                </Button>
              </Link>
            </motion.div>
          </CardContent>
        </Card>
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
          <ChevronDown className="text-white w-12 h-12" />
          <span className="sr-only">{t("scrollDown")}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}