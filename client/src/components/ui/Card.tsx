

// This file defines the Card component used for displaying content in a styled box.
// Cards are used throughout the site for features, products, and contact info.
// If you want to change the look of all cards, update the className below.
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the card and see if it displays as expected.
// Anyone can update this file by following the comments and examples below.
import React from "react";

// CardProps lets you put any content inside the card.
interface CardProps {
	children?: React.ReactNode;
}

// Card is a reusable box for displaying content. Change the className to update the style for all cards.
const Card: React.FC<CardProps> = ({ children }) => {
	return (
		       <div
			       className="bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-8 w-[340px] min-h-[400px] flex flex-col items-center justify-between font-sans transition-all duration-200 hover:shadow-2xl hover:scale-105 hover:border-[#20B2AA] cursor-pointer"
		       >
			       {children}
		       </div>
	);
};

export default Card;


