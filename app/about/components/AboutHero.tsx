import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { profile, focusPoints } from "../data";

export default function AboutHero() {
  return (
    <header className="text-center px-1">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
        About Me
      </h1>

      <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        Saya <span className="text-white font-semibold">{profile.name}</span> siswa{" "}
        {profile.school} jurusan {profile.major}. {profile.summary}
      </p>

      {/* Fokus utama — bullet points */}
      <ul className="text-left max-w-2xl mx-auto mb-8 space-y-2.5 border border-slate-800/60 rounded-2xl p-4 sm:p-5 bg-white/[0.02]">
        {focusPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[13px] sm:text-sm text-slate-400 leading-relaxed">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 shrink-0 text-sm text-slate-500" />
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-12 sm:mb-16">
        <a
          href="/cv-alvin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition text-center w-full sm:w-auto"
        >
          Download CV
        </a>
        <Link
          href="/contact"
          className="px-7 py-3 rounded-full border border-slate-800 text-sm font-medium text-slate-400 hover:border-slate-600 hover:text-white transition text-center w-full sm:w-auto"
        >
          Contact me
        </Link>
      </div>
    </header>
  );
}
