

import React from "react";

// This file defines the Paragraph component for displaying text in various styles.
// The component supports different variants and can be customized with additional CSS classes.
// To change the appearance of paragraphs, modify the variantStyles object below.
// If you encounter an error, ensure the variant is correctly specified and that the component is imported properly.
// For debugging, inspect the rendered element in your browser and check the applied styles.
// Follow the comments in this file to make updates easily.

interface ParagraphProps {
	text: string; // The text content to display in the paragraph
	variant?: "body" | "small" | "caption"; // The style variant of the paragraph
	className?: string; // Additional CSS classes to apply
	as?: "p" | "span" | "div"; // The HTML tag to use for rendering
}

// variantStyles defines the styles for each paragraph variant.
const variantStyles = {
	body: "font-inter text-[16px] leading-[1.5] font-normal text-[#1E293B]", // Body text style
	small: "font-inter text-[14px] leading-[1.5] font-normal text-[#64748B]", // Small text style
	caption: "font-inter text-[12px] leading-[1.5] font-normal text-[#94A3B8]", // Caption text style
};

// Paragraph is a reusable component that renders text with specified styles.
const Paragraph: React.FC<ParagraphProps> = ({ text, variant = "body", className = "", as = "p" }) => {
	const Tag = as; // Determine the HTML tag to use
	return <Tag className={`${variantStyles[variant]} ${className}`}>{text}</Tag>; // Render the paragraph with styles
};

export default Paragraph;


