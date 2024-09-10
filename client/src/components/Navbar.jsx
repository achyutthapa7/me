import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-800 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 p-3">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div className="text-2xl font-bold text-gray-800">Achyut Thapa</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className={`${isActive("/")}`}>
            Home
          </a>
          <a href="/about" className={`${isActive("/about")}`}>
            About Me
          </a>
          <a href="/portfolio" className={`${isActive("/portfolio")}`}>
            Projects
          </a>
          <a href="/contact" className={`${isActive("/contact")}`}>
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/achyutthapa7"
            className="text-2xl text-gray-800 hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/achyut-thapa-023bb62a2/"
            className="text-2xl text-gray-800 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/AchyutT77"
            className="text-2xl text-gray-800 hover:text-blue-500"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="/"
            className={`block py-2 px-4 ${isActive(
              "/"
            )} hover:bg-blue-100 hover:text-blue-500`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`block py-2 px-4 ${isActive(
              "/about"
            )} hover:bg-blue-100 hover:text-blue-500`}
          >
            About Me
          </a>
          <a
            href="/portfolio"
            className={`block py-2 px-4 ${isActive(
              "/portfolio"
            )} hover:bg-blue-100 hover:text-blue-500`}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={`block py-2 px-4 ${isActive(
              "/contact"
            )} hover:bg-blue-100 hover:text-blue-500`}
          >
            Contact
          </a>
          <div className="flex justify-center space-x-4 py-4">
            <a
              href="https://github.com"
              className="text-2xl text-gray-800 hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-gray-800 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              className="text-2xl text-gray-800 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
