"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-lg text-white hover:text-blue-400 transition"
        >
          Alvin<span className="text-blue-400">.</span>
        </Link>

        {/* MENU */}
        <div className="flex gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition
                  ${
                    active
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.name}

                {/* ACTIVE LINE */}
                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}