import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TechIcon } from "../components/TechIcon";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

const categoryDotColor: Record<string, string> = {
  frontend: "bg-turquoise-400",
  backend: "bg-accent-purple",
  devops: "bg-turquoise-400",
  cloud: "bg-accent-purple",
};

export default function SkillsSection({ t }: { t: Translation }) {
  return (
    <section id="skills" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={t.skills.title} highlight={t.skills.highlight} />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {staticPortfolio.skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={100 * (index + 1)}>
              <GlassCard interactive={false}>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <span
                    className={`h-2 w-2 rounded-full ${categoryDotColor[category.id] ?? "bg-turquoise-400"}`}
                  />
                  {t.skills.categories[category.id as keyof typeof t.skills.categories]}
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {category.items.map((skill) => (
                    <TechIcon key={skill.name} skill={skill} />
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
