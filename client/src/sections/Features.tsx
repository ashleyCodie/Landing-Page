

// This file shows the Features section for the website.
// It displays the main features of the shoes and the ShoeStyle Athletics card.
// If you want to change the features, update the features array below.
// If you want to change the layout or style, edit the className values (these use Tailwind CSS).
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the page and see if cards show up as expected.
// Anyone can update this file by following the comments and examples below.
import React from "react";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";

// This array lists the features of the shoes. Update, add, or remove features here.
const features = [
  {
    title: "Lightweight Design",
    icon: <span role="img" aria-label="feather" className="text-3xl text-[#0D9488]">🪶</span>,
    description: "Run faster and longer with shoes engineered for minimal weight and maximum support.",
  },
  {
    title: "Durable Materials",
    icon: <span role="img" aria-label="shield" className="text-3xl text-[#0D9488]">🛡️</span>,
    description: "Built to last with premium fabrics and reinforced stitching for every adventure.",
  },
  {
    title: "Responsive Cushioning",
    icon: <span role="img" aria-label="cushion" className="text-3xl text-[#0D9488]">🦶</span>,
    description: "Experience comfort with every step thanks to advanced sole technology.",
  },
  {
    title: "Breathable Mesh",
    icon: <span role="img" aria-label="mesh" className="text-3xl text-[#0D9488]">🧦</span>,
    description: "Stay cool and dry with shoes designed for maximum airflow and comfort.",
  },
];

// This is the main Features component. It shows the ShoeStyle Athletics card and the feature cards.
// If you want to change the layout, update the JSX below. If you want to change the style, update the className values.
const Features: React.FC = () => (
  <section className="w-full py-16 bg-[#F8FAFC]">
    {/* Section title. Change the text to update the heading. */}
    <Heading text="Features" level={2} className="mb-8 text-center" />
    <div className="flex flex-col items-center w-full">
      {/* ShoeStyle Athletics card, logo at top center, text below. Update the text/image to change branding. */}
      <div className="w-full flex flex-col items-center bg-white border border-[#E2E8F0] rounded-[2rem] shadow p-8 mb-8">
        <div className="flex justify-center items-center w-32 h-32 bg-white/80 rounded-2xl shadow-lg mb-4">
          <img src="/assets/logo.png" alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <Heading text="ShoeStyle Athletics" level={2} className="mb-2 font-bold text-[#1E293B] text-center" />
        <p className="text-[#64748B] text-lg mb-2 text-center">Performance, comfort, and style for every step.</p>
      </div>
      {/* Feature cards in 2x2 grid. Update, add, or remove cards as needed. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">{features[0].icon}</div>
            <h3 className="text-lg font-bold mb-1">{features[0].title}</h3>
            <p className="text-[#64748B] text-base">{features[0].description}</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">{features[1].icon}</div>
            <h3 className="text-lg font-bold mb-1">{features[1].title}</h3>
            <p className="text-[#64748B] text-base">{features[1].description}</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">{features[2].icon}</div>
            <h3 className="text-lg font-bold mb-1">{features[2].title}</h3>
            <p className="text-[#64748B] text-base">{features[2].description}</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">{features[3].icon}</div>
            <h3 className="text-lg font-bold mb-1">{features[3].title}</h3>
            <p className="text-[#64748B] text-base">{features[3].description}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

export default Features;
