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
        dotColor="bg-slate-400"
        shadowColor=""
        title="Certifications"
      />

      <div className="space-y-4">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="group border border-slate-800/60 rounded-2xl p-6 bg-white/[0.02] hover:border-slate-600 transition duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 border border-slate-800 px-2.5 py-1 rounded-full mb-2">
                  <FontAwesomeIcon icon={faAward} className="text-[11px]" />
                  {cert.badge}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {cert.title}
                </h3>
              </div>
              <span className="shrink-0 text-xs font-medium text-slate-300 border border-slate-800 bg-white/[0.03] px-3 py-1 rounded-full h-fit">
                {cert.score}
              </span>
            </div>

            <p className="text-sm text-slate-500 mb-4">
              Publisher: <strong className="text-slate-300 font-medium">{cert.publisher}</strong> • {cert.date}
            </p>

            {/* Bullet points materi sertifikasi */}
            <ul className="text-[13px] text-slate-400 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-6 p-4 rounded-xl border border-slate-800/60">
              {cert.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full border border-slate-700 text-slate-500 flex items-center justify-center">
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
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition"
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
