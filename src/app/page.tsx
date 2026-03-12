"use client";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import {  IconArrowRight } from "@tabler/icons-react";

export default function Home() {
  const projectData = [
    {
      image: "/images/dashenbank.png",
      title: "Dashen Bank Super App Portal",
      alt:"Images are secure and private",
      description:
        "High-security admin panel managing 2M+ active users and 220B+ ETB transactions. Built with Next.js and advanced auth flows.",
      link: "",
      tags: ["Next.js", "TypeScript", " "],
      highlight: true,
    },
     {
      image: "/images/dashenbank.png",
      title: "Dashen Bank Paperless Banking System",
      alt:"Images are secure and private",
      description:
        "Paperless banking system for Dashen Bank. Built with Next.js and language localization.",
      link: "",
      tags: ["Next.js", "TypeScript", " "],
      highlight: true,
    },
    {
      image: "/images/kabbatransport.png",
      title: "Kabba Transport",
      alt:"Images are secure and private",
      description:
        "Carpooling service platform connecting riders and drivers with real-time matching and route optimization.",
      link: "",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      image: "/images/emebet.png",
      title: "Emebet",
      alt:"Images are secure and private",
      description:
        "Job matching platform dedicated to connecting women job seekers with employment opportunities.",
      link: "",
      tags: ["Next.js", "Tailwind CSS", "REST API"],
    },
    {
      image: "/images/linqsolutions.png",
      title: "LINQ Solutions",
      alt:"Images are secure and private",
      description:
        "U.S.-based school bus management system with admin dashboards and robust API integrations.",
      link: "",
      tags: ["React", "NestJS", "PostgreSQL"],
    },
    {
      image: "/images/maraki.png",
      title: "Maraki",
      alt:"Images are secure and private",
      description:
        "Ethiopian dating app with scalable backend logic and dynamic user interfaces for matchmaking.",
      link: "",
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      image: "/images/tuteapp.png",
      title: "TuteApp",
      alt:"Images are secure and private",
      description:
        "Online tutoring platform connecting tutors with parents seeking educational services.",
      link: "",
      tags: ["Next.js", "Tailwind CSS", "API"],
    },
  ];

  const stats = [
    { num: "3+", label: "Years Experience" },
    { num: "10+", label: "Projects Shipped" },
    { num: "2M+", label: "Users Served" },
  ];

  return (
    <div className="bg-[#0F0F0F] text-[#F0EDE8] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 md:px-20 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1">
          <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase font-medium mb-5">
            Senior Frontend Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Wondem
            <br />
            <span className="text-[#D4A853]">Abebaw</span>
          </h1>
          <p className="text-[#9A9590] text-lg leading-relaxed max-w-xl mb-10 font-light">
            3+ years building high-security web applications for banks,
            transport, healthcare, and education. Specialized in React &amp;
            Next.js with a proven track record across enterprise-grade platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <a
              href="/Wondem_Abebaw_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#D4A853] text-[#0F0F0F] font-bold text-sm tracking-wide hover:bg-[#E8C97A] transition-colors"
            >
              <IconDownload size={16} />
              Download CV
            </a> */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#D4A853] text-[#D4A853] font-bold text-sm tracking-wide hover:bg-[#D4A853] hover:text-[#0F0F0F] transition-colors"
            >
              View Work
              <IconArrowRight size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[#2A2A2A]">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-[#D4A853]">{num}</div>
                <div className="text-xs text-[#9A9590] tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-[#D4A853] to-transparent" />
            <img
              src="/profile.png"
              alt="Wondem Abebaw"
              className="w-48 h-48 rounded-full object-cover relative border-4 border-[#0F0F0F]"
            />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase font-medium mb-3">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
          Crafting Interfaces That Matter
        </h2>
        <div className="w-12 h-[3px] bg-[#D4A853] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-[#9A9590] leading-relaxed font-light">
            Senior Front End Developer at EagleLion System Technology, where I
            build high-security web applications for Dashen Bank — one of
            Ethiopia&apos;s leading banks with 2M+ active users and 220 billion
            ETB in transactions.
          </p>
          <p className="text-[#9A9590] leading-relaxed font-light">
            Previously at Vintage Technologies, I led architectural design for
            admin portals and APIs across U.S. and Ethiopian platforms — spanning
            transport, education, healthcare, and social sectors. I write clean,
            maintainable code and care deeply about performance and developer
            experience.
          </p>
        </div>
      </section>

      {/* ── Skills ── */}
      <Skills />

      {/* ── Experience ── */}
      <Experience />

      {/* ── Projects ── */}
      <section id="projects" className="bg-[#161616] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
            Selected Work
          </h2>
          <div className="w-12 h-[3px] bg-[#D4A853] mb-4" />
          <p className="text-[#9A9590] font-light mb-12">
            Projects I&apos;ve shipped — from banking infrastructure to consumer apps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <ContactMe />
      <Footer />
    </div>
  );
}