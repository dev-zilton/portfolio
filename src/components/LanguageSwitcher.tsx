import { locales } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-300 ${
            locale === code
              ? "bg-turquoise-400 text-slate-950 shadow-glow-turquoise-soft"
              : "text-copy-muted hover:text-copy"
          }`}
          aria-pressed={locale === code}
          aria-label={code === "en" ? "English" : code === "pt" ? "Português" : "Français"}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
