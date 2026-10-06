"use client";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUp } from "@tabler/icons-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0F17] border-t border-gray-800/80 py-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-extrabold text-lg tracking-tight">
            Wondem<span className="text-indigo-400">.Abebaw</span>
          </p>
          <p className="text-xs text-gray-500 mt-1 font-light">
            Senior Full-Stack Developer | Applied AI Engineer
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Wondem Abebaw. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Wondem-Abebaw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/wondem-abebaw-185612209/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-indigo-400 hover:border-gray-700 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <a
            href="mailto:wondem5060@gmail.com"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
            aria-label="Send Email"
          >
            <IconMail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all ml-2"
            title="Back to top"
            aria-label="Back to top"
          >
            <IconArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
