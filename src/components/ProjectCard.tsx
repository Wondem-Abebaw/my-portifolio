"use client";
import Image from "next/image";
import {
  IconExternalLink,
  IconLock,
  IconSparkles,
  IconShieldLock,
} from "@tabler/icons-react";

export interface ProjectCardProps {
  image?: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  highlight?: boolean;
  ongoing?: boolean;
  stats?: string;
  category?: string;
  alt?: string;
  isPrivate?: boolean;
}

export default function ProjectCard({
  image = "",
  title,
  description,
  link = "",
  tags = [],
  highlight = false,
  ongoing = false,
  stats,
  category,
  alt = "",
  isPrivate = false,
}: ProjectCardProps) {
  const showPrivate = isPrivate || !image;

  return (
    <div
      className={`group relative bg-[#1F2937]/90 rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 ${
        highlight
          ? "border-indigo-500/50 shadow-md shadow-indigo-500/5"
          : "border-gray-800 hover:border-indigo-500/40"
      }`}
    >
      {/* Top badges */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
        {showPrivate && (
          <span className="flex items-center gap-1 bg-rose-500/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lg border border-rose-400/40">
            <IconShieldLock size={12} />
            Private
          </span>
        )}
        {ongoing && (
          <span className="flex items-center gap-1 bg-amber-500/90 backdrop-blur-md text-gray-950 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-950 animate-ping" />
            Ongoing
          </span>
        )}
        {highlight && (
          <span className="flex items-center gap-1 bg-indigo-500 text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lg">
            <IconSparkles size={11} />
            Featured
          </span>
        )}
      </div>

      {category && (
        <span className="absolute top-3 left-3 z-20 bg-gray-900/80 backdrop-blur-md text-gray-300 border border-gray-700/60 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
          {category}
        </span>
      )}

      {/* Image / Private container + hover overlay */}
      <div className="relative h-52 bg-gray-900 overflow-hidden flex items-center justify-center">
        {showPrivate ? (
          <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b]/60 flex flex-col items-center justify-center p-6 text-center border-b border-gray-800/80 relative">
            {/* Ambient pattern glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-800/90 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3 shadow-inner shadow-indigo-500/10 group-hover:scale-110 group-hover:text-rose-400 group-hover:border-rose-500/40 transition-all duration-300">
                <IconShieldLock size={28} />
              </div>
              <p className="text-white text-xs font-bold tracking-wider uppercase mb-1">
                Private &amp; Confidential
              </p>
              <p className="text-gray-400 text-[11px] font-light max-w-[240px] leading-relaxed">
                Screenshots restricted under banking regulation &amp; non-disclosure policy
              </p>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={image}
              alt={alt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#111827]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          </>
        )}

        {/* Hover action overlay */}
        <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-10">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
            >
              <IconExternalLink size={16} />
              Visit Platform
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/90 border border-gray-700 text-gray-300 rounded-xl text-xs font-medium">
              <IconLock size={15} className="text-indigo-400" />
              {showPrivate
                ? "Confidential Banking Infrastructure"
                : "Enterprise / Protected Architecture"}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {stats && (
            <div className="inline-block text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md mb-2">
              {stats}
            </div>
          )}

          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed font-light mb-5">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-gray-900/90 border border-gray-700/60 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
