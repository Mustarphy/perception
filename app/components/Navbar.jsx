"use client";
import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
          element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
          });
      }
      setMenuOpen(false); // Close mobile menu after clicking
  };
  return (
   <nav className="bg-white shadow-sm px-4 pt-4 flex justify-between items-center relative fixed top-0 left-0 right-0 z-50">
            <div className="text-2xl font-semibold text-green-700">Perception</div>

            <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
                <li>
                    <button 
                        onClick={() => scrollToSection('home')} 
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('about')} 
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        About Us
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('services')} 
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        Services
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('careers')} 
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        Careers
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('contact')} 
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        Contact Us
                    </button>
                </li>
            </ul>

            <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-800 focus:outline-none">
                {menuOpen ? <FiX /> : <FiMenu/>}
            </button>

            {/* Mobile Menu Links */}
            {menuOpen && (
                <ul className="absolute top-full left-0 w-full bg-white z-50 px-4 py-4 md:hidden flex flex-col gap-4 text-gray-800 font-medium shadow-md">
                    <li>
                        <button 
                            onClick={() => scrollToSection('home')} 
                            className="hover:text-orange-500 cursor-pointer w-full text-left"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('about')} 
                            className="hover:text-orange-500 cursor-pointer w-full text-left"
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('services')} 
                            className="hover:text-orange-500 cursor-pointer w-full text-left"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('careers')} 
                            className="hover:text-orange-500 cursor-pointer w-full text-left"
                        >
                            Careers
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contact')} 
                            className="hover:text-orange-500 cursor-pointer w-full text-left"
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            )}
        </nav>
  );
}
