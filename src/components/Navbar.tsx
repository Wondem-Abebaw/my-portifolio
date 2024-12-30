// components/Navbar.tsx
import { useState } from "react";
import { IconMenu2 as MenuIcon, IconX as CloseIcon } from "@tabler/icons-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-20 py-4 flex items-center justify-between ">
      {/* Brand Name */}
      <div className="mt-8 md:mt-0">
        <img
          src="/images/logo.jpg"
          alt="Profile"
          className="rounded-full border border-indigo-500 w-20 h-20 object-cover shadow-lg"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-xl">
        <li>
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact Me
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-6 bg-gray-800 text-white p-4 rounded-md shadow-lg space-y-4 md:hidden">
          <li>
            <a
              href="#home"
              className="block hover:text-blue-500"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-blue-500"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block hover:text-blue-500"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-blue-500"
              onClick={toggleMenu}
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
