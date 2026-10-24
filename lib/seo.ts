import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";

interface BuildMetadataParams {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
}: BuildMetadataParams): Metadata {
  const url = `${site.url}${path ? `/${locale}${path}` : `/${locale}`}`;
  const ogImage = `${site.url}/${locale}/opengraph-image`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: "%s",
    },
    description,
    applicationName: site.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${site.url}/en${path}`,
        es: `${site.url}/es${path}`,
        "x-default": `${site.url}/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  const lang = locale === "es" ? "es" : "en";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    sameAs: [],
    description:
      lang === "es"
        ? "Cifra reúne tus cuentas, presupuestos y gastos en una experiencia clara y segura."
        : "Cifra brings your accounts, budgets and spending together in one clear, secure experience.",
  } as const;
}
