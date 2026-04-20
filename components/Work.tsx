import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  slug: string;
  badge: string;
  badgeType: "aws" | "b2b" | "live" | "saas";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const workItems: WorkItem[] = [
  {
    slug: "haba-na-haba",
    badge: "AWS-funded",
    badgeType: "aws",
    title: "Haba Na Haba",
    description:
      "USSD-based app helping smallholder farmers in Uganda access credit and savings — built for low-bandwidth markets without smartphones.",
    image: "/haba-na-haba-admin.png",
    imageAlt: "Haba Na Haba admin dashboard preview",
  },
  {
    slug: "leddar",
    badge: "B2B marketplace",
    badgeType: "b2b",
    title: "Leddar Platform",
    description:
      "Three-tier B2B managed marketplace connecting fashion brands with leather artisans — with escrow payments, KYC, and WhatsApp notifications.",
    image: "/leddar.png",
    imageAlt: "Leddar platform dashboard preview",
  },
  {
    slug: "bookpound",
    badge: "E-commerce",
    badgeType: "live",
    title: "BookPound",
    description:
      "Multi-vendor used book marketplace on Magento — NGN payments, vendor privacy, AWS SES email, and custom commission management.",
    image: "/bookpound.png",
    imageAlt: "BookPound marketplace interface preview",
  },
  {
    slug: "itan-technologies",
    badge: "SaaS",
    badgeType: "saas",
    title: "Itan Technologies",
    description:
      "Product built under the Itan Technologies brand — demonstrating our ability to work as an embedded technical team for founders.",
    image: "/itan-reader.png",
    imageAlt: "Itan reader product preview",
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
            <article
              key={idx}
              className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_18px_34px_rgba(75,0,130,0.16)]"
              style={
                { "--reveal-delay": `${idx * 100}ms` } as React.CSSProperties
              }
            >
              <div className="overflow-hidden rounded-xl border border-brand-soft/35 bg-white shadow-[0_8px_18px_rgba(75,0,130,0.08)]">
                <div className="relative aspect-[16/10] w-full bg-[linear-gradient(180deg,#fcf9ff_0%,#f1e8ff_100%)] p-2 md:p-3">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-center p-1"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-5">
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

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href={`/client-stories/${item.slug}`}
                      className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
                    >
                      View case study
                    </Link>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-deep/70">
                      Featured project
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
