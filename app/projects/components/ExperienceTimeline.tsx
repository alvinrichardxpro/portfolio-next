import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircle } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data";

export default function ExperienceTimeline() {
  return (
    <section className="w-full max-w-3xl mb-8 sm:mb-10 min-w-0">
      <SectionTitle title="Practical Experience" />
      <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6 text-left">
        Pengalaman proyek yang sudah saya kerjakan.
      </p>

      <div className="relative ml-2 pl-6 border-l border-slate-800/60 space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.title}
            className="relative border border-slate-800/60 rounded-2xl p-4 sm:p-6 bg-white/[0.02] hover:border-slate-600 transition"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[31px] top-7 w-2.5 h-2.5 rounded-full bg-slate-400 ring-4 ring-[#0b0f19]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <h3 className="flex items-center gap-2 text-base font-bold text-white">
                <FontAwesomeIcon icon={faBriefcase} className="text-xs text-slate-500" />
                {exp.title}
              </h3>
              <span className="shrink-0 self-start sm:self-auto text-xs text-slate-500 border border-slate-800 px-2.5 py-1 rounded-full">
                {exp.date}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-400 mb-4">{exp.company}</p>

            {/* Bullet points per pengalaman */}
            <ul className="space-y-2">
              {exp.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                >
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="mt-1.5 shrink-0 text-[6px] text-slate-600"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
