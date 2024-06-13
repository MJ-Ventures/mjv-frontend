import { ArrowIcon } from "@/assets/svgs";
import BlogCard from "@/components/cards/blog";
import Link from "next/link";

export default function SimilarBlogSection({ count }) {
  return (
    <section className="lg:py-12 py-10 px-3 relative border-b border-white/10">
      <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between items-center py-4">
        <p className="text-xl">Similar Blog Posts</p>
        <button className="py-3 px-8 rounded-lg text-white bg-transparent border border-[#292929] md:max-w-max w-full">
          <Link href="/all-blogs" className="flex items-center justify-center gap-2">
            View All Blogs <ArrowIcon height={14} width={14} />
          </Link>
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center">
        {Array(count)
          .fill()
          .map((item, index) => {
            return <BlogCard key={index} />;
          })}
      </div>
      <div className="py-12 text-center">
        <button className="py-3 px-8 rounded-lg text-white bg-[#151515] border border-[#292929] lg:max-w-max w-full">
          <Link href="/all-blogs">View All Blogs</Link>
        </button>
      </div>
    </section>
  );
}
