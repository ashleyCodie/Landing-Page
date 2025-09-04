// src/App.tsx
// ...existing code...
// No reusable imports



function App() {
  const cards = [
    {
      title: "Product One",
      itemName: "Eco Water Bottle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Stay hydrated with this eco-friendly water bottle. Durable, stylish, and perfect for everyday use.",
    },
    {
      title: "Feature Two",
      itemName: "Smart LED Bulb",
      price: 12.49,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      description: "Control your lighting from anywhere. Energy efficient and customizable colors.",
    },
    {
      title: "Product Three",
      itemName: "Wireless Headphones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Enjoy high-quality sound with noise cancellation and long battery life.",
    },
    {
      title: "Feature Four",
      itemName: "Portable Charger",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
      description: "Charge your devices on the go. Compact, fast, and reliable.",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-50">

      <div className="w-full mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="px-4 pt-4 flex flex-row justify-between items-center">
                <h3 className="text-lg font-semibold">{card.itemName}</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow">${typeof card.price === "number" ? card.price.toFixed(2) : card.price}</span>
              </div>
              <div className="px-4 pt-2 pb-4 flex-1">
                <p className="text-gray-600">{card.description}</p>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <button
                  className="w-full rounded-lg bg-green-500 text-white py-2 font-semibold shadow hover:bg-green-600 transition-colors"
                  onClick={() => alert(`Added ${card.itemName} to cart!`)}
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
