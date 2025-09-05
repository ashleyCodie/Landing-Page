
import React from "react";
import Heading from "../components/reusable/Heading";
import Paragraph from "../components/reusable/paragraph";


const Footer: React.FC = () => (

  <footer className="w-full bg-[#F8FAFC] py-8 mt-12">
    <div className="max-w-5xl mx-auto flex flex-row items-center justify-between px-6">
      {/* Logo/brand stacked vertically (hamburger style) */}
      <div className="flex flex-col items-center gap-2 min-w-[180px]">
        <img src="/assets/logo.svg" alt="ShoeStyle Logo" className="h-10 w-10 mb-2" />
        <Heading text="ShoeStyle Athletics" level={4} className="font-medium text-[#64748B]" />
      </div>
      {/* Quick links stacked vertically (hamburger style) */}
      <div className="flex flex-col items-center gap-2 mx-auto">
        <a href="/products" className="font-medium text-[15px] text-[#0D9488] hover:underline">Products</a>
        <a href="/contact" className="font-medium text-[15px] text-[#0D9488] hover:underline">Contact</a>
        <a href="/cart" className="font-medium text-[15px] text-[#0D9488] hover:underline">Cart</a>
      </div>
      {/* Privacy/Terms flush right */}
      <div className="flex flex-col items-end gap-2 min-w-[180px]">
        <a href="/privacy" className="font-medium text-[14px] text-[#64748B] hover:underline">Privacy Policy</a>
        <a href="/terms" className="font-medium text-[14px] text-[#64748B] hover:underline">Terms of Service</a>
        <Paragraph text={`© ${new Date().getFullYear()} ShoeStyle Athletics. All rights reserved.`} variant="caption" as="span" className="font-medium mt-2 text-right" />
      </div>
    </div>
  </footer>
);

export default Footer;
