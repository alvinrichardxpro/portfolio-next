import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsFooter from "./components/ProjectsFooter";
import SectionTitle from "./components/SectionTitle";
import EmptySlot from "./components/EmptySlot";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0f19] text-white px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative flex flex-col items-center">
      {/* Glow sangat tipis — sama seperti Home */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-slate-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center min-w-0">
        <ProjectsHeader />

        {featured && (
          <div className="w-full max-w-md mb-8 sm:mb-10 min-w-0">
            <ProjectCard project={featured} />
          </div>
        )}

        <ExperienceTimeline />

        <SectionTitle title="Topology" />

        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch min-w-0">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {rest.length % 2 === 1 && <EmptySlot />}
        </div>
      </div>

      <ProjectsFooter />
    </main>
  );
}
