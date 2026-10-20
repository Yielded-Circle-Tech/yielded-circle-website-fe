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
  tip?: string;
};

export type PromptPackNote = {
  heading: string;
  items: { lead?: string; text: string }[];
  footnote?: string;
};

export type PromptPack = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  prompts: AiPrompt[];
  note: PromptPackNote;
};

export const promptPacks: PromptPack[] = [
  {
    id: "trends",
    eyebrow: "Pack 1",
    title: "Turn trends into customers",
    prompts: [
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
    ],
    note: {
      heading: "How to get real results",
      items: [
        {
          lead: "Give ChatGPT context.",
          text: "What you sell, who buys it, where you are and what makes you different.",
        },
        {
          lead: "Pick one idea.",
          text: "Don't try them all. Choose the strongest and post it this week.",
        },
        {
          lead: "Make it easy to buy.",
          text: "Show what you sell, the price and how to order.",
        },
        {
          lead: "Watch the right numbers.",
          text: "Enquiries, WhatsApp chats and sales matter more than views and likes.",
        },
      ],
      footnote:
        "AI helps you think and create faster, but it can't guarantee sales. Your offer, your customers and your follow-up still do the heavy lifting.",
    },
  },
  {
    id: "voice",
    eyebrow: "Pack 2",
    title: "Stop Letting ChatGPT Talk for You",
    intro:
      "Teach ChatGPT to sound like you, not like a robot. Run the first prompt once, save the other two, then just type what you want.",
    prompts: [
      {
        id: "prompt-4",
        number: 1,
        title: "Make my voice guide",
        what: "Use it once, to create your guide.",
        body: [
          "I run a ",
          { fill: "[type of business]" },
          " in ",
          { fill: "[city]" },
          ". Below are 10 to 20 posts I wrote myself, without AI. They are from ",
          { fill: "[Instagram / LinkedIn / Facebook / TikTok]" },
          `. I've labelled each one by platform.\n\nStudy how I write my posts. Then give me a short "My Voice Guide":\n- how long my sentences and posts are\n- how I start a post and how I end it\n- words and phrases I use a lot\n- how I talk about my products and prices\n- the emojis and hashtags I use, and how many\n- any Pidgin, Yoruba, Igbo or Hausa words I use\n- things I never say\n\nIf I write differently on different platforms, add one short line for each platform.\n\nDon't guess. If something isn't in my posts, ask me.\nKeep the guide under 200 words so I can paste it into any chat.\n\n`,
          { fill: "[paste your posts or upload screenshots]" },
        ],
        tip: "No posts? Record yourself talking about your business for 2 minutes and paste the transcript.",
      },
      {
        id: "prompt-5",
        number: 2,
        title: "How to write for me",
        what: "It decides when to ask you questions.",
        body: [
          "Write in my voice using My Voice Guide below.\n\nIf my request has enough details, just write it.\nIf it's vague, or the post needs a real story, ask me up to 3 short questions first. Ask one question at a time. If my answer is vague, ask me for a real example.\n\nNever make up prices, dates, names or customer stories. If you need one, ask me.\n\nMY VOICE GUIDE\n",
          { fill: "[paste your voice guide]" },
        ],
      },
      {
        id: "prompt-6",
        number: 3,
        title: "The ban list",
        what: "Words and patterns that make posts sound like AI.",
        body: [
          'Never use these words: valued customer, esteemed, elevate, indulge, exquisite, look no further, unlock, game-changer, thrilled, delve, seamless, "in today\'s fast-paced world".\nNo long dashes. Maximum 2 emojis.\nNever write "It\'s not just X, it\'s Y".\nBefore you give me the final post, list every price, date and name in it so I can check them.',
        ],
      },
    ],
    note: {
      heading: "How to use them",
      items: [
        { lead: "Once:", text: "run Prompt 1 to get your voice guide." },
        {
          lead: "Also once:",
          text: "paste Prompt 2 (with your guide inside) and Prompt 3 into custom instructions.",
        },
        {
          lead: "Every day:",
          text: 'just type what you want. "Caption for my red velvet cake. ₦25,000."',
        },
      ],
      footnote:
        "If you don't want to touch settings, you can paste Prompts 2 and 3 at the top of a new chat instead. It does the same job, but only for that chat.",
    },
  },
];

export const promptToPlainText = (body: PromptSegment[]): string =>
  body.map((part) => (typeof part === "string" ? part : part.fill)).join("");
