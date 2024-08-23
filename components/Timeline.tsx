"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    title: "Loyalty",
    description:
      "We are dedicated to earning our customers' trust by consistently offering a diverse selection of top-quality products, from refreshing beverages to indulgent sweets and snacks, ensuring they always return for more.",
    image: "/Loyalte.jpg",
  },
  {
    title: "Openness",
    description:
      "We prioritize transparency, providing clear information about our product origins and ingredients, so customers can make informed choices when selecting from our extensive range.",
    image: "/Opeenes.jpeg",
  },
  {
    title: "Value",
    description:
      "We are committed to delivering the best value in every product category we offer, ensuring that each purchase—whether it's a crunchy biscuit or a savory nut—provides exceptional quality at a fair price.",
    image: "/Value.jpeg",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every product we distribute, carefully curating our selection to meet the highest standards of freshness, flavor, and overall satisfaction, making us a trusted name in the food retail industry.",
    image: "/LastImageSec.jpeg",
  },
];

const EventItem = ({
  event,
  index,
  progress,
}: {
  event: { title: string; description: string; image: string };
  index: number;
  progress: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="mb-24 md:mb-32 relative flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContent event={event} isEven={isEven} />
      <TimelineNode index={index} progress={progress} />
      <TextContent event={event} isEven={isEven} />
    </motion.div>
  );
};

const TextContent = ({
  event,
  isEven,
}: {
  event: { title: string; description: string };
  isEven: boolean;
}) => (
  <div
    className={cn(
      "w-full md:w-[calc(50%-32px)] px-4 md:px-0",
      isEven ? "md:order-3 md:pl-16" : "md:order-1 md:pr-16"
    )}
  >
    <motion.div
      className="p-6 rounded-lg CardImage shadow-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-2xl font-semibold font-playfair mb-2 text-black">
        {event.title}
      </h3>
      <p className="text-gray-700 font-merriweather">{event.description}</p>
    </motion.div>
  </div>
);

const ImageContent = ({
  event,
  isEven,
}: {
  event: { image: string; title: string };
  isEven: boolean;
}) => (
  <div
    className={cn(
      "w-full md:w-[calc(50%-32px)] px-4 md:px-0 mt-4 md:mt-0",
      isEven ? "md:order-1 md:pr-16" : "md:order-3 md:pl-16"
    )}
  >
    <motion.div
      className="rounded-lg overflow-hidden shadow-lg w-full aspect-video"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={event.image}
        alt={event.title}
        width={640}
        height={360}
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
);

const TimelineNode = ({
  index,
  progress,
}: {
  index: number;
  progress: any;
}) => {
  const color = useTransform(
    progress,
    [index / timelineEvents.length, (index + 1) / timelineEvents.length],
    ["#84C454", "#4c782a"]
  );

  return (
    <motion.div
      className="absolute left-1/2 w-8 h-8 rounded-full border-4 border-purple-100 transform -translate-x-1/2 md:order-2 z-10"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bgImage py-24 min-h-screen p-4 md:p-8" ref={containerRef}>
      <motion.h2
        className="text-4xl font-playfair md:text-5xl font-bold text-center mb-12 md:mb-8 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Core Values: The Heart of Everything We Offer
      </motion.h2>
      <p className="text-xl md:text-2xl font-merriweather font-bold mb-16 text-center text-gray-900/85">
        We bring LOVE to the people we serve <br />
        Here is what LOVE means to us{" "}
      </p>
      <div className="relative max-w-screen-2xl mx-auto">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#84C454] transform -translate-x-1/2"
          aria-hidden="true"
        />
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4c782a] origin-top"
          style={{ scaleY, translateX: "-50%" }}
          aria-hidden="true"
        />
        {timelineEvents.map((event, index) => (
          <EventItem
            key={index}
            event={event}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-6 mt-16">
        <Link href="/about">
          <motion.button
            className="px-8 py-3 bg-[#84C454] text-black rounded-full hover:bg-[#4c782a] hover:text-white transition-colors text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
