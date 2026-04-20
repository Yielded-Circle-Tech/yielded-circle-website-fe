import Link from "next/link";

type ServiceItem = {
  title: string;
  tagline: string;
  description: string;
  forYou: string[];
  included: string[];
};

const services: ServiceItem[] = [
  {
    title: "MVP Development & Validation",
    tagline: "Build the right thing before you build the thing.",
    description:
      "Most founders fail not because their idea is bad — but because they build the wrong version of it first. We fix that. Before we write a single line of production code, we scope your idea, challenge your assumptions, prototype the core user journey, and test it with real users. You get proof that it works before you spend real money building it out.",
    forYou: [
      "You have an idea but are not sure where to start",
      "You have been burned by a developer who built the wrong thing",
      "You want to raise investment and need a working product to show",
      "You want to validate demand before committing a full budget",
    ],
    included: [
      "Discovery sprint and problem scoping",
      "Competitor and market analysis",
      "Clickable prototype",
      "User testing and feedback synthesis",
      "Technical architecture recommendation",
      "Milestone-based build plan with cost estimate",
    ],
  },
  {
    title: "Full-Stack Web Development",
    tagline: "Scalable web applications, built to last.",
    description:
      "We design and build web applications that can grow with your business. Not just functional — but architected for scale, maintainable by future teams, and designed with real users in mind. We work across the full stack: React and Next.js on the frontend, Node.js and Express on the backend, PostgreSQL and Prisma for data, and cloud infrastructure on Vercel and AWS.",
    forYou: [
      "You need a web application built from scratch",
      "You have an existing codebase that needs to be rebuilt or extended",
      "You need a technical team to work alongside your existing team",
    ],
    included: [
      "Frontend development — React, Next.js",
      "Backend development — Node.js, Express, RESTful APIs",
      "Database design and management — PostgreSQL, Prisma, MySQL",
      "Cloud deployment — Vercel, AWS",
      "Code documentation and handover",
    ],
  },
  {
    title: "Mobile App Development",
    tagline: "iOS and Android — built for the African market.",
    description:
      "We build cross-platform mobile applications that work on both iOS and Android from a single codebase, reducing cost and delivery time without compromising on quality. We also build USSD applications for markets where smartphones and reliable internet are not guaranteed — because real impact means reaching everyone, not just users with the latest device.",
    forYou: [
      "You need a mobile app for iOS and Android",
      "Your users are in low-bandwidth or low-smartphone markets",
      "You want to reach users on basic phones via USSD",
    ],
    included: [
      "Cross-platform mobile development — React Native",
      "USSD application development",
      "API integration and backend connection",
      "Beta testing and performance optimisation",
      "App store submission support",
    ],
  },
  {
    title: "B2B Platform & Marketplace Development",
    tagline: "Complex platforms. Delivered without the complexity.",
    description:
      "Multi-vendor marketplaces, B2B portals, escrow payment systems, KYC and identity verification, commission management — we have built all of it for African markets. If your business requires a platform that connects multiple parties, handles money movement, or needs compliance features baked in from the start, this is what we specialise in.",
    forYou: [
      "You are building a marketplace that connects buyers and sellers",
      "You need escrow, split payments, or commission management",
      "You need KYC or identity verification for your users",
      "You are building a B2B portal or supplier management system",
    ],
    included: [
      "Multi-vendor and multi-portal architecture",
      "Paystack integration — payments, transfers, escrow",
      "KYC integration — VerifyMe.ng and similar providers",
      "Role-based access control for different user types",
      "WhatsApp notification system via Meta Cloud API",
      "Admin panel for platform management",
    ],
  },
  {
    title: "Business Digitisation & Tech Conversion",
    tagline: "Your business is ready for technology. We make it happen.",
    description:
      "You have built something real. Revenue is coming in, customers trust you, and operations are running — but manually. Spreadsheets, WhatsApp groups, paper records, and phone calls are holding you back from scaling. We sit with you, map your operations, and engineer a technology solution that fits how your business actually works — not a generic template forced onto your processes.",
    forYou: [
      "You run an established business with manual processes that need to be digitised",
      "You want to build internal tools that automate how your team works",
      "You want to launch a digital product arm of an existing offline business",
      "You want to stop losing revenue to inefficiency",
    ],
    included: [
      "Business process mapping and analysis",
      "Custom internal tool development",
      "Workflow automation",
      "Staff training and system handover",
      "Ongoing support and maintenance",
    ],
  },
  {
    title: "AI Integration",
    tagline: "Make your product smarter without rebuilding it.",
    description:
      "AI is no longer a feature for tech giants. We help businesses and founders integrate AI capabilities into existing products or build AI-first tools from the ground up. From intelligent chatbots and document processing to recommendation engines and automated workflows — we identify where AI adds real value in your product and build it in.",
    forYou: [
      "You want to add a chatbot or AI assistant to your product",
      "You want to automate repetitive tasks in your business",
      "You are building an AI-first product and need a technical team",
    ],
    included: [
      "LLM integration — OpenAI, Claude, and others",
      "AI-powered chatbots and assistants",
      "Document processing and extraction",
      "Workflow automation",
      "Custom AI feature development",
    ],
  },
  {
    title: "CTO-as-a-Service",
    tagline: "Senior technical leadership. Without the full-time cost.",
    description:
      "Not every founder needs a full-time CTO on payroll from day one. But every founder building technology needs someone who can make the right technical decisions, lead a development team, and keep the product moving in the right direction. We have served in the CTO role for early-stage startups — owning the technical roadmap, managing developers, reviewing architecture, and representing the technical vision to investors and stakeholders.",
    forYou: [
      "You are a non-technical founder who needs technical leadership",
      "You have a team of developers but no senior technical direction",
      "You are preparing for investor due diligence and need a CTO on record",
      "You need someone to review and fix an existing technical architecture",
    ],
    included: [
      "Technical roadmap planning",
      "Developer hiring, onboarding, and management",
      "Architecture review and recommendations",
      "Weekly technical leadership sessions",
      "Investor and stakeholder technical representation",
    ],
  },
];

