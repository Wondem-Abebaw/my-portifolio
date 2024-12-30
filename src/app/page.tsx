"use client";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

import { IconDownload, IconExternalLink } from "@tabler/icons-react";

export default function Home() {
  const projectData = [
    {
      image: "/images/kabbatransport.png",
      title: "Kabba Transport",
      description: "Carpooling service",
      link: "https://www.kabbatransport.com/",
    },
    {
      image: "/images/emebet.png",
      title: "Emebet",
      description: "A job matching platform for women",
      link: "https://emebet.net/public/user",
    },
    {
      image: "/images/linqsolutions.png",
      title: "Linq Solutions",
      description: "School bus management system in USA",
      link: "https://linqsolutions.co/",
    },
    {
      image: "/images/maraki.png",
      title: "Maraki",
      description: "Ethiopian dating app",
      link: "",
    },
    {
      image: "/images/tuteapp.png",
      title: "TuteApp",
      description: "Online tutoring platform",
      link: "https://www.tuteapp.com/",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-indigo-500">Wondem Abebaw</span>
          </h1>
          <p className="text-lg md:text-xl">
            Front-End Developer crafting modern, responsive web experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="/Wondem resume.pdf"
              className="px-6 py-3 bg-indigo-500 rounded hover:bg-indigo-600 flex items-center gap-2"
              target="_blank"
            >
              <IconDownload size={20} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full border border-indigo-500 w-40 h-40 object-cover shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Motivated and dynamic Web Developer with technical skills and
          creativity to develop innovative and efficient web applications.
          Education and experience in comprehensive problem solving, creative
          troubleshooting, and complex project management. With few years
          experience as a professional Full Stack Developer with specific focus
          on Frontend, I have acquired the skills necessary to build great,
          appealing, and premium websites that meet the latest web standards.
          Accomplished with effective collaboration skills, team building
          capabilities and leadership in diverse and multifaceted operations.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 md:p-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-indigo-500 mb-1  text-center">
          My Recent Projects
        </h2>
        <h5 className="text-center mb-8">
          Here are a few projects I've worked on recently.
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <ContactMe />
      {/* Footer */}
      <Footer />
    </div>
  );
}
