import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faFileArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { profile, focusPoints } from "../data";

export default function AboutHero() {
  return (
    <header className="text-center px-1">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Me
        </span>
      </h1>

      <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        Saya{" "}
        <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">
          {profile.name}
        </span>{" "}
        siswa {profile.school} jurusan {profile.major}. {profile.summary}
      </p>

      {/* Fokus utama — bullet points */}
      <ul className="text-left max-w-2xl mx-auto mb-8 space-y-2.5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-xl">
        {focusPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[13px] sm:text-sm text-slate-300 leading-relaxed">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 shrink-0 text-sm text-blue-400" />
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
        <a
          href="/cv-alvin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-blue-500/25 text-sm w-full sm:w-auto"
        >
          <FontAwesomeIcon icon={faFileArrowDown} />
          Download CV
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition duration-200 text-sm w-full sm:w-auto"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Contact me
        </Link>
      </div>
    </header>
  );
}
