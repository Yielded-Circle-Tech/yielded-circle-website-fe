import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { BlogCta } from "@/components/blog/BlogCta";
import { PortableTextBody } from "@/components/blog/PortableTextBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { imageUrl } from "@/sanity/lib/image";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/sanity/lib/queries";

export const revalidate = 60;

const SITE_URL = "https://yieldedcircletech.com";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post not found | Yielded Circle Tech" };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.coverImage
    ? imageUrl(post.coverImage, 1200, 630)
    : "/og-image.png";

  return {
    title: `${title} | Yielded Circle Tech`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Yielded Circle Tech",
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.coverImage
      ? { image: imageUrl(post.coverImage, 1200, 630) }
      : {}),
    ...(post.author?.name
      ? { author: { "@type": "Person", name: post.author.name } }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Yielded Circle Tech",
      url: SITE_URL,
    },
  };

  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand transition hover:text-brand-deep"
          >
            &larr; All posts
          </Link>

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
          <div className="reveal mx-auto mt-10 max-w-4xl">
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
