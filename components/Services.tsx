interface Service {
  id: string
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    id: '01',
    title: 'MVP validation',
    description:
      'We scope, prototype, and test your idea with real users before a single line of production code is written.',
    tags: ['Discovery sprint', 'Prototype', 'User testing'],
  },
  {
    id: '02',
    title: 'Full-stack development',
    description:
      'React, Node.js, PostgreSQL — scalable web apps built to last, not just to ship fast.',
    tags: ['Web apps', 'APIs', 'Databases'],
  },
  {
    id: '03',
    title: 'Mobile development',
    description:
      'Cross-platform mobile apps for iOS and Android. Including USSD for low-bandwidth markets.',
    tags: ['React Native', 'USSD', 'Android / iOS'],
  },
  {
    id: '04',
    title: 'AI integration',
    description:
      'Embed AI features into your product — chatbots, automations, and intelligent workflows.',
    tags: ['LLMs', 'Automation', 'AI agents'],
  },
  {
    id: '05',
    title: 'Marketplace & e-commerce',
    description:
      'Multi-vendor platforms, B2B portals, escrow payments, and KYC — built for African markets.',
    tags: ['Paystack', 'KYC', 'Multi-vendor'],
  },
  {
    id: '06',
    title: 'Tech consulting',
    description:
      'Not sure what to build or where to start? We do technical scoping, architecture review, and CTO-as-a-service.',
    tags: ['Architecture', 'Scoping', 'CTO advisory'],
  },
]

export function Services() {
  return (
    <section className="section-space border-t border-page-border" id="services">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
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
              className="reveal rounded-2xl border border-brand-soft/40 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-6 shadow-[0_8px_22px_rgba(75,0,130,0.08)] transition hover:-translate-y-1 hover:border-brand-soft/80 hover:shadow-[0_16px_32px_rgba(75,0,130,0.16)]"
              style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
            >
              <div className="mb-4 inline-flex rounded-full border border-brand-soft/50 bg-white px-3 py-1 text-xs font-semibold tracking-wider text-brand-deep">
                {service.id}
              </div>
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="rounded-full border border-brand-soft/60 bg-[#efe6ff] px-3 py-1 text-xs font-medium text-brand-deep"
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
