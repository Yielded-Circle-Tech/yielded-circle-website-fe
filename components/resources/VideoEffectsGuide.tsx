import type { ReactNode } from "react";
import { PackNote } from "@/components/resources/PackNote";
import { PromptBlock } from "@/components/resources/PromptBlock";
import {
  Callout,
  CheckList,
  GuideHeader,
  GuideSteps,
  type Step,
  SubHeading,
  Tip,
  Troubleshooting,
  Warning,
  cardClass,
  routineCardClass,
  routineListClass,
} from "@/components/resources/guideParts";
import {
  captionsPrompt,
  cutPrompt,
  effectsGuide,
  effectsPrompt,
  effectsSkillRepo,
  fixPrompt,
  installSkillPrompt,
  learnPrompt,
  routinePrompt,
  saveSkillPrompt,
  setupPrompt,
  troubleshooting,
} from "@/lib/videoEffectsGuide";

const muted = "text-base leading-relaxed text-page-textMuted";
const strong = "text-page-text";

function Skip({ children }: { children: ReactNode }) {
  return <p className={`mb-4 italic ${muted}`}>{children}</p>;
}

const steps: Step[] = [
  {
    title: "Setup (once)",
    content: (
      <>
        <Skip>
          Already have FFmpeg, Whisper and Hyperframes set up in your video
          folder? Skip to Step 2.
        </Skip>
        <ol className={`list-decimal space-y-2.5 pl-5 ${muted}`}>
          <li>
            Open the Claude desktop app and switch to{" "}
            <b className={strong}>Claude Code</b>. Set it to{" "}
            <b className={strong}>local</b>.
          </li>
          <li>
            Make a new folder on your laptop called{" "}
            <b className={strong}>claude-video-editor</b> and attach it. Always
            open this same folder. Your tools, files and saved style live inside
            it.
          </li>
          <li>Paste this:</li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="effects-setup" body={setupPrompt} />
        </div>
      </>
    ),
  },
  {
    title: "Install the effects skill (once)",
    content: (
      <>
        <PromptBlock id="effects-install-skill" body={installSkillPrompt} />
        <Warning>
          When it&apos;s done,{" "}
          <b className="font-semibold">close the Claude app and open it again</b>
          , then open your claude-video-editor folder. That way Claude can see
          the new skill.
        </Warning>
        <Tip label="Keep the list Claude gives you.">
          You&apos;ll pick your effects from it.
        </Tip>
      </>
    ),
  },
  {
    title: "Add your video",
    content: (
      <>
        <p className={muted}>
          Open your folder, go to <b className={strong}>videos → raw</b> and drop
          your video in. Rename it to something short with no spaces, like{" "}
          <b className={strong}>my-clip.mp4</b>.
        </p>
        <Tip label="Using a .mov file?">
          Write .mov instead of .mp4 in the prompts.
        </Tip>
      </>
    ),
  },
  {
    title: "Cut the raw video",
    content: (
      <>
        <Skip>
          Already cut your video in CapCut or another app? Make sure it&apos;s
          vertical (9:16) and already trimmed, then skip to Step 5.
        </Skip>
        <PromptBlock id="effects-cut" body={cutPrompt} />
        <Warning>
          Claude will stop once to show you the transcript. Correct any wrong
          words, then type &ldquo;Done, carry on.&rdquo;
        </Warning>
      </>
    ),
  },
  {
    title: "Add effects",
    content: (
      <>
        <p className={muted}>
          Pick 2 or 3 effects from the list in Step 2. Or let Claude choose.
        </p>
        <div className="mt-5">
          <PromptBlock id="effects-add" body={effectsPrompt} />
        </div>
        <Tip label="File name:">
          write it without .mp4 in both places. For example, for my-clip.mp4,
          write <b className={strong}>my-clip</b>.
        </Tip>
        <Warning>
          Claude may stop a few times: to check words (if you skipped Step 4),
          with its effect picks (if you wrote &ldquo;choose for me&rdquo;), and
          with the draft. Watch the draft. Too busy? Say &ldquo;Keep only 2
          effects.&rdquo; Happy? Type &ldquo;Looks good, render the full
          version.&rdquo;
        </Warning>
        <Tip label="While it renders:">
          keep the laptop plugged in and the lid open. The screen turning off is
          fine.
        </Tip>
      </>
    ),
  },
  {
    title: "Add captions",
    content: <PromptBlock id="effects-captions" body={captionsPrompt} />,
  },
  {
    title: "Fix round",
    content: (
      <>
        <p className={muted}>
          Watch <b className={strong}>videos/final/[file name]-final.mp4</b> in
          your normal video player. Write down every problem with its time. Then
          send <b className={strong}>all</b> your notes in{" "}
          <b className={strong}>one</b> message:
        </p>
        <div className="mt-5">
          <PromptBlock id="effects-fix" body={fixPrompt} />
        </div>
        <Tip label="Be specific.">
          &ldquo;At 0:12 the caption covers the effect. Move it lower&rdquo;
          works. &ldquo;Make it better&rdquo; doesn&apos;t.
        </Tip>
        <Callout>
          <b>Check every word and number on screen</b> before you post.
        </Callout>
      </>
    ),
  },
  {
    title: "Save your style as a skill",
    content: (
      <>
        <p className={muted}>
          Once you love the result, send this. A skill is a file of instructions
          Claude reads before every edit, so it remembers how you like your
          videos.
        </p>
        <div className="mt-5">
          <PromptBlock id="effects-save-skill" body={saveSkillPrompt} />
        </div>
      </>
    ),
  },
];

