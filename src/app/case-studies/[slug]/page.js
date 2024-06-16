import CaseStudyPartial from "@/pages-partial/case-study";

export default function CaseStudy({ params }) {
  const { slug } = params;
  return <CaseStudyPartial slug={slug} />;
}
