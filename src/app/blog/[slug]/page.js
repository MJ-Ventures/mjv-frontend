import { baseURL } from "@/components/utils/endpoints";
import SingleBlogPartial from "@/pages-partial/single-blog";

export async function generateMetadata({ params }) {
  // read route params
  const { slug } = params;

  // fetch data
  const res = await fetch(`${baseURL}/api/get-single-blog/slug=${slug}`);
  const { blog } = await res.json();
  const { title, description, featuredImage } = blog || {};

  return {
    // Basic SEO
    title: title,
    description: description,
    canonical: "https://mjventures.org/",

    // Open Graph / Facebook metadata
    openGraph: {
      title: title,
      description: description,
      url: `https://mjventures.org/blog/${slug}`,
      type: "website",
      images: [
        {
          url: featuredImage,
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
      images: [featuredImage],
    },
  };
}

export default function SingleBlog({ params }) {
  const { slug } = params;
  if (!slug) return;
  return <SingleBlogPartial slug={slug} />;
}
