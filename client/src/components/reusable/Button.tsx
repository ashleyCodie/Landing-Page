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
    primary: "",
    secondary: ""
  };

  // Base styles that apply to all buttons
  const baseStyles = "";
  
  // Combine styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;

 