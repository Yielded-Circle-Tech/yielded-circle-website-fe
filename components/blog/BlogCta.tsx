import Link from "next/link";

export function BlogCta() {
  return (
    <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
      <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
        <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
          Building something you want to get right?
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
  );
}
