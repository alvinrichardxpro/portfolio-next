import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import SiteFooter from "@/components/SiteFooter";

export default function Contact() {
  const instagramUsername = "vinnrchrdd_";
  const email = "alvinnrichadd545@gmail.com";
  const phoneNumber = "6282122972829";
  const whatsappMessage = encodeURIComponent(
    "Halo Alvin, saya melihat portfolio kamu dan ingin menghubungi kamu."
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0f19] text-white px-4 sm:px-6 pt-20 sm:pt-24 pb-10 relative flex flex-col items-center">
      {/* Glow sangat tipis — sama seperti Home */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-slate-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-xl mx-auto relative z-10 min-w-0 flex-1">
        {/* Header */}
        <div className="text-center sm:text-left">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-400 border border-slate-800 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Available • Fast Response
          </span>
          <h1 className="flex items-center justify-center sm:justify-start gap-2.5 text-2xl sm:text-3xl font-bold mb-2 leading-tight text-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-slate-500 shrink-0" />
            Hubungi Saya
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mb-7 sm:mb-8 leading-relaxed max-w-md mx-auto sm:mx-0">
            Tertarik kerja sama atau ada pertanyaan? Hubungi saya lewat kontak
            di bawah ini.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
          {/* Instagram */}
          <a
            href={`https://instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-slate-800/60 hover:border-slate-600 active:scale-[0.99] transition min-w-0 min-h-[76px]"
          >
            <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 text-xl shrink-0">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs sm:text-sm text-slate-500">Instagram</span>
              <span className="block font-medium text-white text-sm sm:text-base truncate">
                @{instagramUsername}
              </span>
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="shrink-0 text-xs text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition"
            />
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-slate-800/60 hover:border-slate-600 active:scale-[0.99] transition min-w-0 min-h-[76px]"
          >
            <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 text-lg sm:text-xl shrink-0">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs sm:text-sm text-slate-500">Email</span>
              <span className="block font-medium text-white text-sm sm:text-base break-all leading-snug">
                {email}
              </span>
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="shrink-0 text-xs text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition"
            />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full min-h-[52px] px-4 py-3.5 rounded-full bg-white text-slate-950 text-sm sm:text-base font-semibold hover:bg-slate-200 active:scale-[0.99] transition duration-200 mt-1 text-center leading-snug"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg sm:text-xl shrink-0" />
            <span>Hubungi Saya via WhatsApp</span>
          </a>

          <p className="text-center text-xs sm:text-sm text-slate-600 mt-1">
            Biasanya membalas dalam 1×24 jam.
          </p>
        </div>
      </div>

      <div className="w-full max-w-xl mx-auto relative z-10">
        <SiteFooter />
      </div>
    </main>
  );
}
