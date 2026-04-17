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
    badgeType: "live",
    title: "Itan Technologies",
    description:
      "Product built under the Itan Technologies brand — demonstrating our ability to work as an embedded technical team for founders.",
  },
];

export function Work() {
  const badgeClassMap: Record<WorkItem["badgeType"], string> = {
    aws: "bg-[#FFF5E0] text-[#B87D00]",
    b2b: "bg-[#EAF3DE] text-[#3B6D11]",
    live: "bg-[#E6F1FB] text-[#185FA5]",
    saas: "bg-[#E6F1FB] text-[#185FA5]",
  };

  return (
    <section className="border-t border-page-border py-14 md:py-20" id="work">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
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
              className="rounded-xl border border-page-border bg-page-surface p-6 transition hover:-translate-y-0.5 hover:border-page-borderStrong hover:bg-page-elevated"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClassMap[item.badgeType]}`}
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
