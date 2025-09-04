
import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/reusable/Heading";
import Paragraph from "../components/reusable/paragraph";
import Button from "../components/reusable/Button";


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
        <Link to="/cart" tabIndex={0} className="group">
          <Paragraph text="Cart" variant="small" as="span" className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
    </ul>
    <div className="md:hidden">
      <Button text="Menu" variant="primary" size="md" className="px-3 py-1 bg-teal-600 text-white" />
    </div>
  </nav>
);

export default NavBar;
