import { createContext, useContext } from "react";
import { staticPortfolio } from "../data/portfolio";
import type { Locale, Translation } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useProjectsWithLinks() {
  const { t } = useLanguage();
  return t.projects.items.map((item) => ({
    ...item,
    ...staticPortfolio.projects.find((p) => p.id === item.id)!,
  }));
}
