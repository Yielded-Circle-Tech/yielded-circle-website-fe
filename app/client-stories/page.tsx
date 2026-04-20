import Link from "next/link";

const habaTech = [
  "USSD",
  "Node.js",
  "AWS",
  "Agile delivery",
  "Observability tools",
];

const habaMetrics = [
  { value: "1,000+", label: "Users reached at launch" },
  { value: "25%", label: "System performance gain" },
  { value: "30%", label: "Reduction in downtime" },
  { value: "1st", label: "Place, Zero Hunger Hackathon" },
];

const moreProjects = [
  {
    badge: "B2B marketplace",
    title: "Leddar Platform",
    subtitle: "Fashion & leather manufacturing · Nigeria",
    description:
      "A client in Nigeria's fashion industry needed a way to connect verified leather artisans with fashion brands — but with no direct contact between parties, a managed escrow system, and full KYC compliance. We architected and built a three-portal B2B platform from scratch: a Brand Portal, Artisan Dashboard, and Admin Panel, with Paystack integration, WhatsApp notifications via Meta Cloud API, and identity verification via VerifyMe.ng.",
    outcomes: [
      "Three fully functional portals with role-based access control",
      "Two-stage escrow payout system protecting both parties",
      "KYC-verified artisan onboarding via VerifyMe.ng",
      "WhatsApp-first notification system — no app download needed",
    ],
    stack: [
      "React / Next.js",
      "Node.js",
      "PostgreSQL",
      "Paystack",
      "WhatsApp API",
    ],
  },
  {
    badge: "E-commerce platform",
    title: "BookPound",
    subtitle: "Used book marketplace · Nigeria",
    description:
      "BookPound needed a multi-vendor used book marketplace that could handle NGN payments, protect seller identities, and manage commission distribution — all on a Magento-based stack. We built a custom vendor privacy module using MySQL triggers to generate consistent seller pseudonyms, configured AWS SES for transactional email, and resolved complex cron, currency, and DNS setup across the deployment.",
    outcomes: [
      "Multi-vendor marketplace live with NGN payment support",
      "Custom seller privacy system — no real identity exposed to buyers",
      "AWS SES email infrastructure fully configured and verified",
      "Paystack Transfers API for manual commission settlement",
    ],
    stack: ["Magento 2.4.8", "PHP", "MySQL", "AWS SES", "Paystack"],
  },
  {
    badge: "Mobile app · SaaS",
    title: "ITAN Global Publishing",
    subtitle: "Ebook platform · Nigeria · Remote CTO engagement",
    description:
      "ITAN Global Publishing needed a CTO to lead their ebook application from idea to MVP. Ayo took on the role, leading a team of 2 developers and designers — designing the backend infrastructure, building RESTful APIs, architecting the database for 10,000+ users, and translating UI/UX designs into a responsive React Native mobile app. The MVP shipped in under 3 months.",
    outcomes: [
      "MVP delivered in under 3 months with a team of 2",
      "95% user satisfaction rate during beta testing",
      "Backend infrastructure built to scale to 10,000+ users",
      "Time-to-market reduced by 20% through prioritised feature delivery",
    ],
    stack: ["React Native", "Ruby on Rails", "PostgreSQL", "RESTful APIs"],
  },
  {
    badge: "SaaS · Mentorship",
    title: "Mentor Me Now",
    subtitle: "Mentorship platform · Personal project",
    description:
      "Built a platform connecting individuals with vetted mentors — simplifying discovery, booking, and reservation management. Designed to empower users in their personal and professional growth, with a clean interface focused on reducing the friction between wanting a mentor and finding the right one.",
    outcomes: [
      "Full mentor discovery and booking system",
      "Reservation management with user-friendly interface",
      "Live at mentor-me-now.vercel.app",
    ],
    stack: ["React", "Redux", "Ruby on Rails", "Tailwind", "Vercel"],
  },
];

