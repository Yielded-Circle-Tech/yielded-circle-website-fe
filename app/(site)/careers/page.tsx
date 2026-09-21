import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-6 py-12 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-10 md:py-14">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            Careers
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            We&apos;re building this page right now
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-page-textMuted">
            Our careers page is coming soon with open roles, team culture, and
            how we work at Yielded Circle Tech.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@yieldedcircle.tech?subject=Career%20Interest%20at%20Yielded%20Circle%20Tech"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Express interest
            </a>
            <Link
              href="/about-us"
              className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
