// This file defines the CardItem component used for displaying a single product card.
// CardItem shows the shoe image, name, price, description, color options, and add to cart button.
// If you want to change the look of all product cards, update the className values below.
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the card and see if it displays as expected.
// Anyone can update this file by following the comments and examples below.
import React, { useState } from "react";
import Card from "./Card";
import type { Item } from "../../items";

// CardItemProps lets you pass in the product info and addToCart function.
type CardItemProps = {
  item: Item;
  addToCart: (itemName: string, color: string, price: string) => void;
};

// CardItem is a reusable product card. Change the className to update the style for all product cards.
const CardItem: React.FC<CardItemProps> = ({ item, addToCart }) => {
  // This state tracks which color is selected for the shoe.
  const [selectedColor, setSelectedColor] = useState(item.colorOptions[0]?.color || "");
  // This finds the image for the selected color.
  const selectedImage = item.colorOptions.find(opt => opt.color === selectedColor)?.image || item.image;
  return (
    <Card>
      <div className="flex flex-col flex-grow w-full h-full justify-between">
        {/* Shoe image centered at top, matches selected color. Update the image or alt text to change branding. */}
        <img
          src={selectedImage}
          alt={item.name + ' ' + selectedColor}
          className="w-24 h-24 object-contain mb-4 mx-auto"
        />
        {/* Name and price row. Update the text to change product info. */}
        <div className="w-full flex flex-row items-center justify-between mb-2 px-1">
          <span className="text-[16px] font-semibold text-[#1E293B]">{item.name}</span>
          <span className="text-[#20B2AA] font-bold text-base">{item.price}</span>
        </div>
        {/* Description styled like a hamburger menu item. Update the text to change product info. */}
        <div className="w-full flex flex-col items-start bg-[#F8FAFC] rounded-lg px-3 py-2 shadow-sm mb-2">
          <span className="text-[15px] text-[#64748B] font-medium">{item.description}</span>
        </div>
        {/* Available colors - selectable. Add, remove, or update color options as needed. */}
        <div className="w-full flex flex-row items-center mb-2 px-1" style={{ gap: '20px' }}>
          {item.colorOptions.map((option) => (
            <div key={option.color} className="flex flex-col items-center">
              <button
                type="button"
                className={`w-7 h-7 border-2 mb-1 rounded-md focus:outline-none transition-all shadow-md ${selectedColor === option.color ? 'border-[#20B2AA] ring-2 ring-[#20B2AA]' : 'border-gray-400'} hover:border-4 hover:border-[#20B2AA] hover:shadow-xl hover:bg-gray-100`}
                style={{ backgroundColor: option.color.toLowerCase(), display: 'inline-block' }}
                aria-label={`Select color ${option.color}`}
                onClick={() => setSelectedColor(option.color)}
              ></button>
              <span className="text-xs text-[#64748B]">{option.color}</span>
            </div>
          ))}
        </div>
        {/* Add to cart button. Update the text or style as needed. */}
        <button
          className="w-full bg-[#20B2AA] hover:bg-[#159C97] text-white font-bold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:ring-offset-2 transition mb-1"
          onClick={() => addToCart(item.name, selectedColor, item.price)}
        >
          ADD TO CART
        </button>
      </div>
    </Card>
  );
};

export default CardItem;
