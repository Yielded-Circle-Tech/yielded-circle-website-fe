import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export default function ClientStoriesPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Client stories
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Proven results across real products
          </h1>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            Explore how we solve difficult product and engineering problems,
            from USSD systems to managed marketplaces and mobile SaaS products.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_18px_34px_rgba(75,0,130,0.16)]"
              style={
                { "--reveal-delay": `${idx * 80}ms` } as React.CSSProperties
              }
            >
              <span className="inline-flex rounded-full border border-brand-soft/60 bg-[#efe6ff] px-3 py-1 text-xs font-semibold text-brand-deep">
                {study.badge}
              </span>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {study.category}
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                {study.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-page-textMuted md:text-base">
                {study.subtitle}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {study.heroStats.slice(0, 4).map((metric) => (
                  <div
                    key={`${study.slug}-${metric.label}`}
                    className="rounded-xl border border-brand-soft/45 bg-white/80 px-3 py-3"
                  >
                    <div className="text-lg font-semibold text-brand-deep">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-page-textMuted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Link
                  href={`/client-stories/${study.slug}`}
                  className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
                >
                  View case study
                </Link>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-deep/70">
                  Detailed breakdown
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
            Ready to be our next client story?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-page-textMuted">
            Book a free 45-minute discovery call. No pitch, no pressure.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Book a free discovery call
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
