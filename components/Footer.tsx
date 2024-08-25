"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Twitter,
  ArrowUp,
  Globe,
  Phone,
  MailSearch,
  X,
} from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function AnimatedFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  const navItems = [
    { name: t("nav.home"), href: "home" },
    { name: t("nav.about"), href: "about" },
    { name: t("nav.ourStory"), href: "our-story" },
    { name: t("nav.services"), href: "services" },
    { name: t("nav.clients"), href: "clients" },
  ];

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643",
      label: "Facebook",
    },
    { Icon: X, href: "https://x.com/?lang=en", label: "Twitter" },
  ];

  const handleScroll = useCallback(() => {
    const footer = document.getElementById("animated-footer");
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsInView(footerPosition < windowHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="animated-footer"
      className={`bg-gradient-to-b from-white to-gray-100 text-gray-800 py-12 px-4 md:px-6 relative ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <nav>
            <h3 className="text-lg font-semibold mb-4">{t("navigation")}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={smoothScroll}
                    className="hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("insights")}</h3>
            <ul className="space-y-2">
              {[
                t("caseStudies"),
                t("thoughtLeadership"),
                t("news"),
                t("resources"),
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("about")}</h3>
            <ul className="space-y-2">
              {[t("team"), t("careers")].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <Link
              href="#contact"
              onClick={smoothScroll}
              className="inline-block bg-[#FF5C00] text-white py-2 px-6 rounded-md hover:bg-[#FF7D00] transition-colors duration-300"
            >
              {t("contactUs")}
            </Link>
            <address className="mt-6 space-y-1 not-italic">
              <p className="flex items-center gap-x-3">
                <Globe size={20} aria-hidden="true" /> {t("address")}
              </p>
              <p className="flex items-center gap-x-3">
                <Phone size={20} aria-hidden="true" />
                <a href="tel:+97259-994-0285">+972 59-994-0285</a>
              </p>
              <p className="flex items-center gap-x-3">
                <MailSearch size={20} aria-hidden="true" />
                <a href="mailto:info@juneidi.ps">info@juneidi.ps</a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 flex flex-col items-center">
          {locale === "ar" && (
            <motion.h2
              className="text-6xl md:text-6xl font-bold mb-8 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {t("companyName")}
            </motion.h2>
          )}

          {locale === "en" && (
            <motion.h2
              className="text-6xl md:text-8xl font-bold mb-8 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {t("companyName")
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
            </motion.h2>
          )}
          <div className="flex justify-between items-center w-full flex-wrap gap-4">
            <div className="flex space-x-4">
              {[t("privacyPolicy"), t("termsOfUse"), t("trust")].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm hover:text-gray-600"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} {t("copyright")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="hover:text-gray-600"
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.button
        onClick={goToTop}
        className={`fixed ${
          locale === "ar" ? "left-8" : "right-8"
        } bottom-8 bg-[#e6f0de] text-white p-3 rounded-full shadow-lg hover:bg-[#84C454] transition-colors duration-300`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={t("scrollToTop")}
      >
        <ArrowUp size={24} aria-hidden="true" />
      </motion.button>
    </footer>
  );
}
