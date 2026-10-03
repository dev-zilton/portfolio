import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TechIcon } from "../components/TechIcon";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

const allSkills = staticPortfolio.skillCategories.flatMap((category) => category.items);
const dailySkills = allSkills.filter((skill) => skill.daily);
const otherSkillsByCategory = staticPortfolio.skillCategories
  .map((category) => ({ id: category.id, items: category.items.filter((skill) => !skill.daily) }))
  .filter((category) => category.items.length > 0);

export default function SkillsSection({ t }: { t: Translation }) {
  return (
    <section id="skills" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={t.skills.title} highlight={t.skills.highlight} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <GlassCard interactive={false} className="mb-6">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-copy">
              <span className="h-2 w-2 rounded-full bg-turquoise-400" />
              {t.skills.daily}
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {dailySkills.map((skill) => (
                <TechIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <GlassCard interactive={false}>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-copy">
              <span className="h-2 w-2 rounded-full bg-accent-purple" />
              {t.skills.others}
            </h3>
            <div className="space-y-4">
              {otherSkillsByCategory.map((category) => (
                <div key={category.id} className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
                  <span className="w-36 shrink-0 text-xs font-semibold uppercase tracking-wider text-copy-muted">
                    {t.skills.categories[category.id as keyof typeof t.skills.categories]}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-lg border border-glass/10 bg-glass/5 px-2.5 py-1 text-xs font-medium text-copy-muted"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
