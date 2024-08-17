import { FeaturesSectionDemo } from "@/components/FeaturesSection";
import Hero from "@/components/HeroSlider/Hero";
import SecSec from "@/components/SecSec";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero>
        <div className="h-screen overflow-x-hidden">
          <SecSec />
        </div>
        <div className="h-auto overflow-y-hidden">
          <FeaturesSectionDemo />
        </div>
      </Hero>
    </div>
  );
}
