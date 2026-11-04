import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/structuredData";

type Props = {
  /** Trail after Home; the last item is the current page. */
  items: Crumb[];
  /** Render the visible trail as well as the schema. */
  visible?: boolean;
  className?: string;
};

/**
 * BreadcrumbList schema for every page, plus an optional visible trail.
 * Google shows the trail in place of the raw URL in search results.
 */
export function Breadcrumbs({ items, visible = false, className = "" }: Props) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(items) }} />
      {visible ? (
        <nav aria-label="Breadcrumb" className={className}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-page-textMuted">
            {trail.map((crumb, idx) => {
              const isLast = idx === trail.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-2">
                  {isLast ? (
                    <span aria-current="page" className="line-clamp-1 text-page-text">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={crumb.path}
                        className="py-1 text-brand transition hover:text-brand-deep"
                      >
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
