import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="text-left mb-16">
      <SectionHeading
        dotColor="bg-slate-400"
        shadowColor=""
        title="What I Do"
        subtitle="Fokus keahlian utama di bidang jaringan, sistem, dan monitoring."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border border-slate-800/60 rounded-2xl p-6 bg-white/[0.02] hover:border-slate-600 transition duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-slate-800 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={group.icon} className="text-slate-300 text-lg" />
            </div>
            <h3 className="text-base font-bold text-white mb-4">{group.title}</h3>
            <ul className="space-y-2.5">
              {group.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[13px] text-slate-400 leading-relaxed"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-0.5 shrink-0 text-[13px] text-slate-500"
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
