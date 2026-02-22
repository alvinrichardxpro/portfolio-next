"use client";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Network Installation",
      description: "LAN & WiFi installation for school and small office.",
      tech: ["Networking", "LAN", "WiFi"],
    },
    {
      title: "Cybersecurity Lab",
      description: "Basic firewall and network security configuration.",
      tech: ["Firewall", "Security", "Linux"],
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio website built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "Web"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="text-blue-400">My</span> Projects
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/60 backdrop-blur
              border border-slate-800 rounded-2xl p-6
              transition-all duration-500
              hover:-translate-y-2 hover:border-blue-400
              hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              {/* GRADIENT OVERLAY */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                transition duration-500 bg-gradient-to-br from-blue-500/10 to-transparent"
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h2>

                <p className="text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      bg-slate-800 text-slate-300
                      group-hover:bg-blue-500/20 group-hover:text-blue-300
                      transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block border border-slate-700 hover:border-blue-400
            px-6 py-3 rounded-xl transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}