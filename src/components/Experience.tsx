"use client";

const experiences = [
  {
    role: "Senior Front End Developer",
    company: "EagleLion System Technology",
    period: "Aug 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    current: true,
    highlights: [
      "Building high-security web applications for Dashen Bank S.C. and Choice Microfinance.",
      "Developed the Super App Central Portal managing 2M+ users and 220B+ ETB in transactions.",
      "Leading development of Dashen Bank's Paperless Banking system — client, branch, and central portals.",
    ],
  },
  {
    role: "Front End Developer",
    company: "ArifGet",
    period: "Jan 2025 – Aug 2025",
    location: "Remote",
    current: false,
    highlights: [
      "Built a high-performance admin dashboard for an online course & job matching platform.",
      "Optimized frontend performance and improved component reusability across the application.",
      "Participated in UI/UX planning and feature rollout strategy with cross-functional teams.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Vintage Technologies PLC",
    period: "Aug 2023 – Aug 2025",
    location: "Addis Ababa, Ethiopia",
    current: false,
    highlights: [
      "Led architectural design for high-security admin portals across U.S. and Ethiopian platforms.",
      "Shipped key features for LINQ Solutions (USA), Cheetah, Tuteapp, and Emebet.",
      "Resolved 100+ frontend and backend issues; designed and implemented RESTful APIs.",
      "Managed authentication flows, deployment pipelines, and database optimizations.",
    ],
  },
  {
    role: "Web App Developer",
    company: "Swift Technologies PLC",
    period: "Jun 2022 – Jan 2023",
    location: "Addis Ababa, Ethiopia",
    current: false,
    highlights: [
      "Developed a complete web application for an educational platform from the ground up.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "AIT Technology PLC",
    period: "May 2023 – Aug 2023",
    location: "Addis Ababa, Ethiopia",
    current: false,
    highlights: [
      "Modernized a hospital medical record system by refactoring legacy code.",
      "Integrated modern JavaScript frameworks into existing healthcare infrastructure.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#111827] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-20">
        <p className="text-[#6366F1] text-xs tracking-[0.2em] uppercase font-medium mb-3">
          Career
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-[#FFFFFF]">
          Work Experience
        </h2>
        <div className="w-12 h-[3px] bg-[#6366F1] mb-12" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-[#374151] hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:grid md:grid-cols-[180px_1fr] md:gap-10">
                {/* Dot */}
                <div
                  className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#111827] hidden md:block ${
                    exp.current ? "bg-[#6366F1] shadow-[0_0_0_4px_rgba(212,168,83,0.15)]" : "bg-[#374151]"
                  }`}
                />

                {/* Meta */}
                <div className="md:pl-6 mb-3 md:mb-0">
                  <p className="text-[#6366F1] text-xs font-medium tracking-wider uppercase">
                    {exp.period}
                  </p>
                  <p className="text-[#9CA3AF] text-xs font-light mt-1">
                    {exp.location}
                  </p>
                </div>

                {/* Card */}
                <div
                  className={`bg-[#1F2937] border p-6 ${
                    exp.current ? "border-[#6366F1]/30" : "border-[#374151]"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-[#FFFFFF] font-bold text-lg">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[#6366F1] text-sm mb-4">{exp.company}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-[#9CA3AF] text-sm font-light leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#6366F1]/50 before:text-xs before:top-[2px]"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}