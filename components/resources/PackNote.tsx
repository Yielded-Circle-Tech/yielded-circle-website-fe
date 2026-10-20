import type { PromptPackNote } from "@/lib/aiPrompts";

export function PackNote({ note }: { note: PromptPackNote }) {
  return (
    <section className="reveal rounded-2xl border border-brand-soft/45 bg-white p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-7">
      <h3 className="text-2xl font-semibold tracking-tight text-page-text">
        {note.heading}
      </h3>

      <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-page-textMuted">
        {note.items.map((item) => (
          <li key={item.text}>
            {item.lead ? (
              <b className="text-page-text">{item.lead}</b>
            ) : null}{" "}
            {item.text}
          </li>
        ))}
      </ol>

      {note.footnote ? (
        <p className="mt-3 text-sm leading-relaxed text-page-textMuted">
          {note.footnote}
        </p>
      ) : null}
    </section>
  );
}
