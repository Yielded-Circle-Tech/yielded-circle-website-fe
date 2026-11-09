import type { PromptSegment } from "@/lib/aiPrompts";

/**
 * Prompts for the "Edit your short videos with Claude" guide. Stored as
 * segments, like the prompt packs, so the highlighted [brackets] and the
 * copied text always match.
 */

export const videoGuide = {
  id: "video",
  eyebrow: "Pack 3",
  title: "Edit Your Short Videos with Claude",
  intro:
    "Set it up once. Teach it a style you love once. Then every new short video takes a few minutes of your time. Copy each prompt as it is, and change only the parts in [brackets].",
};

export const setupPrompt: PromptSegment[] = [
  "Set me up to edit short videos with you on this computer. First, check my operating system, memory (RAM) and free disk space and tell me in simple words. Then install only these: FFmpeg, a lightweight Whisper (faster-whisper or whisper.cpp) with the small model, and the Hyperframes skills (npx skills add heygen-com/hyperframes). If any of these needs something else first, like Python or Node.js, tell me what it is and install it. If an install needs admin rights, find another way or tell me. Install one at a time and test each one before moving on. If any install shows no progress for 10 minutes, stop it and tell me. Don't run any usage tracking or reporting commands. Then set up whatever Hyperframes needs to render videos, and test it by rendering a 3-second vertical test video. Then make these folders: videos/raw for my clips, videos/raw/broll for my extra clips and screen recordings, videos/reference for videos I study, and videos/final for finished videos. At the end, give me a simple list: what's working, what failed, and why.",
];

export const studyPrompt: PromptSegment[] = [
  "Here's a reel whose editing I like: videos/reference/style-ref.mp4. It's for study only. Never use its footage in my videos.\n\nI speak ",
  { fill: "[English]" },
  ". Always transcribe my videos in that language.\n\n1. Study it. Transcribe it with Whisper, use FFmpeg to measure how often it cuts, and look at only 5 to 8 frames. Then tell me its editing style in a short, simple list: how fast it cuts, how the screen is laid out, caption size and position, words per caption, when graphics appear, and how the first 3 seconds open.\n\n2. Check my B-roll. Transcribe my video, videos/raw/my-clip.mp4, and look at what's in videos/raw/broll. Then give me a short list of up to 5 B-roll shots that would make my video better: the time, my words, and what to film or screen-record. Only suggest things I can get in a few minutes with my phone or laptop. Mark each one \"I have it\" or \"I need it\". Then stop and wait. I'll add the clips to videos/raw/broll, or tell you to make graphics instead.\n\n3. Plan that style for my video.\n\nMy colours: ",
  { fill: "[for example: purple and yellow]" },
  "\nMy font: ",
  { fill: '[for example: Montserrat, or "pick a clean, bold one"]' },
  "\nUse one accent colour per screen, on one word or one thing only.\nUse my clips in videos/raw/broll where they fit, before you make up any graphics. Mute their sound. For screen recordings, zoom in on the part that matters, so the text is easy to read on a phone.\n\n4. Optional: things I want on screen at certain moments.\n- When I say \"",
  { fill: "[a word from your video]" },
  '", show ',
  { fill: "[what you want to see]" },
  '.\n- When I say "',
  { fill: "[another word]" },
  '", show ',
  { fill: "[what you want to see]" },
  ".\nIf this part is empty, choose the moments yourself.\n\n5. Don't render anything yet. Make the storyboard as one page I can open in my browser. Save it as videos/storyboard/storyboard.html, with the preview pictures showing on the page, and tell me where it is. Put these on the page:\n- how much time each layout gets, and how much of the video shows my face\n- a still preview image for 3 key moments\n- a storyboard table: one row per moment, with the time, my words, the layout and why, what's on screen and the edit move\n- your 2 or 3 style options, side by side\n- anything you decided for me that I should check\nKeep the page simple and easy to read. Then wait for my choice.",
];

export const firstEditPrompt: PromptSegment[] = [
  "I pick option ",
  { fill: "[A, B or C]" },
  ". Now edit videos/raw/my-clip.mp4 in that style, following the storyboard we agreed. Follow these rules:\n\n1. Make it vertical, 1080x1920.\n2. Transcribe it with Whisper in ",
  { fill: "[your language, for example English]" },
  ", with a time for every word, unless you already did. Show me the transcript, flag any words you're not sure about, and wait for my corrections, unless I already gave them. Use my corrected words in the captions.\n3. Never cut short words or sounds that are part of how I speak. Whisper may not write them down, so listen to the audio before you cut any sound as a pause.\n4. Faint background noise between words counts as silence.\n5. Cut every pause longer than 0.2 seconds and every mistake or repeated line, but never cut inside a word. If you're not sure a repeat is a mistake, ask me.\n6. Start on my first word, and end the video 0.2 seconds after my last word.\n7. Do the cuts first, then any speed change, then the captions and graphics.\n8. Render with fast settings (multi-threaded, preset veryfast).\n9. Before you show me, check 3 frames of your render and fix anything that looks wrong.\n10. Save it to videos/final. At the end, write a short progress.md: what's done, what's left, and which files you made.",
];

