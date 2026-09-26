"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-bold text-white hover:text-blue-400 transition truncate text-base sm:text-lg shrink-0"
        >
          <span className="hidden sm:inline">Alvin Richard | Network &amp; System</span>
          <span className="sm:hidden">Alvin Richard</span>
          <span className="text-blue-400">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* TOMBOL HAMBURGER (HP) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition shrink-0"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* MENU HP DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
