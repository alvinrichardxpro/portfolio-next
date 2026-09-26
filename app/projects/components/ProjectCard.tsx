import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../data";
import TechBadge from "./TechBadge";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full min-w-0">
      <article className="h-full min-w-0 overflow-hidden bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col justify-between transition duration-300 hover:border-blue-500/50 hover:bg-slate-900/80 active:scale-[0.99] sm:hover:-translate-y-1">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="min-w-0 truncate max-w-[62%] text-[11px] font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="shrink-0 text-[11px] text-slate-500">{project.date}</span>
          </div>

          <h3 className="text-[15px] sm:text-base font-bold text-white mb-1.5 leading-snug break-words group-hover:text-blue-400 transition">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-3 break-words">
            {project.shortDesc}
          </p>

          {project.image && (
            <div className="relative w-full h-36 sm:h-40 my-3 bg-slate-950 border border-slate-800/80 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-contain p-2 group-hover:scale-[1.02] transition duration-300"
              />
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap gap-1.5 pt-2 mb-3">
            {project.tech.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 transition">
            Lihat Detail
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[10px] group-hover:translate-x-0.5 transition duration-300"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
