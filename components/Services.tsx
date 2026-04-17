interface Service {
  icon: string
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: '🧪',
    title: 'MVP validation',
    description:
      'We scope, prototype, and test your idea with real users before a single line of production code is written.',
    tags: ['Discovery sprint', 'Prototype', 'User testing'],
  },
  {
    icon: '🏗️',
    title: 'Full-stack development',
    description:
      'React, Node.js, PostgreSQL — scalable web apps built to last, not just to ship fast.',
    tags: ['Web apps', 'APIs', 'Databases'],
  },
  {
    icon: '📱',
    title: 'Mobile development',
    description:
      'Cross-platform mobile apps for iOS and Android. Including USSD for low-bandwidth markets.',
    tags: ['React Native', 'USSD', 'Android / iOS'],
  },
  {
    icon: '⚡',
    title: 'AI integration',
    description:
      'Embed AI features into your product — chatbots, automations, and intelligent workflows.',
    tags: ['LLMs', 'Automation', 'AI agents'],
  },
  {
    icon: '🛒',
    title: 'Marketplace & e-commerce',
    description:
      'Multi-vendor platforms, B2B portals, escrow payments, and KYC — built for African markets.',
    tags: ['Paystack', 'KYC', 'Multi-vendor'],
  },
  {
    icon: '🔧',
    title: 'Tech consulting',
    description:
      'Not sure what to build or where to start? We do technical scoping, architecture review, and CTO-as-a-service.',
    tags: ['Architecture', 'Scoping', 'CTO advisory'],
  },
]

export function Services() {
  return (
    <section className="border-t border-page-border py-14 md:py-20" id="services">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            What we do
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            End-to-end software development
          </h2>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            We work best with founders who have an idea but need a technical
            team to validate and build it right.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-page-border bg-page-surface p-6 transition hover:-translate-y-0.5 hover:border-page-borderStrong hover:bg-page-elevated"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="rounded-full border border-page-borderStrong bg-page-elevated px-3 py-1 text-xs text-page-textMuted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
