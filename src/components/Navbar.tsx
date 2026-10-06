"use client";
import { useState, useEffect } from "react";
import {
  IconMenu2 as MenuIcon,
  IconX as CloseIcon,
  IconDownload,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#111827]/90 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-base shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            W
          </span>
          <span className="text-white font-extrabold text-lg tracking-tight">
            Wondem<span className="text-indigo-400">.Abebaw</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 text-xs font-semibold tracking-wider uppercase hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Wondem_Abebaw_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40"
          >
            <IconDownload size={14} />
            CV / Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-lg bg-gray-800/80 border border-gray-700/60 z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111827]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-bold tracking-tight hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Wondem_Abebaw_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold tracking-wider uppercase shadow-lg shadow-indigo-600/30"
          >
            <IconDownload size={18} />
            Download CV
          </a>
        </div>
      )}
    </>
  );
}
