import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type {
  CategoryRef,
  PostCardData,
  PostDetail,
  PostSlug,
} from "@/sanity/lib/types";

/** Drafts and future-dated posts never reach the site. */
const PUBLISHED = `_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && publishedAt <= now()`;

const CARD_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  author->{name, role, photo},
  categories[]->{title, "slug": slug.current}
`;

const fetchOptions = {
  next: { revalidate: 60, tags: ["blog"] },
};

type ListArgs = {
  category?: string;
  excludeId?: string;
  offset: number;
  limit: number;
};

const categoryFilter = `($category == null || $category in categories[]->slug.current)`;
const excludeFilter = `($excludeId == null || _id != $excludeId)`;

/**
 * Offsets are interpolated rather than passed as parameters because GROQ slice
 * ranges take constants. Both values are clamped integers from the caller.
 */
export async function getPosts({
  category,
  excludeId,
  offset,
  limit,
}: ListArgs): Promise<PostCardData[]> {
  const start = Math.max(0, Math.trunc(offset));
  const end = start + Math.max(1, Math.trunc(limit));

  return client.fetch<PostCardData[]>(
    groq`*[${PUBLISHED} && ${categoryFilter} && ${excludeFilter}]
      | order(publishedAt desc)[${start}...${end}]{${CARD_FIELDS}}`,
    { category: category ?? null, excludeId: excludeId ?? null },
    fetchOptions,
  );
}

export async function getPostsCount(
  category?: string,
  excludeId?: string,
): Promise<number> {
  return client.fetch<number>(
    groq`count(*[${PUBLISHED} && ${categoryFilter} && ${excludeFilter}])`,
    { category: category ?? null, excludeId: excludeId ?? null },
    fetchOptions,
  );
}

export async function getFeaturedPost(): Promise<PostCardData | null> {
  return client.fetch<PostCardData | null>(
    groq`*[${PUBLISHED} && featured == true]
      | order(publishedAt desc)[0]{${CARD_FIELDS}}`,
    {},
    fetchOptions,
  );
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  return client.fetch<PostDetail | null>(
    groq`*[${PUBLISHED} && slug.current == $slug][0]{
      ${CARD_FIELDS},
      body,
      seoTitle,
      seoDescription,
      author->{name, role, photo, bio}
    }`,
    { slug },
    fetchOptions,
  );
}

/**
 * Up to three posts sharing a category. When fewer match, the remainder is
 * backfilled with the newest other posts so the row is full or absent, never ragged.
 */
export async function getRelatedPosts(
  id: string,
  categorySlugs: string[],
): Promise<PostCardData[]> {
  const sameCategory = categorySlugs.length
    ? await client.fetch<PostCardData[]>(
        groq`*[${PUBLISHED} && _id != $id
          && count(categories[@->slug.current in $categorySlugs]) > 0]
          | order(publishedAt desc)[0...3]{${CARD_FIELDS}}`,
        { id, categorySlugs },
        fetchOptions,
      )
    : [];

  if (sameCategory.length >= 3) {
    return sameCategory;
  }

  const excluded = [id, ...sameCategory.map((item) => item._id)];
  const backfill = await client.fetch<PostCardData[]>(
    groq`*[${PUBLISHED} && !(_id in $excluded)]
      | order(publishedAt desc)[0...3]{${CARD_FIELDS}}`,
    { excluded },
    fetchOptions,
  );

  return [...sameCategory, ...backfill].slice(0, 3);
}

/** Only categories that actually have a published post behind them. */
export async function getCategories(): Promise<CategoryRef[]> {
  return client.fetch<CategoryRef[]>(
    groq`*[_type == "category" && defined(slug.current)
      && count(*[${PUBLISHED} && references(^._id)]) > 0]
      | order(title asc){title, "slug": slug.current}`,
    {},
    fetchOptions,
  );
}

export async function getPostSlugs(): Promise<PostSlug[]> {
  return client.fetch<PostSlug[]>(
    groq`*[${PUBLISHED}]| order(publishedAt desc){"slug": slug.current, _updatedAt}`,
    {},
    fetchOptions,
  );
}
