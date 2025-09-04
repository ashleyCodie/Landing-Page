
import React from "react";

function App() {
  // Example items for the shop
  const items = [
    {
      name: "Eco Water Bottle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Stay hydrated with this eco-friendly water bottle. Durable, stylish, and perfect for everyday use.",
    },
    {
      name: "Smart LED Bulb",
      price: 12.49,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      description: "Control your lighting from anywhere. Energy efficient and customizable colors.",
    },
    {
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Enjoy high-quality sound with noise cancellation and long battery life.",
    },
    {
      name: "Portable Charger",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
      description: "Charge your devices on the go. Compact, fast, and reliable.",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Shop Our Products</h1>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="px-4 pt-4 flex flex-row justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow">${item.price.toFixed(2)}</span>
              </div>
              <div className="px-4 pt-2 pb-4 flex-1">
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <button
                  className="w-full rounded-lg bg-green-500 text-white py-2 font-semibold shadow hover:bg-green-600 transition-colors"
                  onClick={() => alert(`Added ${item.name} to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
