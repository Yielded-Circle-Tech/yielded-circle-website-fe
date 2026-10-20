"use client";

import { useState } from "react";
import { type AiPrompt, promptToPlainText } from "@/lib/aiPrompts";

type Props = {
  prompt: AiPrompt;
  index: number;
};

export function PromptCard({ prompt, index }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = promptToPlainText(prompt.body);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for insecure contexts, where the clipboard API is unavailable.
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Could not copy prompt:", error);
    }
  };

  return (
    <section
      id={prompt.id}
      className="reveal rounded-2xl border border-brand-soft/45 bg-white p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-7"
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-sm font-bold text-white shadow-brand">
        {prompt.number}
      </div>

      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-page-text md:text-[26px]">
        {prompt.title}
      </h2>

      <p className="mt-2 text-base leading-relaxed text-page-textMuted">
        {prompt.what}
      </p>

      <div className="mt-5 whitespace-pre-wrap rounded-xl border border-page-border bg-page-surface p-5 text-[15px] leading-relaxed text-page-text">
        {prompt.body.map((part, idx) =>
          typeof part === "string" ? (
            part
          ) : (
            <mark
              key={`${prompt.id}-fill-${idx}`}
              className="rounded bg-[#e3d2ff] px-1 py-0.5 font-semibold text-brand-deep"
            >
              {part.fill}
            </mark>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={`mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[15px] font-bold text-white transition ${
          copied
            ? "bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] shadow-brand"
            : "bg-brand-dark hover:bg-brand-deep"
        }`}
      >
        {copied ? "Copied ✓" : "Copy prompt"}
      </button>

      {prompt.tip ? (
        <p className="mt-4 border-l-[3px] border-brand pl-3 text-[14.5px] leading-relaxed text-page-textMuted">
          <b className="text-page-text">Tip:</b> {prompt.tip}
        </p>
      ) : null}
    </section>
  );
}
