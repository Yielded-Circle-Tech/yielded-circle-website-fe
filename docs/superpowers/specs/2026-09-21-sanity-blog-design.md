# Sanity-Powered Blog — Design

- **Date:** 2026-09-21
- **Status:** Approved, ready for implementation planning
- **Branch:** `feature/sanity-blog`

## Context

`app/blog/page.tsx` is a static "coming soon" placeholder, already linked from the
navbar and listed in the sitemap. All other content in the site is hardcoded —
`lib/caseStudies.ts` exports a typed array plus a lookup `Map`, consumed by
`app/client-stories/[slug]/page.tsx` through `generateStaticParams`.

This work replaces the placeholder with a real blog backed by Sanity, and gives the
team a Studio to write in. No existing page changes behaviour or URL.

## Goals

- Editors publish posts from a Studio without a developer or a redeploy.
- The blog looks native to the existing brand system, not like a bolted-on CMS theme.
- Posts are statically served, indexed, and appear in the sitemap automatically.

## Non-goals

- Migrating `lib/caseStudies.ts` to Sanity. Out of scope; revisit separately.
- Draft preview mode. Deliberately deferred — it can be added later without rework.
- Comments, search, tags, series, newsletter capture, reading time, share buttons.
- Seed/sample content. The blog ships empty with a branded empty state.

## Locked decisions

| Decision | Choice |
|---|---|
| Studio location | Embedded at `/studio` via route groups |
| Sanity project | `uro99o5y`, dataset `production` |
| Content model | `post` + `author` + `category` |
| Listing features | Featured hero, category filter, pagination |
| Post features | Related posts, existing brand CTA block |
| Caching | ISR (60s) + on-demand webhook revalidation |
| Preview | Not now |
| Seed content | None |

Rationale for the Studio decision: a Sanity Studio is always a codebase you own, so
the schema files live in this repo either way. Embedding costs one route group and
keeps schema and frontend versioned together; `npx sanity deploy` remains available
from the same `sanity.config.ts` if a `*.sanity.studio` URL is ever wanted.

## Dependencies

Runtime: `sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`,
`@portabletext/react`, `styled-components` (Studio peer dependency).

## Structural change: route groups

The root `app/layout.tsx` wraps every route in `Navbar`/`Footer`, which would bleed
into the Studio UI. Existing page folders move into a `(site)` route group:

```
app/
  layout.tsx              <- html/body/fonts/metadata only
  (site)/
    layout.tsx            <- Navbar + children + Footer
    page.tsx              (moved)
    about-us/ services/ community/ careers/
    contact-us/ client-stories/ blog/          (all moved)
  studio/[[...tool]]/page.tsx
  api/                    (unchanged)
  sitemap.ts              (unchanged location)
```

Route groups do not appear in URLs, so every existing path is byte-identical.
Imports are unaffected: the `@/*` alias resolves from the repo root, not `app/`.
This is the shape the official Sanity Next.js starter uses.

## Content model

Schemas live in `sanity/schemas/`, registered from `sanity/schemas/index.ts`.

### `post`

| Field | Type | Notes |
|---|---|---|
| `title` | string | required |
| `slug` | slug | required, sourced from `title`, maxLength 96 |
| `excerpt` | text | required, max 200 chars; used on cards and as meta description fallback |
| `coverImage` | image | hotspot enabled; nested `alt` string, required when an image is set |
| `body` | array (portable text) | see block content below |
| `author` | reference → `author` | optional |
| `categories` | array of reference → `category` | optional |
| `publishedAt` | datetime | required, defaults to now |
| `featured` | boolean | defaults to false |
| `seoTitle` | string | optional, overrides `title` in metadata |
| `seoDescription` | text | optional, overrides `excerpt` in metadata |

Preview in the Studio shows title, cover image, and formatted publish date.
Default ordering in the Studio desk: `publishedAt` descending.

### Block content (`post.body`)

Styles: normal, h2, h3, h4, blockquote. Lists: bullet, numbered. Marks: strong, em,
code, and a `link` annotation (url + "open in new tab" boolean). Inline `image`
blocks carry a required `alt` and optional `caption`.

### `author`

