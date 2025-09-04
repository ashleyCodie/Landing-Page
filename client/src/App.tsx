import items from "./items";
import type { Item } from "./items";

import React, { useState } from "react";

function App() {
  const [selectedColors, setSelectedColors] = useState<{ [idx: number]: string }>({});

  const handleColorSelect = (idx: number, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [idx]: color }));
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Shop Our Products</h1>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item: Item, idx: number) => {
            const selectedColor = selectedColors[idx] || (item.colorOptions ? item.colorOptions[0] : undefined);
            const imageSrc = selectedColor && item.colorImages && item.colorImages[selectedColor] ? item.colorImages[selectedColor] : item.image;
            return (
              <div key={idx} className="rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
                <img
                  src={imageSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="px-4 pt-4 flex flex-row justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow">${item.price.toFixed(2)}</span>
                </div>
                <div className="px-4 pt-2 pb-2 flex-1">
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {item.colorOptions && item.colorOptions.length > 0 && (
                  <div className="px-4 pb-2">
                    <span className="block text-sm font-medium text-gray-700 mb-1">Color Options:</span>
                    <div className="flex gap-2 flex-wrap">
                      {item.colorOptions.map((color, cidx) => (
                        <button
                          key={cidx}
                          className={`px-2 py-1 rounded text-xs font-semibold border ${selectedColor === color ? "bg-green-500 text-white border-green-600" : "bg-gray-200 text-gray-800 border-gray-300"}`}
                          onClick={() => handleColorSelect(idx, color)}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="px-4 pb-4 mt-auto">
                  <button
                    className="w-full rounded-lg bg-green-500 text-white py-2 font-semibold shadow hover:bg-green-600 transition-colors"
                    onClick={() => alert(`Added ${item.name} (${selectedColor}) to cart!`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
