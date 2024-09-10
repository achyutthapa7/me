import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 border-t border-gray-200 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-gray-900">Contact Me</h3>

          <p className="text-gray-700">Email: achyut777thapa@gmail.com</p>

          <p className="text-gray-700">Phone: +977 974-8356-365</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
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

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600">
            &copy; 2024 Achyut Thapa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
