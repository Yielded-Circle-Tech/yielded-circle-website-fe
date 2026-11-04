/**
 * Single source of truth for site-wide SEO facts. Everything that ends up in
 * metadata, JSON-LD, the sitemap, robots.txt or the RSS feed reads from here.
 *
 * Set NEXT_PUBLIC_SITE_URL on preview deployments so canonicals and the
 * sitemap point at the right host; production falls back to the live domain.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yieldedcircletech.com";

export const SITE_URL = rawUrl.replace(/\/+$/, "");

export const site = {
  name: "Yielded Circle Tech",
  shortName: "YCT",
  url: SITE_URL,
  locale: "en_NG",
  language: "en-NG",
  title: "Yielded Circle Tech | MVP & Software Development Agency in Lagos",
  description:
    "Lagos-based software agency building MVPs, custom platforms and marketplace apps for African founders and NGOs. Validate your idea, then build it right.",
  email: "hello@yieldedcircletech.com",
  /** Leave empty until there is a real number; empty values are omitted from schema. */
  telephone: "",
  logo: "/logo.png",
  ogImage: "/og-image.jpg",
  ogImageAlt:
    "Yielded Circle Tech: we help founders validate and build software that works",
  /** Twitter/X handle including the @, or empty. */
  twitterHandle: "",
  address: {
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: ["Nigeria", "Africa"],
  /**
   * Official profiles. These power `sameAs` in the Organization schema, which
   * is how Google links the brand to its social accounts. Add real URLs only.
   */
  sameAs: [] as string[],
  foundingDate: "2022",
};

/** Absolute URL for a site path ("/blog" -> "https://.../blog"). */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? SITE_URL : `${SITE_URL}${clean}`;
}
