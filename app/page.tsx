import AboutBanner from "@/components/AboutBanner";
import ClientsPage from "@/components/ClientsList";
import ContactUs from "@/components/ContactUs";
import { HeroSection } from "@/components/HeroSlider/Hero";
import { Usps } from "@/components/HeroSlider/Usps";
import Navbar from "@/components/Navbar";
import ProductShowSec from "@/components/ProductShowSec";
import SecSec from "@/components/SecSec";
import Timeline from "@/components/Timeline";
import VideoBanner from "@/components/VideoBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <div id="home" className="bg-background relative z-10">
        <HeroSection />
        <Usps />
      </div>
      <div id="about" className="h-auto  overflow-y-hidden">
        <SecSec />
      </div>
      <div id="our-story">
        <Timeline />
      </div>
      <div id="clients" className="bg-[#faf7f2]">
        <ClientsPage />
      </div>
      <VideoBanner />
      <AboutBanner />
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}
