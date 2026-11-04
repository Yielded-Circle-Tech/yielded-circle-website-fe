import { absoluteUrl, site } from "@/lib/site";
import { imageUrl } from "@/sanity/lib/image";
import { getFeedPosts, safeFetch } from "@/sanity/lib/queries";

export const revalidate = 3600;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** RSS 2.0 feed of the newest blog posts, served at /rss.xml. */
export async function GET() {
  const posts = await safeFetch("rss posts", () => getFeedPosts(50), []);
  const feedUrl = absoluteUrl("/rss.xml");
  const blogUrl = absoluteUrl("/blog");
  const lastBuild = posts[0]?._updatedAt
    ? new Date(posts[0]._updatedAt)
    : new Date();

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      const description = post.seoDescription || post.excerpt || "";
      const image = post.coverImage
        ? imageUrl(post.coverImage, 1200, 630)
        : null;

      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(description)}</description>`,
        post.authorName
          ? `      <dc:creator>${escapeXml(post.authorName)}</dc:creator>`
          : "",
        ...(post.categories ?? [])
          .filter(Boolean)
          .map((title) => `      <category>${escapeXml(title)}</category>`),
        image
          ? `      <media:content url="${escapeXml(image)}" medium="image" width="1200" height="630" />`
          : "",
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(`${site.name} blog`)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml("Practical writing on MVP strategy, architecture decisions and scaling software in African markets.")}</description>
    <language>${site.language.toLowerCase()}</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${absoluteUrl(site.logo)}</url>
      <title>${escapeXml(`${site.name} blog`)}</title>
      <link>${blogUrl}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
