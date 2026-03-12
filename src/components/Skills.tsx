"use client";

const skillGroups = [
  {
    category: "Frontend",
    dot: "bg-[#6366F1]",
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS",
      "GraphQL / Apollo", "Ant Design", "Shadcn/ui",
      "React Hook Form", "Formik",
    ],
  },
  {
    category: "State & Data",
    dot: "bg-[#8B9E7D]",
    skills: [
      "Redux Toolkit", "TanStack Query", "React Query",
      "Zustand", "Hookstate", "Context API",
    ],
  },
  {
    category: "Backend & DB",
    dot: "bg-[#7D8F9E]",
    skills: [
      "Node.js", "NestJS", "Express",
      "PostgreSQL", "MySQL", "RESTful API", "Microservices",
    ],
  },
  {
    category: "Tools & DevOps",
    dot: "bg-[#9E7D8B]",
    skills: [
      "Git / GitHub", "Docker", "CI/CD Pipelines",
      "Turborepo", "Postman", "n8n", "Jest", "Vitest",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-20 py-20">
      <p className="text-[#6366F1] text-xs tracking-[0.2em] uppercase font-medium mb-3">
        Expertise
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-[#FFFFFF]">
        Technical Skills
      </h2>
      <div className="w-12 h-[3px] bg-[#6366F1] mb-4" />
      <p className="text-[#9CA3AF] font-light mb-12">
        Technologies I use to build production-grade applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[#1F2937] border border-[#374151] p-6 hover:border-[#4B5563] transition-colors"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${group.dot}`} />
              <span className="text-[#FFFFFF] font-bold text-xs tracking-[0.08em] uppercase">
                {group.category}
              </span>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2.5 py-1 bg-[#374151] border border-[#374151] text-[#9CA3AF]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}