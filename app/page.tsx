import Link from "next/link";
import Image from "next/image";

const expertise = ["Network Infrastructure", "System Security", "Web Development"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center px-4 sm:px-6 py-24 relative overflow-hidden">
      {/* Glow sangat tipis — hampir tak terlihat, cuma penghilang flat */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-slate-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Foto — ring tipis elegan */}
        <div className="w-28 h-28 mx-auto mb-7 rounded-full overflow-hidden border border-slate-700/60 ring-1 ring-white/10 bg-slate-900">
          <Image
            src="/profile.jpg"
            alt="Alvin Richard"
            width={112}
            height={112}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Role */}
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-slate-400 mb-3">
          Network &amp; System Specialist
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Alvin Richard Hidayat Aras
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-9 max-w-xl mx-auto">
          Fokus pada instalasi jaringan, keamanan sistem, dan pembangunan
          infrastruktur digital yang modern dan handal.
        </p>

        {/* Tombol — kembali ke putih minimalis */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-11">
          <Link
            href="/projects"
            className="px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition text-center"
          >
            Lihat Projects
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full border border-slate-800 text-sm font-medium text-slate-400 hover:border-slate-600 hover:text-white transition text-center"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Keahlian — pills tipis */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 border-t border-slate-800/60 text-xs text-slate-500">
          {expertise.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full border border-slate-800/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
