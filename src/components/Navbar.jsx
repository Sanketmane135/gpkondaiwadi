"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-800 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide">
         स्वच्छ गाव,सुंदर गाव 
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><a href="/" className="hover:text-green-200 transition">होम </a></li>
          <li><a href="/about" className="hover:text-green-200 transition">माहिती </a></li>
          <li><a href="/work" onClick={toggleMenu} className="hover:text-green-200">कामे</a></li>
          <li><a href="/schemes" className="hover:text-green-200 transition">योजना </a></li>
          <li><a href="/taxcollection" className="hover:text-green-200 transition">कर वसूली  </a></li>
          <li><a href="/services" className="hover:text-green-200 transition"> नागरी सुविधा</a></li>

          <li><a href="/contact" className="hover:text-green-200 transition">संपर्क </a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none hover:text-green-200"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm font-medium">
            <li><a href="#" onClick={toggleMenu} className="hover:text-green-200">होम</a></li>
            <li><a href="/about" onClick={toggleMenu} className="hover:text-green-200">माहिती</a></li>
            <li><a href="/work" onClick={toggleMenu} className="hover:text-green-200">कामे</a></li>
            <li><a href="/schemes"  onClick={toggleMenu} className="hover:text-green-200">योजना</a></li>
            <li><a href="/taxcollection" onClick={toggleMenu} className="hover:text-green-200">भत्ता</a></li>
             <li><a href="/services" className="hover:text-green-200 transition">नागरी सुविधा </a></li>
            <li><a href="/contact" onClick={toggleMenu} className="hover:text-green-200">संपर्क</a></li> 
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
