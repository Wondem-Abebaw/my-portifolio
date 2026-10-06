"use client";
import {
  IconBrain,
  IconServer,
  IconLayout,
  IconDatabase,
  IconCloud,
  IconCode,
  IconMessageDots,
  IconDeviceMobile,
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
    title: "Applied AI & Vector DBs",
    badge: "Specialization",
    icon: IconBrain,
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/40 hover:border-purple-400",
    bgGlow: "from-purple-950/30 to-indigo-950/20",
    description: "Multi-agent systems, RAG pipelines, and semantic vector retrieval.",
    skills: [
      "LangGraph",
      "LangChain",
      "LangSmith",
      "LCEL",
      "RAG Architectures",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Vertex AI",
      "ChromaDB",
      "FAISS",
      "Pinecone",
      "Weaviate",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: IconServer,
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    bgGlow: "from-blue-950/30 to-slate-900/20",
    description: "High-throughput APIs, microservices, and reliable server-side services.",
    skills: [
      "Node.js",
      "Golang",
      "NestJS",
      "FastAPI",
      "RESTful APIs",
      "GraphQL (Apollo)",
      "gRPC",
      "Microservices",
    ],
  },
  {
    title: "Event-Driven & Messaging",
    icon: IconMessageDots,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/30 hover:border-amber-400",
    bgGlow: "from-amber-950/20 to-stone-900/20",
    description: "Asynchronous processing, message queues, and real-time event distribution.",
    skills: ["Apache Kafka", "RabbitMQ", "SSE Streaming", "Event-Driven Architecture"],
  },
  {
    title: "Frontend & Mobile",
    icon: IconLayout,
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/30 hover:border-indigo-400",
    bgGlow: "from-indigo-950/20 to-slate-900/20",
    description: "Modern responsive web applications, mobile apps, and robust state engines.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "Hookstate",
      "React Query",
      "Context API",
      "React Hook Form",
      "Formik",
    ],
  },
  {
    title: "Cloud, DevOps & Automation",
    icon: IconCloud,
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30 hover:border-cyan-400",
    bgGlow: "from-cyan-950/20 to-slate-900/20",
    description: "Containerized deployments, automated pipelines, and workflow orchestration.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD (Jenkins, GitLab CI)",
      "Monorepos (Turborepo)",
      "n8n Automation",
      "Git & GitHub",
    ],
  },
  {
    title: "Databases & Core Languages",
    icon: IconDatabase,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30 hover:border-emerald-400",
    bgGlow: "from-emerald-950/20 to-slate-900/20",
    description: "Relational, document, and indexed data storage alongside core languages.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "TypeScript",
      "Python",
      "Golang",
      "JavaScript",
      "Java",
      "HTML5 / CSS3",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-20 py-24">
      <div className="flex flex-col items-start mb-12">
        <p className="text-[#6366F1] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
          Technical Arsenal
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Skills &amp; Technologies
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
          Production-tested stack spanning full-stack development, event-driven microservices,
          cloud infrastructure, and applied AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${cat.bgGlow} bg-[#1F2937]/80 rounded-2xl border ${cat.borderColor} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gray-800/80 border border-gray-700/50 ${cat.accentColor}`}>
                    <Icon size={24} />
                  </div>
                  {cat.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed mb-5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800/80">
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