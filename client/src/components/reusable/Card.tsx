import React from "react";

import Paragraph from "./paragraph";
import Button from "./Button";

interface CardProps {
  title: string;
  image: string;
  description: string;
  itemName: string;
  price: string | number;
  onAddToCart?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, description, itemName, price, onAddToCart }) => {
  return (
    <div className="rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="px-4 pt-4 flex flex-row justify-between items-center">
        <h3 className="text-lg font-semibold">{itemName}</h3>
        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow">${typeof price === "number" ? price.toFixed(2) : price}</span>
      </div>
      <div className="px-4 pt-2 pb-4 flex-1">
        <Paragraph text={description} className="text-gray-600" />
      </div>
      <div className="px-4 pb-4 mt-auto">
        <Button
          text="Add to Cart"
          onClick={onAddToCart || (() => {})}
          variant="primary"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Card;
