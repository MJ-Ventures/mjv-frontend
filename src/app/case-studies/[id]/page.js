import { baseURL } from "@/components/utils/endpoints";
import CaseStudyPartial from "@/pages-partial/case-study";

export async function generateMetadata({ params }) {
  // read route params
  const { id } = params;

  // fetch data
  const res = await fetch(`${baseURL}/api/get-single-case-study/id=${id}`);
  const { caseStudy } = await res.json();
  const { title, description, imgSrc } = caseStudy || {};

  return {
    // Basic SEO
    title: title,
    description: description,
    canonical: "https://mjventures.org/",

    // Open Graph / Facebook metadata
    openGraph: {
      title: title,
      description: description,
      url: `https://mjventures.org/`,
      type: "website",
      images: [
        {
          url: imgSrc,
          width: 1200,
          height: 630,
          alt: "MJ Ventures",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "MJV",
      site: "https://mjventures.org/",
      title: title,
      description: description,
      images: [imgSrc],
    },
  };
}

export default function CaseStudy({ params }) {
  const { id } = params;
  return <CaseStudyPartial id={id} />;
}
