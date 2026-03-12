"use client";
import Image from "next/image";
import { IconExternalLink, IconLock } from "@tabler/icons-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  highlight?: boolean;
  alt?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  link,
  tags = [],
  highlight = false,
  alt = "",
}: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-[#161616] border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A853] ${
        highlight ? "border-[#D4A853]/30" : "border-[#2A2A2A]"
      }`}
    >
      {/* Featured badge */}
      {highlight && (
        <span className="absolute top-3 right-3 z-10 bg-[#D4A853] text-[#0F0F0F] text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1">
          Featured
        </span>
      )}

      {/* Image + hover overlay */}
      <div className="relative h-48 bg-[#1E1E1E] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4A853] text-[#0F0F0F] font-bold text-sm hover:bg-[#E8C97A] transition-colors"
            >
              <IconExternalLink size={14} />
              Live Preview
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A2A2A] text-[#9A9590] text-sm">
              <IconLock size={14} />
              Private / NDA
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#F0EDE8] font-bold text-lg mb-2">{title}</h3>
        <p className="text-[#9A9590] text-sm leading-relaxed font-light flex-1 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {/* {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 bg-[#1E1E1E] border border-[#2A2A2A] text-[#9A9590]"
            >
              {tag}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
}