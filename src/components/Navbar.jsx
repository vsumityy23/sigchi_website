import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0">
      <div className="mx-auto flex items-center justify-between w-5/6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
        </div>

        {/* Desktop Menu (Kept Right) */}
        <div className="hidden sm:flex space-x-5 items-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Events</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/load" className="font-bold text-[#EE9D41]">
            Summer School
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${
            isMobileMenuOpen
              ? "flex flex-col items-center justify-center"
              : "hidden"
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/load"
                className="font-bold text-[#EE9D41]"
                onClick={closeMobileMenu}
              >
                Summer School
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
