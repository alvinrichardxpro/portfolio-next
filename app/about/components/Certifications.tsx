import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section className="text-left mb-16">
      <SectionHeading
        dotColor="bg-blue-400"
        shadowColor="shadow-blue-400"
        title="Certifications"
      />

      <div className="space-y-4">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md mb-2">
                  <FontAwesomeIcon icon={faAward} className="text-[11px]" />
                  {cert.badge}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition leading-snug">
                  {cert.title}
                </h3>
              </div>
              <span className="shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full h-fit">
                {cert.score}
              </span>
            </div>

            <p className="text-sm text-slate-400 mb-4">
              Publisher: <strong className="text-slate-200">{cert.publisher}</strong> • {cert.date}
            </p>

            {/* Bullet points materi sertifikasi */}
            <ul className="text-[13px] text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
              {cert.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition"
            >
              View Original Certificate (PDF)
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[11px]" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
