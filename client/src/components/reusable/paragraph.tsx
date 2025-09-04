

import React from "react";

interface ParagraphProps {
	text: string;
	variant?: "body" | "small" | "caption";
	className?: string;
	as?: "p" | "span" | "div";
}

const variantStyles = {
	body: "font-inter text-[16px] leading-[1.5] font-normal text-[#1E293B]",
	small: "font-inter text-[14px] leading-[1.5] font-normal text-[#64748B]",
	caption: "font-inter text-[12px] leading-[1.5] font-normal text-[#94A3B8]",
};

const Paragraph: React.FC<ParagraphProps> = ({ text, variant = "body", className = "", as = "p" }) => {
	const Tag = as;
	return <Tag className={`${variantStyles[variant]} ${className}`}>{text}</Tag>;
};

export default Paragraph;


