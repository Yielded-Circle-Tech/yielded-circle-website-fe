import type { PromptSegment } from "@/lib/aiPrompts";

/**
 * Prompts for the "Add effects to your videos with Claude" guide. Stored as
 * segments, like the prompt packs, so the highlighted [brackets] and the
 * copied text always match.
 */

export const effectsGuide = {
  id: "video-effects",
  eyebrow: "Pack 4",
  title: "Add Effects to Your Videos with Claude",
  intro:
    "Cut your video, add 2 or 3 eye-catching effects, then add captions. Do it once, save your style, and every video after that gets easier. Copy each prompt as it is, and change only the parts in [brackets].",
};

export const effectsSkillRepo =
  "https://github.com/Vibha-Ramprakash/claude-video-effects";

export const setupPrompt: PromptSegment[] = [
  "Set me up to edit short videos with you on this computer. First, check my operating system, memory (RAM) and free disk space and tell me in simple words. Then install only these: FFmpeg, a lightweight Whisper (faster-whisper or whisper.cpp) with the small model, and the Hyperframes skills (npx skills add heygen-com/hyperframes). If any of these needs something else first, like Python or Node.js, tell me what it is and install it. If an install needs admin rights, find another way or tell me. Install one at a time and test each one before moving on. If any install shows no progress for 10 minutes, stop it and tell me. Don't run any usage tracking or reporting commands. Then set up whatever Hyperframes needs to render videos, and test it by rendering a 3-second vertical test video. Then make these folders: videos/raw for my clips and videos/final for finished videos. At the end, give me a simple list: what's working, what failed, and why.",
];

export const installSkillPrompt: PromptSegment[] = [
  `Install the video effects skill from ${effectsSkillRepo} into my personal skills folder (~/.claude/skills/effects), so it works in any folder. Install anything it needs, one at a time. Don't run any usage tracking or reporting commands. Then show me every effect it has, with one short line on what each one does.`,
];

export const cutPrompt: PromptSegment[] = [
  "Cut my video, videos/raw/",
  { fill: "[file name]" },
  ".mp4. No effects and no captions yet.\n1. Make it vertical, 1080x1920.\n2. Transcribe it with Whisper in ",
  { fill: "[English]" },
  ", with a time for every word. Show me the transcript, flag any words you're not sure about, and wait for my corrections.\n3. Never cut short words or sounds that are part of how I speak. Listen to the audio before you cut any sound as a pause.\n4. Faint background noise between words counts as silence.\n5. Cut every pause longer than 0.2 seconds and every mistake or repeated line, but never cut inside a word. If you're not sure a repeat is a mistake, ask me.\n6. Start on my first word, and end 0.2 seconds after my last word.\n7. Optional: speed it up to ",
  { fill: "[1.1x]" },
  " and keep my voice natural.\n8. Render with preset veryfast and save it as videos/final/",
  { fill: "[file name]" },
  "-cut.mp4.\n9. Save the word timings for this cut version in a file, so you don't have to transcribe again.\n10. Write a short progress.md: what's done and which files you made.",
];

export const effectsPrompt: PromptSegment[] = [
  "Use the effects skill on my video. If videos/final/",
  { fill: "[file name]" },
  "-cut.mp4 exists, use that. If not, use videos/raw/",
  { fill: "[file name]" },
  ".mp4.\n\nIf you don't have saved word timings for this video, transcribe it first with Whisper in ",
  { fill: "[English]" },
  ", with a time for every word. Show me any words you're not sure about, wait for my corrections, and save the timings in a file.\n\nEffects: ",
  {
    fill: '[write 2 or 3 effects with their times, for example "orbit from 0:03 to 0:06", or write "choose for me"]',
  },
  "\n\nIf I wrote \"choose for me\", read my word timings and suggest the 3 effects from the skill's list that fit my words best, with the time and my words for each. Wait for my OK.\n\nUse only effect names from the skill's list. If a name isn't on the list, tell me. Don't build your own.\nDon't add captions or sound effects. Keep the video the same length, so my word timings still match.\n\nFirst, make a fast draft: small size (540x960), only the parts with effects, preset veryfast. Show me and wait for my OK. Then render the full 1080x1920 version once, with preset veryfast, and save it as videos/final/",
  { fill: "[file name]" },
  "-effects.mp4. Update progress.md.",
];

