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
} from "lucide-react";
import { useEffect, useState } from "react";
import { smoothScroll } from "@/lib/smoothScroll";

export default function Component() {
  const navItems = [
    { name: "HOME", href: "home" },
    { name: "ABOUT", href: "about" },
    { name: "OUR STORY", href: "our-story" },
    { name: "SERVICES", href: "services" },
    { name: "CLIENTS", href: "clients" },
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
    <header className="bg-white relative top-0 z-[1000] px-6 py-4 shadow-md">
      <div className="container relative mx-auto flex items-center justify-between">
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
          <div className="hidden md:flex items-center space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-black hover:text-gray-600 transition-colors duration-300"
              >
                <Icon
                  size={24}
                  className="transform hover:scale-110 transition-transform duration-300"
                />
                <span className="sr-only">Social Media Link</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-16">
          <div className="relative group">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
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
    </header>
  );
}
