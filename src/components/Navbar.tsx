"use client";
import { useState, useEffect } from "react";
import { IconMenu2 as MenuIcon, IconX as CloseIcon } from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#111827]/90 backdrop-blur-md border-b border-[#374151]"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-[#FFFFFF] font-extrabold text-xl tracking-tight">
          W<span className="text-[#6366F1]">.</span>Abebaw
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#9CA3AF] text-xs font-medium tracking-[0.08em] uppercase hover:text-[#6366F1] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {/* <a
          href="/Wondem_Abebaw_Resume.pdf"
          target="_blank"
          className="hidden md:inline-block px-5 py-2 border border-[#6366F1] text-[#6366F1] text-xs font-bold tracking-[0.08em] uppercase hover:bg-[#6366F1] hover:text-[#111827] transition-colors"
        >
          Resume
        </a> */}

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#FFFFFF] z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111827]/98 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#FFFFFF] text-4xl font-extrabold tracking-tight hover:text-[#6366F1] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}