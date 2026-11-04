import Link from "next/link";

const popular = [
  { label: "Our services", href: "/services" },
  { label: "Client stories", href: "/client-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Free AI prompts", href: "/resources/ai-prompts" },
];

export function NotFoundContent() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-6 py-12 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-10 md:py-14">
          <p className="inline-flex rounded-full border border-brand-soft/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            404 · Page not found
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-page-textMuted">
            The link may be old or the page may have moved. Here are some
            places to pick up from.
          </p>

          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {popular.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-brand-soft/60 bg-white px-4 py-2 text-sm font-semibold text-brand-deep transition hover:bg-brand-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Back to home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
