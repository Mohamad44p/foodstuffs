"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    content: "Strawberry",
    background: "#EA3D41",
    image: "/img/fruit_strawberry.png",
    description:
      "Sweet and juicy strawberries, perfect for a refreshing snack.",
  },
  {
    content: "Avocado",
    background: "#2D5643",
    image: "/img/fruit_avocado.png",
    description: "Creamy avocados, rich in healthy fats and nutrients.",
  },
  {
    content: "Orange",
    background: "#E7A043",
    image: "/img/fruit_orange.png",
    description: "Tangy and zesty oranges, packed with vitamin C.",
  },
];

export default function Hero({ children }: { children?: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const wrapperHeight = wrapperRef.current?.offsetHeight || 0;
    const scrollFactor = 0.8;
    const progress = Math.min(
      (scrollPosition * scrollFactor) / (wrapperHeight - windowHeight),
      1
    );
    setScrollProgress(progress);

    const newActive = Math.floor(progress * items.length);
    if (newActive !== active && newActive < items.length) {
      setActive(newActive);
    }

    const shouldFix =
      scrollPosition < (wrapperHeight - windowHeight) / scrollFactor;
    setIsFixed(shouldFix);

    if (carouselRef.current) {
      const translateY = shouldFix
        ? 0
        : Math.min(
            scrollPosition - (wrapperHeight - windowHeight) / scrollFactor,
            0
          );
      carouselRef.current.style.transform = `translateY(${translateY}px)`;
    }
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div ref={wrapperRef} className={styles.wrapper}>
        <header className="flex bg-[#FDFDF1] max-w-[90rem] mx-auto sticky top-3 z-[10000] items-center justify-between px-6 py-4">
          <div className="text-3xl font-bold text-[#39442B]">
            Adeeb Al-Junaidi
          </div>
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            {[
              "TREATMENTS",
              "ABOUT",
              "CONTACT",
              "RESEARCH",
              "PARTNERS",
              "LOGIN",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#39442B] hover:text-[#4a4a4a] transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#39442B] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
          <Button
            variant="outline"
            className="hidden md:inline-flex items-center border-[#39442B] text-[#000] hover:bg-[#39442B] hover:text-[#FDFDF1] transition-all duration-300 ease-in-out"
          >
            GET STARTED
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </header>

        <div
          className={`${styles.carousel} ${isFixed ? styles.fixed : ""}`}
          ref={carouselRef}
        >
          <div
            className={styles.progressLine}
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
          <div className={styles.list}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  index === active ? styles.active : ""
                }`}
                style={
                  {
                    "--background": item.background,
                    "--delay": `${index * 0.4}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.content}>{item.content}</div>
                <Image
                  src={item.image}
                  alt={item.content}
                  width={500}
                  height={500}
                  className={styles.fruit}
                />
                <div className={styles.description}>
                  <p>{item.description}</p>
                  <button className={styles.seeProduct}>See the Product</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.leaves}></div>
          <div
            className={styles.mockup}
            style={
              { "--left": `${scrollProgress * 100}%` } as React.CSSProperties
            }
          ></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
      <div ref={scrollRef}>{children}</div>
    </>
  );
}