`name` (required), `slug`, `role`, `photo` (image, hotspot), `bio` (text).

### `category`

`title` (required), `slug` (required), `description` (text).

## Data layer

```
sanity/
  env.ts          reads + validates env vars, throws at import if missing
  lib/client.ts   createClient (CDN on, no token)
  lib/image.ts    urlFor() builder
  lib/queries.ts  GROQ strings
  lib/types.ts    hand-written TS types for query results
  schemas/
```

All queries filter to published documents:
`_type == "post" && !(_id in path("drafts.**")) && publishedAt <= now()`

Queries needed:

1. `postsQuery(category, excludeId, offset, limit)` — paginated cards, newest first,
   optional category slug filter. Returns title, slug, excerpt, coverImage,
   publishedAt, author name/photo, category titles/slugs.
2. `postsCountQuery(category, excludeId)` — total matching posts, for pagination maths.

   `excludeId` is the featured post, passed whenever the hero is rendered (no
   category filter). It is excluded from **both** the grid and the count, across
   every page of that listing, so the post never appears twice and pagination maths
   stays exact.
3. `featuredPostQuery` — newest post with `featured == true`.
4. `postBySlugQuery(slug)` — full document including `body` and author bio.
5. `relatedPostsQuery(slug, categorySlugs)` — up to 3 posts sharing a category,
   excluding the current post, newest first. **If fewer than 3 match, backfill with
   the newest other posts** so the section is either full or absent, never ragged.
6. `categoriesQuery` — categories that have at least one published post.
7. `postSlugsQuery` — slugs + `_updatedAt`, for `generateStaticParams` and sitemap.

Every fetch passes `next: { revalidate: 60, tags: ["blog"] }`.

## Routes and UX

### `/blog` (server component)

Reads `?category=<slug>` and `?page=<n>` from search params. 9 posts per page.

Order of sections:

1. Eyebrow "Blog" + h1 + intro paragraph, centred, matching the client-stories header.
2. **Featured hero** — the `featuredPostQuery` result rendered wide (image left,
   copy right on `md`+). Shown **only on page 1 with no category filter**, and
   excluded from the grid beneath it so it never appears twice.
3. **Category pills** — "All" plus each category with posts. Active pill uses the
   brand gradient; inactive use the white/soft-border treatment. Each pill is a
   `Link` that resets `page` to 1.
4. **Grid** — 1 column on mobile, 2 on `md`, 3 on `lg`, `.reveal` stagger by index.
5. **Pagination** — previous/next plus numbered pages, hidden when there is one page.
6. Existing gradient CTA block.

Empty state: when no posts match, a branded panel in the placeholder's current style
("Insights are on the way"), with the discovery-call and client-stories links. When a
category filter yields nothing, the copy instead offers a link back to all posts.

### `/blog/[slug]`

`generateStaticParams` from `postSlugsQuery`. Unknown slug → `notFound()`.

Back link to `/blog`, category pills, h1, author row (photo, name, role, formatted
publish date), cover image in a `rounded-3xl` frame at 16:9, portable text body in a
prose column capped near 720px, related posts (3-up), then the CTA block.

### `/studio/[[...tool]]`

Renders `NextStudio` with `sanity.config.ts`, re-exporting `metadata` and `viewport`
from `next-sanity/studio`, with `export const dynamic = "force-static"`.

## Components

New under `components/blog/`: `PostCard`, `FeaturedPost`, `CategoryFilter`,
`Pagination`, `PortableTextBody`, `RelatedPosts`, `AuthorByline`, `BlogEmptyState`.
All are server components — active filter and page state are derived from search
params on the server, so no client-side state is needed.

## Design system mapping

Reuses existing tokens only; no new colours are introduced.

| Element | Treatment |
|---|---|
| Section wrapper | `section-space mx-auto w-full max-w-content px-4 md:px-6` |
| Card | `rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f2e8ff_100%)] shadow-[0_10px_24px_rgba(75,0,130,0.1)]`, hover lift |
| Primary button / active pill | `bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] text-white shadow-brand` |
| Secondary button | `border border-brand-deep/45 bg-white text-brand-deep`, inverts on hover |
| Eyebrow / label | `text-xs font-semibold uppercase tracking-[0.14em] text-brand` |
| Panel / CTA | `rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)]` |
| Body copy | `text-page-textMuted`; headings `text-page-text`, card headings `text-brand-deep` |
| Entrance | `.reveal` with `--reveal-delay` staggered by index |

