"use client";

import { useState } from "react";
import { type PromptSegment, promptToPlainText } from "@/lib/aiPrompts";

type Props = {
  id: string;
  body: PromptSegment[];
  label?: string;
};

/** A prompt body with its [bracket] fills highlighted, plus a copy button. */
export function PromptBlock({ id, body, label }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = promptToPlainText(body);

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
    <div>
      {label ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          {label}
        </p>
      ) : null}

      <div className="whitespace-pre-wrap rounded-xl border border-page-border bg-page-surface p-5 text-[15px] leading-relaxed text-page-text">
        {body.map((part, idx) =>
          typeof part === "string" ? (
            part
          ) : (
            <mark
              key={`${id}-fill-${idx}`}
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
    </div>
  );
}
