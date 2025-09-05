

// This file defines the Heading component for titles and section headers.
// Heading supports different levels (h1-h6) and can be customized for any use case.
// To change the look of all headings, update the sizes object or className values below.
// If you see an error, check that the level is between 1 and 6, and that Heading is imported where needed.
// To debug, inspect the heading in your browser and check the applied styles.
// Anyone can update this file by following the comments and examples below.

import React from "react";

// HeadingProps lets you customize the heading's level, content, and style.
interface HeadingProps {
	text: string; // The text content for the heading
	level?: 1 | 2 | 3 | 4 | 5 | 6; // Heading level (h1-h6)
	className?: string; // Add extra CSS classes
}

// sizes defines the styles for each heading level. Update these to change font size or color for all headings.
const sizes = {
	1: "font-inter font-bold text-[#1E293B] leading-[1.1] text-[48px] md:text-[32px]",
	2: "font-inter font-bold text-[#1E293B] leading-[1.2] text-[36px] md:text-[28px]",
	3: "font-inter font-semibold text-[#1E293B] leading-[1.3] text-[24px] md:text-[20px]",
	4: "font-inter font-semibold text-[#1E293B] leading-[1.4] text-[20px] md:text-[18px]",
	5: "font-inter font-medium text-[#1E293B] leading-[1.5] text-[16px] md:text-[15px]",
	6: "font-inter font-medium text-[#1E293B] leading-[1.6] text-[14px] md:text-[13px]",
};

// Heading is a reusable component for titles and section headers. Change the styles below to update all headings.
const Heading: React.FC<HeadingProps> = ({ text, level = 1, className = "" }) => {
	// Tag determines which HTML heading element to use (h1-h6).
	const Tag = `h${level}` as React.ElementType;
	// Render the heading with the correct tag and styles.
	return React.createElement(Tag, { className: `${sizes[level] || sizes[1]} ${className}` }, text);
};

export default Heading;
