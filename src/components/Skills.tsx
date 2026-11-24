"use client";
import React, { useState } from "react";
import {
  IconBrain,
  IconServer,
  IconLayout,
  IconDatabase,
  IconCloud,
  IconCode,
  IconMessageDots,
  IconNetwork,
  IconShieldLock,
  IconActivity,
  IconClipboardCheck,
} from "@tabler/icons-react";

interface SkillCategory {
  title: string;
  badge?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Architecture & Design",
    badge: "Core Architecture",
    icon: IconNetwork,
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/40 hover:border-indigo-400",
    bgGlow: "from-indigo-950/30 to-purple-950/20",
    description: "Designing resilient, distributed, decoupled enterprise systems and scalable paradigms.",
    skills: [
      "Distributed Systems",
      "Clean Architecture",
      "Hexagonal Architecture",
      "Layered Architecture",
      "Domain-Driven Design (DDD)",
      "Design Patterns",
      "Event-Driven Architecture",
      "Saga Pattern",
    ],
  },
  {
    title: "Backend Engineering",
    badge: "Specialization",
    icon: IconServer,
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    bgGlow: "from-blue-950/30 to-slate-900/20",
    description: "High-throughput services, modular backend microservices, and robust APIs.",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "Microservices Architecture",
      "API Integration",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Primary Programming Languages",
    icon: IconCode,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/30 hover:border-amber-400",
    bgGlow: "from-amber-950/20 to-stone-900/20",
    description: "Strong foundation across compiled and interpreted languages for server and client systems.",
    skills: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    title: "Databases & Data Engineering",
    icon: IconDatabase,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30 hover:border-emerald-400",
    bgGlow: "from-emerald-950/20 to-slate-900/20",
    description: "Relational, in-memory, analytical, and document stores with transaction integrity.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "ClickHouse",
      "Database Modeling",
      "Query Optimization",
      "Indexing",
      "Transaction Management",
      "Database Migrations",
    ],
  },
  {
    title: "Messaging & Distributed Processing",
    icon: IconMessageDots,
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/30 hover:border-orange-400",
    bgGlow: "from-orange-950/20 to-stone-900/20",
    description: "High-throughput asynchronous messaging, event streaming, and real-time processing pipelines.",
    skills: [
      "Apache Kafka",
      "RabbitMQ",
      "Asynchronous Processing",
      "Event Streaming",
      "Server-Sent Events (SSE)",
    ],
  },
  {
    title: "AI & Intelligent Systems",
    badge: "Applied AI",
    icon: IconBrain,
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/40 hover:border-purple-400",
    bgGlow: "from-purple-950/30 to-indigo-950/20",
    description: "LLM integration, autonomous multi-agent systems, and semantic retrieval-augmented generation.",
    skills: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Retrieval-Augmented Generation (RAG)",
      "Multi-Agent Systems",
      "LLM Integration",
      "n8n Automation",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: IconLayout,
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30 hover:border-cyan-400",
    bgGlow: "from-cyan-950/20 to-slate-900/20",
    description: "Modern, responsive, accessible web and mobile platforms with robust client state engines.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Apollo Client",
      "Responsive Web Applications",
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: IconCloud,
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/30 hover:border-sky-400",
    bgGlow: "from-sky-950/20 to-slate-900/20",
    description: "Containerization, cloud environments, automated deployment pipelines, and orchestration.",
    skills: [
      "AWS",
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Jenkins",
      "GitLab CI",
      "Linux",
      "Container Orchestration",
    ],
  },
  {
    title: "API Security & Integration",
    icon: IconShieldLock,
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/30 hover:border-rose-400",
    bgGlow: "from-rose-950/20 to-stone-900/20",
    description: "Banking-grade security, access control governance, and secure service-to-service communication.",
    skills: [
      "OAuth 2.0",
      "JWT",
      "Role-Based Access Control (RBAC)",
      "OpenAPI / Swagger",
      "API Versioning",
      "Secure Service-to-Service Communication",
    ],
  },
  {
    title: "Reliability & Observability",
    icon: IconActivity,
    accentColor: "text-teal-400",
    borderColor: "border-teal-500/30 hover:border-teal-400",
    bgGlow: "from-teal-950/20 to-slate-900/20",
    description: "Maintaining high availability, distributed traceability, fault tolerance, and low latency.",
    skills: [
      "Structured Logging",
      "Monitoring",
      "Distributed Tracing",
      "Caching Strategies",
      "Performance Optimization",
      "Fault Tolerance",
      "Resilience Engineering",
    ],
  },
  {
    title: "Engineering Practices",
    icon: IconClipboardCheck,
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/30 hover:border-violet-400",
    bgGlow: "from-violet-950/20 to-slate-900/20",
    description: "Professional rigor, quality assurance, team workflows, and modular codebase management.",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Technical Documentation",
      "Agile / Scrum",
      "Git",
      "Monorepos",
      "Turborepo",
    ],
  },
];

export default function Skills() {
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Architecture & Backend",
    "Data & Messaging",
    "Cloud & Security",
    "AI & Frontend",
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (filter === "All") return true;
    if (filter === "Architecture & Backend") {
      return (
        cat.title.includes("Architecture") ||
        cat.title.includes("Backend") ||
        cat.title.includes("Languages")
      );
    }
    if (filter === "Data & Messaging") {
      return (
        cat.title.includes("Databases") ||
        cat.title.includes("Messaging") ||
        cat.title.includes("Reliability")
      );
    }
    if (filter === "Cloud & Security") {
      return (
        cat.title.includes("Cloud") ||
        cat.title.includes("Security") ||
        cat.title.includes("Practices")
      );
    }
    if (filter === "AI & Frontend") {
      return (
        cat.title.includes("AI") ||
        cat.title.includes("Frontend")
      );
    }
    return true;
  });

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-20 py-24 border-t border-gray-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col items-start">
          <p className="text-[#6366F1] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Technical Skills &amp; Architecture
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            Comprehensive production-grade competencies across distributed systems, banking infrastructure,
            cloud-native microservices, databases, and applied AI systems.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                filter === opt
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${cat.bgGlow} bg-[#1F2937]/80 rounded-2xl border ${cat.borderColor} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-xl bg-gray-800/80 border border-gray-700/50 ${cat.accentColor}`}
                  >
                    <Icon size={24} />
                  </div>
                  {cat.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed mb-5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg bg-gray-900/80 border border-gray-700/60 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
