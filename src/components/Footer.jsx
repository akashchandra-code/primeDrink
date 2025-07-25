import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 px-6 sm:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold  mb-3">PRIME</h1>
          <p className="text-gray-400">
            Bringing authentic taste to your doorstep. Enjoy hand-crafted meals with a modern twist.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-[#00b2ff] transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00b2ff] transition">About</a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#00b2ff] transition">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00b2ff] transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: hello@primedrink.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Punjab, India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00b2ff] transition text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#00b2ff] transition text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#00b2ff] transition text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#00b2ff] transition text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Prime Drink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
