
import React from "react";

function App() {
  // Example items for the shop
  const items: Array<{ name: string; price: number; image: string; description: string }> = [];

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
