
// This file defines the navigation bar (NavBar) for the website.
// The NavBar is the menu at the top of the site that lets users go to different pages (Home, Products, Contact, Cart, Sign In).
// It uses React, a tool for building websites, and some special components for headings, buttons, and links.
// If you want to change the links, button text, or colors, you can edit the code below.
// If you see an error, check that all imported files exist and are spelled correctly.
// To update the style, change the className values (these use Tailwind CSS, a style system).
// If you want to add a new link, copy one of the <li> blocks and change the text and link.
// If you want to debug, use your browser's developer tools to inspect the NavBar and see if links/buttons work as expected.
// Anyone can update this file by following the comments and examples below.
// If you need help, ask a developer or search for 'React NavBar tutorial'.
import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";


// NavBarProps lets you pass in the number of items in the cart (cartCount).
// This is optional. If you want to show how many items are in the cart, pass cartCount to NavBar.
export interface NavBarProps {
  cartCount?: number;
}

// NavBar is the main menu bar at the top of the site.
// It shows the logo, site name, and links to different pages.
// If you want to add, remove, or change links, edit the <ul> and <li> sections below.
// The cart icon shows how many items are in the cart if cartCount is passed in.
// The Sign In button lets users go to the sign-in page.
const NavBar: React.FC<NavBarProps> = ({ cartCount }) => (
  <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-4 border-b border-gray-200">
    {/* Logo and site name. Click to go to homepage. */}
    <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
      <img src="/assets/logo.svg" alt="ShoeStyle Logo" className="h-8 w-8 transition-transform group-hover:scale-105" />
      <Heading text="ShoeStyle" level={3} className="text-teal-700 mb-0 font-bold tracking-tight" />
    </Link>
    {/* Navigation links. Each <li> is a link to a page. */}
    <ul className="flex gap-[28px] items-center">
      {/* Home link. Goes to the homepage. */}
      <li className="flex items-center">
        <Link to="/" tabIndex={0} className="group">
          <Paragraph text="Home" variant="small" as="span" className="font-semibold text-[18px] text-[#64748B] px-3 py-2 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      {/* Products link. Goes to the products page. */}
      <li className="flex items-center">
        <Link to="/products" tabIndex={0} className="group">
          <Paragraph text="Products" variant="small" as="span" className="font-semibold text-[18px] text-[#64748B] px-3 py-2 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      {/* Contact link. Goes to the contact page. */}
      <li className="flex items-center">
        <Link to="/contact" tabIndex={0} className="group">
          <Paragraph text="Contact" variant="small" as="span" className="font-semibold text-[18px] text-[#64748B] px-3 py-2 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
        </Link>
      </li>
      {/* Cart link. Shows number of items if cartCount is passed in. */}
      <li className="flex items-center">
        <Link to="/cart" tabIndex={0} className="group relative">
          <Paragraph text="Cart" variant="small" as="span" className="font-semibold text-[18px] text-[#64748B] px-3 py-2 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]" />
          {/* If cartCount exists and is greater than 0, show the number. */}
          {cartCount && cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#0D9488] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">{cartCount}</span>
          )}
        </Link>
      </li>
      {/* Sign In button. Goes to the sign-in page. */}
      <li className="flex items-center">
        <Link to="/signin" tabIndex={0} style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="md">Sign In</Button>
        </Link>
      </li>
    </ul>
    {/* If you want to add a mobile menu button, you can add it here. */}
  </nav>
);

export default NavBar;
