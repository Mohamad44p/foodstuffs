"use client";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSlider/Hero";
import SectionLoader from "@/components/SectionLoader";

const SecSec = lazy(() => import("@/components/SecSec"));
const Timeline = lazy(() => import("@/components/Timeline"));
const VideoBanner = lazy(() => import("@/components/VideoBanner"));
const AboutBanner = lazy(() => import("@/components/AboutBanner"));
const ContactUs = lazy(() => import("@/components/ContactUs"));

export default function AllSections({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header id="home" className="bg-background relative z-10">
        <Navbar />
        <HeroSection />
      </header>

      <Suspense fallback={<SectionLoader title="Loading About Section" />}>
        <section id="about" className="h-auto overflow-y-hidden">
          <SecSec />
        </section>
      </Suspense>

      <Suspense
        fallback={<SectionLoader title="Loading Our Story" color="#2196F3" />}
      >
        <section id="our-story" aria-label="Our Story Timeline">
          <Timeline />
        </section>
      </Suspense>

      <Suspense
        fallback={<SectionLoader title="Loading Brands" color="#FF5722" />}
      >
        <section id="brands" className="bg-[#faf7f2]" aria-label="Our Brands">
          {children}
        </section>
      </Suspense>

      <Suspense
        fallback={<SectionLoader title="Loading Video" color="#9C27B0" />}
      >
        <VideoBanner />
      </Suspense>

      <Suspense
        fallback={
          <SectionLoader title="Loading About Banner" color="#FF9800" />
        }
      >
        <AboutBanner />
      </Suspense>

      <Suspense
        fallback={
          <SectionLoader title="Loading Contact Form" color="#607D8B" />
        }
      >
        <section id="contact" aria-label="Contact Us">
          <ContactUs />
        </section>
      </Suspense>
    </main>
  );
}
