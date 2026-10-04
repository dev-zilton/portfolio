import { Briefcase, ChevronRight, ExternalLink, GraduationCap } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import type { Translation } from "../i18n/translations";

export default function AboutSection({ t }: { t: Translation }) {
  return (
    <section id="about" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading title={t.aboutSection.title} highlight={t.aboutSection.highlight} className="mb-10" />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={100}>
            <p className="mb-6 text-lg font-normal leading-relaxed text-copy">{t.about.intro}</p>
            <p className="mb-3 font-semibold text-copy-muted">{t.about.interestsTitle}</p>
            <ul className="space-y-2">
              {t.about.interests.map((item) => (
                <li key={item} className="flex items-start gap-2 text-copy-muted">
                  <ChevronRight size={14} className="mt-1 shrink-0 text-turquoise-400" aria-hidden="true" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-normal leading-relaxed text-copy">{t.about.closing}</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="space-y-4">
              <div>
                <h4 className="mb-4 text-sm font-semibold text-copy">{t.aboutSection.educationLabel}</h4>
                <ol className="relative space-y-4 border-l border-glass/10 pl-6">
                  {[...t.education.items]
                    .sort((a, b) => b.year.localeCompare(a.year))
                    .map((item) => {
                      const Icon = item.kind === "work" ? Briefcase : GraduationCap;
                      return (
                        <li key={item.degree} className="relative">
                          <span className="absolute -left-[37px] top-4 flex h-6 w-6 items-center justify-center rounded-full border border-turquoise-400/40 bg-surface text-turquoise-300">
                            <Icon size={12} aria-hidden="true" />
                          </span>
                          <GlassCard interactive={false} className="!p-5">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-semibold text-turquoise-300">{item.year}</span>
                              <span className="text-sm font-semibold text-copy">{item.degree}</span>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-fit items-center gap-1 text-xs text-copy-muted underline-offset-2 hover:text-turquoise-300 hover:underline"
                                >
                                  {item.school}
                                  <ExternalLink size={11} aria-hidden="true" />
                                </a>
                              ) : (
                                <span className="text-xs text-copy-muted">{item.school}</span>
                              )}
                              {item.description ? <span className="mt-1 text-sm text-copy-muted">{item.description}</span> : null}
                            </div>
                          </GlassCard>
                        </li>
                      );
                    })}
                </ol>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold text-copy">{t.aboutSection.certificatesLabel}</h4>
                <ul className="space-y-2 text-sm text-copy-muted">
                  {t.certificates.items.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-turquoise-400" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
