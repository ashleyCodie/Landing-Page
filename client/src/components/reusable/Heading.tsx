import React from 'react';

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  id?: string;
  [key: string]: any; // For additional HTML attributes
}

const Heading: React.FC<HeadingProps> = ({ 
  text, 
  level, 
  className = '', 
  ...props 
}) => {
  // Default styles for each heading level (can be overridden with className)
  const getDefaultStyles = (level: number): string => {
    const styles = {
      1: 'text-4xl font-bold text-gray-900 mb-6',
      2: 'text-3xl font-bold text-gray-900 mb-5',
      3: 'text-2xl font-semibold text-gray-900 mb-4',
      4: 'text-xl font-semibold text-gray-900 mb-3',
      5: 'text-lg font-medium text-gray-900 mb-2',
      6: 'text-base font-medium text-gray-900 mb-2'
    };
    
    return styles[level as keyof typeof styles] || styles[1];
  };
  
  const defaultStyles = getDefaultStyles(level);
  const finalClasses = className ? `${defaultStyles} ${className}` : defaultStyles;
  
  // Use a switch statement to return the correct JSX element
  switch (level) {
    case 1:
      return <h1 className={finalClasses} {...props}>{text}</h1>;
    case 2:
      return <h2 className={finalClasses} {...props}>{text}</h2>;
    case 3:
      return <h3 className={finalClasses} {...props}>{text}</h3>;
    case 4:
      return <h4 className={finalClasses} {...props}>{text}</h4>;
    case 5:
      return <h5 className={finalClasses} {...props}>{text}</h5>;
    case 6:
      return <h6 className={finalClasses} {...props}>{text}</h6>;
    default:
      return <h1 className={finalClasses} {...props}>{text}</h1>;
  }
};

export default Heading;