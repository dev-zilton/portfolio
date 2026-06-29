import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SkillBar } from "../components/SkillBar";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

export default function SkillsSection({ t }: { t: Translation }) {
  const halfIndex = Math.ceil(staticPortfolio.skills.length / 2);
  const skillsLeft = staticPortfolio.skills.slice(0, halfIndex);
  const skillsRight = staticPortfolio.skills.slice(halfIndex);
  return (
    <section id="skills" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={t.skills.title} highlight={t.skills.highlight} />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection delay={100}>
            <GlassCard interactive={false}>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-turquoise-400" />
                {t.skills.technical}
              </h3>
              {skillsLeft.map((skill) => <SkillBar key={skill.name} skill={skill} />)}
            </GlassCard>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <GlassCard interactive={false}>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-accent-purple" />
                {t.skills.tools}
              </h3>
              {skillsRight.map((skill) => <SkillBar key={skill.name} skill={skill} />)}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