export const fixPrompt: PromptSegment[] = [
  "Fixes for videos/final/",
  { fill: "[file name]" },
  ".mp4. All times are from the current version.\n\n1. Around ",
  { fill: "[0:12]" },
  ", ",
  { fill: "[what's wrong and what you want instead]" },
  ".\n2. Around ",
  { fill: "[0:30]" },
  ", ",
  { fill: "[what's wrong and what you want instead]" },
  ".\n\nDon't transcribe again. Make the fixes, render once with preset veryfast, and update progress.md.",
];

export const saveSkillPrompt: PromptSegment[] = [
  "Save everything we agreed as a skill called my-shorts-edit: the style, the colours and font, my language, how to use my clips in videos/raw/broll, the 10 rules, and the fixes that apply to every video (not fixes for one moment in this video). Never run usage tracking. Then show me the skill file so I can see it's saved. Last, move my clips from videos/raw/broll into videos/raw/broll/used.",
];

export const routinePrompt: PromptSegment[] = [
  "a) Edit videos/raw/",
  { fill: "[file name]" },
  ".mp4 with my my-shorts-edit skill.\n\nb) Optional: the feel. ",
  { fill: "[for example: clean, fast, easy to understand]" },
  '\n\nc) Optional: things I want on screen at certain moments.\n- When I say "',
  { fill: "[a word from your video]" },
  '", show ',
  { fill: "[what you want to see]" },
  '.\n- When I say "',
  { fill: "[another word]" },
  '", show ',
  { fill: "[what you want to see]" },
  ".\n\nIf I left b) or c) empty, follow my skill and choose the moments yourself.\n\nd) Use my clips and screen recordings in videos/raw/broll where they fit. Be creative everywhere else.\n\ne) Show me a short storyboard first, with no preview images, and wait for my OK. Then follow my skill's rules and save to videos/final.",
];

export const learnPrompt: PromptSegment[] = [
  "Save what you learned from my notes to my skill, only what applies to every video. Move my clips from videos/raw/broll into videos/raw/broll/used. Update progress.md.",
];

export const troubleshooting: { see: string; why: string; fix: string }[] = [
  {
    see: 'Claude says it\'s "waiting" and nothing moves',
    why: "Claude stops when it replies. It isn't watching anything",
    fix: 'Ask: "Is it still running or did it stall? If it stalled, stop it and tell me what\'s working"',
  },
  {
    see: "An install runs for ages",
    why: "A big download on slow internet",
    fix: "Ask Claude to stop it and skip that tool for now",
  },
  {
    see: "Downloads fail on and off",
    why: "Your internet's DNS is unreliable",
    fix: "Change your laptop DNS to 8.8.8.8 and 1.1.1.1",
  },
  {
    see: 'A tool "can\'t be found" after setup',
    why: "The app hasn't picked up the new tools yet",
    fix: "Close the Claude app, open it again, open the same folder",
  },
  {
    see: "Laptop freezes or Claude says memory is low",
    why: "Not enough free memory (RAM). Storage space is a different thing",
    fix: "Close Chrome and other apps. Keep clips under 1 minute",
  },
  {
    see: "The transcript is full of strange words",
    why: "Whisper guessed the wrong language",
    fix: "Tell Claude which language you speak",
  },
  {
    see: "Names or numbers are spelled wrong",
    why: "Small Whisper models mishear names and accents",
    fix: "Correct them when Claude shows you the transcript",
  },
  {
    see: "Claude says a word isn't in the video, but you hear it",
    why: "The word was very quiet",
    fix: "Tell Claude the time you hear it and ask it to check again",
  },
  {
    see: "A word or sound you said got cut",
    why: "Whisper didn't write it down, so it looked like a pause",
    fix: "Tell Claude to put it back and never cut that sound again",
  },
  {
    see: "Render failed",
    why: "The laptop went to sleep or the lid was closed",
    fix: "Plug in, keep the lid open, ask Claude to render again",
  },
  {
    see: "Render takes over 15 minutes",
    why: "Claude used slow, extra-safe settings",
    fix: "Ask for multi-threaded settings with preset veryfast",
  },
  {
    see: 'A message says it will "re-cache" lots of tokens',
    why: "The chat is very long",
    fix: 'Start a new chat and say "Read progress.md and carry on"',
  },
];