export default function ClientStoriesPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal overflow-hidden rounded-3xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] shadow-[0_16px_36px_rgba(75,0,130,0.14)]">
          <div className="border-b border-brand-soft/35 px-6 py-8 md:px-8 md:py-10">
            <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
              Award-winning · AWS-funded
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Haba Na Haba — Zero Hunger App
            </h1>

            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              Food security platform · Tech To The Rescue Hackathon · Uganda &
              Nigeria
            </p>

            <blockquote className="mt-6 rounded-2xl border border-brand-soft/45 bg-white/80 px-5 py-5 text-lg font-medium leading-relaxed text-brand-deep shadow-[0_8px_20px_rgba(75,0,130,0.08)] md:text-xl">
              "They translated a global problem into a working product in days —
              and won."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 py-8 md:grid-cols-12 md:px-8 md:py-10">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-page-textMuted">
                Food banks in underserved communities had surplus food with no
                reliable way to reach the people who needed it most. Logistics
                were manual, communication was fragmented, and communities were
                falling through the cracks every day.
              </p>
              <p className="mt-4 text-base leading-relaxed text-page-textMuted">
                Ayo led a team of 3 international engineers to build a
                USSD-based application that connected food banks with
                communities facing food insecurity — designed specifically for
                users with no smartphones or reliable internet. The solution won
                the Tech To The Rescue Zero Hunger Hackathon and secured AWS
                budget approval for further development.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-soft/45 bg-white/80 px-4 py-3 text-sm leading-relaxed text-page-textMuted">
                  1,000+ community users reached in the first deployment
                </div>
                <div className="rounded-xl border border-brand-soft/45 bg-white/80 px-4 py-3 text-sm leading-relaxed text-page-textMuted">
                  AWS budget secured to scale and further develop the solution
                </div>
                <div className="rounded-xl border border-brand-soft/45 bg-white/80 px-4 py-3 text-sm leading-relaxed text-page-textMuted">
                  System performance improved 25%, downtime reduced 30%
                </div>
                <div className="rounded-xl border border-brand-soft/45 bg-white/80 px-4 py-3 text-sm leading-relaxed text-page-textMuted">
                  Built for zero-smartphone, low-bandwidth environments — truly
                  accessible
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {habaTech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-soft/60 bg-[#efe6ff] px-3 py-1 text-xs font-semibold text-brand-deep"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {habaMetrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className="reveal rounded-xl border border-brand-soft/50 bg-white/80 px-4 py-4 text-center shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
                    style={
                      {
                        "--reveal-delay": `${idx * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="text-2xl font-semibold text-brand-deep md:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-page-textMuted md:text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <article className="rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-5 shadow-[0_8px_18px_rgba(75,0,130,0.08)]">
                  <h2 className="text-xl font-semibold tracking-tight">
                    The challenge
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                    Build a working food distribution system in hackathon time,
                    for communities with no smartphones, no reliable internet,
                    and no room for failure.
                  </p>
                </article>

                <article className="rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-5 shadow-[0_8px_18px_rgba(75,0,130,0.08)]">
                  <h2 className="text-xl font-semibold tracking-tight">
                    The outcome
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                    A USSD app that works on any basic phone. Award-winning.
                    AWS-funded. Serving real communities.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            More projects
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Additional client stories
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {moreProjects.map((project, idx) => (
            <article
              key={project.title}
              className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_18px_34px_rgba(75,0,130,0.16)]"
              style={
                { "--reveal-delay": `${idx * 80}ms` } as React.CSSProperties
              }
            >
              <span className="inline-flex rounded-full border border-brand-soft/60 bg-[#efe6ff] px-3 py-1 text-xs font-semibold text-brand-deep">
                {project.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-page-textMuted">
                {project.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-page-textMuted">
                {project.description}
              </p>

              <div className="mt-4 space-y-2">
                {project.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-2 text-sm text-page-textMuted"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-soft/60 bg-white/80 px-3 py-1 text-xs font-medium text-brand-deep"
                  >
                    {item}
                  </span>
                ))}
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

          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Start a project ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
