import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="text-left mb-16">
      <SectionHeading
        dotColor="bg-sky-400"
        shadowColor="shadow-sky-400"
        title="What I Do"
        subtitle="Fokus keahlian utama di bidang jaringan, sistem, dan monitoring."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 hover:border-sky-500/40 transition duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={group.icon} className="text-sky-400 text-lg" />
            </div>
            <h3 className="text-base font-bold text-white mb-4">{group.title}</h3>
            <ul className="space-y-2.5">
              {group.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[13px] text-slate-300 leading-relaxed"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-0.5 shrink-0 text-[13px] text-sky-400/80"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
