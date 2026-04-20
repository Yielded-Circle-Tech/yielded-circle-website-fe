import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

type Props = {
  study: CaseStudy;
};

export function CaseStudyPage({ study }: Props) {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            {study.badge}
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            {study.category}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {study.title}
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-page-textMuted">
            {study.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {study.heroStats.map((metric, idx) => (
            <article
              key={metric.label}
              className="reveal rounded-xl border border-brand-soft/50 bg-white/80 px-3 py-4 text-center shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
              style={
                { "--reveal-delay": `${idx * 60}ms` } as React.CSSProperties
              }
            >
              <div className="text-xl font-semibold text-brand-deep md:text-2xl">
                {metric.value}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-page-textMuted">
                {metric.label}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionBlock section={study.overview} />
      <SectionBlock section={study.problem} />
      <SectionBlock section={study.solution} />
      <SectionBlock section={study.process} />
      <ResultsBlock section={study.results} />
      <TechStackBlock section={study.techStack} />
      {study.testimonial ? (
        <TestimonialBlock quote={study.testimonial} />
      ) : null}
      <SectionBlock section={study.lessons} />

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
            {study.cta.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-page-textMuted">
            {study.cta.subheading}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              {study.cta.buttonText}
            </Link>
            <Link
              href="/client-stories"
              className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
            >
              {study.cta.linkText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

type TextSection = {
  label: string;
  heading: string;
  body: string[];
  listLabel?: string;
  items?: string[];
};

function SectionBlock({ section }: { section: TextSection }) {
  return (
    <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
      <article className="reveal rounded-3xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {section.label}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {section.heading}
        </h2>
        <div className="mt-4 space-y-4">
          {section.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-page-textMuted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {section.items?.length ? (
          <div className="mt-6 rounded-2xl border border-brand-soft/45 bg-white/70 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
              {section.listLabel || "Highlights"}
            </h3>
            <div className="mt-3 space-y-2">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-page-textMuted"
                >
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
}

function ResultsBlock({ section }: { section: CaseStudy["results"] }) {
  return (
    <section className="section-space border-y border-page-border bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(241,232,255,0.65)_100%)]">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {section.label}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {section.heading}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {section.stats.map((metric, idx) => (
            <div
              key={metric.label}
              className="reveal rounded-xl border border-brand-soft/50 bg-white/80 px-4 py-4 shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
              style={
                { "--reveal-delay": `${idx * 60}ms` } as React.CSSProperties
              }
            >
              <div className="text-2xl font-semibold text-brand-deep md:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm leading-relaxed text-page-textMuted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackBlock({ section }: { section: CaseStudy["techStack"] }) {
  return (
    <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
      <article className="reveal overflow-hidden rounded-3xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] shadow-[0_10px_24px_rgba(75,0,130,0.1)]">
        <div className="border-b border-brand-soft/35 px-6 py-5 md:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {section.label}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {section.heading}
          </h2>
        </div>

        <div className="overflow-x-auto px-6 py-5 md:px-8">
          <table className="w-full min-w-[360px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-soft/45 text-page-text">
                <th className="py-2 pr-4 font-semibold">Layer</th>
                <th className="py-2 font-semibold">Technology</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr
                  key={row.layer}
                  className="border-b border-brand-soft/25 text-page-textMuted"
                >
                  <td className="py-2 pr-4 font-medium text-page-text">
                    {row.layer}
                  </td>
                  <td className="py-2">{row.technology}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

function TestimonialBlock({
  quote,
}: {
  quote: NonNullable<CaseStudy["testimonial"]>;
}) {
  return (
    <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
      <div className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] px-6 py-8 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {quote.label}
        </div>
        <blockquote className="mt-3 text-lg font-medium leading-relaxed text-brand-deep md:text-xl">
          "{quote.quote}"
        </blockquote>
        <p className="mt-4 text-sm font-semibold text-page-textMuted">
          {quote.attribution}
        </p>
      </div>
    </section>
  );
}
