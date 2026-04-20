interface WorkItem {
  badge: string;
  badgeType: "aws" | "b2b" | "live" | "saas";
  title: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    badge: "AWS-funded",
    badgeType: "aws",
    title: "Haba Na Haba",
    description:
      "USSD-based app helping smallholder farmers in Uganda access credit and savings — built for low-bandwidth markets without smartphones.",
  },
  {
    badge: "B2B marketplace",
    badgeType: "b2b",
    title: "Leddar Platform",
    description:
      "Three-tier B2B managed marketplace connecting fashion brands with leather artisans — with escrow payments, KYC, and WhatsApp notifications.",
  },
  {
    badge: "E-commerce",
    badgeType: "live",
    title: "BookPound",
    description:
      "Multi-vendor used book marketplace on Magento — NGN payments, vendor privacy, AWS SES email, and custom commission management.",
  },
  {
    badge: "SaaS",
    badgeType: "saas",
    title: "Itan Technologies",
    description:
      "Product built under the Itan Technologies brand — demonstrating our ability to work as an embedded technical team for founders.",
  },
];

export function Work() {
  const badgeClassMap: Record<WorkItem["badgeType"], string> = {
    aws: "bg-[#e8dcff] text-[#4b0082]",
    b2b: "bg-[#e5d7ff] text-[#7630ff]",
    live: "bg-[#efe4ff] text-[#7e21d4]",
    saas: "bg-[#e2d0ff] text-[#21004b]",
  };

  return (
    <section className="section-space border-t border-page-border" id="work">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Selected work
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Products we&apos;ve built
          </h2>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            Real projects. Real impact. Across fintech, agritech, edtech, and
            more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {workItems.map((item, idx) => (
            <div
              key={idx}
              className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_18px_34px_rgba(75,0,130,0.16)]"
              style={{ '--reveal-delay': `${idx * 100}ms` } as React.CSSProperties}
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7630ff_100%)]" />
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-white/70 ${badgeClassMap[item.badgeType]}`}
              >
                {item.badge}
              </span>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
