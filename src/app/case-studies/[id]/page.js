import CaseStudyPartial from "@/pages-partial/case-study";

export default function CaseStudy({ params }) {
  const { id } = params;
  return <CaseStudyPartial id={id} />;
}
