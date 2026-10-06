"use client";
import {
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";

const educationList = [
  {
    degree: "Bachelor's Degree in Biomedical Engineering",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "Graduated July 2022",
    type: "Degree",
    description:
      "Rigorous engineering education emphasizing computational modeling, complex systems, algorithmic problem solving, and analytical data analysis.",
    icon: IconSchool,
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Evangadi Tech School",
    location: "Addis Ababa, Ethiopia (US Curriculum)",
    period: "Completed June 2023",
    type: "Professional Certification",
    description:
      "Intensive full-stack software engineering program covering modern JavaScript, React, Node.js, RESTful architectures, relational databases, and enterprise application deployments.",
    icon: IconCertificate,
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#111827] py-20 border-t border-gray-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-20">
        <div className="flex flex-col items-start mb-12">
          <p className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Education &amp; Credentials
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full mt-3 mb-4" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            Strong academic foundations in engineering paired with specialized
            full-stack software development credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#1F2937]/90 rounded-2xl border border-gray-800 p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/60 text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300">
                      <Icon size={26} stroke={1.8} />
                    </div>
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${edu.badgeColor}`}
                    >
                      {edu.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-400 font-medium text-base mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
                  <div className="flex items-center gap-1.5">
                    <IconCalendar size={15} className="text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconMapPin size={15} className="text-gray-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
