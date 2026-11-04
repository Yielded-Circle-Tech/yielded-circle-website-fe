import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Preview deployments (VERCEL_ENV=preview) are blocked entirely so they never
 * compete with production in search results.
 *
 * The AI training crawlers below were blocked before this file existed and
 * are kept blocked. Removing them is a business decision; note that
 * OAI-SearchBot / PerplexityBot (AI *search*, not training) are allowed.
 */
const AI_TRAINING_BOTS = ["GPTBot", "CCBot", "anthropic-ai", "Claude-Web"];

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/studio"],
      },
      ...AI_TRAINING_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
