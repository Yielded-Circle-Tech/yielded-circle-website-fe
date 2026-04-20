const industries = [
  "Fintech",
  "Healthcare",
  "Edtech",
  "Agritech",
  "E-commerce & marketplaces",
  "B2B SaaS",
  "Logistics",
];

export function Industries() {
  return (
    <section className="section-space border-t border-page-border">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Industries
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            We go deep in a few verticals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            Rather than knowing a little about everything, we&apos;ve built real
            products in these spaces.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="reveal rounded-full border border-brand-soft/55 bg-[linear-gradient(180deg,#ffffff_0%,#efe5ff_100%)] px-4 py-2 text-sm font-medium text-brand-deep shadow-[0_6px_16px_rgba(75,0,130,0.08)] transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
