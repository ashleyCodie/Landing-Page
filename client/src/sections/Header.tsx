// =============================
// Header.tsx
// -----------------------------
// This file defines the Header component, which displays the top navigation bar for the site.
// The header includes the logo, navigation links, and a menu button for mobile devices.
//
// How it works:
// - Uses React functional component syntax.
// - Uses imported components for navigation (Link), headings (Heading), buttons (Button), and text (Paragraph).
// - The header is styled using Tailwind CSS utility classes for layout, color, and spacing.
// - Navigation links use the Link component to route between pages without reloading.
// - The menu button appears only on mobile (md:hidden) and can be customized for mobile navigation.
//
// How to update:
// - To change the logo, update the <img src> and alt text.
// - To change the site name, update the Heading's text prop.
// - To add, remove, or rename navigation links, edit the <Link> and <Paragraph> components in the <nav> section.
// - To change colors, spacing, or layout, update the className values (these use Tailwind CSS).
// - To debug, use your browser's developer tools to inspect the header and see how each part is rendered.
//
// If you see an error:
// - Make sure all imported components exist and are spelled correctly.
// - Check that the file paths in import statements match the actual file names (case-sensitive).
// - If navigation doesn't work, check that react-router-dom is installed and set up in your project.
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================


// Import needed components for navigation, headings, buttons, and text.
import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import Paragraph from "../components/ui/Paragraph";

// This file defines the Header component, which displays the top navigation bar.
// The header includes the logo, navigation links, and a menu button for mobile.
// To change the look or links, update the JSX and className values below.
// If you see an error, check that all imported components exist and are spelled correctly.
// To debug, inspect the header in your browser and check the applied styles and links.
// Anyone can update this file by following the comments and examples below.


// The Header component displays the top navigation bar.
// It uses a <header> HTML element for semantic structure.
const Header: React.FC = () => (
  <header className="w-full bg-gray-200 shadow flex items-center justify-between px-6 py-4 border-b border-teal-200">
  {/* Logo and site name. Update src or text to change branding. */}
  {/* The Link component lets users click the logo to go to the homepage. */}
  <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
  {/* The logo image. Change src to use a different logo. */}
  <img src="/images/shoe36.jpg" alt="ShoeStyle Logo" className="h-8 w-8 transition-transform group-hover:scale-105" />
  {/* The site name. Change text to rename the site. */}
  <Heading text="ShoeStyle" level={3} className="text-teal-700 mb-0 font-bold tracking-tight" />
    </Link>
  {/* Navigation links. Add, remove, or update links as needed. */}
  {/* The <nav> element contains all navigation links. */}
  <nav className="hidden md:flex gap-8">
      {/* Each Link below is a navigation item. Change the 'to' prop to update the route. */}
      <Link to="/" tabIndex={0} className="group">
        {/* Paragraph displays the link text. Change 'text' to rename the link. */}
        <Paragraph
          text="Home"
          variant="small"
          as="span"
          className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
        />
      </Link>
      <Link to="/features" tabIndex={0} className="group">
        <Paragraph
          text="Features"
          variant="small"
          as="span"
          className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
        />
      </Link>
      <Link to="/contact" tabIndex={0} className="group">
        <Paragraph
          text="Contact"
          variant="small"
          as="span"
          className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
        />
      </Link>
      <Link to="/cart" tabIndex={0} className="group">
        <Paragraph
          text="Cart"
          variant="small"
          as="span"
          className="font-medium text-[#64748B] px-2 py-1 rounded transition-colors duration-150 group-hover:underline group-hover:text-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
        />
      </Link>
    </nav>
  {/* Mobile menu button. Update text or style as needed. */}
    {/* The Button below is only visible on mobile screens. Change the text or style as needed. */}
    <div className="md:hidden">
      <Button variant="primary" className="px-3 py-1 bg-teal-600 text-white">Menu</Button>
    </div>
  </header>
);

export default Header;
