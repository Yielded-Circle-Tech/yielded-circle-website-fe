import { absoluteUrl, site, SITE_URL } from "@/lib/site";

/**
 * JSON-LD builders. Entities reference each other by stable `@id`s so Google
 * can merge the Organization, LocalBusiness and WebSite nodes into one graph.
 */
export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Thing = Record<string, unknown>;

const compact = <T extends Thing>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== undefined && v !== "" && !(Array.isArray(v) && !v.length),
    ),
  ) as T;

const postalAddress = { "@type": "PostalAddress", ...site.address };

export function organizationSchema(): Thing {
  return compact({
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(site.ogImage),
    description: site.description,
    email: site.email,
    telephone: site.telephone,
    foundingDate: site.foundingDate,
    address: postalAddress,
    sameAs: site.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      areaServed: site.areaServed,
      availableLanguage: ["English"],
    },
  });
}

/** ProfessionalService is the LocalBusiness subtype for agencies. */
export function localBusinessSchema(): Thing {
  return compact({
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    url: SITE_URL,
    image: absoluteUrl(site.ogImage),
    logo: absoluteUrl(site.logo),
    description: site.description,
    email: site.email,
    telephone: site.telephone,
    address: postalAddress,
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    parentOrganization: { "@id": ORG_ID },
    knowsAbout: [
      "MVP development",
      "Custom software platforms",
      "Marketplace app development",
      "Web application development",
      "Mobile app development",
      "USSD applications",
    ],
    sameAs: site.sameAs,
  });
}

export function websiteSchema(): Thing {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: SITE_URL,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

/** Home is prepended automatically. */
export function breadcrumbSchema(crumbs: Crumb[]): Thing {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export type BlogPostingInput = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  authorName?: string;
  categories?: string[];
  wordCount?: number;
};

export function blogPostingSchema(post: BlogPostingInput): Thing {
  const url = absoluteUrl(post.path);
  return compact({
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title.slice(0, 110),
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: post.image ? [post.image] : [absoluteUrl(site.ogImage)],
    inLanguage: site.language,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    articleSection: post.categories?.[0],
    keywords: post.categories?.join(", "),
    wordCount: post.wordCount,
  });
}

/** Wraps nodes in a single @graph document. */
export function graph(...nodes: Thing[]): Thing {
  return { "@context": "https://schema.org", "@graph": nodes };
}
