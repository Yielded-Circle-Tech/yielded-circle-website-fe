import Link from "next/link";

type Props = {
  filtered?: boolean;
};

export function BlogEmptyState({ filtered = false }: Props) {
  return (
    <div className="reveal mx-auto max-w-3xl rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-6 py-12 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-10 md:py-14">
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {filtered ? "Nothing here yet" : "Insights are on the way"}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-page-textMuted">
        {filtered
          ? "We have not published anything in this category yet. Browse everything else in the meantime."
          : "We are preparing practical product and engineering content on MVP strategy, architecture decisions, and scaling in African markets."}
      </p>

      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {filtered ? (
          <Link
            href="/blog"
            className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
          >
            View all posts
          </Link>
        ) : (
          <a
            href="mailto:hello@yieldedcircletech.com?subject=Blog%20Update%20Subscription"
            className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
          >
            Get updates
          </a>
        )}

        <Link
          href="/client-stories"
          className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
        >
          Read client stories
        </Link>
      </div>
    </div>
  );
}
