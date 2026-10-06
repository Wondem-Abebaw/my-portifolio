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
  IconDownload,
  IconBrain,
  IconBuildingBank,
  IconServer,
  IconUsers,
  IconMail,
  IconMapPin,
  IconSparkles,
} from "@tabler/icons-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projectData: (ProjectCardProps & { filterCategory: string })[] = [
    {
      image: "/images/dashenbank.png",
      title: "Dashen Bank Super App Central Portal",
      alt: "Dashen Bank Super App Central Portal",
      description:
        "Developed a high-security admin panel to manage the bank's super app, passing 2M+ active users and 500 billion ETB in transactions, adding new features, fixing existing bugs, and improving database query performance.",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Fintech Security",
      ],
      category: "Fintech & Banking",
      filterCategory: "Fintech & Banking",
      stats: "2M+ Users • 500B+ ETB",
      highlight: true,
      link: "",
    },
    {
      image: "/images/dashen_paperless.png",
      title: "Dashen Bank Paperless Banking System",
      alt: "Dashen Bank Paperless Banking System",
      description:
        "Developing web versions of paperless banking — client web app plus branch and central portals — aimed at automating in-branch workflows and eliminating physical paperwork.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Workflow Automation",
      ],
      category: "Digital Banking",
      filterCategory: "Fintech & Banking",
      stats: "Client, Branch & Central Portals",
      highlight: true,
      ongoing: true,
      link: "",
    },
    {
      image: "/images/linqsolutions.png",
      title: "LINQ Transport – School Bus Management System",
      alt: "LINQ Solutions U.S. Transport System",
      description:
        "Developed key components for a U.S.-based school bus management platform, including high-security admin dashboards and robust API integrations.",
      tags: ["React", "NestJS", "PostgreSQL", "REST APIs", "USA Platform"],
      category: "Enterprise & Mobility",
      filterCategory: "Enterprise & Mobility",
      stats: "U.S. Enterprise Platform",
      link: "",
    },
    {
      image: "/images/kabbatransport.png",
      title: "Kabba Transport Platform – Carpooling Service",
      alt: "Kabba Transport Carpooling Service",
      description:
        "Built a carpooling platform to efficiently connect riders and drivers with route optimization, ride scheduling, and real-time coordination.",
      tags: ["React", "Node.js", "PostgreSQL", "Real-Time Matching"],
      category: "Ride-Hailing & Logistics",
      filterCategory: "Enterprise & Mobility",
      stats: "Carpooling & Real-Time Routing",
      link: "",
    },
    {
      image: "/images/emebet.png",
      title: "Emebet – Job Matching Platform for Women",
      alt: "Emebet Job Matching Platform",
      description:
        "Contributed to a high-impact digital platform dedicated to empowering and connecting women job seekers with verified employment opportunities.",
      tags: ["Next.js", "Tailwind CSS", "REST API", "Talent Matching"],
      category: "Social Impact & Jobs",
      filterCategory: "AI, EdTech & Social",
      stats: "Empowerment & Job Matching",
      link: "",
    },
    {
      image: "/images/maraki.png",
      title: "Maraki – Ethiopian Dating App",
      alt: "Maraki Dating and Matchmaking App",
      description:
        "Contributed to the development of a matchmaking platform, focusing on scalable backend logic, profile algorithms, and dynamic user interfaces.",
      tags: ["React", "Node.js", "MySQL", "Matchmaking Logic"],
      category: "Social & Matchmaking",
      filterCategory: "AI, EdTech & Social",
      stats: "Dynamic Matchmaking Logic",
      link: "",
    },
    {
      image: "/images/tuteapp.png",
      title: "Tuteapp – Tutors & Parents Matching Platform",
      alt: "Tuteapp Tutoring Platform",
      description:
        "Developed features for an interactive platform connecting certified tutors with parents and students seeking personalized educational services.",
      tags: ["Next.js", "Tailwind CSS", "API Integration", "EdTech"],
      category: "EdTech Platform",
      filterCategory: "AI, EdTech & Social",
      stats: "Tutoring & Parent Connect",
      link: "",
    },
    {
      image: "/images/arifget.png",
      title: "ArifGet – Online Course & Job Matching Platform",
      alt: "ArifGet Admin Dashboard",
      description:
        "Developed a high-performance admin dashboard using React for a platform bridging job seekers and educational content providers with comprehensive analytics.",
      tags: ["React", "Tailwind CSS", "Admin Analytics", "Performance"],
      category: "EdTech & Career",
      filterCategory: "AI, EdTech & Social",
      stats: "High-Performance Dashboard",
      link: "",
    },
    {
      image: "/images/hospital.png",
      title: "AIT – Hospital Medical Record System",
      alt: "AIT Hospital Management System",
      description:
        "Modernized a legacy hospital medical record system by refactoring legacy code and integrating modern JavaScript frameworks for enhanced clinical workflow and patient record tracking.",
      tags: [
        "JavaScript",
        "Healthcare IT",
        "EMR Refactoring",
        "Code Modernization",
      ],
      category: "Healthcare & EMR",
      filterCategory: "Enterprise & Mobility",
      stats: "Clinical Healthcare EMR",
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
    { num: "3+ ", label: "Years Experience" },
    { num: "500B+", label: "ETB Transactions Handled" },
    { num: "2M+", label: "Active Bank Users" },
    { num: "10+", label: "Production Platforms" },
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs tracking-wider uppercase font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Senior Full-Stack Developer | Applied AI Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Wondem{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Abebaw
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-light">
            Full-stack software engineer with{" "}
            <strong>3+ years of production experience</strong> across backend,
            frontend, and cloud-native systems. Delivered software for banking (
            <strong>2M+ users, 500B+ ETB</strong> in transactions), transport,
            ride-hailing, education, healthcare, and job-matching platforms
            across Ethiopia and the US.
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
              href="/Wondem_Abebaw_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-indigo-500/40 bg-indigo-950/20 text-indigo-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-md"
            >
              <IconDownload size={16} />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-gray-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors"
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
              <IconSparkles size={14} className="text-purple-400" /> Multi-Agent
              AI &amp; RAG
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800">
              <IconBuildingBank size={14} className="text-emerald-400" />{" "}
              Fintech &amp; Banking
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
            Engineering High-Load, Mission-Critical Systems
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300 font-light leading-relaxed text-sm md:text-base mb-12">
          <div>
            <p className="mb-5">
              I am a <strong>Senior Software Engineer</strong> at{" "}
              <strong>EagleLion System Technology</strong>, where I develop core
              digital infrastructure for leading financial institutions, notably{" "}
              <strong>Dashen Bank S.C.</strong> and{" "}
              <strong>Choice Microfinance</strong>. This includes managing
              administrative systems that power transactions exceeding{" "}
              <strong>300 billion ETB</strong> across more than{" "}
              <strong>2 million active users</strong>.
            </p>
            <p>
              I am currently leading development of the web versions of{" "}
              <strong>Dashen Bank&apos;s Paperless Banking ecosystem</strong>{" "}
              (client web app, branch portal, and central portals), automating
              in-branch workflows and eliminating paper overhead.
            </p>
          </div>

          <div>
            <p className="mb-5">
              Previously at <strong>Vintage Technologies PLC</strong>, I led
              architectural design for high-security admin portals and robust
              APIs for platforms spanning the United States and Ethiopia —
              including <strong>LINQ Solutions</strong> (U.S. school bus
              management), <strong>Cheetah</strong> (ride-hailing),{" "}
              <strong>Tuteapp</strong> (tutoring), and <strong>Emebet</strong>{" "}
              (job matching).
            </p>
            <p>
              My technical expertise spans microservices architecture,
              event-driven message streaming (<strong>Kafka / RabbitMQ</strong>
              ), and cloud containerization (
              <strong>AWS, Docker, Kubernetes</strong>), coupled with an
              advanced focus on{" "}
              <strong>
                multi-agent AI systems, LangGraph, and RAG architectures
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1F2937]/80 rounded-2xl border border-gray-800 p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <IconBuildingBank size={22} />
            </div>
            <h3 className="text-white font-bold text-base mb-1">
              Fintech &amp; Banking
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              High-security portals handling 500B+ ETB and 2M+ users with robust
              auth and audit compliance.
            </p>
          </div>

          <div className="bg-[#1F2937]/80 rounded-2xl border border-gray-800 p-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <IconBrain size={22} />
            </div>
            <h3 className="text-white font-bold text-base mb-1">
              Applied AI &amp; RAG
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Multi-agent systems using LangGraph, LangChain, LCEL, and vector
              databases (ChromaDB, Pinecone).
            </p>
          </div>

          <div className="bg-[#1F2937]/80 rounded-2xl border border-gray-800 p-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <IconServer size={22} />
            </div>
            <h3 className="text-white font-bold text-base mb-1">
              Event-Driven Services
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Microservices architectures powered by Kafka, RabbitMQ, NestJS,
              Golang, and FastAPI.
            </p>
          </div>

          <div className="bg-[#1F2937]/80 rounded-2xl border border-gray-800 p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <IconUsers size={22} />
            </div>
            <h3 className="text-white font-bold text-base mb-1">
              Team Mentorship
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Guiding junior developers, conducting rigorous code reviews, and
              enforcing architectural consistency.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <Skills />

      {/* ── Experience ── */}
      <Experience />

      {/* ── Projects ── */}
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
                Selected Projects
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
              <p className="text-gray-400 text-sm md:text-base font-light">
                Enterprise banking platforms, international fleet systems, and
                scalable modern web apps.
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

      {/* ── Education ── */}
      <Education />

      {/* ── Contact ── */}
      <ContactMe />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
