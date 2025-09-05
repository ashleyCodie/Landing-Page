

import React from "react";

// ButtonProps lets you customize the button's content, style, and behavior.
type ButtonProps = {
	children: React.ReactNode; // The text or elements inside the button
	onClick?: () => void; // Function to run when clicked
	variant?: "primary" | "secondary"; // Choose button style
	size?: "sm" | "md" | "lg"; // Choose button size
	className?: string; // Add extra CSS classes
	type?: "button" | "submit" | "reset"; // Button type
	disabled?: boolean; // Disable the button
};

// Button is a reusable component for clickable actions. Change the styles below to update all buttons.
const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = "primary",
	size = "md",
	className = "",
	type = "button",
	disabled = false,
}) => {
	// This file defines the Button component used throughout the site for clickable actions.
	// Button supports different styles (variant), sizes, and can be customized for any use case.
	// To change the look of all buttons, update the className values below.
	// If you see an error, check that all props are passed correctly and that the Button is imported where needed.
	// To debug, inspect the button in your browser and check the combinedStyle variable for correct classes.
	// Anyone can update this file by following the comments and examples below.

	// Set base styles for the button. Update here to change the shape or font for all buttons.
	let baseStyle =
		"font-bold rounded-lg focus:outline-none transition-all duration-150 shadow-sm";
	// Set variant styles. Update colors here to change the theme for all buttons.
	let variantStyle =
		variant === "primary"
			? "bg-[#20B2AA] text-white hover:bg-[#159C97] focus:ring-2 focus:ring-[#20B2AA]"
			: "bg-[#F8FAFC] text-[#20B2AA] border border-[#20B2AA] hover:bg-[#E0F7F6] focus:ring-2 focus:ring-[#20B2AA]";
	// Set size styles. Update padding and font size here to change button sizes.
	let sizeStyle =
		size === "sm"
			? "px-3 py-1 text-sm"
			: size === "lg"
			? "px-6 py-3 text-lg"
			: "px-4 py-2 text-base";
	// Combine all styles. If you want to add more styles, update combinedStyle.
	const combinedStyle = `${baseStyle} ${variantStyle} ${sizeStyle} ${className}`;

	return (
		<button
			type={type}
			className={combinedStyle}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;

  
