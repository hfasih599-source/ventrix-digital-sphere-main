import { dictionaries, type LanguageCode } from "@/lib/i18n/translations";
import { categories, servicesOf, type CategoryEntry, type ServiceEntry } from "./catalog";
import { enServiceCopy, type ServiceCopy } from "./copy.en";
import { buildServiceCopy } from "./copy.i18n";

export function categoryName(lang: LanguageCode, entry: CategoryEntry) {
  return dictionaries[lang].services.groups[entry.catIndex].title;
}

export function categoryTag(lang: LanguageCode, entry: CategoryEntry) {
  return dictionaries[lang].services.groups[entry.catIndex].tag;
}

export function serviceName(lang: LanguageCode, entry: ServiceEntry) {
  return dictionaries[lang].services.groups[entry.catIndex].items[entry.itemIndex];
}

export function serviceCopy(lang: LanguageCode, entry: ServiceEntry): ServiceCopy {
  const en = enServiceCopy[entry.slug];
  if (lang === "en") return en;
  return buildServiceCopy(lang, entry.category, serviceName(lang, entry));
}

/** English name — used for SEO metadata rendered on the server. */
export function serviceNameEn(entry: ServiceEntry) {
  return serviceName("en", entry);
}

export function categoryNameEn(entry: CategoryEntry) {
  return categoryName("en", entry);
}

export function relatedServices(entry: ServiceEntry, max = 4) {
  const siblings = servicesOf(entry.category).filter((s) => s.slug !== entry.slug);
  if (siblings.length >= max) return siblings.slice(0, max);
  const others = categories
    .filter((c) => c.slug !== entry.category)
    .flatMap((c) => servicesOf(c.slug).slice(0, 1));
  return [...siblings, ...others].slice(0, max);
}
