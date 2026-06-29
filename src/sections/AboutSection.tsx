import { ChevronRight } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import type { Translation } from "../i18n/translations";

export default function AboutSection({ t }: { t: Translation }) {
  return (
    <section id="about" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.aboutSection.title} highlight={t.aboutSection.highlight} className="mb-10" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
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
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">{t.aboutSection.educationLabel}</h4>
              <div className="space-y-3">
                {t.education.items.map((edu) => (
                  <GlassCard key={edu.degree} interactive={false}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-white">{edu.degree}</span>
                      <span className="text-xs text-turquoise-300">{edu.school} • {edu.year}</span>
                      {edu.description ? <span className="text-sm text-copy-muted">{edu.description}</span> : null}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">{t.aboutSection.certificatesLabel}</h4>
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
        </div>
      </div>
    </section>
  );
}
