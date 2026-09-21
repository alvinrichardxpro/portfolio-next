"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white flex items-center justify-center px-6">
      <div
        className={`text-center max-w-3xl transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* PROFILE IMAGE */}
        <div
          className={`mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 transition-all duration-1000 ${
            show ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold mb-6">
          Hi,{" "}
          <span className="text-blue-400">Welcome to my website</span>{" "}
          <span className="inline-block animate-bounce"></span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          A{" "}
          <span className="text-white font-medium">
            Network & Web Enthusiast
          </span>{" "}
          specializing in network installation, system security, and building
          modern, fast, and scalable websites using{" "}
          <span className="text-blue-400">Next.js</span>.
        </p>

        {/* BUTTONS */}
        <div
          className={`flex justify-center gap-4 transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            About Me
          </Link>

          <Link
            href="/projects"
            className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-semibold transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}