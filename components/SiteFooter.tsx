import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

export default function SiteFooter() {
  return (
    <footer className="w-full max-w-4xl mx-auto border-t border-slate-800/80 mt-12 sm:mt-16 pt-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
      <p className="leading-relaxed">
        © {new Date().getFullYear()} Alvin Richard Hidayat Aras. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 py-1 hover:text-slate-300 transition"
        >
          <FontAwesomeIcon icon={faHouse} className="text-[11px]" />
          Home
        </Link>
        <Link
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 py-1 hover:text-slate-300 transition"
        >
          <FontAwesomeIcon icon={faMedium} className="text-sm" />
          nunaa
        </Link>
      </div>
    </footer>
  );
}
