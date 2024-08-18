import Hero from "@/components/HeroSlider/Hero";
import ProductGr from "@/components/ProductGr";
import ProductShowSec from "@/components/ProductShowSec";
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
          <ProductShowSec />
        </div>
        <div className="bg-[#faf7f2]">
          <ProductGr />
        </div>
      </Hero>
    </div>
  );
}
