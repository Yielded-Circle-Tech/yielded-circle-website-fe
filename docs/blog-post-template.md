# Blog post template — how SEO works for new articles

Every post published in Sanity (`/studio`) is rendered by
`app/(site)/blog/[slug]/page.tsx`. That one template applies all of the SEO
below automatically. Editors never touch code; they fill in fields.

## What the template does for every post

| Output | Source field(s) | Code |
|---|---|---|
| `<title>` "Post title \| Yielded Circle Tech" | **SEO title**, else **Title** | `generateMetadata` → `lib/seo.ts` |
| Meta description (trimmed to 160 chars) | **SEO description**, else **Excerpt** | `generateMetadata` |
| Canonical URL `https://yieldedcircletech.com/blog/<slug>` | **Slug** | `pageMetadata()` |
| Open Graph + Twitter large card, image 1200×630 with alt | **Cover image** + its alt text (falls back to `/og-image.jpg`) | `generateMetadata` |
| `article:published_time`, `modified_time`, `author`, `section`, `tag` | **Published at**, last edit, **Author**, **Categories** | `generateMetadata` |
| `BlogPosting` JSON-LD (headline, dates, image, author, publisher + logo, word count, keywords) | as above | `lib/structuredData.ts` |
| `BreadcrumbList` JSON-LD + visible breadcrumb (Home / Blog / Post) | **Title** | `components/Breadcrumbs.tsx` |
| One H1 (the title); body headings start at H2 | Body editor only offers H2–H4 | `sanity/schemas/blockContent.ts` |
| Responsive, lazy-loaded images in WebP/AVIF; cover image loads with priority | Images in body / cover | `next/image` |
| Entry in `/sitemap.xml` with real `lastmod` | automatic | `app/sitemap.ts` (hourly) |
| Entry in `/rss.xml` | automatic | `app/rss.xml/route.ts` (hourly) |
| Branded 404 if the post is unpublished or deleted | automatic | `app/(site)/not-found.tsx` |

New posts usually appear within 60 seconds (ISR), or immediately when the Sanity
publish webhook is configured (`/api/revalidate`, see `DEPLOYMENT.md`).

## Editor checklist (Sanity Studio)

1. **Title** — clear and specific; put the main keyword early.
2. **Slug** — click *Generate*. Lowercase, hyphens, no dates or stop-word padding
   (`how-to-validate-an-mvp`, not `How-To-Validate-An-MVP-2026!`). The Studio
   refuses to publish badly formatted slugs. **Never change a slug after
   publishing** — the old URL would 404.
3. **Excerpt** — 120–160 characters. This is the Google snippet unless an SEO
   description is set.
4. **Cover image** — at least 1600×900 (16:9). **Alt text is required**: describe
   what the image shows, not "image of".
5. **Body** — use Heading 2 for sections, Heading 3 for sub-sections; never skip
   levels. Every inline image requires alt text. Link to related posts and to
   `/services` or `/contact-us` where it fits.
6. **Author** and at least one **Category**.
7. **SEO tab (optional)** — SEO title ≤ 60 characters (the brand is added for you),
   SEO description 70–160 characters. The Studio warns when you go over.
