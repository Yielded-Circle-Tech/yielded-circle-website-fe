/**
 * URL-safe, lowercase, hyphenated slugs: "What's New in Lagos Tech? (2026)"
 * becomes "whats-new-in-lagos-tech-2026". Accents are folded to ASCII.
 */
export function slugify(input: string, maxLength = 75): string {
  const slug = input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (slug.length <= maxLength) return slug;
  const cut = slug.slice(0, maxLength);
  return cut.includes("-") ? cut.slice(0, cut.lastIndexOf("-")) : cut;
}

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
