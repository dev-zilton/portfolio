import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import type { Translation } from "../i18n/translations";

type Project = {
  id: string;
  icon: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectsSection({ t, projects }: { t: Translation; projects: Project[] }) {
  return (
    <section id="projects" className="bg-white/[0.02] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading title={t.projects.title} highlight={t.projects.highlight} subtitle={t.projects.subtitle} />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <ProjectCard icon={project.icon} link={project.link} title={project.title} description={project.description} tags={project.tags} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
