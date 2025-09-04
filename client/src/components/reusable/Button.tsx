import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary", // Default to primary
  className = "",
}) => {

  // Define what each variant means
  const variantStyles = {
    // Use Tailwind's closest sea green: bg-green-500, or customize with a hex code if needed
    primary: "bg-green-500 text-white hover:bg-green-600 border border-green-500",
    secondary: "bg-green-400 text-white hover:bg-green-500 border border-green-400",
  };

  // Base styles that apply to all buttons
  const baseStyles = "rounded-lg";
  
  // Combine styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;

 