import React from "react";

export type Item = {
  name: string;
  price: number;
  image: string;
  description: string;
};

const items: Item[] = [
  // Example: Uncomment and add your items here
  // {
  //   name: "Eco Water Bottle",
  //   price: 19.99,
  //   image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  //   description: "Stay hydrated with this eco-friendly water bottle. Durable, stylish, and perfect for everyday use.",
  // },
];

export default items;
