// =============================
// Home.tsx
// -----------------------------
// This file defines the Home page for the ShoeStyle site.
//
// How it works:
// - Uses React functional component syntax.
// - Displays the main hero section, features, and footer.
// - Uses Tailwind CSS for layout, colors, and spacing.
// - Imports and uses Hero, Features, and Footer components.
//
// How to update:
// - To change the hero section, update Hero.tsx.
// - To change the features section, update Features.tsx.
// - To change colors, spacing, or layout, update the className values (these use Tailwind CSS).
// - To debug, use your browser's developer tools to inspect the page and see how each part is rendered.
//
// If you see an error:
// - Make sure all imported components exist and are spelled correctly.
// - Check that the file paths in import statements match the actual file names (case-sensitive).
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================
// This file shows the Home page for the website.
// It displays the main hero section, features, and footer.
// If you want to change the layout or style, edit the className values (these use Tailwind CSS).
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the page and see if sections show up as expected.
// Anyone can update this file by following the comments and examples below.
// Import React and needed components for hero, features, and footer sections.
import React from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Footer from "../sections/Footer";


const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#A7F3D0]">
    <main className="flex-1 w-full text-center">
      {/* Hero section at the top. Update Hero.tsx to change its content. */}
      <Hero />
      {/* Features section below hero. Update Features.tsx to change its content. */}
      <div className="w-full bg-white rounded-t-3xl shadow-lg mt-[-3rem] pb-12">
        <Features />
      </div>
    </main>
    {/* Footer at the bottom of the page. Update Footer.tsx to change its content. */}
    <Footer />
  </div>
);

export default Home;
