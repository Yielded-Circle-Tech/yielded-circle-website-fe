import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
  category?: string;
};

const hrefFor = (page: number, category?: string) => {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
};

const linkClasses =
  "inline-flex min-w-[2.5rem] items-center justify-center rounded-md border border-brand-deep/45 bg-white px-3 py-2 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white";
const currentClasses =
  "inline-flex min-w-[2.5rem] items-center justify-center rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-3 py-2 text-sm font-semibold text-white shadow-brand";
const disabledClasses =
  "inline-flex items-center justify-center rounded-md border border-brand-soft/45 bg-white/60 px-3 py-2 text-sm font-semibold text-page-textMuted/60";

export function Pagination({ currentPage, totalPages, category }: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link href={hrefFor(currentPage - 1, category)} className={linkClasses}>
          Previous
        </Link>
      ) : (
        <span className={disabledClasses}>Previous</span>
      )}

      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} aria-current="page" className={currentClasses}>
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={hrefFor(page, category)}
            className={linkClasses}
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link href={hrefFor(currentPage + 1, category)} className={linkClasses}>
          Next
        </Link>
      ) : (
        <span className={disabledClasses}>Next</span>
      )}
    </nav>
  );
}
