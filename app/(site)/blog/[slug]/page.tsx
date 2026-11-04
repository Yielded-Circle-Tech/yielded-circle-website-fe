import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { BlogCta } from "@/components/blog/BlogCta";
import { PortableTextBody } from "@/components/blog/PortableTextBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { imageUrl } from "@/sanity/lib/image";
import { pageMetadata, truncate } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/structuredData";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  safeFetch,
} from "@/sanity/lib/queries";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await safeFetch("post slugs", getPostSlugs, []);
  return slugs.map(({ slug }) => ({ slug }));
}

/**
 * Every post gets its SEO from here automatically: title (seoTitle or
 * title), description (seoDescription or excerpt), canonical, Open Graph
 * article tags, Twitter card, and the BlogPosting + BreadcrumbList schema
 * rendered below. Editors only fill in fields in Sanity.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post not found", robots: { index: false } };
  }

  const title = post.seoTitle || post.title;
  const description = truncate(post.seoDescription || post.excerpt);
  const path = `/blog/${post.slug}`;
  const base = pageMetadata({
    title,
    description,
    path,
    type: "article",
    image: post.coverImage
      ? {
          url: imageUrl(post.coverImage, 1200, 630),
          alt: post.coverImage.alt || post.title,
        }
      : undefined,
  });

  return {
    ...base,
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      section: post.categories?.[0]?.title,
      tags: post.categories?.map((item) => item.title),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const categorySlugs = post.categories?.map((item) => item.slug) ?? [];
  const related = await getRelatedPosts(post._id, categorySlugs);
  const path = `/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    ...blogPostingSchema({
      title: post.title,
      description: post.seoDescription || post.excerpt,
      path,
      publishedAt: post.publishedAt,
      updatedAt: post._updatedAt,
      image: post.coverImage
        ? imageUrl(post.coverImage, 1200, 630)
        : undefined,
      authorName: post.author?.name,
      categories: post.categories?.map((item) => item.title),
      wordCount: post.wordCount,
    }),
  };

  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <JsonLd data={articleSchema} />

      <article className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        {/* No fade-in on the header or cover: they are the LCP candidates. */}
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            visible
            items={[
              { name: "Blog", path: "/blog" },
              { name: post.title, path },
            ]}
          />

          {post.categories?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog?category=${encodeURIComponent(category.slug)}`}
                  className="inline-flex rounded-full border border-brand-soft/60 bg-[#efe6ff] px-3 py-1 text-xs font-semibold text-brand-deep transition hover:bg-brand-light"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          ) : null}

          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-page-textMuted">
            {post.excerpt}
          </p>

          <AuthorByline
            author={post.author}
            publishedAt={post.publishedAt}
            className="mt-6"
          />
        </div>

        {post.coverImage ? (
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-brand-soft/60 shadow-[0_20px_44px_rgba(75,0,130,0.16)]">
              <Image
                src={imageUrl(post.coverImage, 1600, 900)}
                alt={post.coverImage.alt || post.title}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        {post.body?.length ? (
          <div className="reveal mx-auto mt-10 max-w-[720px]">
            <PortableTextBody value={post.body} />
          </div>
        ) : null}

        {post.author?.bio ? (
          <div className="reveal mx-auto mt-12 max-w-[720px] rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              About the author
            </p>
            <AuthorByline author={post.author} className="mt-3" />
            <p className="mt-3 text-sm leading-relaxed text-page-textMuted">
              {post.author.bio}
            </p>
          </div>
        ) : null}
      </article>

      <RelatedPosts posts={related} />

      <BlogCta />
    </main>
  );
}
