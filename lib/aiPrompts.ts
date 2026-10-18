/**
 * Prompt bodies are stored as segments so the rendered highlights and the
 * copied plain text stay in sync — the copy button joins the same segments
 * the page renders.
 */
export type PromptSegment = string | { fill: string };

export type AiPrompt = {
  id: string;
  number: number;
  title: string;
  what: string;
  body: PromptSegment[];
  tip: string;
};

export const aiPrompts: AiPrompt[] = [
  {
    id: "prompt-1",
    number: 1,
    title: "Turn a trending story into a marketing campaign",
    what: "Everyone is talking about something online. Use this prompt to find a smart way to connect that conversation to what you sell, without copying anyone.",
    body: [
      "I run a ",
      { fill: "[type of business]" },
      " in Nigeria and sell ",
      { fill: "[product/service]" },
      " to ",
      { fill: "[target customers]" },
      ".\n\nUsing ",
      { fill: "[the trending story, e.g. the Lagos Life game trend]" },
      " as inspiration, suggest 3 creative, low-budget marketing campaigns for my business.\n\nFor each campaign, give me:\n1. An attention-grabbing hook.\n2. A short video idea.\n3. A clear offer or reason to buy.\n4. A WhatsApp call to action.\n\nMake each idea relevant to my real customers. Don't invent facts about my business.",
    ],
    tip: "Be specific about what you sell and who buys from you. The more details you give, the better the ideas.",
  },
  {
    id: "prompt-2",
    number: 2,
    title: "Turn your best idea into ready-to-post content",
    what: "Use this in the same ChatGPT chat, right after Prompt 1. It turns your favourite idea into content you can post today.",
    body: [
      "Take campaign idea ",
      { fill: "[number]" },
      " and turn it into:\n- a 30-second TikTok or Instagram Reel script,\n- a caption written for Nigerian customers,\n- a WhatsApp Status version,\n- and a clear call to action that gets people to enquire or order.\n\nUse natural, simple English. Avoid generic marketing language, exaggerated claims and fake urgency.",
    ],
    tip: "Read the script out loud before you record. Change anything that doesn't sound like you.",
  },
  {
    id: "prompt-3",
    number: 3,
    title: "Use any new trend, any time",
    what: "Not every trend fits every business. Use this whenever something new starts trending, to check if there's a natural link to your business.",
    body: [
      "Here is a trending topic: ",
      { fill: "[describe the trend and what people are saying]" },
      ".\n\nMy business sells ",
      { fill: "[product/service]" },
      " to ",
      { fill: "[target customers]" },
      ".\n\nGive me 5 natural ways to connect this trend to my business without forcing it or seeming insensitive.\n\nFocus on ideas that can attract my target customers and lead to real sales.",
    ],
    tip: "Pick trends your customers actually care about. If the link feels forced, skip it and wait for the next one.",
  },
];

export const promptToPlainText = (body: PromptSegment[]): string =>
  body.map((part) => (typeof part === "string" ? part : part.fill)).join("");
