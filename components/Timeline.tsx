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
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const EventItem = ({
  event,
  index,
  progress,
}: {
  event: { title: string; description: string; image: string };
  index: number;
  progress: any;
}) => {
  const t = useTranslations("timeline");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "mb-24 md:mb-32 relative flex flex-col md:flex-row items-center",
        locale === "ar" ? "md:flex-row-reverse" : ""
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContent event={event} isEven={isEven} locale={locale} />
      <TimelineNode index={index} progress={progress} />
      <TextContent event={event} isEven={isEven} locale={locale} />
    </motion.div>
  );
};

const TextContent = ({
  event,
  isEven,
  locale,
}: {
  event: { title: string; description: string };
  isEven: boolean;
  locale: string;
}) => {
  return (
    <div
      className={cn(
        "w-full md:w-[calc(50%-32px)] px-4 md:px-0",
        locale === "ar"
          ? isEven
            ? "md:order-1 md:pr-16"
            : "md:order-3 md:pl-16"
          : isEven
          ? "md:order-3 md:pl-16"
          : "md:order-1 md:pr-16",
        locale === "ar" ? "text-right" : "text-left"
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
};

const ImageContent = ({
  event,
  isEven,
  locale,
}: {
  event: { image: string; title: string };
  isEven: boolean;
  locale: string;
}) => (
  <div
    className={cn(
      "w-full md:w-[calc(50%-32px)] px-4 md:px-0 mt-4 md:mt-0",
      locale === "ar"
        ? isEven
          ? "md:order-3 md:pl-16"
          : "md:order-1 md:pr-16"
        : isEven
        ? "md:order-1 md:pr-16"
        : "md:order-3 md:pl-16"
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
    [index / 4, (index + 1) / 4],
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
  const t = useTranslations("timeline");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineEvents = [
    {
      title: t("loyalty.title"),
      description: t("loyalty.description"),
      image: "/Loyalte.jpg",
    },
    {
      title: t("openness.title"),
      description: t("openness.description"),
      image: "/Opeenes.jpeg",
    },
    {
      title: t("value.title"),
      description: t("value.description"),
      image: "/Value.jpeg",
    },
    {
      title: t("excellence.title"),
      description: t("excellence.description"),
      image: "/LastImageSec.jpeg",
    },
  ];

  return (
    <div
      className={cn(
        "bgImage py-24 min-h-screen p-4 md:p-8",
        locale === "ar" ? "rtl" : "ltr"
      )}
      ref={containerRef}
    >
      <motion.h2
        className="text-4xl font-playfair md:text-5xl font-bold text-center mb-12 md:mb-8 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <p className="text-xl md:text-2xl font-merriweather font-bold mb-16 text-center text-gray-900/85">
        {t("subtitle1")} <br />
        {t("subtitle2")}
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
      <div
        className={cn(
          "flex justify-center mt-16",
          locale === "ar" ? "space-x-reverse" : "space-x-6"
        )}
      >
        <Link href="/about">
          <motion.button
            className="px-8 py-3 bg-[#84C454] text-black rounded-full hover:bg-[#4c782a] hover:text-white transition-colors text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("aboutButton")}
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("contactButton")}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
