/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
  useMotionValue,
  useInView,
  wrap,
  useAnimationFrame,
  useVelocity,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Utensils,
  Truck,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ParallaxText = ({
  children,
  baseVelocity = 100,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t: any, delta: number) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

const FloatingElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        y: [0, 15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};

const SVGPathAnimation = () => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        ref={pathRef}
        d="M0,50 Q25,30 50,50 T100,50"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#84C454" />
          <stop offset="100%" stopColor="#84C454" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="home"
      className="relative mt-[30vh] mb-[20vh] flex items-center justify-center overflow-hidden"
    >
      <SVGPathAnimation />
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-playfair md:text-8xl font-bold text-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          Delicious Food, <br /> Delivered to You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-[18px] font-[100]  font-merriweather  text-black text-justify mb-8"
        >
          Adeeb Aljunidi and Partners is a prestigious Palestinian company
          specializing in the import and distribution of food products. Founded
          in 1996 by Adeeb Aljunidi and his partners, the company is
          headquartered in the city of Hebron, Palestine. The company has
          secured a leading position in the food trade and investment sector in
          Palestine, thanks to its excellence in entrepreneurship. Despite
          political and economic challenges, the company has experienced
          significant growth in recent years, standing out among similar
          companies due to its clear strategies focused on customer satisfaction
          by offering high-quality, reliable, and effective products, along with
          a wide range of competitively priced items. The company boasts a
          specialized team in logistics and sales, highly qualified and trained
          by managers with extensive experience in food marketing and investment
          management. This team works diligently to reach most cities and areas
          within the Palestinian market, including Gaza Strip and Arab 48
          regions, further enhancing the company's success and its continued
          commitment to providing exceptional and high-quality services in
          import and distribution operations.
        </motion.p>
        <p className="text-base md:text-[18px] font-[100]  font-merriweather  text-black text-justify mb-8">
          At Adeeb Aljunidi and Partners, we believe that food is more than just
          sustenance—it's a source of happiness. That’s why we carefully select
          and distribute products and brands that delight our customers with
          every bite. From your favorite snacks to the sweetest treats, our wide
          range of offerings is designed to bring joy and satisfaction to your
          daily life. Whether it’s a refreshing drink on a hot day or a
          comforting biscuit with your coffee, we’re here to make every moment a
          little more joyful.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-[#84C454] text-xl font-playfair text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all"
          >
            Discover Our Story <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
