import type { ReactNode } from "react";
import { PackNote } from "@/components/resources/PackNote";
import { PromptBlock } from "@/components/resources/PromptBlock";
import {
  firstEditPrompt,
  fixPrompt,
  learnPrompt,
  routinePrompt,
  saveSkillPrompt,
  setupPrompt,
  studyPrompt,
  troubleshooting,
  videoGuide,
} from "@/lib/videoEditGuide";

const cardClass =
  "rounded-2xl border border-brand-soft/45 bg-white p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] md:p-7";

const badgeClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-sm font-bold text-white shadow-brand";

function Tip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="mt-5 border-l-[3px] border-brand pl-3 text-[14.5px] leading-relaxed text-page-textMuted">
      <b className="text-page-text">{label}</b> {children}
    </p>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl bg-brand-light px-4 py-3.5 text-[14.5px] leading-relaxed text-page-text">
      {children}
    </div>
  );
}

function CheckList({ items }: { items: ReactNode[] }) {
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

type Step = { title: string; content: ReactNode };

const steps: Step[] = [
  {
    title: "Setup",
    content: (
      <>
        <ol className="list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-page-textMuted">
          <li>
            Open the Claude desktop app and switch to{" "}
            <b className="text-page-text">Claude Code</b>. Set it to{" "}
            <b className="text-page-text">local</b>, so it works on your laptop.
          </li>
          <li>
            Make a new folder on your laptop called{" "}
            <b className="text-page-text">my-video-editor</b> and attach it.
            Always open this same folder. Your tools and your editing style live
            inside it.
          </li>
          <li>Paste this:</li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="video-setup" body={setupPrompt} />
        </div>
      </>
    ),
  },
  {
    title: "Pick a video whose editing style you love",
    content: (
      <>
        <CheckList
          items={[
            <>
              <b className="text-page-text">Same type as yours:</b> a person
              talking to the camera, teaching something, short.
            </>,
            <>
              <b className="text-page-text">Lots of views,</b> so you know the
              editing keeps people watching.
            </>,
            <>
              <b className="text-page-text">Save it</b> by downloading it or
              screen-recording it. It&apos;s for study only. Never post their
              footage.
            </>,
            <>
              Put it in <b className="text-page-text">videos/reference</b> and
              rename it <b className="text-page-text">style-ref.mp4</b>.
            </>,
            <>
              Film your own short (45 to 60 seconds is best). Put it in{" "}
              <b className="text-page-text">videos/raw</b> and rename it{" "}
              <b className="text-page-text">my-clip.mp4</b>.
            </>,
            <>
              <b className="text-page-text">Got extra clips?</b> Your product,
              your shop, your screen. Film or screen-record them and put them in{" "}
              <b className="text-page-text">videos/raw/broll</b>.
            </>,
          ]}
        />
        <Tip label="File names:">
          keep them short, with no spaces. If you use other names, change them
          in the prompts too.
        </Tip>
      </>
    ),
  },
  {
    title: "Let Claude study it and plan your edit",
    content: (
      <>
        <p className="text-base leading-relaxed text-page-textMuted">
          Nothing gets rendered in this step. That saves time and token usage.
        </p>
        <Callout>
          <b>Before you paste the prompt,</b> write 3 to 5 lines that say what
          should appear when you say certain words. For example: &ldquo;When I
          say <i>ChatGPT</i>, show its name in a card at the top.&rdquo; This is
          what makes an edit look planned.
        </Callout>
        <div className="mt-5">
          <PromptBlock id="video-study" body={studyPrompt} />
        </div>
        <Tip label="Read the plan before you pick.">
          Is your face still visible enough? Too busy? Something missing? Say so
          now. Changing a plan is cheap. Changing a finished video is not.
        </Tip>
      </>
    ),
  },
  {
    title: "Your first edit",
    content: (
      <>
        <p className="text-base leading-relaxed text-page-textMuted">
          The rules in this prompt come from real mistakes made while building
          this. They save you a lot of back and forth.
        </p>
        <div className="mt-5">
          <PromptBlock id="video-first-edit" body={firstEditPrompt} />
        </div>
        <Tip label="While it renders:">
          keep the laptop plugged in. Don&apos;t press Sleep. The screen turning
          off is fine.
        </Tip>
      </>
    ),
  },
  {
    title: "Fix round",
    content: (
      <>
        <p className="text-base leading-relaxed text-page-textMuted">
          Watch the video in your normal video player. Write down every problem
          with its time. Then send <b className="text-page-text">all</b> your
          notes in <b className="text-page-text">one</b> message:
        </p>
        <div className="mt-5">
          <PromptBlock id="video-fix" body={fixPrompt} />
        </div>
        <Tip label="Be specific.">
          &ldquo;At 0:12 the caption covers my face. Move it lower&rdquo; works.
          &ldquo;Make it better&rdquo; doesn&apos;t.
        </Tip>
        <Callout>
          <b>Want it faster?</b> Add &ldquo;speed the whole video up to 1.1x and
          keep my voice natural&rdquo;. Do this before captions are added, or
          they fall out of sync. Above 1.25x, voices start to sound rushed.
        </Callout>
      </>
    ),
  },
  {
    title: "Save your style as a skill",
    content: (
      <>
        <p className="text-base leading-relaxed text-page-textMuted">
          Once you love the result, send this. A skill is a file of instructions
          Claude reads before every edit, so it remembers how you like your
          videos.
        </p>
        <div className="mt-5">
          <PromptBlock id="video-save-skill" body={saveSkillPrompt} />
        </div>
        <Tip label="Want more than one look later?">
          Keep my-shorts-edit for the rules every video needs, and save each new
          look as its own skill, like my-style-bold. Then you pick the look per
          video.
        </Tip>
      </>
    ),
  },
];

const later = [
  {
    title: "Tool labels",
    text: "When you name an app, its name pops up in a card.",
  },
  {
    title: "Real screenshots",
    text: "A post, a website or an app on screen while you talk about it.",
  },
  {
    title: "Text behind your head",
    text: "Words that sit behind you. Hyperframes has a remove-background command for this.",
  },
  {
    title: "Music and sound effects",
    text: "Epidemic Sound has a Claude connector, but it needs a paid subscription. On TikTok and Reels, adding a trending sound in the app is often better.",
  },
  {
    title: "Screen tutorials",
    text: "Tella records your face and screen together. It's paid, so try the free trial first.",
  },
];

const safetyRules = {
  heading: "Rules to keep you safe",
  items: [
    {
      lead: "Use only your own footage,",
      text: "or footage you have permission to use. Videos you study are for study only.",
    },
    {
      lead: "Check every name and number",
      text: "on screen before you post.",
    },
    {
      lead: "Watch your usage.",
      text: "Start a new chat for each video, and do big edits when you have the most room left in your plan.",
    },
    {
      lead: "Don't install skills or tools from strangers without checking.",
      text: "Ask Claude to read them first and explain what they do.",
    },
  ],
};

function SubHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
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

export function VideoEditGuide() {
  return (
    <section id={videoGuide.id} className="scroll-mt-24 pb-4">
      <div className="reveal mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {videoGuide.eyebrow}
        </p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-page-text md:text-4xl">
          {videoGuide.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-page-textMuted">
          {videoGuide.intro}
        </p>
      </div>

      {/* Before you start */}
      <div className={`reveal ${cardClass}`}>
        <h3 className="text-2xl font-semibold tracking-tight text-page-text">
          Before you start
        </h3>
        <p className="mb-3 mt-4 text-sm font-bold uppercase tracking-[0.1em] text-brand">
          You need
        </p>
        <CheckList
          items={[
            "A paid Claude plan.",
            "The Claude desktop app on a laptop. 8 GB of RAM works. Less than that will struggle.",
            "Short videos you film yourself, standing or sitting, talking to the camera.",
          ]}
        />
        <p className="mt-5 text-base leading-relaxed text-page-textMuted">
          This system pays off when you post often and want the same look every
          time, without editing it yourself.
        </p>
        <Callout>
          <b>Film for editing:</b> sit back from the camera so your shoulders
          and some of the room show. Then there&apos;s space for graphics, and
          your face doesn&apos;t fill the whole screen.
        </Callout>
      </div>

      {/* Steps */}
      <ol className="mt-10 space-y-7">
        {steps.map((step, idx) => (
          <li
            key={step.title}
            id={`video-step-${idx + 1}`}
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

      {/* Routine */}
      <div className="reveal mt-12 rounded-2xl border border-brand-soft/60 bg-[linear-gradient(180deg,#f3edff_0%,#ffffff_70%)] p-6 shadow-[0_14px_30px_rgba(75,0,130,0.12)] md:p-7">
        <SubHeading eyebrow="Every new video" title="Your routine" />
        <ol className="list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-page-textMuted marker:font-bold marker:text-brand">
          <li>
            <b className="text-page-text">Before filming,</b> write your 3 to 5
            &ldquo;when I say X, show Y&rdquo; lines.
          </li>
          <li>
            <b className="text-page-text">Film.</b> Sit back, 45 to 60 seconds.
            If you show steps on your phone or laptop, screen-record them while
            you&apos;re at it. Real screen recordings look far better than
            made-up graphics.
          </li>
          <li>
            <b className="text-page-text">Put the files in place.</b> Clip in
            videos/raw. Screen recordings in videos/raw/broll.
          </li>
          <li>
            <b className="text-page-text">Start a new chat in Claude Code</b>{" "}
            for each video. Old, long chats use up your limit faster.
          </li>
          <li>
            <b className="text-page-text">Paste this:</b>
          </li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="video-routine" body={routinePrompt} />
        </div>
        <ol
          start={6}
          className="mt-6 list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-page-textMuted marker:font-bold marker:text-brand"
        >
          <li>
            <b className="text-page-text">Do one fix round</b> (Step 5).
          </li>
          <li>
            <b className="text-page-text">Check every name and number on screen</b>{" "}
            before you post. Claude can misread a word.
          </li>
          <li>
            <b className="text-page-text">Always end with this:</b>
          </li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="video-learn" body={learnPrompt} />
        </div>
        <p className="mt-5 text-base font-semibold leading-relaxed text-page-text">
          That last line is why every video gets easier than the one before.
        </p>
      </div>

      {/* Troubleshooting */}
      <div id="video-troubleshooting" className="reveal mt-12 scroll-mt-24">
        <SubHeading eyebrow="Troubleshooting" title="When something goes wrong" />

        {/* Table on tablet and desktop */}
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
              {troubleshooting.map((row) => (
                <tr
                  key={row.see}
                  className="border-t border-page-border align-top even:bg-page-surface/70"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 font-semibold text-page-text"
                  >
                    {row.see}
                  </th>
                  <td className="px-4 py-3.5 text-page-textMuted">{row.why}</td>
                  <td className="px-4 py-3.5 font-medium text-brand-deep">
                    {row.fix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards on phones */}
        <ul className="space-y-3.5 md:hidden">
          {troubleshooting.map((row) => (
            <li
              key={row.see}
              className="rounded-xl border border-brand-soft/45 bg-white p-4 shadow-[0_6px_16px_rgba(75,0,130,0.08)]"
            >
              <p className="font-semibold leading-snug text-page-text">
                {row.see}
              </p>
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

      {/* Later */}
      <div className="reveal mt-12">
        <SubHeading eyebrow="Later" title="Add more, one at a time" />
        <p className="-mt-2 mb-5 text-base leading-relaxed text-page-textMuted">
          Once your basic edit works well, try one new thing a week. Save each
          one to your skill once you like it.
        </p>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {later.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-brand-soft/45 bg-white p-4 shadow-[0_6px_16px_rgba(75,0,130,0.08)] sm:last:odd:col-span-2"
            >
              <p className="font-bold text-page-text">{item.title}</p>
              <p className="mt-1 text-[14.5px] leading-relaxed text-page-textMuted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <PackNote note={safetyRules} />
      </div>
    </section>
  );
}
