
import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/paragraph";


export interface NavBarProps {
  cartCount?: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartCount }) => (
  <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-4 border-b border-gray-200">
    <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
      <img src="/assets/logo.svg" alt="ShoeStyle Logo" className="h-8 w-8 transition-transform group-hover:scale-105" />
      <Heading text="ShoeStyle" level={3} className="text-teal-700 mb-0 font-bold tracking-tight" />
    </Link>
  <ul className="flex gap-[20px]">
      <li>
        <Link to="/" tabIndex={0} className="group">
          <Paragraph text="Home" variant="small" as="span" className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      <li>
        <Link to="/products" tabIndex={0} className="group">
          <Paragraph text="Products" variant="small" as="span" className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      <li>
        <Link to="/contact" tabIndex={0} className="group">
          <Paragraph text="Contact" variant="small" as="span" className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      <li>
        <Link to="/cart" tabIndex={0} className="group relative">
          <Paragraph text="Cart" variant="small" as="span" className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
          {cartCount && cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#0D9488] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">{cartCount}</span>
          )}
        </Link>
      </li>
    </ul>
  {/* Mobile menu button removed as Button is not used */}
  </nav>
);

export default NavBar;
