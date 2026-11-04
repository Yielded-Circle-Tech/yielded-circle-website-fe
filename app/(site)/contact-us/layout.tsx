import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Book a Free Discovery Call",
  description:
    "Tell us about your idea. Book a free discovery call with Yielded Circle Tech, the Lagos software agency building MVPs, platforms and marketplace apps.",
  path: "/contact-us",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact-us" }]} />
      {children}
    </>
  );
}
