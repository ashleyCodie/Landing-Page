import React from 'react';

interface FooterProps {
  companyName?: string;
  companyUrl?: string;
  year?: number;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "ShoeStyle™",
  companyUrl = "/",
  year = 2025,
  links = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Products", href: "/products" },
    { label: "Support", href: "/support" }
  ]
}) => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href={companyUrl} className="hover:underline">
            {companyName}
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`hover:underline ${
                  index < links.length - 1 ? "me-4 md:me-6" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;