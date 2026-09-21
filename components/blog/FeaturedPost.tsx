import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/sanity/lib/image";
import type { PostCardData } from "@/sanity/lib/types";
import { AuthorByline } from "./AuthorByline";

type Props = {
  post: PostCardData;
};

export function FeaturedPost({ post }: Props) {
  return (
    <article className="reveal overflow-hidden rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] shadow-[0_20px_44px_rgba(75,0,130,0.16)]">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {post.coverImage ? (
          <Link
            href={`/blog/${post.slug}`}
            className="relative block aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[340px]"
          >
            <Image
              src={imageUrl(post.coverImage, 1000, 700)}
              alt={post.coverImage.alt || post.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </Link>
        ) : null}

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="inline-flex w-fit rounded-full border border-brand-soft/60 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            Featured
          </div>

          {post.categories?.length ? (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {post.categories.map((item) => item.title).join(" · ")}
            </p>
          ) : null}

          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            {post.excerpt}
          </p>

          <AuthorByline
            author={post.author}
            publishedAt={post.publishedAt}
            className="mt-6"
          />

          <div className="mt-6">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Read article
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
