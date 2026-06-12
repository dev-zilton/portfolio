import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PrimaryButton } from "./ui/PrimaryButton";

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({
  activeSection,
  scrollToSection,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="text-lg font-bold tracking-wide text-white transition-opacity hover:opacity-80"
          aria-label="Go to home"
        >
          PORTFOLIO<span className="text-turquoise-400">.</span>
        </button>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 lg:flex"
          aria-label="Main navigation"
        >
          {staticPortfolio.navIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className={`nav-link ${activeSection === id ? "nav-link-active" : ""}`}
            >
              {navLabels[id]}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher className="hidden sm:flex" />

          {/* BOTÃO DARK / LIGHT */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-copy transition-all duration-200 hover:bg-white/10 hover:border-turquoise-400/50"
          >
            {isDark ? (
              <Sun
                size={16}
                className="text-turquoise-300"
                aria-hidden="true"
              />
            ) : (
              <Moon
                size={16}
                className="text-turquoise-300"
                aria-hidden="true"
              />
            )}
          </button>

          <PrimaryButton
            className="hidden !py-2 text-sm md:inline-flex"
            onClick={() => handleNav("contact")}
          >
            {t.nav.contact}
          </PrimaryButton>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[57px] bg-surface/95 backdrop-blur-xl"
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
                className={`nav-link w-fit py-3 text-left text-lg ${activeSection === id ? "nav-link-active" : ""}`}
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
      )}
    </header>
  );
}
