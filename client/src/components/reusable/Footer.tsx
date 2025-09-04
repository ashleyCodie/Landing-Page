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

  companyName = "ShoeStyle",
  companyUrl = "/",
  year = 2025,
  links = [
    { label: "About", href: "#" },
    { label: "Products", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Support", href: "#" }
  ]
}) => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a 
            href={companyUrl} 
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
           
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {companyName}
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`hover:underline ${
                    index === links.length - 1 ? '' : 'me-4 md:me-6'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © {year}{' '}
            <a href={companyUrl} className="hover:underline">
              {companyName}™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;