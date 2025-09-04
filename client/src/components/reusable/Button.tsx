

import React from "react";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	variant?: "primary" | "link";
	size?: "sm" | "md" | "lg";
	className?: string;
	type?: "button" | "submit" | "reset";
}

const variantStyles = {
	primary:
		"bg-[#0D9488] text-white font-inter font-medium text-[16px] rounded-[8px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0C827A] hover:bg-[#0C827A]",
	link:
		"bg-transparent text-[#0D9488] underline font-inter font-medium text-[16px] rounded-[8px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0C827A] hover:text-[#0C827A]",
};

const sizeStyles = {
	sm: "px-2 py-1 text-[16px] h-8 min-w-[64px]",
	md: "px-3 py-2 text-[16px] h-12 min-w-[80px]",
	lg: "px-4 py-3 text-[16px] h-16 min-w-[96px]",
};

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	variant = "primary",
	size = "md",
	className = "",
	type = "button",
}) => (
	<button
		type={type}
		onClick={onClick}
		className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
	>
		{text}
	</button>
);

export default Button;

  
