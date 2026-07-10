"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { isLanguage, type Language } from "@/lib/language";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("miramar-lang") : null;
    if (isLanguage(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (value: Language) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("miramar-lang", value);
      document.documentElement.lang = value;
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
