

import React from "react";
import Heading from "../components/reusable/Heading";
import Card from "../components/reusable/Card";

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

const Features: React.FC = () => (
  <section className="w-full py-16 bg-[#F8FAFC]">
    <Heading text="Features" level={2} className="mb-8 text-center" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* ShoeStyle Athletics card, logo at top center, text below */}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center bg-white border border-[#E2E8F0] rounded-[2rem] shadow p-8 mb-8">
        <div className="flex justify-center items-center w-32 h-32 bg-white/80 rounded-2xl shadow-lg mb-4">
          <img src="/assets/logo.png" alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <Heading text="ShoeStyle Athletics" level={2} className="mb-2 font-bold text-[#1E293B] text-center" />
        <p className="text-[#64748B] text-lg mb-2 text-center">Performance, comfort, and style for every step.</p>
      </div>
      {/* Feature cards, logo/icon at top center, title below, description below, all centered */}
      {features.map((feature, idx) => (
        <Card key={idx}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
            <p className="text-[#64748B] text-base">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Features;
