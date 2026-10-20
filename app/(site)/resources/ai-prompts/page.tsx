import type { Metadata } from "next";
import Link from "next/link";
import { PackNote } from "@/components/resources/PackNote";
import { PromptCard } from "@/components/resources/PromptCard";
import { PromptSignupForm } from "@/components/resources/PromptSignupForm";
import { promptPacks } from "@/lib/aiPrompts";

const COMMUNITY_LINK = "https://chat.whatsapp.com/DRFl1tSTMnx2qzJXyibKxu";

export const metadata: Metadata = {
  title: "Free AI Prompts for Nigerian Business Owners | Yielded Circle Tech",
  description:
    "Free copy-and-paste ChatGPT prompts for Nigerian business owners. Turn trends into marketing ideas, write in your own voice and get more customers.",
  alternates: {
    canonical: "https://yieldedcircletech.com/resources/ai-prompts",
  },
  openGraph: {
    title: "Free AI Prompts for Nigerian Business Owners",
    description:
      "Copy, paste and grow your business with AI. Free prompts by Ayo, Founder of Yielded Circle Tech.",
    url: "https://yieldedcircletech.com/resources/ai-prompts",
    siteName: "Yielded Circle Tech",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  "1. Copy a prompt",
  "2. Fill in the [brackets]",
  "3. Paste into ChatGPT",
];

export default function AiPromptsPage() {
  return (
    <main className="relative overflow-x-clip">
      <header className="relative overflow-hidden bg-[radial-gradient(900px_500px_at_85%_0%,rgba(118,48,255,0.45),transparent_70%),linear-gradient(160deg,#21004b_0%,#12002b_100%)] px-4 pb-16 pt-28 text-white md:px-6 md:pb-20 md:pt-32">
        <div className="mx-auto w-full max-w-3xl">
          <span className="inline-flex rounded-lg bg-white px-3 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-brand-dark">
            Free resource
          </span>

          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[52px]">
            Free AI Prompts for{" "}
            <span className="text-brand-soft">Nigerian Business Owners</span>
          </h1>

          <p className="mt-3.5 max-w-xl text-lg leading-relaxed text-[#ddd5ff] md:text-xl">
            Copy. Paste. Grow. Simple ChatGPT prompts to help you market your
            business, create content faster and get more customers.
          </p>

          <p className="mt-5 text-sm font-semibold text-brand-soft">
            By Ayo, Founder of Yielded Circle Tech
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {steps.map((step) => (
              <span
                key={step}
                className="rounded-full border border-brand-soft/40 bg-white/10 px-3.5 py-2 text-sm font-semibold"
              >
                {step}
              </span>
            ))}
          </div>

          <nav
            aria-label="Prompt packs"
            className="mt-7 flex flex-wrap gap-2.5 border-t border-white/15 pt-6"
          >
            {promptPacks.map((pack) => (
              <a
                key={pack.id}
                href={`#${pack.id}`}
                className="rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-brand-deep transition hover:bg-brand-light"
              >
                {pack.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6">
        {promptPacks.map((pack) => (
          <section key={pack.id} id={pack.id} className="scroll-mt-24 pb-4">
            <div className="reveal mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {pack.eyebrow}
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
                {pack.title}
              </h2>
              {pack.intro ? (
                <p className="mt-3 text-base leading-relaxed text-page-textMuted">
                  {pack.intro}
                </p>
              ) : null}
            </div>

            <div className="space-y-7">
              {pack.prompts.map((prompt, idx) => (
                <PromptCard key={prompt.id} prompt={prompt} index={idx} />
              ))}
            </div>

            <div className="mt-7">
              <PackNote note={pack.note} />
            </div>
          </section>
        ))}

        <section
          id="join"
          className="reveal mt-10 rounded-3xl bg-[linear-gradient(150deg,#4b0082_0%,#7630ff_100%)] px-6 py-9 text-white shadow-[0_20px_44px_rgba(75,0,130,0.22)] md:px-7 md:py-10"
        >
          <h2 className="text-balance text-2xl font-black leading-tight md:text-[28px]">
            Get new prompts every week
          </h2>

          <p className="mt-2.5 text-[#ece6ff]">
            Join my free community of Nigerian business owners learning to use
            AI to grow, save time and sell more. New prompts, real examples and
            answers to your questions.
          </p>

          <div className="mt-5">
            <PromptSignupForm />
          </div>

          <div className="mt-3.5 flex flex-wrap gap-2.5">
            <a
              className="inline-block rounded-lg border-2 border-white/60 px-5 py-3 text-base font-extrabold text-white transition hover:bg-white hover:text-brand-deep"
              href={COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the free community
            </a>
          </div>
        </section>

        <section className="py-10 text-center text-page-textMuted">
          <p>
            Want AI built right into your business, like an automated WhatsApp
            assistant, a smart website or a custom app?
            <br />
            <Link
              href="/contact-us"
              className="font-bold text-brand transition hover:text-brand-deep"
            >
              Talk to Yielded Circle Tech →
            </Link>
          </p>
        </section>

        <section className="border-t border-page-border py-6 text-center text-[13.5px] text-page-textMuted">
          Follow <b className="text-page-text">Ayo on Code</b> on TikTok,
          Instagram, YouTube and LinkedIn for more AI tips.
        </section>
      </div>
    </main>
  );
}
