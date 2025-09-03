// /components/reusable/Paragraph.tsx
import React from "react";

type ParagraphProps = {
  text: string;
  className?: string;
  as?: "p" | "span" | "div"; // flexible rendering
};

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = "",
  as: Component = "p",
}) => {
  return (
    <Component className={`text-base leading-relaxed ${className}`}>
      {text}
    </Component>
  );
};

export default Paragraph;
