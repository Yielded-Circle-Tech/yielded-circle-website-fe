import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { absoluteUrl } from "@/lib/site";
import { getPostSlugs, safeFetch } from "@/sanity/lib/queries";

// Rebuilt hourly (and on deploy) so new posts appear without a redeploy.
export const revalidate = 3600;

type Entry = MetadataRoute.Sitemap[number];

/**
 * `lastModified` is only sent where we know it. A fake "now" on every
 * build teaches Google to ignore the field for the whole site.
 */
const staticPages: Array<Pick<Entry, "changeFrequency" | "priority"> & { path: string }> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/client-stories", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-us", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources/ai-prompts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/community", changeFrequency: "monthly", priority: 0.5 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.4 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await safeFetch("sitemap post slugs", getPostSlugs, []);

  const latestPost = posts[0]?._updatedAt;

  return [
    ...staticPages.map(({ path, ...rest }) => ({
      url: absoluteUrl(path),
      ...(path === "/blog" && latestPost
        ? { lastModified: new Date(latestPost) }
        : {}),
      ...rest,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/client-stories/${study.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
