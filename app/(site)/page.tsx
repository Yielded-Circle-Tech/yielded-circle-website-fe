import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </main>
  );
}
