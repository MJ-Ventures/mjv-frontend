import { ArrowIcon } from "@/assets/svgs";
import BlogCard from "@/components/cards/blog";
import useFetchBlog from "@/hooks/blog";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Link from "next/link";

export default function SimilarBlogSection({ category, className }) {
  const { getBlogs } = useFetchBlog();
  const { isPending, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => getBlogs(),
  });

  const similarBlogs = data?.filter(item => item.category === category)

  return (
    <section className={clsx("", className)}>
      <div className="lg:py-12 py-10 px-3 relative border-b border-white/10 max-w-[1440px] mx-auto">
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 bg-transparent justify-between items-center py-6 pb-10">
          <p className="text-xl text-white">Similar Blog Posts</p>
          <button className="py-3 px-8 rounded-lg text-white bg-transparent border border-[#292929] md:max-w-max w-full">
            <Link
              href="/all-blogs"
              className="flex items-center justify-center gap-2"
            >
              View All Blogs <ArrowIcon height={14} width={14} />
            </Link>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center">
          {similarBlogs?.length ? 
          similarBlogs?.map((item, index) => {
              return <BlogCard item={item} key={index} />;
            }): <p>No Similar Blogs Found.</p>}
        </div>
        <div className="py-12 text-center">
          <button className="py-3 px-8 rounded-lg text-white bg-[#151515] border border-[#292929] lg:max-w-max w-full">
            <Link href="/all-blogs">View All Blogs</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
