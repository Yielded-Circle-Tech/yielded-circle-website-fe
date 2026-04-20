export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  label: string;
  heading: string;
  body: string[];
};

export type CaseStudyListSection = CaseStudySection & {
  items?: string[];
  listLabel?: string;
};

export type CaseStudyTechRow = {
  layer: string;
  technology: string;
};

export type CaseStudy = {
  slug: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  heroStats: CaseStudyMetric[];
  overview: CaseStudySection;
  problem: CaseStudyListSection;
  solution: CaseStudyListSection;
  process: CaseStudyListSection;
  results: {
    label: string;
    heading: string;
    stats: CaseStudyMetric[];
  };
  techStack: {
    label: string;
    heading: string;
    rows: CaseStudyTechRow[];
  };
  testimonial?: {
    label: string;
    quote: string;
    attribution: string;
  };
  lessons: CaseStudySection;
  cta: {
    heading: string;
    subheading: string;
    buttonText: string;
    linkText: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "haba-na-haba",
    badge: "Award-winning · AWS-funded",
    category: "Food security · Agritech · USSD",
    title: "Haba Na Haba — Connecting food banks with communities in need",
    subtitle:
      "How a team of 3 engineers won an international hackathon and secured AWS funding by building a USSD application that works on any phone, anywhere, with no internet required.",
    heroStats: [
      { value: "1,000+", label: "Users reached at launch" },
      { value: "1st Place", label: "Zero Hunger Hackathon" },
      { value: "25%", label: "System performance improvement" },
      { value: "30%", label: "Reduction in downtime" },
      { value: "AWS", label: "Budget secured for scale" },
    ],
    overview: {
      label: "Project overview",
      heading: "The challenge in one sentence",
      body: [
        "Food banks in underserved communities across Uganda and Nigeria had surplus food sitting in storage while families in the same communities went without. The problem was not supply. It was connection. There was no reliable, scalable way to match what was available with who needed it — especially in communities where smartphones are rare and internet access is inconsistent.",
      ],
    },
    problem: {
      label: "The problem",
      heading: "A distribution crisis hiding in plain sight",
      body: [
        "When Yielded Circle Tech joined the Tech To The Rescue Zero Hunger Hackathon, the brief was clear: solve food insecurity with technology. But the temptation in most hackathons is to build for the demo — a polished web app that looks great on a projector and reaches nobody in the real world.",
        "We asked a different question: who actually needs this, and what phone do they have?",
        "The answer changed everything.",
        "The communities facing the most acute food insecurity were not using smartphones. They were not browsing the web. They were using basic feature phones — the kind that can receive SMS and dial USSD codes. Any solution that required a data connection, an app download, or a smartphone would miss the people it was supposed to help entirely.",
        "The existing process for food distribution was manual — phone calls, WhatsApp messages between coordinators, paper lists, and word of mouth. It was slow, error-prone, and impossible to scale. Communities missed distributions. Surplus food expired. The system was failing the people it was meant to serve.",
      ],
      listLabel: "Key problems identified",
      items: [
        "No digital infrastructure connecting food banks to beneficiary communities",
        "Existing smartphone and internet-first solutions excluded the most vulnerable users",
        "Manual coordination created delays, errors, and missed distributions",
        "No visibility into stock levels, demand, or distribution history",
        "No way to scale the solution beyond individual coordinator relationships",
      ],
    },
    solution: {
      label: "Our solution",
      heading: "Built for the phone everyone already has",
      body: [
        "We designed and built a USSD-based application that works on any mobile phone — no smartphone, no internet, no app download required. USSD (Unstructured Supplementary Service Data) is the same technology behind mobile banking codes like *737# — it works on every phone, on every network, instantly.",
        "The application gave food banks the ability to register available food, specify quantities, and broadcast availability to registered communities. Community coordinators could query availability, reserve allocations, and confirm distributions — all through a simple menu-driven USSD interface that required nothing more than knowing how to dial a number.",
        "On the backend, we built a management layer that gave programme administrators real-time visibility into stock levels, reservations, distribution status, and community demand — turning what had been an invisible, manual process into a tracked, auditable system.",
        "We implemented observability tools to monitor the production environment, catching and resolving issues before they affected users — and built the system to handle concurrent sessions across multiple communities simultaneously.",
      ],
      listLabel: "What we built",
      items: [
        "USSD application accessible from any mobile phone on any network",
        "Food bank registration and stock management system",
        "Community coordinator interface for reserving and confirming allocations",
        "Admin dashboard with real-time distribution visibility",
        "Production monitoring and observability infrastructure",
        "Scalable backend architecture approved for AWS-funded expansion",
      ],
    },
    process: {
      label: "How we built it",
      heading: "Hackathon speed. Production quality.",
      body: [
        "The constraint of a hackathon is time. The constraint of this problem was trust — we were building for real communities, not a demo audience. We had to move fast without cutting corners on the things that mattered.",
        "Discovery and scoping: We spent the first phase understanding the real user — not the hackathon judges, but the community coordinators and food bank operators who would actually use the system. We mapped the existing manual process step by step and identified every point of failure.",
        "Architecture decisions: The decision to build on USSD rather than a web or mobile app was deliberate and central to the entire design. Every other architectural choice flowed from that — the session management system, the menu structure, the backend data model, and the monitoring approach.",
        "Build and test: We built in parallel — USSD interface and backend simultaneously — with the team of 3 engineers taking clear ownership of separate layers. We tested on real devices, on real networks, before the submission deadline.",
        "Result: The solution won the Tech To The Rescue Zero Hunger Hackathon and was presented to AWS for further development funding — which was approved.",
      ],
    },
    results: {
      label: "The outcome",
      heading: "What the project delivered",
      stats: [
        {
          value: "1,000+",
          label: "Community users reached in the first deployment phase",
        },
        {
          value: "1st",
          label: "Place at the Tech To The Rescue Zero Hunger Hackathon",
        },
        {
          value: "25%",
          label:
            "Improvement in system performance through observability implementation",
        },
        {
          value: "30%",
          label: "Reduction in system downtime post-deployment",
        },
        {
          value: "AWS",
          label: "Budget approved to further develop and scale the solution",
        },
        {
          value: "95%",
          label: "Positive feedback rate from stakeholders and end users",
        },
      ],
    },
    techStack: {
      label: "Technology used",
      heading: "Built to work anywhere",
      rows: [
        { layer: "Communication layer", technology: "USSD protocol" },
        { layer: "Monolithic", technology: "Ruby on rails" },
        { layer: "Database", technology: "PostgreSQL" },
        { layer: "Infrastructure", technology: "AWS" },
        {
          layer: "Monitoring",
          technology: "Observability and performance tooling",
        },
        {
          layer: "Methodology",
          technology: "Agile, pair programming, code reviews",
        },
      ],
    },
    lessons: {
      label: "What we learned",
      heading: "The best technology is the one people can actually use",
      body: [
        "The biggest lesson from Haba Na Haba was not technical. It was a reminder that the definition of a good product is not one that looks impressive — it is one that reaches and serves the person it was built for.",
        "Choosing USSD over a web app was a counterintuitive decision that made everything harder from a development standpoint and made everything better from an impact standpoint. We made the right call because we asked the right question first.",
        "This principle — understand the real user before choosing the technology — is now central to how Yielded Circle Tech approaches every project.",
      ],
    },
    cta: {
      heading: "Building something with a real-world constraint?",
      subheading:
        "Whether your users are in low-bandwidth markets or your product has an unusual technical challenge — we have built in those conditions before. Let us talk.",
      buttonText: "Book a free discovery call",
      linkText: "View all client stories",
    },
  },
  {
    slug: "leddar",
    badge: "B2B marketplace · Ongoing",
    category: "Fashion · Manufacturing · Marketplace",
    title: "Leddar — A managed B2B marketplace for Nigeria's leather industry",
    subtitle:
      "How Yielded Circle Tech designed and built a three-portal B2B platform connecting fashion brands with verified leather artisans — with escrow payments, KYC compliance, and WhatsApp-first notifications.",
    heroStats: [
      { value: "3", label: "Portals built (Brand, Artisan, Admin)" },
      { value: "2-stage", label: "Escrow payout system" },
      { value: "100%", label: "Admin-controlled matching model" },
      { value: "KYC", label: "Verified artisan onboarding" },
      { value: "WhatsApp", label: "Primary notification channel" },
    ],
    overview: {
      label: "Project overview",
      heading: "The challenge in one sentence",
      body: [
        "Nigeria's leather manufacturing industry had no trusted digital infrastructure connecting fashion brands who needed quality leather goods with the skilled artisans who could produce them — leaving brands relying on informal networks and artisans struggling for consistent, fairly paid work.",
      ],
    },
    problem: {
      label: "The problem",
      heading: "An industry running entirely on trust and word of mouth",
      body: [
        "Alfred Jarikre came to Yielded Circle Tech with a clear vision and a complex problem. Nigeria has a significant population of skilled leather artisans — craftspeople with the ability to produce high-quality goods for the fashion industry. It also has fashion brands actively looking for reliable production partners. But the two sides of this market had no trusted way to find each other, verify each other, or transact with each other safely.",
        "The risks on both sides were real. Brands had no way to verify an artisan's skills, legitimacy, or track record before placing an order. Artisans had no protection against brands who might place orders and then fail to pay. And without a central system managing orders, pricing, and communication, every transaction was a new exercise in building trust from scratch.",
        "The instinct might have been to build a marketplace where brands browse artisan profiles and contact them directly — but that model would have replicated the same trust problem digitally. Any artisan could list themselves. Any brand could reach out. And disputes would have no neutral ground.",
        "The client's brief called for something more controlled: a managed marketplace where an administrator mediates every match, verifies every artisan, and holds every payment in escrow until work is confirmed complete.",
      ],
      listLabel: "Key problems identified",
      items: [
        "No trusted digital channel connecting fashion brands with leather artisans in Nigeria",
        "No artisan verification or credential system in the informal market",
        "No payment protection for either party in cross-party transactions",
        "Direct brand-artisan contact created risk of disputes, ghosting, and undercutting",
        "No visibility or control for a platform operator to manage quality and compliance",
      ],
    },
    solution: {
      label: "Our solution",
      heading: "Three portals. One managed ecosystem.",
      body: [
        "We designed and built Leddar as a managed marketplace — meaning no brand contacts an artisan directly and no artisan receives payment directly from a brand. Every interaction flows through an admin layer that controls matching, pricing, and payouts. This was the core architectural decision that shaped everything else.",
        "Brand Portal: Fashion brands register, submit orders, browse curated artisan matches proposed by the admin, and make payments into escrow. They have visibility into order status and communicate with the platform — not directly with artisans.",
        "Artisan Dashboard: Leather artisans register and go through a KYC verification process via VerifyMe.ng before becoming active on the platform. Once verified, they receive order assignments, track production milestones, and receive staged escrow payouts as work is confirmed complete.",
        "Admin Panel: The platform operator has complete visibility and control. They manage artisan verification, match brands with artisans, set commission rates, oversee escrow, manage disputes, and control all platform operations from a single dashboard.",
        "Payment infrastructure: We integrated Paystack for all payment processing — including the Transfers API for managing escrow payouts to artisans in two stages: a milestone payment on order confirmation and a final payment on delivery and brand approval.",
        "Notifications: Rather than building a separate in-app notification system, we integrated the Meta WhatsApp Cloud API as the primary communication channel. Both brands and artisans receive order updates, payment notifications, and status changes via WhatsApp — the channel they already use and trust.",
      ],
      listLabel: "What we built",
      items: [
        "Brand Portal — order submission, artisan matching, escrow payment",
        "Artisan Dashboard — KYC onboarding, order management, milestone tracking, escrow payouts",
        "Admin Panel — full platform management, matching, commission, dispute resolution",
        "Paystack integration — payments, transfers, two-stage escrow",
        "VerifyMe.ng KYC integration — artisan identity and credential verification",
        "Meta WhatsApp Cloud API — primary notification channel for all parties",
        "Role-based access control — separate permissions for each portal",
        "Order and escrow state machine — tracking every stage from submission to payout",
      ],
    },
    process: {
      label: "How we built it",
      heading: "Scoped, negotiated, and delivered on a milestone plan",
      body: [
        "The Leddar engagement involved not just technical delivery but full project scoping, contract negotiation, and milestone planning — the complete agency relationship from brief to build.",
        "Discovery and scoping: We ran a full product scoping session with the client to define the MVP feature set, the user flows for each portal, the order state machine, and the escrow logic. Every major decision — managed vs direct marketplace, RBAC structure, WhatsApp as notification layer — was made in this phase.",
        "Contract and commercial structure: We negotiated and executed a Software Development Agreement covering the project scope, milestone-based payment structure, IP ownership, and support terms. The agreement included a fixed upfront payment before work commenced and subsequent payments tied to milestone delivery.",
        "Client-facing vs internal plan: We maintained a 5-month client-facing milestone plan for project tracking and a tighter internal delivery plan to stay ahead of schedule — ensuring we had buffer for QA, revisions, and client feedback cycles.",
        "Build: We built on a modern, scalable stack: React and Next.js for the frontend portals, Node.js and Express for the backend API layer, PostgreSQL with Prisma for the database, and Cloudplexo-managed AWS infrastructure alongside Vercel for deployment.",
      ],
    },
    results: {
      label: "The outcome",
      heading: "What the project delivered",
      stats: [
        {
          value: "3",
          label: "Fully functional portals — Brand, Artisan, Admin",
        },
        {
          value: "2-stage",
          label: "Escrow payout system protecting brands and artisans",
        },
        {
          value: "100%",
          label:
            "Admin-controlled matching — zero direct brand-artisan contact",
        },
        {
          value: "KYC",
          label: "Every artisan verified via VerifyMe.ng before activation",
        },
        {
          value: "WhatsApp",
          label: "Primary notification channel — zero additional app required",
        },
        {
          value: "5-month",
          label: "Client-facing delivery plan with milestone-based payments",
        },
      ],
    },
    techStack: {
      label: "Technology used",
      heading: "Built on a managed, scalable platform architecture",
      rows: [
        { layer: "Frontend", technology: "Next.js" },
        { layer: "Backend", technology: "Node.js, Express" },
        { layer: "Database", technology: "PostgreSQL, Prisma" },
        {
          layer: "Payments",
          technology: "Paystack — Payments & Transfers API",
        },
        { layer: "KYC", technology: "VerifyMe.ng" },
        { layer: "Notifications", technology: "Meta WhatsApp Cloud API" },
        { layer: "Deployment", technology: "Vercel, AWS via Cloudplexo" },
      ],
    },
    lessons: {
      label: "What we learned",
      heading: "The right marketplace model is not always the obvious one",
      body: [
        "The natural instinct when building a marketplace is to make it as open as possible — let buyers browse, let sellers list, let the market find equilibrium. For Leddar, that instinct was wrong.",
        "The managed model — where admin mediates every match — was harder to build, added more complexity to the admin panel, and required more careful state management across the order lifecycle. But it was the right model for this market, at this stage, with these users. It created trust on both sides where no trust infrastructure previously existed.",
        "The lesson is not that managed marketplaces are always better. It is that the marketplace model should follow the trust dynamics of the specific market — not the template of marketplaces you have seen before.",
      ],
    },
    cta: {
      heading: "Building a marketplace or B2B platform?",
      subheading:
        "We have built the escrow logic, the KYC flows, the multi-portal architecture, and the WhatsApp notifications. We know exactly how to scope and deliver this kind of project.",
      buttonText: "Book a free discovery call",
      linkText: "View all client stories",
    },
  },
  {
    slug: "bookpound",
    badge: "E-commerce · Multi-vendor",
    category: "Books · Marketplace · E-commerce",
    title:
      "BookPound — A multi-vendor used book marketplace built for Nigerian readers",
    subtitle:
      "How Yielded Circle Tech built a privacy-first, NGN-enabled multi-vendor book marketplace on Magento — with custom seller pseudonyms, AWS SES email infrastructure, and Paystack commission settlement.",
    heroStats: [
      { value: "Multi-vendor", label: "Seller marketplace architecture" },
      { value: "NGN", label: "Native Naira currency support" },
      { value: "Privacy-first", label: "Custom seller pseudonym system" },
      { value: "AWS SES", label: "Transactional email infrastructure" },
      { value: "Paystack", label: "Commission and payout management" },
    ],
    overview: {
      label: "Project overview",
      heading: "The challenge in one sentence",
      body: [
        "Nigeria had no dedicated digital marketplace for used books — and building one meant solving three problems simultaneously: enabling sellers to trade anonymously to protect their privacy, handling NGN payments natively, and managing commission settlement in a market where automatic payment splits are not straightforward.",
      ],
    },
    problem: {
      label: "The problem",
      heading: "More than an e-commerce build",
      body: [
        "BookPound came to Yielded Circle Tech with a clear market gap: Nigerian readers who wanted to buy and sell used books had no dedicated platform built for them. The informal market existed — people sold books via WhatsApp groups, Instagram pages, and physical meetups — but it was fragmented, risky, and hard to scale.",
        "Building the platform itself was the starting point. But three specific problems made this project significantly more complex than a standard Magento implementation.",
        "Problem 1 — Seller privacy: Many sellers did not want their real names visible to buyers on a public marketplace. This was not vanity — it was a legitimate concern about privacy, safety, and the social dynamics of selling personal property online in Nigeria. A standard Magento multi-vendor implementation would expose seller identities by default. We needed a system that generated consistent, believable pseudonyms for each seller — the same pseudonym every time, across all their listings and transactions — without exposing their real identity at any point.",
        "Problem 2 — NGN currency: Magento's default currency handling did not cleanly support Naira at the configuration level required. Setting up NGN as the functional currency across the storefront, checkout, reporting, and admin panel required custom configuration work that went beyond standard setup.",
        "Problem 3 — Commission management: Paystack's default settlement behaviour moves funds to the merchant account on a T+1 basis — meaning money goes to the platform automatically. But BookPound needed to retain a commission on each sale and pay out the remainder to the seller. This required integrating Paystack's Transfers API and building a manual settlement layer that calculated seller payouts, deducted commission, and initiated transfers on a managed basis rather than relying on automatic settlement.",
      ],
      listLabel: "Key problems identified",
      items: [
        "No dedicated used book marketplace for Nigerian readers",
        "Seller identity exposure risk in standard multi-vendor implementation",
        "NGN currency not natively supported at required configuration depth",
        "Paystack automatic settlement incompatible with commission-based payout model",
        "Transactional email infrastructure needed to be built and verified from scratch",
      ],
    },
    solution: {
      label: "Our solution",
      heading: "Custom solutions for non-standard problems",
      body: [
        "We built BookPound on Magento 2.4.8 with the Webkul Multivendor extension as the marketplace foundation, deployed via Docker on a DigitalOcean Droplet with MySQL, Elasticsearch, and Redis in the infrastructure stack.",
        "Seller privacy — custom pseudonym module: We built a custom Magento module — BookPound_VendorPrivacy — that intercepts the seller registration process and generates a consistent pseudonym for each seller using a MySQL BEFORE trigger. The pseudonym is generated at registration, stored against the seller record, and used in place of the seller's real name across all public-facing parts of the platform — listings, order communications, and seller profile pages. The same pseudonym is used every time, so sellers have a consistent public identity without their real name ever being exposed.",
        "NGN currency: We configured Naira as the platform's functional currency across the full Magento stack — storefront display, checkout flow, admin reporting, and the Webkul vendor dashboard — including custom cron configuration for currency rate management.",
        "Commission management: We integrated Paystack with manual settlement enabled — turning off automatic T+1 transfer so funds accumulate in the platform account. We then built a commission management layer using Paystack's Transfers API: when a sale is confirmed, the system calculates the seller's payout (sale price minus commission), initiates a Paystack transfer to the seller's registered bank account, and logs the transaction for admin reconciliation.",
        "Email infrastructure: We configured AWS Simple Email Service (SES) as the transactional email provider — handling order confirmations, shipping notifications, seller alerts, and account management emails. This included full DNS verification, DKIM setup, and bounce and complaint handling.",
      ],
      listLabel: "What we built",
      items: [
        "Magento 2.4.8 multi-vendor marketplace with Webkul extension",
        "BookPound_VendorPrivacy custom module — MySQL BEFORE trigger pseudonym generation",
        "NGN currency configuration across full platform",
        "Paystack integration with manual settlement and Transfers API payout management",
        "AWS SES transactional email infrastructure with full DNS and DKIM configuration",
        "Cron configuration for platform maintenance and currency management",
        "Docker-based deployment on DigitalOcean Droplet",
      ],
    },
    process: {
      label: "How we built it",
      heading: "Solving problems that do not have a plugin",
      body: [
        "The most important phase of the BookPound build was correctly diagnosing which problems had off-the-shelf solutions and which required custom engineering. Getting that wrong in either direction — over-engineering a solved problem, or reaching for a plugin where custom code was needed — would have cost time and introduced fragility.",
        "Platform selection: Magento 2.4.8 with Webkul Multivendor was the right foundation for the marketplace requirements. The extension handled the core multi-vendor flows — seller onboarding, product listing, order routing — so we could focus engineering effort on the custom problems.",
        "Custom module development: The VendorPrivacy module was the most novel piece of engineering in the project. Using a MySQL BEFORE trigger to intercept and modify the seller record at the database level — rather than at the application layer — gave us a clean, reliable mechanism that worked consistently regardless of how the seller record was created or modified.",
        "Payment architecture: The decision to use Paystack's manual settlement mode and Transfers API rather than automatic settlement was the correct call for the commission model. It gave the platform operator full control over payout timing and amounts, with a clear reconciliation trail.",
        "Infrastructure: We selected a DigitalOcean Droplet at 4GB RAM as the deployment target — appropriately sized for the initial traffic volume with a clear upgrade path as the platform grows.",
      ],
    },
    results: {
      label: "The outcome",
      heading: "What the project delivered",
      stats: [
        {
          value: "Multi-vendor",
          label:
            "Marketplace live with full seller onboarding and listing management",
        },
        {
          value: "Zero",
          label:
            "Seller identity exposure — pseudonym system working at database level",
        },
        {
          value: "NGN",
          label:
            "Full Naira currency support across storefront, checkout, and admin",
        },
        {
          value: "Paystack",
          label:
            "Commission management with manual settlement and automated seller payouts",
        },
        {
          value: "AWS SES",
          label: "Transactional email infrastructure verified and operational",
        },
        {
          value: "Docker",
          label:
            "Containerised deployment with clear infrastructure upgrade path",
        },
      ],
    },
    techStack: {
      label: "Technology used",
      heading: "Platform foundation with custom engineering where it mattered",
      rows: [
        { layer: "E-commerce platform", technology: "Magento 2.4.8" },
        { layer: "Marketplace extension", technology: "Webkul Multivendor" },
        { layer: "Custom module", technology: "BookPound_VendorPrivacy" },
        { layer: "Database", technology: "MySQL with BEFORE triggers" },
        { layer: "Search", technology: "Elasticsearch" },
        { layer: "Cache", technology: "Redis" },
        {
          layer: "Payments",
          technology: "Paystack — Manual settlement + Transfers API",
        },
        {
          layer: "Email",
          technology: "AWS SES — Full DNS and DKIM configuration",
        },
        {
          layer: "Deployment",
          technology: "Docker, DigitalOcean Droplet (4GB)",
        },
      ],
    },
    lessons: {
      label: "What we learned",
      heading: "Standard platforms still need custom thinking",
      body: [
        "BookPound reinforced a principle that applies to every platform-based project: the framework handles the common case, and your value as a development team is in how you handle the uncommon cases.",
        "Magento handled the marketplace. Webkul handled the vendor flows. But seller privacy, NGN currency depth, and Paystack commission management were all problems the platform did not solve — and those were exactly the problems that made BookPound different from every other book website.",
        "The instinct when using a platform is to find a plugin for every problem. Sometimes that is right. But the VendorPrivacy module needed to be custom-built because no plugin could provide the database-level consistency the privacy model required. Knowing when to extend, and when to build, is one of the most important technical judgements in platform development.",
      ],
    },
    cta: {
      heading:
        "Building a marketplace with complex payment or privacy requirements?",
      subheading:
        "We have solved NGN currency setup, Paystack commission management, seller privacy systems, and AWS SES configuration. These are solved problems for us.",
      buttonText: "Book a free discovery call",
      linkText: "View all client stories",
    },
  },
  {
    slug: "itan-technologies",
    badge: "SaaS · Mobile · CTO engagement",
    category: "Publishing · EdTech · Mobile App",
    title: "ITAN Global Publishing — From idea to ebook MVP in under 3 months",
    subtitle:
      "How Yielded Circle Tech served as embedded CTO and engineering team for ITAN Global Publishing — designing the backend infrastructure, building a React Native ebook app, and delivering a production-ready MVP in under 3 months.",
    heroStats: [
      { value: "3 months", label: "Idea to production MVP" },
      { value: "95%", label: "User satisfaction in beta testing" },
      { value: "10,000+", label: "Users the backend is architected to serve" },
      { value: "20%", label: "Reduction in time-to-market" },
      { value: "15%", label: "Faster delivery through team alignment" },
    ],
    overview: {
      label: "Project overview",
      heading: "The challenge in one sentence",
      body: [
        "ITAN Global Publishing had a vision for a digital publishing platform — an ebook application that could serve their audience at scale — but needed a technical leader and a development team to take that vision from concept to a working, deployable product within a tight timeline.",
      ],
    },
    problem: {
      label: "The problem",
      heading: "A publishing business ready to go digital",
      body: [
        "ITAN Global Publishing had content, an audience, and a clear sense of what they wanted to build. What they did not have was an in-house technical team or a CTO who could own the product from architecture through to launch.",
        "This is one of the most common and most difficult positions for a founder to be in. You know what you want to build. You may even know broadly how it should work. But without someone who can own the technical decisions — the database design, the API architecture, the technology choices, the team management — you are entirely dependent on whichever developer you happen to hire, with no way to evaluate whether their decisions are good ones.",
        "ITAN needed more than developers. They needed technical leadership.",
        "The specific challenges were: No internal technical leadership, unclear technical scope, a tight timeline, and a small team that required maintainable architecture decisions from day one.",
      ],
    },
    solution: {
      label: "Our solution",
      heading: "Embedded technical leadership from day one",
      body: [
        "Ayo joined ITAN Global Publishing in the CTO role — not as an external consultant but as an embedded technical leader who owned the product from architecture through to delivery.",
        "Technical architecture: The first phase was translating the product vision into a technical specification. We defined the database schema, designed the RESTful API layer, chose the technology stack — Ruby on Rails for the backend, React Native for the mobile app — and mapped every feature to a milestone in the delivery plan.",
        "The backend infrastructure was architected from the start to support 10,000+ users — not because ITAN was starting at that scale, but because building for scale from the beginning avoids the expensive and disruptive re-architecture that growth otherwise forces.",
        "Backend development: We designed and built the full backend infrastructure — database architecture in PostgreSQL, RESTful API endpoints for all app functions, authentication and user management, content delivery for ebook assets, and an admin layer for publishing management.",
        "Mobile development: We translated the UI/UX designs into a React Native mobile application — building responsive, performant interfaces across iOS and Android from a single codebase. The app included ebook reading functionality, user library management, content browsing, and account management.",
        "Team leadership: Managing a team of 2 developers and designers on a tight timeline required clear communication, well-defined responsibilities, and consistent alignment sessions. We ran regular standups and milestone reviews, introduced pair programming for the more complex engineering challenges, and maintained a shared delivery roadmap that kept everyone aligned on what was being built and when.",
        "Feature prioritisation: One of the highest-impact decisions was what not to build in the MVP. We worked with the ITAN team to prioritise features by user impact — identifying the core reading and discovery experience as the non-negotiable MVP scope, and deprioritising several planned features to a post-launch phase. This reduced time-to-market by 20% without compromising the core user experience.",
      ],
      listLabel: "What we built",
      items: [
        "Full backend infrastructure — PostgreSQL database architecture, RESTful APIs",
        "React Native mobile application — iOS and Android from single codebase",
        "User authentication and account management",
        "Ebook content delivery and reading interface",
        "User library and collection management",
        "Admin panel for content and publishing management",
        "Beta testing programme with structured feedback collection",
      ],
    },
    process: {
      label: "How we built it",
      heading: "Three months from brief to beta",
      body: [
        "Month 1 — Architecture and foundation: Discovery, technical scoping, database design, API architecture, project setup, team onboarding, and backend scaffolding. By the end of month one, the core infrastructure was in place and the team was building against a clear, shared specification.",
        "Month 2 — Core build: Backend API development, React Native UI implementation, integration between frontend and backend, and internal QA. Feature prioritisation decisions were made in this phase to protect the timeline without compromising the essential user experience.",
        "Month 3 — Beta and polish: Beta testing programme launch, user feedback collection, bug fixing, performance optimisation, and final deployment preparation. The 95% user satisfaction rate in beta testing was the result of structured feedback collection and rapid iteration in this phase.",
      ],
    },
    results: {
      label: "The outcome",
      heading: "What the project delivered",
      stats: [
        { value: "3 months", label: "From concept to production-ready MVP" },
        {
          value: "95%",
          label: "User satisfaction rate during structured beta testing",
        },
        {
          value: "10,000+",
          label: "Users the backend infrastructure is built to serve",
        },
        {
          value: "20%",
          label:
            "Reduction in time-to-market through disciplined feature prioritisation",
        },
        {
          value: "15%",
          label:
            "Faster delivery through team alignment and communication practices",
        },
        {
          value: "2",
          label: "Developers and designers managed to successful delivery",
        },
      ],
    },
    techStack: {
      label: "Technology used",
      heading: "A lean stack optimised for speed and maintainability",
      rows: [
        { layer: "Mobile", technology: "React Native — iOS and Android" },
        { layer: "Backend", technology: "Ruby on Rails" },
        { layer: "Database", technology: "PostgreSQL" },
        { layer: "APIs", technology: "RESTful API architecture" },
        {
          layer: "Methodology",
          technology: "Agile sprints, pair programming, code reviews",
        },
      ],
    },
    testimonial: {
      label: "Client feedback",
      quote:
        "Leading a small team to deliver a production-ready MVP in under 3 months — while maintaining quality and keeping the client aligned at every stage — is exactly what embedded technical leadership looks like in practice.",
      attribution: "Ayo — CTO engagement, ITAN Global Publishing",
    },
    lessons: {
      label: "What we learned",
      heading: "Technical leadership is a product in itself",
      body: [
        "The ITAN engagement reinforced something we believe deeply at Yielded Circle Tech: for many early-stage businesses, the scarcest and most valuable resource is not developers — it is technical leadership.",
        "Developers can write code. But without a leader who can make good architectural decisions, prioritise features correctly, manage the team effectively, and translate between business goals and technical execution — the code is often solving the wrong problem.",
        "The 20% reduction in time-to-market on this project did not come from the team working faster. It came from deciding earlier and more clearly what to build — and what to leave out. That is a leadership function, not a development function.",
        "For founders who are not technical, hiring developers without also securing technical leadership is one of the most expensive mistakes they can make. The CTO-as-a-Service model exists to solve exactly that problem.",
      ],
    },
    cta: {
      heading: "Need a technical leader, not just developers?",
      subheading:
        "We have served as embedded CTOs for early-stage startups — owning architecture, managing teams, and delivering products. If you need technical leadership alongside development, that is what we do.",
      buttonText: "Book a free discovery call",
      linkText: "View all client stories",
    },
  },
];

export const caseStudyMap = new Map(
  caseStudies.map((study) => [study.slug, study]),
);
