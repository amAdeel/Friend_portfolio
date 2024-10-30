'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Define handleScroll inside Header.tsx
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 bg-opacity-70 text-white shadow-md sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#ffffff]">
          <Link href="/">Web<span className='text-[#FCCC1C]'>4U</span></Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a onClick={() => handleScroll('About')} className="relative group cursor-pointer">
            <span className="hover:text-[#FCCC1C] transition duration-300">About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FCCC1C] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => handleScroll('Projects')} className="relative group cursor-pointer">
            <span className="hover:text-[#FCCC1C] transition duration-300">Projects</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FCCC1C] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => handleScroll('skills')} className="relative group cursor-pointer">
            <span className="hover:text-[#FCCC1C] transition duration-300">Skills</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FCCC1C] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => handleScroll('contact')} className="relative group cursor-pointer">
            <span className="hover:text-[#FCCC1C] transition duration-300">Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FCCC1C] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="relative group focus:outline-none">
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className={`block h-0.5 w-8 bg-white rounded transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-8 bg-white rounded transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-8 bg-white rounded transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 top-full w-full bg-gray-700 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden z-40`}>
        <nav className="flex flex-col space-y-2 p-4">
          <a onClick={() => handleScroll('About')} className="hover:text-[#FCCC1C] transition duration-300 hover:bg-gray-800 p-2 rounded">About</a>
          <a onClick={() => handleScroll('Projects')} className="hover:text-[#FCCC1C] transition duration-300 hover:bg-gray-800 p-2 rounded">Projects</a>
          <a onClick={() => handleScroll('skills')} className="hover:text-[#FCCC1C] transition duration-300 hover:bg-gray-800 p-2 rounded">Skills</a>
          <a onClick={() => handleScroll('contact')} className="hover:text-[#FCCC1C] transition duration-300 hover:bg-gray-800 p-2 rounded">Contact</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
