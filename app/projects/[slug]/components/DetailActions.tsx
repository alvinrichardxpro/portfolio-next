import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "../../data";

export default function DetailActions({ project }: { project: Project }) {
  const btn =
    "inline-flex w-full sm:w-auto items-center justify-center gap-2 font-medium px-7 py-3 rounded-full transition text-sm min-h-[44px]";

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
      {project.mediumUrl && (
        <a
          href={project.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} bg-white text-slate-950 font-semibold hover:bg-slate-200`}
        >
          <FontAwesomeIcon icon={faMedium} />
          Baca di Medium
        </a>
      )}
      {project.pdfUrl && (
        <a
          href={project.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white`}
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-xs" />
          Lihat Sertifikat
        </a>
      )}
      <Link
        href="/contact"
        className={`${btn} border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        Diskusi Proyek
      </Link>
    </div>
  );
}
