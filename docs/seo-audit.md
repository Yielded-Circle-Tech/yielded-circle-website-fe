# Technical SEO audit — yieldedcircletech.com

- **Date:** 2026-11-04
- **Branch:** `seo/technical`
- **Stack:** Next.js 14.2 (App Router), Tailwind, Sanity CMS (blog), deployed on Vercel
- **Method:** source review of every route and component, plus each page rendered
  in a local dev server and inspected in headless Chromium at 360px wide
  (title, description, canonical, H1 count, JSON-LD, images without `alt`,
  horizontal overflow, small tap targets).

Severity: **Critical** = actively harms indexing/ranking today. **High** = missing
signal that competitors have. **Medium/Low** = polish.

## 1. Metadata and canonicals

| # | Finding | Severity |
|---|---|---|
| 1.1 | `app/layout.tsx` sets `alternates.canonical` to the homepage. Every page that does not override it (About, Services, Community, Contact, Careers, Client stories, all four case studies, and the 404 page) tells Google **"I am a duplicate of the homepage"**. Google can drop these pages from the index. | Critical |
| 1.2 | Those same pages also inherit the homepage `<title>` and meta description, so 10 pages share one title. | Critical |
| 1.3 | No title template: pages that do set a title repeat "\| Yielded Circle Tech" by hand. | Low |
| 1.4 | `/contact-us` is a client component (`"use client"`), so it cannot export metadata at all. | High |
| 1.5 | Case study pages (`/client-stories/[slug]`) have no `generateMetadata`; their good titles and subtitles are unused. | High |
| 1.6 | Blog listing canonical is always `/blog`, including `?page=2` (pagination pages claim to be page 1, so posts on deeper pages lose a crawl path). | Medium |
| 1.7 | Blog posts have Open Graph but no Twitter card, no `modifiedTime`, no image `alt`. | Medium |
| 1.8 | Homepage copy does not mention the core services searchers use: MVPs, custom platforms, marketplace apps, NGOs, Lagos. | Medium |
| 1.9 | `keywords` meta is set; Google ignores it. Harmless. | Low |

## 2. Crawling and indexing

| # | Finding | Severity |
|---|---|---|
| 2.1 | `app/sitemap.ts` exists (good) but hardcodes every static URL and case study, uses `new Date()` as `lastModified` for every page on every build (Google learns to ignore it), and **fails the whole build** if Sanity is unreachable. | High |
| 2.2 | `public/sitemap.txt` is not a sitemap — it contains a stray CSS file and is publicly served at `/sitemap.txt`. | Medium |
| 2.3 | `public/robots.txt` is static: domain is hardcoded, `/studio` (Sanity CMS) is crawlable. It blocks `GPTBot`, `CCBot`, `anthropic-ai`, `Claude-Web` — a business decision, kept as-is (see manual actions). | Medium |
| 2.4 | No RSS/Atom feed for the blog. | Medium |
| 2.5 | No custom 404 — the default Next.js page has no navigation back into the site. | Medium |
| 2.6 | `/favicon.ico` returns 404 (referenced in `<head>` but the file does not exist). No Apple touch icon. | Medium |
| 2.7 | The site's own domain is hardcoded in 5+ files. | Low |

## 3. Structured data (JSON-LD)

| # | Finding | Severity |
|---|---|---|
| 3.1 | No `Organization`, `LocalBusiness` or `WebSite` schema anywhere. No knowledge-panel or local-pack signals for "software agency Lagos". | High |
| 3.2 | Blog posts have a minimal `BlogPosting` (no `dateModified`, `mainEntityOfPage`, publisher logo, `inLanguage`, keywords). | Medium |
| 3.3 | No `BreadcrumbList` on any page. | Medium |
| 3.4 | Case studies have no schema. | Low |

## 4. Content structure and accessibility

| # | Finding | Severity |
|---|---|---|
| 4.1 | Every page has exactly one H1 (good). Blog bodies only allow H2–H4 (good). | — |
| 4.2 | Heading skips: post cards inside "Related articles" use H2 under an H2; prompt cards on `/resources/ai-prompts` are H2 under the pack's H2. | Low |
| 4.3 | All `<img>` elements have `alt` (good). Sanity requires `alt` on body images and on cover images when set (good). Author photo `alt` is optional and falls back to the name. | — |
| 4.4 | Logo in the navbar is plain text, not a link to the homepage. | Low |
| 4.5 | Mobile menu button has no `aria-expanded` / `aria-controls`. | Low |
| 4.6 | Footer links point to `https://linkedin.com` (generic) and `wa.me/2348000000000` (placeholder number). | Medium (trust) |
| 4.7 | Hero CTAs are `<button>`s with JS scroll handlers; they work, but the Hero ships as a client component just for this. | Low |

## 5. Blog URL slugs

| # | Finding | Severity |
|---|---|---|
| 5.1 | Sanity slug field uses the default slugifier (keeps apostrophes, accents, `&`, etc.) and has no format validation, so editors can publish `/blog/What's-New?` style URLs. | Medium |
| 5.2 | No length guidance on SEO title / description fields. | Low |

## 6. Mobile

| # | Finding | Severity |
|---|---|---|
| 6.1 | No page overflows horizontally at 360px. | — |
| 6.2 | Case study tech-stack tables have `min-width: 360px` inside a scroll container, so on 360px phones the table always scrolls sideways. | Low |
| 6.3 | Footer links are 12px text with ~16px tall tap targets (Google's guideline is ~48px). | Low |
| 6.4 | Navbar scroll listener is not `passive`. | Low |

## 7. Performance / Core Web Vitals

| # | Finding | Severity |
|---|---|---|
| 7.1 | **LCP:** the homepage H1 and the blog post header/cover use the `.reveal` animation, which starts at `opacity: 0` and fades in over 700ms after a delay. Chrome does not count an element as painted until it is visible, so LCP is pushed back by ~0.8s on every visit. | High |
| 7.2 | `.reveal` sets `will-change: transform, opacity` on every animated element permanently (dozens per page), creating a compositor layer for each — memory and paint cost on low-end Android phones. | Medium |
| 7.3 | `next/image` is used everywhere (good — lazy by default, responsive). No AVIF enabled. | Low |
| 7.4 | Source screenshots in `/public` are large PNGs (`itan-reader.png` 1.1 MB, `leddar.png` 465 KB). Next.js re-encodes them, but the originals still cost image-optimizer time on cold cache. | Medium |
| 7.5 | Blog listing: featured image uses `priority` (good). | — |
| 7.6 | Fonts: Inter via `next/font` with `display: swap` (good: self-hosted, preloaded, no layout shift). | — |
| 7.7 | `framer-motion` is a dependency but never imported. It does not ship to users (tree-shaken), but adds install time and noise. | Low |
| 7.8 | Manual `<head>` in the root layout duplicates `charset` and hardcodes the `theme-color`; should use the Metadata/Viewport API. | Low |

## Fix plan

Everything above marked Critical/High/Medium is fixed on this branch except items
that need information only the business has (real social URLs, phone number,
logo artwork, AI crawler policy). Those are listed under "Manual actions" in the
final summary and in `docs/blog-post-template.md`.