export const captionsPrompt: PromptSegment[] = [
  "Add captions to videos/final/",
  { fill: "[file name]" },
  "-effects.mp4.\n\nIf you saved word timings for this video, use them and don't transcribe again. If not, transcribe it with Whisper in ",
  { fill: "[English]" },
  ", show me any words you're not sure about, and wait for my corrections.\n\nCaptions: ",
  { fill: "[for example: white, bold, up to 3 words at a time]" },
  ".\nKeep them clear of my face and the effects. Render once with preset veryfast and save it as videos/final/",
  { fill: "[file name]" },
  "-final.mp4. Update progress.md.",
];

export const fixPrompt: PromptSegment[] = [
  "Fixes for videos/final/",
  { fill: "[file name]" },
  "-final.mp4. All times are from the current version.\n\n1. Around ",
  { fill: "[0:12]" },
  ", ",
  { fill: "[what's wrong and what you want instead]" },
  ".\n2. Around ",
  { fill: "[0:30]" },
  ", ",
  { fill: "[what's wrong and what you want instead]" },
  ".\n\nDon't transcribe again. Redo only the steps these fixes need (cuts, effects or captions), render once with preset veryfast, and update progress.md.",
];

export const saveSkillPrompt: PromptSegment[] = [
  "Save everything we agreed as a skill called my-effects-edit, in this folder: my language, my cut rules, the effects I liked and where they worked, my caption style, the order (cut, then effects, then captions), the fast draft before the full render, and the fixes that apply to every video (not fixes for one moment in this video). Never run usage tracking. Then show me the skill file so I can see it's saved.",
];

export const routinePrompt: PromptSegment[] = [
  "Edit videos/raw/",
  { fill: "[file name]" },
  ".mp4 with my my-effects-edit skill.\n\nEffects: ",
  {
    fill: '[write 2 or 3 effects with their times, or write "choose for me"]',
  },
  "\n\nFollow my skill: cut first, then effects, then captions. In one message, show me any words you're not sure about and your effect picks, and wait for my OK. Then make a fast draft of the effect parts and wait for my OK. Then render the final version and save it to videos/final.",
];

export const learnPrompt: PromptSegment[] = [
  "Save what you learned from my notes to my skill, only what applies to every video. Update progress.md.",
];

export const troubleshooting: { see: string; why: string; fix: string }[] = [
  {
    see: "Claude can't find the effects skill",
    why: "The app hasn't picked it up yet",
    fix: "Close the Claude app, open it again, open the same folder",
  },
  {
    see: "Claude doesn't follow your style in a new chat",
    why: "You opened a different folder, or the skill wasn't loaded",
    fix: 'Open your claude-video-editor folder and say "Read my my-effects-edit skill first"',
  },
  {
    see: '"That effect isn\'t on the list"',
    why: "The name is wrong or not in your version",
    fix: 'Ask: "Show me the effects list again"',
  },
  {
    see: "The video looks too busy",
    why: "Too many effects",
    fix: 'Ask: "Keep only 2 effects"',
  },
  {
    see: "Captions are out of sync",
    why: "The video length changed during effects",
    fix: 'Ask: "Re-time the captions to this video"',
  },
  {
    see: "The render is very slow",
    why: "Too many effects, a long clip, or slow settings",
    fix: "Use 2 effects, keep clips under 1 minute, ask for preset veryfast",
  },
  {
    see: "The render failed",
    why: "The laptop went to sleep",
    fix: "Plug in, keep the lid open, ask Claude to render again",
  },
  {
    see: "An install runs for ages",
    why: "A big download on slow internet",
    fix: "Ask Claude to stop it and tell you what's working",
  },
  {
    see: "The chat is very long",
    why: "Old chats use up your limit faster",
    fix: 'Start a new chat and say "Read progress.md and carry on"',
  },
];
