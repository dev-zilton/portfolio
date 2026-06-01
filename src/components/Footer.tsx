import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";

type FooterProps = {
  scrollToSection: (id: string) => void;
};

export function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage();

  const footerLabels: Record<
    (typeof staticPortfolio.footerIds)[number],
    string
  > = {
    about: t.footer.about,
    skills: t.footer.skills,
    projects: t.footer.projects,
    contact: t.footer.contact,
  };

  return (
    <footer className="border-t border-white/10 bg-surface-elevated px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          {staticPortfolio.footerIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="nav-link text-sm"
            >
              {footerLabels[id]}
            </button>
          ))}
        </nav>
        <p className="text-copy-muted">
          © 2026 {staticPortfolio.name}. {t.footer.rights}
        </p>
        <p className="text-sm text-copy-muted/70">{t.footer.built}</p>
      </div>
    </footer>
  );
}
