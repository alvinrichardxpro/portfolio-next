import AboutHero from "./components/AboutHero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import AboutFooter from "./components/AboutFooter";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-4 sm:px-6 py-24 relative overflow-hidden">
      {/* Glow sangat tipis — sama seperti Home */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-slate-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AboutHero />
        <Skills />
        <Certifications />
        <AboutFooter />
      </div>
    </main>
  );
}
