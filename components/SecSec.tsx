/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import { ArrowRight, ChevronDown, Leaf, Sun, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      >
        <motion.path
          d="M0,50 Q25,0 50,50 T100,50 V100 H0 Z"
          fill="#84C454"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
      <motion.div
        className="absolute top-10 right-10 text-white"
        style={{ rotate: rotation }}
      >
        <Sun size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 text-white"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      >
        <Cloud size={40} />
      </motion.div>
    </motion.div>
  );
};

const FloatingLeaf = ({ style = {} }) => {
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
    >
      <Leaf size={24} />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E8F5E9]">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-20 relative">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-[#2E7D32]">
          Delicious Food, <br /> Delivered to You
        </h1>

        <p className="text-lg md:text-xl text-[#000] text-justify mb-8">
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
        </p>

        <p className="text-base md:text-lg text-[#33691E] text-justify mb-8 max-w-4xl mx-auto">
          At Adeeb Aljunidi and Partners, we believe that food is more than just
          sustenance—it's a source of happiness. That’s why we carefully select
          and distribute products and brands that delight our customers with
          every bite. From your favorite snacks to the sweetest treats, our wide
          range of offerings is designed to bring joy and satisfaction to your
          daily life. Whether it’s a refreshing drink on a hot day or a
          comforting biscuit with your coffee, we’re here to make every moment a
          little more joyful.ns.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-[#4CAF50] text-xl text-white hover:bg-[#45a049] transition-colors duration-300"
          >
            Discover Our Story <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <FloatingLeaf style={{ top: "20%", left: "10%" }} />
      <FloatingLeaf style={{ bottom: "30%", right: "15%" }} />
      <FloatingLeaf style={{ top: "70%", left: "80%" }} />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-[#2E7D32] w-8 h-8" />
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
