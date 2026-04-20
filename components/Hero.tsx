"use client";

export function Hero() {
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const stats = [
    { num: "3+", label: "Years building" },
    { num: "AWS", label: "Funded project" },
    { num: "10+", label: "Developers & specialists" },
    { num: "3", label: "Countries represented" },
  ];

  return (
    <section className="mx-auto mt-16 w-full max-w-content px-4 pb-20 pt-12 text-center md:mt-20 md:px-6 md:pb-28 md:pt-16">
      <div className="reveal mx-auto inline-flex items-center rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold text-brand-deep shadow-[0_6px_18px_rgba(118,48,255,0.12)]">
        Global team
      </div>

      <h1 className="reveal mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
        We help founders{' '}
        <span className="bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_45%,#7630ff_100%)] bg-clip-text text-transparent">
          validate & build
        </span>{' '}
        software that actually works
      </h1>

      <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-page-textMuted" style={{ '--reveal-delay': '180ms' } as React.CSSProperties}>
        From idea to MVP - before you spend too much money building the wrong
        thing. Fintech, healthcare, and edtech specialists.
      </p>

      <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ '--reveal-delay': '260ms' } as React.CSSProperties}>
        <button
          className="w-full rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 sm:w-auto"
          onClick={() => scrollToSection("contact")}
        >
          Book a free discovery call ↗
        </button>
        <button
          className="w-full rounded-md border border-brand-deep/55 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white sm:w-auto"
          onClick={() => scrollToSection("work")}
        >
          See our work
        </button>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 border-t border-brand-soft/40 pt-8 md:grid-cols-4 md:gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="reveal rounded-xl border border-brand-soft/40 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-4 text-center shadow-[0_8px_20px_rgba(75,0,130,0.08)]"
            style={{ '--reveal-delay': `${340 + idx * 90}ms` } as React.CSSProperties}
          >
            <div className="text-2xl font-semibold text-brand md:text-3xl">
              {stat.num}
            </div>
            <div className="mt-1 text-xs text-page-textMuted md:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
