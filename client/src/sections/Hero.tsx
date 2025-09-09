

// This file shows the Hero section for the website.
// It displays the main banner, logo, and call-to-action buttons.
// If you want to change the layout or style, edit the className values (these use Tailwind CSS).
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the page and see if the hero section shows up as expected.
// Anyone can update this file by following the comments and examples below.
import React from "react";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
// Removed import for public image. Use direct path in JSX.


// This is the main Hero component. It shows the logo, site name, heading, description, and buttons.
// If you want to change the layout, update the JSX below. If you want to change the style, update the className values.
const Hero: React.FC = () => (
  <section
    className="w-full min-h-[400px] flex items-center justify-center py-16 px-4 relative bg-cover bg-center bg-gray-200"
    style={{ backgroundImage: "url('/images/shoe2.jpg')" }}
    aria-label="Hero Banner"
  >
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
      {/* Logo and brand name side by side at top. Update the image or text to change branding. */}
      <div className="flex flex-row items-center justify-center gap-3 w-full mb-2">
        <div className="flex flex-col items-center w-full mb-2">
          <img src="/images/shoe36.jpg" alt="ShoeStyle Logo" className="h-32 w-32 mb-2" />
          <Heading text="ShoeStyle" level={1} className="text-center text-[100rem] text-teal-700 mb-0 font-extrabold tracking-tight" />
        </div>
      </div>
      {/* Heading and paragraph below logo. Update the text to change the main message. */}
  <Heading text="Step Into Performance" level={1} className="mb-4 font-bold text-[#1E293B] drop-shadow-lg text-center w-full" />
  <Paragraph text={"Discover the latest in athletic footwear engineered for comfort, style, and speed.\nShoeStyle Athletics brings you the best for every run, every trail, every day."} variant="body" className={"mb-2 text-black text-6xl font-extrabold tracking-wide drop-shadow-lg mx-auto text-center whitespace-pre-line"} />
      {/* Buttons centered below paragraph. Update the text or add more buttons as needed. */}
      <div className="flex flex-row gap-4 mb-4 items-center justify-center w-full">
        <Button variant="primary" size="lg" className="shadow-lg w-48">Shop Now</Button>
        <Button variant="secondary" size="lg" className="shadow-lg w-48">Learn More</Button>
      </div>
    </div>
  </section>
);

export default Hero;
