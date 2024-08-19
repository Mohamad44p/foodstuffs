import AboutBanner from "@/components/AboutBanner";
import HeroSection from "@/components/HeroSlider/Hero";
import Hero from "@/components/HeroSlider/Hero";
import Navbar from "@/components/Navbar";
import ProductGr from "@/components/ProductGr";
import ProductShowSec from "@/components/ProductShowSec";
import SecSec from "@/components/SecSec";
import Timeline from "@/components/Timeline";
import VideoBanner from "@/components/VideoBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="h-auto  overflow-y-hidden">
        <SecSec />
      </div>
      <Timeline />
      <div className="bg-[#faf7f2]">
        <ProductGr />
      </div>
      <VideoBanner />
      <AboutBanner />
    </div>
  );
}
