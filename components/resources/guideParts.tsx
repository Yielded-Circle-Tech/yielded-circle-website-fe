import type { ReactNode } from "react";

/** Shared building blocks for the step-by-step video guides. */

export const cardClass =
  "rounded-2xl border border-brand-soft/45 bg-white p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-7";

const badgeClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-sm font-bold text-white shadow-brand";

export const routineCardClass =
  "reveal mt-12 rounded-2xl border border-brand-soft/60 bg-[linear-gradient(180deg,#f3edff_0%,#ffffff_70%)] p-6 shadow-[0_14px_30px_rgba(75,0,130,0.12)] md:p-7";

export const routineListClass =
  "list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-page-textMuted marker:font-bold marker:text-brand";

export function Tip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="mt-5 border-l-[3px] border-brand pl-3 text-[14.5px] leading-relaxed text-page-textMuted">
      <b className="text-page-text">{label}</b> {children}
    </p>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl bg-brand-light px-4 py-3.5 text-[14.5px] leading-relaxed text-page-text">
      {children}
    </div>
  );
}

export function Warning({ children }: { children: ReactNode }) {
  return (
    <div
      role="note"
      className="mt-5 flex gap-3 rounded-xl border border-amber-300 border-l-4 border-l-amber-500 bg-amber-50 px-4 py-3.5 text-[14.5px] leading-relaxed text-amber-950"
    >
      <span aria-hidden="true" className="mt-px shrink-0 text-base leading-snug">
        ⚠️
      </span>
      <p>{children}</p>
    </div>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 text-base leading-relaxed text-page-textMuted">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-black text-brand"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SubHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>
      <h3 className="mt-1.5 text-balance text-2xl font-semibold tracking-tight text-page-text md:text-[28px]">
        {title}
      </h3>
    </div>
  );
}

export function GuideHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="reveal mb-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-page-textMuted">{intro}</p>
    </div>
  );
}

export type Step = { title: string; content: ReactNode };

/** Numbered step cards. `idPrefix` gives each card an anchor like `video-step-1`. */
export function GuideSteps({ steps, idPrefix }: { steps: Step[]; idPrefix: string }) {
  return (
    <ol className="mt-10 space-y-7">
      {steps.map((step, idx) => (
        <li
          key={step.title}
          id={`${idPrefix}-step-${idx + 1}`}
          className={`reveal scroll-mt-24 ${cardClass}`}
        >
          <div className="flex items-center gap-3">
            <span className={badgeClass} aria-hidden="true">
              {idx + 1}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              Step {idx + 1}
            </p>
          </div>
          <h3 className="mb-4 mt-3 text-balance text-2xl font-semibold tracking-tight text-page-text md:text-[26px]">
            {step.title}
          </h3>
          {step.content}
        </li>
      ))}
    </ol>
  );
}

export type TroubleshootingRow = { see: string; why: string; fix: string };

/** A table on tablet and desktop, stacked cards on phones. */
export function Troubleshooting({ id, rows }: { id: string; rows: TroubleshootingRow[] }) {
  return (
    <div id={id} className="reveal mt-12 scroll-mt-24">
      <SubHeading eyebrow="Troubleshooting" title="When something goes wrong" />

      <div className="hidden overflow-hidden rounded-2xl border border-brand-soft/45 bg-white shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:block">
        <table className="w-full border-collapse text-left text-[14.5px] leading-relaxed">
          <thead>
            <tr className="bg-[linear-gradient(135deg,#21004b_0%,#4b0082_100%)] text-white">
              <th scope="col" className="w-[30%] px-4 py-3.5 font-bold">
                What you see
              </th>
              <th scope="col" className="w-[33%] px-4 py-3.5 font-bold">
                What&apos;s happening
              </th>
              <th scope="col" className="px-4 py-3.5 font-bold">
                What to do
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.see}
                className="border-t border-page-border align-top even:bg-page-surface/70"
              >
                <th scope="row" className="px-4 py-3.5 font-semibold text-page-text">
                  {row.see}
                </th>
                <td className="px-4 py-3.5 text-page-textMuted">{row.why}</td>
                <td className="px-4 py-3.5 font-medium text-brand-deep">{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-3.5 md:hidden">
        {rows.map((row) => (
          <li
            key={row.see}
            className="rounded-xl border border-brand-soft/45 bg-white p-4 shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
          >
            <p className="font-semibold leading-snug text-page-text">{row.see}</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-page-textMuted">
              <b className="text-xs font-bold uppercase tracking-[0.08em] text-brand">
                Why:
              </b>{" "}
              {row.why}
            </p>
            <p className="mt-2 rounded-lg bg-brand-light px-3 py-2 text-[14.5px] leading-relaxed text-page-text">
              <b className="text-xs font-bold uppercase tracking-[0.08em] text-brand">
                Do this:
              </b>{" "}
              {row.fix}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
