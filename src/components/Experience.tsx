"use client";
import {
  IconBriefcase,
  IconMapPin,
  IconCalendar,
  IconCircleCheck,
} from "@tabler/icons-react";

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  tags?: string[];
  highlights: string[];
}

const experiences: WorkExperience[] = [
  {
    role: "Senior Software Engineer",
    company: "EagleLion System Technology",
    period: "Aug 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    current: true,
    tags: [
      "Banking & Fintech",
      "Next.js",
      "NestJS",
      "Kafka",
      "Microservices",
      "PostgreSQL",
    ],
    highlights: [
      "Developing mission-critical applications for tier-1 financial institutions including Dashen Bank S.C. and Choice Microfinance.",
      "Contributing to architecture, system scalability, and service design decisions while conducting rigorous code reviews to enforce software reliability.",
      "Engineered high-security administrative portals for Dashen Bank Super App, serving 2M+ active users and processing 500B+ ETB in transactions.",
      "Architecting Dashen Bank Paperless Banking ecosystem (client web app, branch portal, central admin) to digitize workflows and eliminate physical paper processing.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Vintage Technologies PLC",
    period: "Aug 2023 – Aug 2025",
    location: "Addis Ababa, Ethiopia",
    current: false,
    tags: [
      "React / Next.js",
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "REST APIs",
    ],
    highlights: [
      "Led architectural design for high-security admin portals and robust APIs for U.S.-based transport system (LINQ Solutions), ride-hailing (Cheetah), tutoring (Tuteapp), and job-matching (Emebet).",
      "Developed scalable, modular React components with Next.js while building resilient backend microservices and RESTful endpoints using Node.js, Express, NestJS, and PostgreSQL.",
      "Designed database schemas, optimized SQL indexing and query efficiency, and established secure JWT/OAuth authentication and role-based access control.",
      "Mentored junior developers on engineering design patterns, test coverage, and automated deployment pipelines.",
      "Collaborated cross-functionally across product, design, and DevOps to deliver seamless user experiences and continuous integration.",
    ],
  },
  {
    role: "Web App Developer",
    company: "Swift Technologies PLC",
    period: "June 2025 – Jan 2026",
    location: "Addis Ababa, Ethiopia",
    current: false,
    tags: ["Full-Stack", "EdTech", "Web Applications", "JavaScript"],
    highlights: [
      "Developed an end-to-end web application for a modern educational platform.",
      "Engineered core modules for student enrollment, content delivery, and user management with an emphasis on high responsiveness.",
    ],
  },
  {
    role: "Front End Developer",
    company: "ArifGet – Online Course & Job Matching Platform",
    period: "Jan 2025 – Aug 2025",
    location: "Remote / Hybrid",
    current: false,
    tags: ["React", "UI/UX", "State Management", "Performance Optimization"],
    highlights: [
      "Developed a high-performance admin dashboard using React for a platform bridging job seekers and educational content providers.",
      "Optimized frontend rendering performance, reduced bundle sizes, and improved reusable component libraries.",
      "Participated actively in UI/UX planning, design systems, and staged feature rollout strategies with cross-functional product teams.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "AIT Technology PLC",
    period: "May 2023 – Aug 2023",
    location: "Addis Ababa, Ethiopia",
    current: false,
    tags: ["Healthcare IT", "EMR Refactoring", "Modern JavaScript"],
    highlights: [
      "Modernized a legacy hospital electronic medical records (EMR) system by refactoring outdated codebases into modular JavaScript frameworks.",
      "Improved system responsiveness, data integrity, and clinical user workflows for healthcare personnel.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#111827] py-24 relative overflow-hidden"
    >
      {/* Background ambient gradient */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col items-start mb-16">
          <p className="text-[#6366F1] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            3+ years of engineering enterprise fintech platforms, cloud
            microservices, and high-load web systems across Ethiopia and the
            United States.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[190px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500 via-gray-700 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex flex-col md:grid md:grid-cols-[170px_1fr] md:gap-10 pl-10 md:pl-0"
              >
                {/* Timeline Node Dot */}
                <div
                  className={`absolute left-[11px] md:left-[185px] top-6 w-3 h-3 rounded-full -translate-x-1/2 border-2 transition-all duration-300 ${
                    exp.current
                      ? "bg-indigo-500 border-white shadow-[0_0_12px_rgba(99,102,241,0.8)] scale-125"
                      : "bg-gray-800 border-gray-600"
                  }`}
                />

                {/* Left Period & Meta */}
                <div className="md:text-right pr-6 mb-2 md:mb-0 pt-5">
                  <p className="text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                    {exp.period}
                  </p>
                  <p className="text-gray-400 text-xs flex items-center md:justify-end gap-1 mt-1 font-light">
                    <IconMapPin size={13} className="text-gray-500" />
                    {exp.location}
                  </p>
                </div>

                {/* Right Experience Card */}
                <div
                  className={`relative rounded-2xl bg-[#1F2937]/90 border p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 ${
                    exp.current
                      ? "border-indigo-500/50 shadow-lg shadow-indigo-500/10"
                      : "border-gray-800"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-white font-extrabold text-xl md:text-2xl">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 animate-pulse">
                          Current Role
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-indigo-400 text-base font-medium mb-4 flex items-center gap-2">
                    <IconBriefcase size={18} className="text-indigo-400" />
                    {exp.company}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-3 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-gray-300 text-sm font-light leading-relaxed flex items-start gap-2.5"
                      >
                        <IconCircleCheck
                          size={18}
                          className="text-indigo-400 flex-shrink-0 mt-0.5"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-900/80 border border-gray-700/60 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
