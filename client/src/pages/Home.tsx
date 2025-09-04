import React from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Footer from "../sections/Footer";


const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#A7F3D0]">
    <main className="flex-1 w-full text-center">
      <Hero />
      <div className="w-full bg-white rounded-t-3xl shadow-lg mt-[-3rem] pb-12">
        <Features />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
