/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://cifra.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Cifra",
  legalName: "Cifra Finance S.L.",
  domain: "cifra.vercel.app",
  url: resolveSiteUrl(),
  email: "hello@cifra.vercel.app",
  address: {
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
  },
  region: "ES",
  currency: "EUR",
} as const;
