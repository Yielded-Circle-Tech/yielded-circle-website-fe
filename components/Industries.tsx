const industries = [
  "💳 Fintech",
  "🏥 Healthcare",
  "🎓 Edtech",
  "🌾 Agritech",
  "🛍️ E-commerce & marketplaces",
  "🏭 B2B SaaS",
  "📦 Logistics",
];

export function Industries() {
  return (
    <section className="border-t border-page-border py-14 md:py-20">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
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
              className="rounded-full border border-page-borderStrong bg-page-surface px-4 py-2 text-sm text-page-textMuted transition hover:border-brand hover:text-brand"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
