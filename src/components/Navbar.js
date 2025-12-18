import React, { useState } from "react";
import { Menu, X, Home, User, Code, FolderKanban, Mail } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-blue-600 shadow-md shadow-zinc-700 sticky top-0 z-50">
      <div className="max-w-[1160px] w-11/12 mx-auto flex justify-between items-center h-[60px]">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="cursor-pointer"
        >
          <p className="font-bold text-white text-lg tracking-wide hover:scale-105 transition">
            Harshit Pateriya
          </p>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-x-8 text-gray-300 font-medium transition-all duration-200 items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <Home size={18}/> Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <User size={18}/> About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <Code size={18}/> Skills
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <FolderKanban size={18}/> Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="cursor-pointer"
          >
            <button className="flex items-center gap-2 bg-white py-1.5 px-4 text-black rounded-md font-medium hover:bg-gray-200 transition">
              <Mail size={18}/> Contact
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-300 flex flex-col items-center gap-6 py-6">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <Home size={18}/> Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <User size={18}/> About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <Code size={18}/> Skills
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="flex items-center gap-2 hover:text-white cursor-pointer"
          >
            <FolderKanban size={18}/> Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="cursor-pointer"
          >
            <button className="flex items-center gap-2 bg-white py-1.5 px-4 text-black rounded-md font-medium hover:bg-gray-200 transition">
              <Mail size={18}/> Contact
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;