Portable text is styled with an explicit element→class map rather than adding
`@tailwindcss/typography`, so article styling stays identical to the rest of the site
and no new plugin enters the build:

| Block | Classes |
|---|---|
| paragraph | `text-base leading-relaxed text-page-textMuted` |
| h2 / h3 / h4 | `font-semibold tracking-tight text-page-text` at 3xl / 2xl / xl |
| blockquote | left border `border-brand-soft`, italic, `text-brand-deep` |
| ul / ol | `list-disc` / `list-decimal` with muted text |
| link | `text-brand underline underline-offset-4 hover:text-brand-deep`, `rel="noopener noreferrer"` when opening in a new tab |
| code | `rounded bg-brand-light px-1.5 py-0.5 text-brand-deep` |
| image | `next/image` in a `rounded-2xl` frame with optional caption below |

## Images

`next.config.js` gains `images.remotePatterns` for `cdn.sanity.io` (it currently has
an empty `domains` array, so Sanity images would fail outright). All Sanity images
render through `next/image` with `urlFor()` sizing. `alt` falls back to the post title
when an editor leaves it blank.

## Caching and revalidation

Pages: `export const revalidate = 60`. The listing reads search params, so it renders
dynamically while its underlying fetches stay cached; post pages are statically
generated.

`app/api/revalidate/route.ts` accepts `POST`, compares an `x-revalidate-secret`
header against `SANITY_REVALIDATE_SECRET`, and on match calls `revalidateTag("blog")`.
Any `_type` of `post`, `author`, or `category` triggers it — a single tag is
sufficient because authors and categories are denormalised into post cards.
Responses: 200 with the revalidated tag, 401 on secret mismatch, 400 on a malformed
body. The secret never appears in a URL or a log line.

## SEO

- `generateMetadata` per post: `seoTitle ?? title`, `seoDescription ?? excerpt`,
  canonical URL, and OpenGraph with the cover image at 1200×630 via `urlFor()`.
- `app/sitemap.ts` becomes `async` and appends every post URL with
  `lastModified: _updatedAt`. The hardcoded entries stay as they are.
- Each post page emits JSON-LD `BlogPosting` structured data.

## Error handling

| Case | Behaviour |
|---|---|
| Missing env var | `sanity/env.ts` throws at import with a named variable, failing the build loudly rather than at runtime |
| Unknown slug | `notFound()` |
| Post with no author / category / cover | Renders without that element; no crash |
| Blank image `alt` | Falls back to the post title |
| Zero posts | Branded empty state |
| Page number out of range | Clamped to the last valid page |
| Bad revalidate secret | 401, no revalidation |

## Environment variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=uro99o5y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_REVALIDATE_SECRET=<generated>
```

Written to `.env.local` (gitignored). Because `.env.example` is also gitignored in
this repo, the variables are documented in `DEPLOYMENT.md` instead, and must be added
to the hosting provider's environment before deploying.

## Manual steps for the owner

These cannot be done from the codebase and will be handed over as explicit steps:

1. Add CORS origins in sanity.io/manage → API → CORS origins, **with credentials**:
   `http://localhost:3001` and `https://yieldedcircletech.com`.
2. Add the four environment variables to the hosting provider.
3. Create a webhook in sanity.io/manage → API → Webhooks: URL
   `https://yieldedcircletech.com/api/revalidate`, trigger on create/update/delete,
   filter `_type in ["post","author","category"]`, HTTP header
   `x-revalidate-secret: <the generated secret>`.

## Verification

This repo has no test framework, so verification is by build and inspection:

- `npm run type-check` — clean
- `npm run lint` — clean
- `npm run build` — succeeds, and every pre-existing route still appears in the
  build output at its original path
- `npm run dev` — `/studio` loads and authenticates; `/blog` renders its empty state;
  after publishing a post in the Studio it appears on `/blog` and at its slug

Introducing a test framework is out of scope for this change.
