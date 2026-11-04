import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

// Shown for notFound() inside site pages (e.g. a missing blog post).
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function SiteNotFound() {
  return <NotFoundContent />;
}
