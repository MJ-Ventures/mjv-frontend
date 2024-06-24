import SingleBlogPartial from "@/pages-partial/single-blog";

export default function SingleBlog({ params }) {
  const { slug } = params;
  if (!slug) return;
  return <SingleBlogPartial slug={slug} />;
}
