"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-24 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
        </h1>

        <p className="text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto text-base md:text-lg">
          I'm{" "}
          <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">
            Alvin Richard Hidayat Aras
          </span>
          , a Network & Web Enthusiast with a strong interest in network installation, system security, and modern web development. I enjoy building reliable networks and clean, scalable websites using modern technologies.
        </p>

        {/* SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
          {/* Card 1: Networking */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-blue-400 shadow-sm shadow-blue-400" />
              <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                Networking
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              LAN, WiFi setup, network monitoring, and troubleshooting.
            </p>
          </div>

          {/* Card 2: Security */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
              <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                Security
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Firewall configuration, basic cybersecurity, and system hardening.
            </p>
          </div>

          {/* Card 3: Web Development */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                Web Development
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next.js, Tailwind CSS, responsive and modern UI design.
            </p>
          </div>
        </div>

        {/* BACK TO HOME */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-slate-700/80 bg-slate-800/40 hover:bg-slate-800 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl transition duration-200 font-medium text-sm shadow-md"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}