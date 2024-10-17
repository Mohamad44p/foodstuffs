/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const videoContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-background text-white h-screen overflow-hidden">
      <motion.div ref={videoContainerRef} className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          alt="Adeeb Juneidi Food Products"
          src="/HeroBanner3.jpg"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-black/50"
      />
      <motion.div
        className="absolute left-4 top-0 bottom-0 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-black/50 backdrop-blur-md border-none shadow-xl max-w-[300px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[550px] mt-[8rem]">
          <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white/90">
              {t("subtitle")}
            </p>
            <Link href="#our-story" className="block">
              <Button
                className="w-full bg-[#78AF4B] hover:bg-[#5C8A3A] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                {t("exploreButton")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}