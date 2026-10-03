import { useMemo } from "react";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/useLanguage";

type FooterProps = {
  scrollToSection: (id: string) => void;
};

export function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage();

  const footerLabels = useMemo(
    () => ({
      about: t.footer.about,
      skills: t.footer.skills,
      projects: t.footer.projects,
      contact: t.footer.contact,
    }),
    [t],
  );

  return (
    <footer
      role="contentinfo"
      className="border-t border-glass/10 bg-surface-elevated px-4 py-10"
    >
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        {/* NAVIGATION */}
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          {staticPortfolio.footerIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-label={`Ir para secção ${footerLabels[id]}`}
              className="text-sm text-copy-muted transition-colors hover:text-copy"
            >
              {footerLabels[id]}
            </button>
          ))}
        </nav>

        {/* CV CTA */}
        <div className="flex justify-center">
          <a
            href={staticPortfolio.resumeUrl}
            download="Curriculo_Zilton_Dev.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-glass/15 bg-glass/5 px-5 py-2 text-sm text-copy-muted transition-all hover:bg-glass/10 hover:text-copy focus:outline-none focus:ring-2 focus:ring-glass/20"
          >
            <span aria-hidden="true">📄</span> {t.hero.downloadResume}
          </a>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-glass/10" />

        {/* COPYRIGHT */}
        <p className="text-copy-muted">
          © 2024 {staticPortfolio.name}. {t.footer.rights}
        </p>

        <p className="text-sm text-copy-muted/70">{t.footer.built}</p>
      </div>
    </footer>
  );
}
