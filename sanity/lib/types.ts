import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "sanity";

export type SanityImage = Image & {
  alt?: string;
  caption?: string;
};

export type CategoryRef = {
  title: string;
  slug: string;
};

export type AuthorRef = {
  name: string;
  role?: string;
  photo?: SanityImage;
};

/** Shape returned by the listing queries — enough to render a card. */
export type PostCardData = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: SanityImage;
  publishedAt: string;
  author?: AuthorRef;
  categories?: CategoryRef[];
};

/** Full post, including body and the author bio. */
export type PostDetail = PostCardData & {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  author?: AuthorRef & { bio?: string };
};

export type PostSlug = {
  slug: string;
  _updatedAt: string;
};
