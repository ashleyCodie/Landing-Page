
import React from 'react';

interface FooterProps {
  companyName?: string;
  companyUrl?: string;
  year?: number;
  mainLinks?: Array<{
    label: string;
    href: string;
  }>;
  legalLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "ShoeStyle",
  companyUrl = "/",
  year = 2025,
  mainLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" }
  ],
  legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ]
}) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top section with brand and main links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
         
          <div className="mb-4 md:mb-0">
            <a 
              href={companyUrl} 
              className="text-xl font-bold text-gray-900 hover:text-gray-700"
            >
              {companyName}
            </a>
          </div>

          
          <nav className="flex flex-wrap gap-8">
            {mainLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t border-gray-200">
    
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-gray-500">
              © {year} {companyName}. All rights reserved.
            </span>
          </div>

        
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
