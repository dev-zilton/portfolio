import { locales } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
      role="radiogroup"
      aria-label="Language switcher"
    >
      {locales.map(({ code, label }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400/40 ${
              isActive
                ? "bg-turquoise-400 text-slate-950 shadow-glow-turquoise-soft"
                : "text-copy-muted hover:text-copy hover:scale-[1.05]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
