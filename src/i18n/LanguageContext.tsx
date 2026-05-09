import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, type Lang, type TKey } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: TKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "cm_lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "hi" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === "hi" ? "hi" : "en";
    } catch {
      /* noop */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "hi" : "en")), []);

  const t = useCallback(
    (key: TKey) => {
      const entry = translations[key];
      if (!entry) return key as string;
      return entry[lang] ?? entry.en;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const useT = () => useLanguage().t;
