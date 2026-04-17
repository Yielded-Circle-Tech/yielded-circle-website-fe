interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just build what I asked for — they pushed back on the parts that wouldn't work and saved me months of wasted development.",
    author: "Alfred J.",
    role: "Founder, Leddar Platform",
    initials: "AF",
  },
  {
    quote:
      "The team understood the USSD constraint from day one. They built for the actual users — farmers with basic phones — not for a demo environment.",
    author: "Haba Na Haba",
    role: "AWS-funded project",
    initials: "HH",
  },
  {
    quote:
      "I came in with an idea and left with a product. The milestone-based approach meant I always knew what was happening and never felt out of control.",
    author: "Emeka C.",
    role: "Early-stage founder",
    initials: "EC",
  },
];

export function Testimonials() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto w-full max-w-content rounded-2xl border border-page-border bg-page-surface px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            What clients say
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Built on trust
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-page-border bg-page-bg p-5"
            >
              <p className="text-sm leading-relaxed text-page-textMuted">
                {testimonial.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-page-text">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-page-textMuted">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
