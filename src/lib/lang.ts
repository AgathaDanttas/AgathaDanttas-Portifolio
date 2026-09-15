import { translations } from "../data/translations";
import type { Language } from "../types/language";

const LANG_STORAGE_KEY = "portfolio-lang";

const htmlLang: Record<Language, string> = { pt: "pt-BR", en: "en", fr: "fr", es: "es" };

export function getInitialLang(): Language {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && saved in translations) return saved as Language;
  } catch {
    return "pt";
  }
  return "pt";
}

export function persistLang(lang: Language) {
  document.documentElement.lang = htmlLang[lang];
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    return;
  }
}
