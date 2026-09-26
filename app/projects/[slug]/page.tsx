import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBuilding,
  faCalendarDays,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { getProject, projects } from "../data";
import DetailSection from "./components/DetailSection";
import DetailActions from "./components/DetailActions";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white px-4 sm:px-6 pt-20 sm:pt-24 pb-10 relative">
      {/* Ambient glow — kecil di HP */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] bg-blue-600/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 min-w-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white active:text-white border border-slate-800 bg-slate-900/60 hover:border-blue-500/50 px-4 py-2.5 sm:py-2 rounded-full transition mb-6 sm:mb-8 min-h-[44px] sm:min-h-0"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
          Kembali ke Projects
        </Link>

        <span className="inline-block max-w-full truncate text-[11px] font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {project.category}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 mb-3 leading-tight break-words">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 mb-6 sm:mb-8">
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <FontAwesomeIcon icon={faBuilding} className="shrink-0 text-blue-400" />
            <span className="truncate">{project.company}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FontAwesomeIcon icon={faCalendarDays} className="shrink-0 text-blue-400" />
            {project.date}
          </span>
        </div>

        {project.image && (
          <div className="relative w-full h-52 sm:h-64 lg:h-80 mb-5 sm:mb-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
              className="object-contain p-3 sm:p-4"
              priority
            />
          </div>
        )}

        <DetailSection title="Overview">
          <div className="space-y-3">
            {project.overview.map((para, i) => (
              <p key={i} className="text-[13px] sm:text-sm text-slate-300 leading-relaxed break-words">
                {para}
              </p>
            ))}
          </div>
        </DetailSection>

        <DetailSection title="Yang Dikerjakan">
          <ul className="space-y-2.5">
            {project.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed break-words"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mt-1 shrink-0 text-sm text-emerald-400"
                />
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 sm:py-1 rounded-full bg-slate-800/80 text-slate-200 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </DetailSection>

        <DetailActions project={project} />
      </div>
    </main>
  );
}
