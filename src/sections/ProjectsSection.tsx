import { useState } from "react";
import { FeaturedProjectCard, ProjectCard, type ProjectView } from "../components/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import type { ProjectCategory } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

const CATEGORY_ORDER: ProjectCategory[] = ["web", "mobile", "desktop", "iot"];

type Filter = ProjectCategory | "all";

export default function ProjectsSection({ t, projects }: { t: Translation; projects: ProjectView[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Os filtros só mostram categorias que têm projetos, e só aparecem quando há mais de uma.
  const categories = CATEGORY_ORDER.filter((category) => projects.some((p) => p.category === category));
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-glass/[0.02] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading title={t.projects.title} highlight={t.projects.highlight} subtitle={t.projects.subtitle} />
        </AnimatedSection>

        {categories.length > 1 && (
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label={t.projects.title}>
            {(["all", ...categories] as Filter[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={filter === option}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400 ${
                  filter === option
                    ? "bg-turquoise-400 text-slate-950"
                    : "border border-glass/10 bg-glass/5 text-copy-muted hover:bg-glass/10 hover:text-copy"
                }`}
              >
                {t.projects.filters[option]}
              </button>
            ))}
          </div>
        )}

        {featured.length > 0 && (
          <div className="mb-6 space-y-6">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100}>
                <FeaturedProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
