

import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import Paragraph from "../components/ui/paragraph";

const Header: React.FC = () => (
  <header className="w-full bg-teal-50 shadow flex items-center justify-between px-6 py-4 border-b border-teal-200">
    <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
      <img src="/assets/logo.svg" alt="ShoeStyle Logo" className="h-8 w-8 transition-transform group-hover:scale-105" />
      <Heading text="ShoeStyle" level={3} className="text-teal-700 mb-0 font-bold tracking-tight" />
    </Link>
    <nav className="hidden md:flex gap-8">
      <Link to="/" tabIndex={0} className="group">
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
    <div className="md:hidden">
  <Button text="Menu" variant="primary" className="px-3 py-1 bg-teal-600 text-white" />
    </div>
  </header>
);

export default Header;
