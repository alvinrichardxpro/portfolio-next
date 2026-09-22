"use client";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Network Installation",
      description: "LAN & WiFi installation for school and small office.",
      tech: ["Networking", "LAN", "WiFi"],
      category: "Infrastructure",
      link: "https://medium.com/@alvinrichard.xpro",
    },
    {
      title: "Cybersecurity Lab",
      description: "Basic firewall and network security configuration.",
      tech: ["Firewall", "Security", "Linux"],
      category: "Security",
      link: "https://medium.com/@alvinrichard.xpro",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-24 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              My
            </span>{" "}
            Projects
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            A collection of projects and technical implementations I have worked on.
          </p>
        </div>

        {/* CENTERED CARDS */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] overflow-hidden cursor-pointer w-full md:w-[380px]"
            >
              {/* GRADIENT OVERLAY ON HOVER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

              {/* CONTENT TOP */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-blue-400 border border-slate-700/50">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-blue-400 transition">
                    Read Article ↗
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* TECH STACK & FOOTER */}
              <div className="relative z-10 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/50 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:border-blue-500/30 transition duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-slate-700/80 bg-slate-800/40 hover:bg-slate-800 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl transition duration-200 font-medium text-sm shadow-md"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}