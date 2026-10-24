import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${site.url}/${code}${route}`]),
        ),
      },
    })),
  );
}
