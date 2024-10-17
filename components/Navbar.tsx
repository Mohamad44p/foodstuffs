'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRightIcon,
  Facebook,
  Instagram,
  Linkedin,
  AlignLeft,
  X,
} from "lucide-react"
import { useEffect, useMemo, useState, useCallback } from "react"
import { smoothScroll } from "@/lib/smoothScroll"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import LocalSwitcher from "./local-switcher"

const socialLinks = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%AF%D9%8A%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%AF%D9%8A-%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%A6%D9%87-%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9/100057638731643",
    label: "Facebook",
  },
  { Icon: X, href: "https://x.com/?lang=en", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
]

export default function Navbar() {
  const t = useTranslations("navbar")
  const locale = useLocale()

  const navItems = useMemo(
    () => [
      { name: t("home"), href: "home" },
      { name: t("about"), href: "about" },
      { name: t("ourStory"), href: "our-story" },
      { name: t("careers"), href: "#" },
      { name: t("brands"), href: "brands" },
    ],
    [t]
  )

  const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2))
  const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2))

  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150
    for (let i = navItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(navItems[i].href)
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].href)
        break
      }
    }
  }, [navItems])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 100% 0%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: { type: "spring", stiffness: 100, damping: 30 },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className={`flex items-center bg-white justify-between relative top-0 left-0 right-0 z-[1000] px-4 sm:px-6 md:py-0 py-2 ${locale === "ar" ? "rtl" : "ltr"
        }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="lg:hidden text-black hover:text-gray-800 transition-colors duration-300"
          aria-label={t("openMenu")}
        >
          <AlignLeft className="h-6 w-6" aria-hidden="true" />
        </Button>

        <div className={`hidden lg:flex items-center ${locale === "ar" ? "space-x-reverse space-x-6" : "space-x-6"}`}>
          {socialLinks.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-black transition-colors duration-300"
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
      </div>

      <div className="hidden lg:flex flex-1 justify-center items-center">
        <nav className={`flex items-center ${locale === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
          {leftNavItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={smoothScroll}
              className={`text-black font-medium hover:text-gray-800 transition-colors duration-300 relative group ${activeSection === item.href ? "text-white font-bold" : ""
                }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        <Link href="/" className="relative group mx-8">
          <div className="relative flex top-10 -mt-8 -mb-8">
            <Image
              src="/Logo.jpg"
              alt={t("logoAlt")}
              width={150}
              height={150}
              className="rounded-full border-4 border-white transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        <nav className={`flex items-center ${locale === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
          {rightNavItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={smoothScroll}
              className={`text-black font-medium hover:text-gray-800 transition-colors duration-300 relative group ${activeSection === item.href ? "text-black font-bold" : ""
                }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
      </div>

      <div className={`flex items-center ${locale === "ar" ? "space-x-reverse space-x-6" : "space-x-6"}`}>
        <Button
          variant="outline"
          className="hidden lg:flex bg-[#86C353] text-[#fff] border-white hover:bg-[#64933e] hover:text-[#000] transition-colors duration-300"
        >
          <Link
            className={`flex items-center justify-center ${locale === "ar" ? "flex-row-reverse" : ""}`}
            href="#contact"
            onClick={smoothScroll}
          >
            {t("contactUs")}
            <ArrowRightIcon
              className={`${locale === "ar" ? "ml-2 rotate-180" : "mr-2"
                } h-4 w-4 animate-bounce`}
              aria-hidden="true"
            />
          </Link>
        </Button>
        <div className="hidden lg:block text-black">
          <LocalSwitcher />
        </div>
        <Link href="/" className="relative group lg:hidden">
          <div className="w-12 h-12 relative">
            <Image
              src="/Logo.jpg"
              alt={t("logoAlt")}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-gradient-to-br from-[#86C353] via-[#68A641] to-[#4A8A2F] bg-opacity-95 z-50 lg:hidden flex items-center justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black hover:text-gray-800 transition-colors duration-300"
              aria-label={t("closeMenu")}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
            <motion.nav className="flex flex-col items-center space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    smoothScroll(e)
                    toggleMenu()
                  }}
                  className={`text-white text-2xl font-bold hover:text-gray-200 transition-colors duration-300 ${activeSection === item.href ? "text-white" : ""
                    }`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                className={`flex ${locale === "ar" ? "space-x-reverse space-x-8" : "space-x-8"} mt-6`}
                variants={itemVariants}
                transition={{ delay: navItems.length * 0.1 }}
              >
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-white hover:text-gray-200 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={28} aria-hidden="true" />
                  </Link>
                ))}
              </motion.div>
              <motion.div
                variants={itemVariants}
                transition={{ delay: (navItems.length + 2) * 0.1 }}
                className="text-white"
              >
                <LocalSwitcher />
              </motion.div>
              <motion.div
                variants={itemVariants}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="mt-2 bg-white text-[#86C353] border-white hover:bg-[#86C353] hover:text-white transition-colors duration-300"
                >
                  <Link
                    className={`flex items-center justify-center ${locale === "ar" ? "flex-row-reverse" : ""}`}
                    href="#contact"
                    onClick={(e) => {
                      smoothScroll(e)
                      toggleMenu()
                    }}
                  >
                    {t("contactUs")}
                    <ArrowRightIcon
                      className={`${locale === "ar" ? "ml-2 rotate-180" : "mr-2"
                        } h-4 w-4 animate-bounce`}
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}