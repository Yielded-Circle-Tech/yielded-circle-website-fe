import type { PostCardData } from "@/sanity/lib/types";
import { PostCard } from "./PostCard";

type Props = {
  posts: PostCardData[];
};

export function RelatedPosts({ posts }: Props) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
      <div className="reveal">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          Keep reading
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
          Related articles
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <PostCard key={post._id} post={post} index={idx} />
        ))}
      </div>
    </section>
  );
}
