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
      <article className="h-full min-w-0 overflow-hidden border border-slate-800/60 rounded-2xl p-4 sm:p-5 bg-white/[0.02] flex flex-col justify-between transition duration-300 hover:border-slate-600 active:scale-[0.99]">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="min-w-0 truncate max-w-[62%] text-[11px] font-medium px-2.5 py-0.5 rounded-full text-slate-400 border border-slate-800">
              {project.category}
            </span>
            <span className="shrink-0 text-[11px] text-slate-600">{project.date}</span>
          </div>

          <h3 className="text-[15px] sm:text-base font-bold text-white mb-1.5 leading-snug break-words">
            {project.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed mb-3 break-words">
            {project.shortDesc}
          </p>

          {project.image && (
            <div className="relative w-full h-36 sm:h-40 my-3 bg-black/20 border border-slate-800/60 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-contain p-2"
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
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-white transition">
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
