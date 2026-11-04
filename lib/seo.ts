import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetaInput = {
  /** Page title without the brand suffix; the root layout template adds it. */
  title: string;
  description: string;
  /** Site path, e.g. "/services". Used for the canonical and og:url. */
  path: string;
  image?: { url: string; alt?: string; width?: number; height?: number };
  type?: "website" | "article";
  /** Set true for pages that should stay out of search results. */
  noIndex?: boolean;
  /** Use the title exactly as given, without the "| Yielded Circle Tech" suffix. */
  absoluteTitle?: boolean;
};

/**
 * Builds the full metadata block for a page: title, description, canonical,
 * Open Graph and Twitter card. Every route should go through this so no page
 * silently inherits another page's canonical.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = {
    url: image?.url ?? site.ogImage,
    width: image?.width ?? 1200,
    height: image?.height ?? 630,
    alt: image?.alt ?? site.ogImageAlt,
  };
  const socialTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
      ...(site.twitterHandle
        ? { site: site.twitterHandle, creator: site.twitterHandle }
        : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Trims text to a meta-description friendly length on a word boundary. */
export function truncate(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s—-]+$/, "")}…`;
}
