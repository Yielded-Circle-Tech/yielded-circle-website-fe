import { defineField, defineType } from "sanity";
import { SLUG_PATTERN, slugify } from "../lib/slugify";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Metadata" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        "The post URL: /blog/your-slug. Click Generate. Keep it short and keyword-focused, and do not change it after publishing (old links would 404).",
      options: {
        source: "title",
        maxLength: 75,
        slugify: (input: string) => slugify(input),
      },
      validation: (rule) =>
        rule.required().custom((value) => {
          const current = (value as { current?: string } | undefined)?.current;
          if (!current) return true;
          return SLUG_PATTERN.test(current)
            ? true
            : "Use lowercase letters, numbers and single hyphens only (e.g. how-to-validate-an-mvp).";
        }),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "One or two sentences. Shown on cards and used as the meta description unless an SEO description is set. Aim for 120–160 characters.",
      validation: (rule) => [
        rule.required().max(200),
        rule.max(160).warning("Google cuts descriptions at about 160 characters."),
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "content",
      description:
        "Used on cards, at the top of the post and as the social share image. Upload at least 1600×900 (16:9).",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Describe the image for screen readers and SEO.",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;
              if (parent?.asset && !value) {
                return "Alternative text is required when an image is set.";
              }
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "meta",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "meta",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "meta",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "meta",
      description:
        "The most recent featured post is shown large at the top of the blog.",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      group: "seo",
      description:
        "Overrides the post title in search results and link previews. Aim for 50–60 characters; the brand name is added automatically.",
      validation: (rule) =>
        rule.max(60).warning("Titles over 60 characters get cut off in Google."),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 2,
      group: "seo",
      description:
        "Overrides the excerpt in search results and link previews. Aim for 120–160 characters.",
      validation: (rule) => [
        rule.max(200),
        rule.max(160).warning("Google cuts descriptions at about 160 characters."),
        rule.min(70).warning("Short descriptions are often replaced by Google."),
      ],
    }),
  ],
  orderings: [
    {
      title: "Published at, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "coverImage", publishedAt: "publishedAt" },
    prepare({ title, media, publishedAt }) {
      return {
        title,
        media,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Unpublished",
      };
    },
  },
});
