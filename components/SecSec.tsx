"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Cloud,
  Coffee,
  Pizza,
  Apple,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div className="absolute inset-0 z-0" style={{ y }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,50 Q25,0 50,50 T100,50 V100 H0 Z"
          fill="url(#gradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#84C454" />
            <stop offset="50%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute top-10 right-10 text-yellow-400"
        style={{ rotate: rotation }}
        whileHover={{ scale: 1.2 }}
      >
        <Sun size={80} aria-hidden="true" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 text-white"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <Cloud size={80} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIcon = ({
  icon: Icon,
  style = {},
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      className="absolute text-[#4CAF50] z-10"
      style={style}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      whileHover={{ scale: 1.5, rotate: 720 }}
    >
      <Icon width={48} aria-hidden="true" />
    </motion.div>
  );
};

const AnimatedText = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

const HeroSection2 = () => {
  const t = useTranslations("heroSec2");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleWords = t("title").split(" ");

  return (
    <section
      ref={ref}
      className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#E8F5E9] to-[#C8E6C9]"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-20 relative">
        {locale === "en" && (
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-12 text-[#2E7D32]"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                variants={letterVariants}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    whileHover={{ scale: 1.2, color: "#4CAF50", rotate: 10 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>
        )}

        {locale === "ar" && (
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 text-[#2E7D32]"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {t("title")}
          </motion.h1>
        )}

        <motion.div
          className={`bg-white bg-opacity-80 backdrop-blur-lg rounded-xl p-8 shadow-2xl ${
            locale === "ar" ? "rtl" : "ltr"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#333] text-justify mb-8 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t("description")}
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-[#33691E] text-justify mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {t("mission")}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Button
            size="lg"
            className="bg-[#4CAF50] text-xl sm:text-2xl text-white hover:bg-[#45a049] transition-all duration-300 transform hover:scale-110 hover:rotate-3 px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {t("discoverButton")}
            <motion.span
              className={`inline-block ${locale === "ar" ? "mr-2" : "ml-2"}`}
              animate={{ x: hovered ? (locale === "ar" ? -10 : 10) : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight
                className={`inline ${locale === "ar" ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </motion.span>
          </Button>
        </motion.div>
      </div>

      <FloatingIcon icon={Leaf} style={{ top: "15%", left: "5%" }} />
      <FloatingIcon icon={Coffee} style={{ bottom: "25%", right: "10%" }} />
      <FloatingIcon icon={Pizza} style={{ top: "65%", left: "85%" }} />
      <FloatingIcon icon={Apple} style={{ top: "35%", right: "15%" }} />
    </section>
  );
};

export default function SecSec() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection2 />
      </main>
    </div>
  );
}
