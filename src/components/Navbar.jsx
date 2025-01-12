"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 shadow-sm bg-white relative">
      <div className="px-4 py-5 flex items-center justify-between lg:px-6 max-w-[1800px] mx-auto">
        <img src="/koinx-logo.svg" alt="Koinx Logo" className="w-24 h-6" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-gray-600">
            Crypto Taxes
          </a>
          <a href="#" className="text-gray-600">
            Free Tools
          </a>
          <a href="#" className="text-gray-600">
            Resource Center
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 transform rotate-180"
            /> // Animate cross icon
          ) : (
            <Menu
              size={24}
              className="transition-transform duration-300 transform rotate-0"
            /> // Animate menu icon
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 p-4 transition-all duration-300 ease-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
        {isMenuOpen && (
          <>
            <a href="#" className="block py-2 text-gray-600">
              Crypto Taxes
            </a>
            <a href="#" className="block py-2 text-gray-600">
              Free Tools
            </a>
            <a href="#" className="block py-2 text-gray-600">
              Resource Center
            </a>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
