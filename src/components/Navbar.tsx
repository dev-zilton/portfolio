import { useState } from "react";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PrimaryButton } from "./ui/PrimaryButton";

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const navKeys = ["about", "skills", "projects", "contact"] as const;

export function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLabels: Record<(typeof navKeys)[number], string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="shrink-0 text-lg font-bold tracking-wide text-white transition-opacity hover:opacity-80"
        >
          PORTFOLIO<span className="text-turquoise-400">.</span>
        </button>

        <nav
          className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 lg:flex xl:gap-6 xl:px-4 xl:py-2"
          aria-label="Main navigation"
        >
          {staticPortfolio.navIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className={`nav-link ${
                activeSection === id ? "nav-link-active" : ""
              }`}
            >
              {navLabels[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <PrimaryButton
            className="hidden !py-2 text-sm md:inline-flex"
            onClick={() => handleNav("contact")}
          >
            {t.nav.contact}
          </PrimaryButton>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[57px] bg-surface/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-2 px-6 py-8"
          aria-label="Mobile navigation"
        >
          <LanguageSwitcher className="mb-4 w-fit sm:hidden" />
          {staticPortfolio.navIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className={`nav-link w-fit py-3 text-left text-lg ${
                activeSection === id ? "nav-link-active" : ""
              }`}
            >
              {navLabels[id]}
            </button>
          ))}
          <PrimaryButton
            className="mt-4 w-full"
            onClick={() => handleNav("contact")}
          >
            {t.nav.contactMe}
          </PrimaryButton>
        </nav>
      </div>
    </header>
  );
}
