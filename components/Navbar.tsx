"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  Facebook,
  Instagram,
  Linkedin,
  MenuIcon,
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { smoothScroll } from "@/lib/smoothScroll";

export default function Component() {
  const navItems = [
    { name: "HOME", href: "home" },
    { name: "ABOUT", href: "about" },
    { name: "OUR STORY", href: "our-story" },
    { name: "CAREERS", href: "#" },
    { name: "BRANDS", href: "brands" },
  ];
  const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2));
  const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2));
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.href)
      );
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="bg-white flex items-center justify-center relative top-0 z-[1000] px-6 py-4 shadow-md">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643"
              className="text-black hover:text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={24}
                className="transform hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/?lang=en"
              className="text-black hover:text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X
                size={24}
                className="transform hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com"
              className="text-black hover:text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={24}
                className="transform hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/feed"
              className="text-black hover:text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={24}
                className="transform hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
      <div className="container relative mx-auto flex items-center justify-around">
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={smoothScroll}
                className="text-black hover:text-gray-600 transition-colors duration-300 relative group"
              >
                {item.name}{" "}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-16">
          <div className="relative group">
            <Link href="/">
              <Image
                src="/Logo.jpg"
                alt="Logo"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 font-medium">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                onClick={smoothScroll}
                href={`#${item.href}`}
                className="text-black hover:text-gray-600 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-black hover:text-gray-600 transition-colors duration-300"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      <Button
            variant="outline"
            className="ml-4 bg-black text-white border-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            <Link
              className="flex items-center justify-center gap-x-1"
              href="#contact"
              onClick={smoothScroll}
            >
              Contact Us
              <ArrowRightIcon className="ml-2 h-4 w-4 animate-bounce" />
            </Link>
          </Button>
    </header>
  );
}
