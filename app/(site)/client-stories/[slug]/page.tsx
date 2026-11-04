import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-studies/CaseStudyPage";
import { caseStudies, caseStudyMap } from "@/lib/caseStudies";
import { pageMetadata, truncate } from "@/lib/seo";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudyMap.get(params.slug);
  if (!study) return {};

  return pageMetadata({
    title: `${study.title.split(" — ")[0]} Case Study`,
    description: truncate(study.subtitle),
    path: `/client-stories/${study.slug}`,
    type: "article",
  });
}

export default function ClientStoryDetailPage({ params }: Props) {
  const study = caseStudyMap.get(params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}
