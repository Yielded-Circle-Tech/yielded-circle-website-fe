import type { Metadata } from "next";
import { BlogCta } from "@/components/blog/BlogCta";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Pagination } from "@/components/blog/Pagination";
import { PostCard } from "@/components/blog/PostCard";
import { POSTS_PER_PAGE } from "@/sanity/env";
import {
  getCategories,
  getFeaturedPost,
  getPosts,
  getPostsCount,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Yielded Circle Tech",
  description:
    "Practical product and engineering writing on MVP strategy, architecture decisions, and scaling software in African markets.",
  alternates: { canonical: "https://yieldedcircletech.com/blog" },
};

type Props = {
  searchParams: { category?: string; page?: string };
};

export default async function BlogPage({ searchParams }: Props) {
  const category = searchParams.category?.trim() || undefined;
  const requestedPage = Number.parseInt(searchParams.page ?? "1", 10);
  const safePage =
    Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const categories = await getCategories();

  // The hero only appears on the unfiltered listing, so it is excluded from the
  // grid and the count there to keep pagination exact and avoid a duplicate card.
  const featured = category ? null : await getFeaturedPost();
  const excludeId = featured?._id;

  const total = await getPostsCount(category, excludeId);
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  const currentPage = Math.min(safePage, totalPages);

  const posts = total
    ? await getPosts({
        category,
        excludeId,
        offset: (currentPage - 1) * POSTS_PER_PAGE,
        limit: POSTS_PER_PAGE,
      })
    : [];

  const hasContent = Boolean(featured) || posts.length > 0;

  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Blog
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Notes from building real products
          </h1>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            Practical writing on MVP strategy, architecture decisions, and
            scaling software in African markets.
          </p>
        </div>

        {featured && currentPage === 1 ? (
          <div className="mt-10">
            <FeaturedPost post={featured} />
          </div>
        ) : null}

        {categories.length ? (
          <div className="mt-10 flex justify-center">
            <CategoryFilter categories={categories} active={category} />
          </div>
        ) : null}

        {hasContent ? (
          <>
            {posts.length ? (
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, idx) => (
                  <PostCard key={post._id} post={post} index={idx} />
                ))}
              </div>
            ) : null}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              category={category}
            />
          </>
        ) : (
          <div className="mt-10">
            <BlogEmptyState filtered={Boolean(category)} />
          </div>
        )}
      </section>

      <BlogCta />
    </main>
  );
}
