export type Language = "en" | "tr";

export const languages: Language[] = ["en", "tr"];

export function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "tr";
}
