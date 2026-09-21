import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/sanity/lib/image";
import type { PostCardData } from "@/sanity/lib/types";
import { formatPostDate } from "./formatDate";

type Props = {
  post: PostCardData;
  index?: number;
};

export function PostCard({ post, index = 0 }: Props) {
  return (
    <article
      className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] shadow-[0_10px_24px_rgba(75,0,130,0.1)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_18px_34px_rgba(75,0,130,0.16)]"
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      {post.coverImage ? (
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/9] overflow-hidden"
        >
          <Image
            src={imageUrl(post.coverImage, 800, 450)}
            alt={post.coverImage.alt || post.title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {post.categories?.length ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {post.categories.map((item) => item.title).join(" · ")}
          </p>
        ) : null}

        <h2 className="mt-2 text-xl font-semibold tracking-tight text-brand-deep md:text-2xl">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-page-textMuted">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-brand-soft/40 pt-4">
          <span className="text-xs font-medium text-page-textMuted">
            {post.author?.name ? `${post.author.name} · ` : ""}
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep transition hover:text-brand"
          >
            Read
          </Link>
        </div>
      </div>
    </article>
  );
}
