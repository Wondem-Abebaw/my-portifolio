"use client";
import React, { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";

export default function ContactMe() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111827] relative overflow-hidden border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#6366F1] text-xs tracking-[0.25em] uppercase font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Something Exceptional
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-light">
            Available for senior engineering roles, architectural consultations, and applied AI initiatives. Reach out via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {/* Email card */}
          <div className="bg-[#1F2937]/90 rounded-2xl border border-gray-800 p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <IconMail size={24} />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Direct Email
              </p>
              <a
                href="mailto:wondem5060@gmail.com"
                className="text-white font-medium text-sm hover:text-indigo-400 transition-colors break-all"
              >
                wondem5060@gmail.com
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between">
              <a
                href="mailto:wondem5060@gmail.com"
                className="text-xs text-indigo-400 font-semibold flex items-center gap-1 hover:underline"
              >
                <IconSend size={14} /> Send Email
              </a>
              <button
                onClick={() => copyToClipboard("wondem5060@gmail.com", "email")}
                className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <IconCheck size={14} /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <IconCopy size={14} /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Phone card */}
          <div className="bg-[#1F2937]/90 rounded-2xl border border-gray-800 p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <IconPhone size={24} />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Phone / Mobile
              </p>
              <a
                href="tel:+251948261915"
                className="text-white font-medium text-sm hover:text-purple-400 transition-colors"
              >
                +251 94 826 1915
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between">
              <a
                href="tel:+251948261915"
                className="text-xs text-purple-400 font-semibold flex items-center gap-1 hover:underline"
              >
                <IconPhone size={14} /> Call
              </a>
              <button
                onClick={() => copyToClipboard("+251948261915", "phone")}
                className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <IconCheck size={14} /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <IconCopy size={14} /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Location card */}
          <div className="bg-[#1F2937]/90 rounded-2xl border border-gray-800 p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <IconMapPin size={24} />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-white font-medium text-sm">
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-800">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available Worldwide (Remote / Relocation)
              </span>
            </div>
          </div>
        </div>

        {/* Social connections */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-4">
            Connect On Professional Networks
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/Wondem-Abebaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800/80 border border-gray-700/80 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 group"
            >
              <IconBrandGithub size={20} className="text-gray-300 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/wondem-abebaw-185612209/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
            >
              <IconBrandLinkedin size={20} className="text-indigo-400 group-hover:text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
