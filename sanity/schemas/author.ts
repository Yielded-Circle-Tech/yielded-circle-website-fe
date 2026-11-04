import { defineField, defineType } from "sanity";
import { slugify } from "../lib/slugify";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 75, slugify: (input: string) => slugify(input) },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: 'For example "Founder" or "Lead Engineer".',
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Defaults to the author's name if left empty.",
        }),
      ],
    }),
    defineField({
      name: "bio",
      title: "Short bio",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(300),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
