import SingleBlogPartial from "@/pages-partial/single-blog";

export default function SingleBlog({ params }) {
  const { slug } = params;
  return <SingleBlogPartial slug={slug} />;
}
