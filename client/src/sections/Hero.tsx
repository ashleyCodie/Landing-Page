

import React from "react";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/paragraph";
import Button from "../components/ui/Button";

const Hero: React.FC = () => (
  <section
    className="w-full min-h-[400px] flex items-center justify-center py-16 px-4 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    aria-label="Hero Banner"
  >
    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
      {/* Logo and brand name side by side at top */}
      <div className="flex flex-row items-center justify-center gap-3 w-full mb-2">
        <img src="/assets/logo.svg" alt="ShoeStyle Logo" className="h-16 w-16" />
        <Heading text="ShoeStyle" level={2} className="text-teal-700 mb-0 font-bold tracking-tight" />
      </div>
      {/* Quick links horizontally */}
      <div className="flex flex-row items-center justify-center gap-8 w-full mb-2">
        <a href="/products" className="font-medium text-[15px] text-[#0D9488] hover:underline">Products</a>
        <a href="/contact" className="font-medium text-[15px] text-[#0D9488] hover:underline">Contact</a>
        <a href="/cart" className="font-medium text-[15px] text-[#0D9488] hover:underline">Cart</a>
      </div>
      {/* Heading and paragraph below links */}
      <Heading text="Step Into Performance" level={1} className="mb-2 font-bold text-[#1E293B] drop-shadow-lg text-center w-full" />
      <Paragraph text="Discover the latest in athletic footwear engineered for comfort, style, and speed. ShoeStyle Athletics brings you the best for every run, every trail, every day." variant="body" className="mb-4 text-[#64748B] mx-auto text-center w-full" />
      {/* Buttons centered below paragraph */}
      <div className="flex flex-row gap-4 mb-4 items-center justify-center w-full">
        <Button text="Shop Now" variant="primary" size="lg" className="shadow-lg w-48" />
        <Button text="Learn More" variant="link" size="lg" className="shadow-lg w-48" />
      </div>
    </div>
  </section>
);

export default Hero;
