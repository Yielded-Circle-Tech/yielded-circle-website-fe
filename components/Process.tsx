interface ProcessStep {
  num: string
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery',
    description:
      'Free 45-min call. We ask hard questions about your users, competitors, and goals.',
  },
  {
    num: '02',
    title: 'Validate',
    description:
      'We build a clickable prototype and test it with real users before writing production code.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Weekly demos. You always see progress. Payments tied to delivered milestones.',
  },
  {
    num: '04',
    title: 'Launch',
    description:
      'Full deployment, documentation, and training — so you\'re never dependent on us.',
  },
]

export function Process() {
  return (
    <section className="border-t border-page-border py-14 md:py-20" id="process">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            How we work
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            From idea to launch in 4 steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            No surprises. No runaway scope. We validate before we build.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-page-border bg-page-surface p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                {step.num}
              </div>
              <h3 className="mt-2 text-base font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
