import AboutHero from "./components/AboutHero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import AboutFooter from "./components/AboutFooter";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-4 sm:px-6 py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AboutHero />
        <Skills />
        <Certifications />
        <AboutFooter />
      </div>
    </main>
  );
}
