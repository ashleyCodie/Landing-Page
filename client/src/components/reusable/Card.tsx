

import React from "react";


interface CardProps {
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div
			className="bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-6 w-64 flex flex-col items-center justify-start font-sans transition-all duration-200 hover:shadow-2xl hover:scale-105 hover:border-[#20B2AA] cursor-pointer"
			style={{ height: '300px' }}
		>
			{children}
		</div>
	);
};

export default Card;


