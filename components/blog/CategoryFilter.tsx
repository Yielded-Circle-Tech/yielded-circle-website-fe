import Link from "next/link";
import type { CategoryRef } from "@/sanity/lib/types";

type Props = {
  categories: CategoryRef[];
  active?: string;
};

const baseClasses =
  "inline-flex rounded-full px-4 py-2 text-sm font-semibold transition";
const activeClasses =
  "bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-white shadow-brand";
const idleClasses =
  "border border-brand-soft/60 bg-white/80 text-brand-deep hover:border-brand-soft hover:bg-brand-light";

export function CategoryFilter({ categories, active }: Props) {
  if (!categories.length) {
    return null;
  }

  return (
    <nav aria-label="Filter posts by category" className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        aria-current={active ? undefined : "page"}
        className={`${baseClasses} ${active ? idleClasses : activeClasses}`}
      >
        All posts
      </Link>

      {categories.map((category) => {
        const isActive = category.slug === active;
        return (
          <Link
            key={category.slug}
            href={`/blog?category=${encodeURIComponent(category.slug)}`}
            aria-current={isActive ? "page" : undefined}
            className={`${baseClasses} ${isActive ? activeClasses : idleClasses}`}
          >
            {category.title}
          </Link>
        );
      })}
    </nav>
  );
}
