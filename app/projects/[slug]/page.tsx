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
    <main className="min-h-screen overflow-x-hidden bg-[#0b0f19] text-white px-4 sm:px-6 pt-20 sm:pt-24 pb-10 relative">
      {/* Glow sangat tipis — sama seperti Home */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-slate-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 min-w-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-white border border-slate-800 hover:border-slate-600 px-4 py-2.5 sm:py-2 rounded-full transition mb-6 sm:mb-8 min-h-[44px] sm:min-h-0"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
          Kembali ke Projects
        </Link>

        <span className="inline-block max-w-full truncate text-[11px] font-medium px-2.5 py-1 rounded-full text-slate-400 border border-slate-800">
          {project.category}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-3 leading-tight break-words text-white">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 mb-6 sm:mb-8">
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <FontAwesomeIcon icon={faBuilding} className="shrink-0" />
            <span className="truncate">{project.company}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FontAwesomeIcon icon={faCalendarDays} className="shrink-0" />
            {project.date}
          </span>
        </div>

        {project.image && (
          <div className="relative w-full h-52 sm:h-64 lg:h-80 mb-5 sm:mb-8 bg-white/[0.02] border border-slate-800/60 rounded-2xl overflow-hidden">
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
              <p key={i} className="text-[13px] sm:text-sm text-slate-400 leading-relaxed break-words">
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
                className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-400 leading-relaxed break-words"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mt-1 shrink-0 text-sm text-slate-500"
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
                className="text-xs px-3 py-1 rounded-full text-slate-500 border border-slate-800/60"
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
