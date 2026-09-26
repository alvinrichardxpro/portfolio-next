"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Efek scroll: navbar menebal saat discroll (terlihat di HP & desktop)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Tutup menu HP otomatis saat user mulai scroll halaman
      setOpen((prev) => {
        if (prev && window.scrollY > 40) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu HP tiap pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur transition duration-300 border-b ${
        scrolled || open
          ? "bg-[#0b0f19]/90 border-slate-800/60 shadow-lg shadow-black/20"
          : "bg-[#0b0f19]/70 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-bold text-white transition truncate text-base sm:text-lg shrink-0"
        >
          <span className="hidden sm:inline">Alvin Richard | Network &amp; System</span>
          <span className="sm:hidden">Alvin Richard</span>
          <span className="text-slate-500">.</span>
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
                  active ? "text-white" : "text-slate-500 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* TOMBOL HAMBURGER (HP) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition shrink-0"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* MENU HP DROPDOWN — bisa scroll sendiri, auto-tutup saat halaman discroll */}
      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-[#0b0f19]/95 backdrop-blur px-4 py-3 flex flex-col gap-1 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-xl text-sm font-medium transition min-h-[44px] flex items-center ${
                  active
                    ? "bg-white/[0.06] text-white"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-white"
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
