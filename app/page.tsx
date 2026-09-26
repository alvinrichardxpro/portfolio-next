import Link from "next/link";
import Image from "next/image";

const expertise = ["Network Infrastructure", "System Security", "Web Development"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center px-4 sm:px-6 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Foto - ukuran sedang */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border border-slate-800 bg-slate-900">
          <Image
            src="/profile.jpg"
            alt="Alvin Richard"
            width={112}
            height={112}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Nama */}
        <p className="text-sm tracking-widest uppercase text-blue-400 mb-3">
          Network &amp; System Specialist
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          Alvin Richard
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Fokus pada instalasi jaringan, keamanan sistem, dan pembangunan
          infrastruktur digital yang modern dan handal.
        </p>

        {/* Tombol */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10 sm:mb-12">
          <Link
            href="/projects"
            className="px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition text-center"
          >
            Lihat Projects
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full border border-slate-700 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition text-center"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Keahlian */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-500">
          {expertise.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