const processSteps = [
  {
    step: "Step 1 — Discovery",
    text: "We start with a free 45-minute call. We ask hard questions about your users, your market, your goals, and your constraints. This is not a sales call — it is an honest conversation about whether and how to build your idea.",
  },
  {
    step: "Step 2 — Scope & Proposal",
    text: "We translate everything from discovery into a clear project scope: what we will build, in what order, for how much, and by when. You approve it before we start.",
  },
  {
    step: "Step 3 — Build",
    text: "We build in milestones. At the end of every milestone, you see what was built, test it, and approve before we move to the next phase. Payments are tied to milestones — not to time.",
  },
  {
    step: "Step 4 — Handover",
    text: "When the project is complete, we hand over everything. Source code, documentation, deployment access, and a walkthrough of the system. You own it fully. You are never dependent on us to keep it running.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            What we offer
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Software development services built for founders and businesses
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-page-textMuted">
            Whether you are validating a new idea or converting an existing
            business into a technology product, we have the expertise to build
            it right — from the first line of code to the final handover.
          </p>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="reveal rounded-3xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-8"
              style={
                { "--reveal-delay": `${idx * 50}ms` } as React.CSSProperties
              }
            >
              <div className="inline-flex rounded-full border border-brand-soft/55 bg-white/75 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand-deep">
                Service {idx + 1}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {service.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-page-textMuted">
                {service.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-brand-soft/45 bg-white/70 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
                    This is the service for you if
                  </h3>
                  <div className="mt-3 space-y-2">
                    {service.forYou.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-page-textMuted"
                      >
                        <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-soft/45 bg-white/70 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
                    What is included
                  </h3>
                  <div className="mt-3 space-y-2">
                    {service.included.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-page-textMuted"
                      >
                        <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space border-y border-page-border bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(241,232,255,0.65)_100%)]">
        <div className="mx-auto w-full max-w-content px-4 md:px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Our process
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              How every project runs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              No surprises. No runaway scope. Every project follows the same
              structure so you always know where things stand.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {processSteps.map((step, idx) => (
              <article
                key={step.step}
                className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-5 shadow-[0_8px_20px_rgba(75,0,130,0.1)]"
                style={
                  { "--reveal-delay": `${idx * 70}ms` } as React.CSSProperties
                }
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {step.step}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-page-textMuted">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-page-textMuted">
            That is exactly what the discovery call is for. Tell us what you are
            trying to achieve and we will tell you the best way to build it.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Book a free discovery call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
