"use client";

import Link from "next/link";

export default function About() {
  const experiences = [
    {
      title: "Inter-AS Interconnection Project",
      company: "PT Qelopak",
      date: "Desember 2025",
      desc: "Requirements analysis, topology design (VLAN, intra/inter-AS routing), implementation of routers, switches, and firewalls, as well as the application of QoS and ACL security measures.",
    },
    {
      title: "Digital Infrastructure Development Project",
      company: "PT Ginvo Studio",
      date: "June 2025",
      desc: "Design of LAN, MAN, and WAN network topologies, VLAN segmentation, and routing policies, as well as monitoring using Winbox and Ubuntu Server.",
    },
    {
      title: "Small Office Network Setup Project",
      company: "Kreasi Media",
      date: "Desember 2024",
      desc: "LAN/WLAN design, cable crimping, and configuration of file and printer sharing services between computers.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-24 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
        </h1>

        <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto text-base md:text-lg">
          I am{" "}
          <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">
            Alvin Richard Hidayat Aras
          </span>
          A student at SMK Informatika Pesat majoring in Computer and Network Engineering (TKJ). Focuses on network infrastructure, Linux system administration, and network monitoring using MikroTik, Cisco, and Zabbix.
        </p>

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="/cv-alvin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-blue-500/25 text-sm"
          >
            📄 Download CV
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition duration-200 text-sm"
          >
            💬 Contact me
          </Link>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="text-left mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400" />
            Certifications
          </h2>

          <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md mb-2 inline-block">
                  Official Certificate of Competence
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                  Interconnection Between Autonomous Systems (AS) with Routing Policy Implementation and VLAN Segmentation
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                 Score:89(Competent)
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-4">
              Publisher: <strong className="text-slate-200">PT Qelopak Teknologi Indonesia</strong> • Des 2025
            </p>

            <ul className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
              <li>✓ Network Requirements & Topology Analysis</li>
              <li>✓ VLAN & Encapsulation Implementation</li>
              <li>✓ Routing Intra AS & Routing Antar AS</li>
              <li>✓ QoS, Port Security, & ACLs</li>
            </ul>

            <a
              href="/sertifikat-qelopak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition"
            >
              View Original Certificate (PDF) ↗
            </a>
          </div>
        </div>

        {/* PROJECT & EXPERIENCE HISTORY */}
        <div className="text-left mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
            Practical Experience
          </h2>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{exp.title}</h3>
                  <span className="text-xs text-slate-400">{exp.date}</span>
                </div>
                <p className="text-xs font-semibold text-blue-400 mb-3">{exp.company}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
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