function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}. Add it to .env.local (and to your hosting provider before deploying).`,
    );
  }
  return value;
}

export const projectId = required(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const dataset = required(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET",
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

/** Number of posts rendered per page on the blog listing. */
export const POSTS_PER_PAGE = 9;
