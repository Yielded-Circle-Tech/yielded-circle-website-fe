export default function CommunityPage() {
  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            Community
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            We do not just build software. We build people.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-page-textMuted">
            Yielded Circle Tech is more than an agency. It is a community of
            developers, founders, and builders who believe that Africa&apos;s
            best technology is still ahead of us.
          </p>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <article className="reveal rounded-3xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Why this matters
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The gap we are closing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            There are thousands of talented developers across Nigeria and Africa
            who never get the opportunity to work on real, high-impact products.
            They graduate. They learn to code. And then they spend months
            applying to jobs that never respond, building tutorial projects that
            go nowhere, and wondering if they made the right choice.
          </p>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            We know this story because we have lived it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            Yielded Circle Tech brings early-career developers into real client
            work — with mentorship, code reviews, and the kind of experience
            that actually builds a career. We have coached developers who went
            from zero freelance income to earning confidently from their skills.
          </p>
          <p className="mt-4 text-base leading-relaxed text-page-textMuted">
            That is the community we are building. Not a Discord server. A
            launchpad.
          </p>
        </article>
      </section>

      <section className="section-space border-y border-page-border bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(241,232,255,0.65)_100%)]">
        <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-5 px-4 md:px-6 lg:grid-cols-2">
          <article className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-6 shadow-[0_8px_20px_rgba(75,0,130,0.1)]">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              For Developers
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Launch your dev career with real work experience
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-page-textMuted">
              We work with early-career developers who are serious about
              building a career in software. Not tutorials. Not certificates.
              Real projects, real clients, real feedback.
            </p>

            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
              What you get
            </h3>
            <div className="mt-3 space-y-2">
              {[
                "Mentorship from a full-stack developer and CTO with international experience",
                "Opportunity to work on live client projects alongside our core team",
                "Code reviews and pair programming sessions",
                "Guidance on landing your first freelance client and earning your first income in tech",
                "A network of developers and founders across Nigeria and beyond",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-page-textMuted"
                >
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-brand-soft/45 bg-white/70 p-4 text-sm leading-relaxed text-page-textMuted">
              <span className="font-semibold text-page-text">
                Who this is for:{" "}
              </span>
              This is for developers who have learned the basics and are ready
              to bridge the gap between learning and earning. If you are sitting
              on skills but have not yet worked on a real project with a real
              deadline, this is your entry point.
            </div>
          </article>

          <article
            className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-6 shadow-[0_8px_20px_rgba(75,0,130,0.1)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              For Founders
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Connect with technical builders who understand your world
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-page-textMuted">
              Building a startup in Nigeria is hard enough without also having
              to figure out who to trust with your technology. Our community
              gives early-stage founders access to honest technical advice,
              developer connections, and a space to talk through their product
              ideas with people who have built before.
            </p>

            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
              What you get
            </h3>
            <div className="mt-3 space-y-2">
              {[
                "Access to technical advice from founders who have been through it",
                "Developer introductions and referrals within our vetted network",
                "A space to share ideas and get honest product feedback",
                "Invitations to events, workshops, and roundtable sessions when available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-page-textMuted"
                >
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)]">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Knowledge that moves people forward
            </h2>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We host and participate in events, workshops, and online sessions
              focused on practical knowledge — not theory. Past topics have
              included how to build your first freelance client, how to scope a
              software project without getting burned, and how to lead a
              development team as a non-technical founder.
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              If you would like to be notified about upcoming events and
              sessions, join the waitlist below.
            </p>
          </article>

          <article
            className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Community impact
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              From learning to earning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              One of the most rewarding parts of building Yielded Circle Tech
              has been watching developers we have mentored go from uncertainty
              — "I do not think I am ready" — to confidence — "I just closed my
              first client."
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              We have coached early-career developers who now earn consistently
              from freelancing. Some have gone on to join international teams.
              Others have built their own small agencies. A few are still in our
              network, mentoring the next set of developers coming through.
            </p>
            <p className="mt-4 text-base leading-relaxed text-page-textMuted">
              This is the compounding return on investing in people.
            </p>
          </article>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
            Ready to be part of this?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-page-textMuted">
            Whether you are a developer ready to level up or a founder looking
            for honest technical community — there is a place for you here.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@yieldedcircle.tech?subject=Apply%20to%20join%20as%20a%20developer"
              className="inline-flex rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Apply to join as a developer
            </a>
            <a
              href="mailto:hello@yieldedcircle.tech?subject=Join%20as%20a%20founder"
              className="inline-flex rounded-md border border-brand-deep/45 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-white"
            >
              Join as a founder
            </a>
          </div>

          <p className="mt-4 text-sm text-page-textMuted">
            We review all applications personally. No bots. No automated
            rejections.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-content px-4 pb-2 md:px-6">
        <p className="text-center text-xs leading-relaxed text-page-textMuted">
          Yielded Circle Tech community is currently invite-based and growing.
          We prioritise quality of connection over quantity of members. If you
          apply and do not hear back within 7 days, feel free to follow up
          directly via WhatsApp or email.
        </p>
      </section>
    </main>
  );
}
