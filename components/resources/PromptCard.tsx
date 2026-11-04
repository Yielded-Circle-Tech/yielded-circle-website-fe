import type { AiPrompt } from "@/lib/aiPrompts";
import { PromptBlock } from "@/components/resources/PromptBlock";

type Props = {
  prompt: AiPrompt;
  index: number;
};

export function PromptCard({ prompt, index }: Props) {
  return (
    <section
      id={prompt.id}
      className="reveal rounded-2xl border border-brand-soft/45 bg-white p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-7"
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-sm font-bold text-white shadow-brand">
        {prompt.number}
      </div>

      <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-page-text md:text-[26px]">
        {prompt.title}
      </h3>

      <p className="mt-2 text-base leading-relaxed text-page-textMuted">
        {prompt.what}
      </p>

      <div className="mt-5">
        <PromptBlock id={prompt.id} body={prompt.body} />
      </div>

      {prompt.tip ? (
        <p className="mt-4 border-l-[3px] border-brand pl-3 text-[14.5px] leading-relaxed text-page-textMuted">
          <b className="text-page-text">Tip:</b> {prompt.tip}
        </p>
      ) : null}
    </section>
  );
}
