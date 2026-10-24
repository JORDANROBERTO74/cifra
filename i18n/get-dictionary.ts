import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
