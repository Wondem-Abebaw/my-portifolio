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
  highlight = false,
  alt = "",
}: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-[#1F2937] border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] ${
        highlight ? "border-[#6366F1]/30" : "border-[#374151]"
      }`}
    >
      {/* Featured badge */}
      {highlight && (
        <span className="absolute top-3 right-3 z-10 bg-[#6366F1] text-[#111827] text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1">
          Featured
        </span>
      )}

      {/* Image + hover overlay */}
      <div className="relative h-48 bg-[#374151] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-[#111827]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6366F1] text-[#111827] font-bold text-sm hover:bg-[#4F46E5] transition-colors"
            >
              <IconExternalLink size={14} />
              Live Preview
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#374151] text-[#9CA3AF] text-sm">
              <IconLock size={14} />
              Private / NDA
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#FFFFFF] font-bold text-lg mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed font-light flex-1 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {/* {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 bg-[#374151] border border-[#374151] text-[#9CA3AF]"
            >
              {tag}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
}