const safetyRules = {
  heading: "Rules to keep you safe",
  items: [
    {
      lead: "Use only your own footage,",
      text: "or footage you have permission to use.",
    },
    {
      lead: "Check every name and number",
      text: "on screen before you post.",
    },
    {
      lead: "Start a new chat",
      text: "for each video.",
    },
    {
      lead: "Don't install skills from strangers without checking.",
      text: "Ask Claude to read them first and explain what they do.",
    },
  ],
};

export function VideoEffectsGuide() {
  return (
    <section id={effectsGuide.id} className="scroll-mt-24 pb-4 pt-12">
      <GuideHeader
        eyebrow={effectsGuide.eyebrow}
        title={effectsGuide.title}
        intro={effectsGuide.intro}
      />

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
            "The Claude desktop app on a laptop with at least 8 GB of RAM.",
            "A short video you filmed yourself, vertical, talking to the camera. Under 1 minute is best.",
          ]}
        />
        <Callout>
          <b>Use a plain video.</b> Start with your own clip, not one that
          already has graphics, effects or captions on it. Effects on top of
          other effects look crowded.
        </Callout>
        <Tip label="Good to know:">
          Claude will stop a few times to check with you. That&apos;s normal.
          Each stop saves you from a long render you don&apos;t want.
        </Tip>
      </div>

      <GuideSteps steps={steps} idPrefix="effects" />

      {/* Routine */}
      <div className={routineCardClass}>
        <SubHeading eyebrow="Every new video" title="Your routine" />
        <ol className={routineListClass}>
          <li>
            <b className={strong}>Film.</b> Sit back, under 1 minute, talking to
            the camera.
          </li>
          <li>
            <b className={strong}>Put your video in videos/raw.</b> Short name,
            no spaces.
          </li>
          <li>
            <b className={strong}>Start a new chat in Claude Code</b>, in your
            claude-video-editor folder. Your skill is saved in that folder, so
            Claude still remembers your style. Long chats use up your limit
            faster.
          </li>
          <li>
            <b className={strong}>Paste this:</b>
          </li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="effects-routine" body={routinePrompt} />
        </div>
        <ol start={5} className={`mt-6 ${routineListClass}`}>
          <li>
            <b className={strong}>Do one fix round</b> (Step 7).
          </li>
          <li>
            <b className={strong}>Check every name and number on screen</b>{" "}
            before you post.
          </li>
          <li>
            <b className={strong}>Always end with this:</b>
          </li>
        </ol>
        <div className="mt-5">
          <PromptBlock id="effects-learn" body={learnPrompt} />
        </div>
        <p className="mt-5 text-base font-semibold leading-relaxed text-page-text">
          That last line is why every video gets easier than the one before.
        </p>
        <Tip label="Good to know:">
          add trending sounds in TikTok or Reels after you upload. Claude
          can&apos;t reach those sounds, and the apps handle them better anyway.
        </Tip>
      </div>

      <Troubleshooting id="effects-troubleshooting" rows={troubleshooting} />

      <div className="mt-7">
        <PackNote note={safetyRules} />
      </div>

      <p className="mt-5 text-sm leading-relaxed text-page-textMuted">
        <b className={strong}>Credit:</b> the video effects skill was made by
        Vibha Ramprakash and is free to use (MIT license):{" "}
        <a
          href={effectsSkillRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand underline-offset-2 transition hover:text-brand-deep hover:underline"
        >
          github.com/Vibha-Ramprakash/claude-video-effects
        </a>
      </p>
    </section>
  );
}
