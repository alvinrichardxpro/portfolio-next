"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>

        <p className="text-slate-400 leading-relaxed mb-10">
          I’m <span className="text-white font-medium">Alvin</span>, a Network &
          Web Enthusiast with a strong interest in network installation, system
          security, and modern web development. I enjoy building reliable
          networks and clean, scalable websites using modern technologies.
        </p>

        {/* SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-blue-400 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Networking
            </h3>
            <p className="text-slate-400 text-sm">
              LAN, WiFi setup, network monitoring, and troubleshooting.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-blue-400 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Security
            </h3>
            <p className="text-slate-400 text-sm">
              Firewall configuration, basic cybersecurity, and system hardening.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-blue-400 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Web Development
            </h3>
            <p className="text-slate-400 text-sm">
              Next.js, Tailwind CSS, responsive and modern UI design.
            </p>
          </div>
        </div>

        {/* BACK TO HOME */}
        <Link
          href="/"
          className="inline-block border border-slate-700 hover:border-blue-400
          px-6 py-3 rounded-xl transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}