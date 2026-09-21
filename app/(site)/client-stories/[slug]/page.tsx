import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-studies/CaseStudyPage";
import { caseStudies, caseStudyMap } from "@/lib/caseStudies";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function ClientStoryDetailPage({ params }: Props) {
  const study = caseStudyMap.get(params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}
