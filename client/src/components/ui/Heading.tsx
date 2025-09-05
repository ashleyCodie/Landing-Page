

import React from "react";


interface HeadingProps {
	text: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
}

const sizes = {
	1: "font-inter font-bold text-[#1E293B] leading-[1.1] text-[48px] md:text-[32px]",
	2: "font-inter font-bold text-[#1E293B] leading-[1.2] text-[36px] md:text-[28px]",
	3: "font-inter font-semibold text-[#1E293B] leading-[1.3] text-[24px] md:text-[20px]",
	4: "font-inter font-semibold text-[#1E293B] leading-[1.4] text-[20px] md:text-[18px]",
	5: "font-inter font-medium text-[#1E293B] leading-[1.5] text-[16px] md:text-[15px]",
	6: "font-inter font-medium text-[#1E293B] leading-[1.6] text-[14px] md:text-[13px]",
};

const Heading: React.FC<HeadingProps> = ({ text, level = 1, className = "" }) => {
	const Tag = `h${level}` as React.ElementType;
	return React.createElement(Tag, { className: `${sizes[level] || sizes[1]} ${className}` }, text);
};

export default Heading;
