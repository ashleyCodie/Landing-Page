export type Item = {
  name: string;
  price: number;
  image: string;
  description: string;
  colorOptions?: string[];
  colorImages?: { [color: string]: string };
};

const items: Item[] = [
  {
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80", // default image
    description: "Lightweight running shoes with enhanced cushioning for maximum comfort.",
    colorOptions: ["Red", "White", "Blue"],
    colorImages: {
      Red: "https://images.unsplash.com/photo-1515548212735-6c2e1e8b8b43?auto=format&fit=crop&w=400&q=80", // Red running shoes
      White: "https://images.unsplash.com/photo-1528701800484-905909a1e8e0?auto=format&fit=crop&w=400&q=80", // White running shoes
      Blue: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Blue running shoes
    },
  },
];

export default items;