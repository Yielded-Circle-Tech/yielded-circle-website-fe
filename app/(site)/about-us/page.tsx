import Link from "next/link";

const whyChooseUs = [
  "We validate before we build — saving you from expensive mistakes",
  "We have led and won international hackathons with AWS-backed solutions",
  "We have delivered MVPs from zero to launch in under 3 months",
  "Our team has a 95% client satisfaction rate across projects",
  "We are based in Lagos and understand the African market — but we build for the world",
];

const stats = [
  "3+ years",
  "30+ projects shipped",
  "95% satisfaction",
  "AWS-funded",
  "3 countries",
];

export default function AboutUsPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            About Yielded Circle Tech
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            We started where most founders end up — stuck.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-page-textMuted">
            We help founders avoid costly false starts with transparent delivery
            and products built for real users.
          </p>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)]">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Who we are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We are a product-focused software development agency based in
              Lagos, Nigeria — with a global team of developers, engineers, and
              AI specialists across multiple countries.
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We are led by Ayo, a full-stack developer and CTO who has spent
              years at the intersection of business and technology — turning
              founder ideas into working products, leading engineering teams for
              international organisations, and winning the Tech To The Rescue
              Zero Hunger Hackathon with an AWS-funded solution now serving
              communities across underserved regions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              That same thinking — build fast, build right, build for real
              people — drives every project we take on.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)]">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Who we serve
            </h2>
            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  Early-stage founders
                </h3>
                <p className="mt-2 text-base leading-relaxed text-page-textMuted">
                  Founders with an idea who need a technical team to validate
                  it, scope it, and build it into an investor-ready product —
                  without wasting months and millions on the wrong thing.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  Established businesses
                </h3>
                <p className="mt-2 text-base leading-relaxed text-page-textMuted">
                  Businesses ready to convert operations into technology.
                  Whether that means digitising manual processes, building
                  internal tools, or launching a platform from scratch, we
                  engineer around how your business actually works.
                </p>
              </div>

              <p className="rounded-xl border border-brand-soft/45 bg-white/70 p-3 text-sm leading-relaxed text-page-textMuted">
                We do not start by writing code. We start by understanding your
                problem.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space border-y border-page-border bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(241,232,255,0.65)_100%)]">
        <div className="mx-auto w-full max-w-content px-4 md:px-6">
          <div className="reveal mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We run milestone-based projects with weekly progress updates, so
              you always know exactly what is being built and why. Payments are
              tied to delivery, not promises. When we hand over your product, we
              hand over documentation, training, and full ownership — so you are
              never dependent on us to keep your business running.
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We have shipped products in fintech, healthcare, edtech, agritech,
              and e-commerce. We have built USSD apps for farmers with no
              smartphones, B2B marketplaces for African fashion brands,
              multi-vendor book platforms, and ebook applications serving
              thousands of users.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
            {stats.map((stat, idx) => (
              <div
                key={stat}
                className="reveal rounded-xl border border-brand-soft/50 bg-white/80 px-4 py-4 text-center text-sm font-semibold text-brand-deep shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
                style={
                  { "--reveal-delay": `${idx * 70}ms` } as React.CSSProperties
                }
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
              Why founders and businesses choose us
            </h2>

            <div className="mt-6 space-y-3">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={item}
                  className="reveal flex items-start gap-3 rounded-xl border border-brand-soft/45 bg-white/70 px-4 py-3"
                  style={
                    { "--reveal-delay": `${idx * 70}ms` } as React.CSSProperties
                  }
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7630ff_100%)] text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-page-textMuted">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-soft/45 bg-white/75 p-5 text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-page-text">
                Ready to build something real?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-page-textMuted">
                Book a free 45-minute discovery call. No pitch. No pressure.
                Just an honest conversation about your idea, your business, and
                the best way to build it.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
                >
                  Book free discovery call
                </Link>
                <Link
                  href="/client-stories"
                  className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
                >
                  See client stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
