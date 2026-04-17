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
    <section className="mx-auto mt-16 w-full max-w-content px-4 pb-16 pt-12 text-center md:mt-20 md:px-6 md:pb-20 md:pt-16">
      <div className="mx-auto inline-flex items-center rounded-full border border-[#F0C9A8] bg-brand-light px-4 py-1 text-xs font-medium text-brand-dark">
        Global team
      </div>

      <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
        We help founders <span className="text-brand">validate & build</span>{" "}
        software that actually works
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-page-textMuted">
        From idea to MVP - before you spend too much money building the wrong
        thing. Fintech, healthcare, and edtech specialists.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          className="w-full rounded-md bg-brand px-6 py-3 text-sm font-medium text-white shadow-brand transition hover:bg-brand-dark sm:w-auto"
          onClick={() => scrollToSection("contact")}
        >
          Book a free discovery call ↗
        </button>
        <button
          className="w-full rounded-md border border-brand px-6 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-white sm:w-auto"
          onClick={() => scrollToSection("work")}
        >
          See our work
        </button>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 border-t border-page-border pt-8 md:grid-cols-4 md:gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
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
