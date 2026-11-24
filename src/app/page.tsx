"use client";
import { useState } from "react";
import Image from "next/image";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {
  IconArrowRight,
  IconBrain,
  IconBuildingBank,
  IconServer,
  IconUsers,
  IconMapPin,
  IconSparkles,
  IconNetwork,
  IconShieldLock,
} from "@tabler/icons-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projectData: (ProjectCardProps & { filterCategory: string })[] = [
    {
      image: "",
      isPrivate: true,
      title: "Dashen Bank Super App | Banking & Financial Services",
      alt: "Dashen Bank Super App Central Portal",
      description:
        "Contributed to the development and continuous improvement of a large-scale banking application serving over 3 million active users and supporting more than 500 billion ETB in transactions. Developed new features, resolved production issues, and optimized database queries in a high-volume financial environment.",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Kafka",
        "Fintech Security",
      ],
      category: "Fintech & Banking",
      filterCategory: "Fintech & Banking",
      stats: "3M+ Users • 500B+ ETB",
      highlight: true,
      link: "",
    },
    {
      image: "",
      isPrivate: true,
      title: "Dashen Bank Paperless Banking | Enterprise Platform",
      alt: "Dashen Bank Paperless Banking System",
      description:
        "Developing web-based paperless banking applications, including client-web app and central administrative portal. Contributing to the digitization and automation of in-branch banking workflows to improve operational efficiency and eliminate manual paperwork.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Workflow Automation",
      ],
      category: "Digital Banking",
      filterCategory: "Fintech & Banking",
      stats: "Client & Central Admin Portals",
      highlight: true,
      ongoing: true,
      link: "",
    },
    {
      image: "/images/linqsolutions.png",
      title: "LINQ Transport | School Bus Management Platform",
      alt: "LINQ Solutions U.S. Transport System",
      description:
        "Developed backend APIs, administrative dashboards, and integrations for a US-based school transportation platform. Contributed to application architecture and implementation of business-critical features.",
      tags: ["React", "NestJS", "PostgreSQL", "REST APIs", "USA Platform"],
      category: "Enterprise & Mobility",
      filterCategory: "Enterprise & Mobility",
      stats: "U.S. School Transport Platform",
      link: "",
    },
    {
      image: "/images/kabbatransport.png",
      title: "Kabba Transport | Carpooling & Mobility Platform",
      alt: "Kabba Transport Carpooling Service",
      description:
        "Developed application components and backend integrations for a transportation and ride-sharing platform. Implemented features supporting communication between platform users and transportation services.",
      tags: ["React", "Node.js", "PostgreSQL", "Real-Time Matching", "Mobility"],
      category: "Ride-Hailing & Logistics",
      filterCategory: "Enterprise & Mobility",
      stats: "Carpooling & Real-Time Routing",
      link: "",
    },
    {
      image: "/images/starry-bg.jpg",
      title: "Agriturismo Booking Platform | Italy Hospitality",
      alt: "Italian Agriturismo Booking Platform",
      description:
        "Led design and development of a complete web application for a booking platform for agriturismos in Italy at Swift Technologies, handling property listings, booking reservations, and responsive traveler experiences.",
      tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "Booking Systems"],
      category: "Web Applications",
      filterCategory: "Enterprise & Mobility",
      stats: "Italy Agriturismo Booking",
      link: "",
    },
    {
      image: "/images/emebet.png",
      title: "Emebet | Job Matching Platform for Women",
      alt: "Emebet Job Matching Platform",
      description:
        "Contributed to the development of a job-matching platform connecting women job seekers with employment opportunities. Developed application features and administrative functionality.",
      tags: ["Next.js", "Tailwind CSS", "REST API", "Job Matching"],
      category: "Social Impact & Jobs",
      filterCategory: "AI, EdTech & Social",
      stats: "Empowerment & Job Matching",
      link: "",
    },
    {
      image: "/images/tuteapp.png",
      title: "Tuteapp | Tutors & Parents Matching Platform",
      alt: "Tuteapp Tutoring Platform",
      description:
        "Developed application features for a platform connecting tutors with parents. Contributed to frontend development, backend integration, and platform functionality.",
      tags: ["Next.js", "Tailwind CSS", "API Integration", "EdTech"],
      category: "EdTech Platform",
      filterCategory: "AI, EdTech & Social",
      stats: "Tutoring & Parent Matching",
      link: "",
    },
    {
      image: "/images/arifget.png",
      title: "ArifGet | Online Course & Job Matching Platform",
      alt: "ArifGet Admin Dashboard",
      description:
        "As Lead Front End Developer, developed a high-performance administrative dashboard using React for a platform bridging job seekers and educational content providers. Designed reusable frontend components and optimized application performance.",
      tags: ["React", "Tailwind CSS", "Admin Analytics", "Performance"],
      category: "EdTech & Career",
      filterCategory: "AI, EdTech & Social",
      stats: "High-Performance Admin Portal",
      link: "",
    },
    {
      image: "/images/hospital.png",
      title: "AIT | Hospital Medical Record System",
      alt: "AIT Hospital Management System",
      description:
        "Contributed to modernizing a legacy hospital medical record system through code refactoring, system integration, and integrating modern JavaScript frontend technologies for healthcare clinical operations.",
      tags: [
        "JavaScript",
        "Healthcare IT",
        "EMR Modernization",
        "Code Refactoring",
      ],
      category: "Healthcare & EMR",
      filterCategory: "Enterprise & Mobility",
      stats: "Clinical Healthcare EMR",
      link: "",
    },
    {
      image: "/images/maraki.png",
      title: "Educational Platform | Interactive Learning",
      alt: "Educational Platform Web Application",
      description:
        "Led web application development for an educational platform at Swift Technologies, delivering modern student enrollment, curriculum modules, and interactive user management.",
      tags: ["React", "Node.js", "EdTech", "Full-Stack Development"],
      category: "EdTech & Education",
      filterCategory: "AI, EdTech & Social",
      stats: "Educational Web Application",
      link: "",
    },
  ];

  const categories = [
    "All",
    "Fintech & Banking",
    "Enterprise & Mobility",
    "AI, EdTech & Social",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.filterCategory === activeCategory);

  const stats = [
    { num: "4+", label: "Years Experience" },
    { num: "500B+", label: "ETB Transactions Handled" },
    { num: "3M+", label: "Active Bank Users" },
    { num: "10+", label: "Production Platforms" },
  ];

  const professionalStrengths = [
    {
      icon: IconNetwork,
      title: "Backend Architecture & Distributed Systems",
      desc: "Deep expertise in microservices, distributed transactions, clean architecture, hexagonal design, and domain-driven design (DDD).",
      color: "text-indigo-400",
    },
    {
      icon: IconBuildingBank,
      title: "Scalable Financial & Enterprise Platforms",
      desc: "Proven track record delivering mission-critical banking and microfinance platforms processing hundreds of billions in ETB for millions of users.",
      color: "text-emerald-400",
    },
    {
      icon: IconServer,
      title: "API Engineering & Asynchronous Processing",
      desc: "Robust REST and GraphQL API design, event streaming with Kafka & RabbitMQ, SSE, and secure service-to-service communication.",
      color: "text-blue-400",
    },
    {
      icon: IconShieldLock,
      title: "Technical Problem-Solving & Production Reliability",
      desc: "Root-cause troubleshooting, database query optimization, indexing, transaction management, and resilience engineering.",
      color: "text-rose-400",
    },
    {
      icon: IconUsers,
      title: "Cross-Functional Collaboration & Technical Leadership",
      desc: "Translating business needs to technical architecture, mentoring junior engineers, and driving rigorous code reviews.",
      color: "text-purple-400",
    },
    {
      icon: IconBrain,
      title: "Applied AI Engineering & Continuous Innovation",
      desc: "Engineering multi-agent systems, LangGraph, RAG architectures, and modern cloud-native practices (Docker, Kubernetes, CI/CD).",
      color: "text-amber-400",
    },
  ];

  return (
    <div className="bg-[#111827] text-white min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative max-w-6xl mx-auto px-6 md:px-20 pt-36 pb-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute -top-10 -left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs tracking-wider uppercase font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Senior Software Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Wondem{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Abebaw
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-light">
            Senior Software Engineer with <strong>4+ years of experience</strong>{" "}
            designing, developing, and delivering production-grade software
            across <strong>banking, fintech, transportation, healthcare, education</strong>,
            and enterprise platforms. Experienced in building scalable backend services,
            microservices-based architectures, event-driven systems, and modern web
            applications supporting high-volume business operations.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-105"
            >
              Explore Selected Work
              <IconArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-indigo-500/40 bg-indigo-950/20 text-indigo-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-md"
            >
              Contact Me
            </a>
          </div>

          {/* Quick badge info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800">
              <IconMapPin size={14} className="text-indigo-400" /> Addis Ababa,
              Ethiopia
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800">
              <IconBuildingBank size={14} className="text-emerald-400" />{" "}
              Banking &amp; Fintech Architecture
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800">
              <IconNetwork size={14} className="text-blue-400" /> Distributed
              Systems &amp; Kafka
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800">
              <IconSparkles size={14} className="text-purple-400" /> Multi-Agent
              AI &amp; RAG
            </span>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-800/80">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-black text-indigo-400">
                  {num}
                </div>
                <div className="text-xs text-gray-400 font-light mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Avatar Card */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-600 blur-xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-indigo-500/40 bg-gray-900 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Wondem Abebaw"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 md:px-20 py-24 border-t border-gray-800/80"
      >
        <div className="flex flex-col items-start mb-12">
          <p className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold mb-2">
            Professional Profile
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering High-Load, Mission-Critical Platforms
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300 font-light leading-relaxed text-sm md:text-base mb-16">
          <div>
            <p className="mb-5">
              I am a <strong>Senior Software Engineer</strong> at{" "}
              <strong>EagleLion System Technology</strong>, where I develop and
              maintain production-grade software solutions for major financial
              institutions including <strong>Dashen Bank S.C.</strong> and{" "}
              <strong>Choice Microfinance</strong>. This includes managing and
              scaling infrastructure supporting the bank&apos;s super app, serving{" "}
              <strong>over 3 million active users</strong> and handling transactions
              exceeding <strong>500 billion ETB</strong>.
            </p>
            <p>
              I am actively developing the web-based applications for{" "}
              <strong>Dashen Bank&apos;s Paperless Banking ecosystem</strong> (client-web
              app and central administrative portal), digitizing and automating
              in-branch banking workflows to drive operational efficiency and
              eliminate manual paperwork.
            </p>
          </div>

          <div>
            <p className="mb-5">
              Strong expertise in <strong>backend engineering, distributed systems, API design, database architecture</strong>,
              and cloud-native application development. Proficient in{" "}
              <strong>TypeScript, Node.js, NestJS, Python, Go, React, and Next.js</strong>,
              with hands-on production experience in <strong>Kafka, RabbitMQ, PostgreSQL, MongoDB, Docker, and Kubernetes</strong>.
            </p>
            <p>
              Experienced in architectural decision-making, system integration, performance optimization,
              production troubleshooting, and engineering best practices. Additional expertise in{" "}
              <strong>AI engineering, RAG architectures, and multi-agent systems</strong>,
              with a strong focus on building reliable, secure, scalable, and maintainable software solutions.
            </p>
          </div>
        </div>

        {/* ── Professional Strengths Grid ── */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <IconSparkles size={20} className="text-indigo-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Professional Strengths &amp; Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1F2937]/80 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl bg-gray-800/90 border border-gray-700/60 ${strength.color} flex items-center justify-center mb-4`}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Skills & Technical Architecture ── */}
      <Skills />

      {/* ── Experience Timeline ── */}
      <Experience />

      {/* ── Selected Projects Showcase ── */}
      <section
        id="projects"
        className="bg-[#161F2E] py-24 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                Portfolio Showcase
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Selected Projects &amp; Technical Contributions
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
              <p className="text-gray-400 text-sm md:text-base font-light">
                Enterprise banking platforms, international fleet systems, and
                scalable modern web applications.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-xl font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Credentials ── */}
      <Education />

      {/* ── Contact Me ── */}
      <ContactMe />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
