"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  Facebook,
  Instagram,
  Linkedin,
  AlignLeft,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, useCallback } from "react";
import { smoothScroll } from "@/lib/smoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LocalSwitcher from "./local-switcher";

const socialLinks = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643",
    label: "Facebook",
  },
  { Icon: X, href: "https://x.com/?lang=en", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();

  const navItems = useMemo(
    () => [
      { name: t("home"), href: "home" },
      { name: t("about"), href: "about" },
      { name: t("ourStory"), href: "our-story" },
      { name: t("careers"), href: "#" },
      { name: t("brands"), href: "brands" },
    ],
    [t]
  );

  const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2));
  const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2));
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150;
    for (let i = navItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(navItems[i].href);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].href);
        break;
      }
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 0% 0%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      clipPath: "circle(150% at 0% 0%)",
      transition: { type: "spring", stiffness: 100, damping: 30 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`flex items-center justify-between relative top-0 z-[1000] px-6 py-4 shadow-md ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="lg:hidden text-black hover:text-gray-600 transition-colors duration-300"
        aria-label={t("changeLanguage")}
      >
        <AlignLeft className="h-6 w-6" aria-hidden="true" />
      </Button>

      <div className="flex items-center justify-between gap-x-[15rem]">
        <div className="hidden lg:flex items-center space-x-4">
          {socialLinks.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-black hover:text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon
                size={24}
                className="transform hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <nav className="hidden lg:flex items-center gap-x-6">
          {leftNavItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={smoothScroll}
              className={`text-black font-medium hover:text-gray-600 transition-colors duration-300 relative group`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-20">
          <Link href="/" className="relative group">
            <Image
              src="/Logo.jpg"
              alt={t("logoAlt")}
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105
            w-16 h-16 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-36 lg:h-36"
            />
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-x-6">
          {rightNavItems.map((item) => (
            <a
              key={item.name}
              onClick={smoothScroll}
              href={`#${item.href}`}
              className={`text-black font-medium hover:text-gray-600 transition-colors duration-300 relative group`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          className="hidden lg:flex mx-4 bg-black text-white border-black hover:bg-white hover:text-black transition-colors duration-300"
        >
          <Link
            className="flex items-center justify-center gap-x-1"
            href="#contact"
            onClick={smoothScroll}
          >
            {t("contactUs")}
            <ArrowRightIcon
              className={`${
                locale === "ar" ? "mr-2" : "ml-2"
              } h-4 w-4 animate-bounce`}
              aria-hidden="true"
            />
          </Link>
        </Button>
        <LocalSwitcher />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 lg:hidden flex items-center justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label={t("closeMenu")}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
            <motion.nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    smoothScroll(e);
                    toggleMenu();
                  }}
                  className="text-white text-3xl font-bold hover:text-gray-300 transition-colors duration-300"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                className="flex space-x-6  mt-8"
                variants={itemVariants}
                transition={{ delay: navItems.length * 0.1 }}
              >
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={32} aria-hidden="true" />
                  </Link>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}