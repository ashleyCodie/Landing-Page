
import React, { useState } from "react";
import items from "../items.tsx";
import Footer from "../sections/Footer";
import Card from "../components/ui/Card.tsx";
import CardItem from "../components/ui/CardItem.tsx";

const shoeTypes = [
  "All", "Runner", "Trail", "Sneaker", "Cushion", "Mesh", "Sprint", "Marathon", "Street", "Trainer", "Leather", "Flex", "Power", "Court", "Terrain", "Slip-On"
];
const genders = ["All", "Men", "Women", "Children"];

function getShoeType(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("runner")) return "Runner";
  if (lower.includes("trail")) return "Trail";
  if (lower.includes("sneaker") || lower.includes("urban") || lower.includes("street")) return "Sneaker";
  if (lower.includes("cushion")) return "Cushion";
  if (lower.includes("mesh")) return "Mesh";
  if (lower.includes("sprint")) return "Sprint";
  if (lower.includes("marathon")) return "Marathon";
  if (lower.includes("trainer")) return "Trainer";
  if (lower.includes("leather")) return "Leather";
  if (lower.includes("flex")) return "Flex";
  if (lower.includes("power")) return "Power";
  if (lower.includes("court")) return "Court";
  if (lower.includes("terrain")) return "Terrain";
  if (lower.includes("slip-on")) return "Slip-On";
  return "Other";
}


export type ProductsProps = {
  addToCart: (itemName: string, color: string, price: string) => void;
  cart: { name: string; color: string; price: string }[];
  confirmation: string;
};

const Products: React.FC<ProductsProps> = ({ addToCart, confirmation }) => {
  const [search, setSearch] = useState("");
  const [shoeType, setShoeType] = useState("All");
  const [gender, setGender] = useState("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    const type = getShoeType(item.name);
    const matchesType = shoeType === "All" || type === shoeType;
    let matchesGender = true;
    if (gender === "Men") {
      matchesGender = item.name.includes("(Men)");
    } else if (gender === "Women") {
      matchesGender = item.name.includes("(Women)");
    } else if (gender === "Children") {
      matchesGender = item.name.includes("(Children)");
    }
    return matchesSearch && matchesType && matchesGender;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#A7F3D0]">
      {/* NavBar removed to prevent double rendering; handled by App */}
      {confirmation && (
        <div className="flex justify-center mt-2 mb-4">
          <div className="flex items-center gap-2 bg-[#20B2AA] text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold animate-bounce">
            <span className="text-2xl">✔️</span>
            <span>{confirmation}</span>
          </div>
        </div>
      )}
      <main className="flex-1 max-w-7xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">Our Products</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
          />
          <select value={shoeType} onChange={e => setShoeType(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-[#0D9488]">
            {shoeTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <select value={gender} onChange={e => setGender(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-[#0D9488]">
            {genders.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        {/* Static demo card at top */}
        <div className="flex justify-center mb-8">
          <div className="flex-[1_1_22%] max-w-[22%] min-w-[250px] flex p-6">
            <Card>
              <div className="flex flex-col flex-grow w-full h-full justify-between">
                <img
                  src="https://images.unsplash.com/photo-1517263904808-5dc0d6e1ad81?auto=format&fit=crop&w=400&q=80"
                  alt="Shoe"
                  className="w-24 h-24 object-contain mb-4 mx-auto"
                />
                <div className="w-full flex flex-row items-center justify-between mb-2 px-1">
                  <span className="text-[16px] font-semibold text-[#1E293B]">Air Comfort Pro</span>
                  <span className="text-[#20B2AA] font-bold text-base">$129.99</span>
                </div>
                <div className="w-full flex flex-col items-start bg-[#F8FAFC] rounded-lg px-3 py-2 shadow-sm mb-2">
                  <span className="text-[15px] text-[#64748B] font-medium">lightweight running shoes with enhanced cushioning for maximum comfort.</span>
                </div>
                <div className="w-full flex flex-row items-center mb-2 px-1" style={{ gap: '20px' }}>
                  <div className="flex flex-col items-center">
                    <button type="button" className="w-7 h-7 border-2 border-gray-400 mb-1 rounded-md bg-black focus:outline-none transition-all shadow-md hover:border-4 hover:border-[#20B2AA] hover:shadow-xl hover:bg-gray-100"></button>
                    <span className="text-xs text-[#64748B]">Black</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <button type="button" className="w-7 h-7 border-2 border-gray-400 mb-1 rounded-md bg-white focus:outline-none transition-all shadow-md hover:border-4 hover:border-[#20B2AA] hover:shadow-xl hover:bg-gray-100"></button>
                    <span className="text-xs text-[#64748B]">White</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <button type="button" className="w-7 h-7 border-2 border-gray-400 mb-1 rounded-md bg-red-600 focus:outline-none transition-all shadow-md hover:border-4 hover:border-[#20B2AA] hover:shadow-xl hover:bg-gray-100"></button>
                    <span className="text-xs text-[#64748B]">Red</span>
                  </div>
                </div>
                <button
                  className="w-full bg-[#20B2AA] hover:bg-[#159C97] text-white font-bold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:ring-offset-2 transition mb-1"
                  onClick={() => addToCart('Air Comfort Pro', '', '$129.99')}
                >
                  ADD TO CART
                </button>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center items-stretch">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex-[1_1_22%] max-w-[22%] min-w-[250px] flex p-6">
              <CardItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

// ...existing code...
