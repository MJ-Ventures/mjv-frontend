import { ArrowIcon } from "@/assets/svgs";
import Link from "next/link";

export default function BlogCard({ item }) {
  const { title, description, slug, featuredImage } = item || {};
  return (
    <article className="rounded-sm">
      <div className="flex flex-col md:gap-4 gap-2">
        <div className="h-[300px]">
          <img src={featuredImage} alt={"Image"} className="rounded-sm h-full w-full bg-contain" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="md:text-3xl text-xl font-medium text-white leading-8 py-4 truncate">
            {title}
          </h4>
          <p className="text-sm md:leading-7 leading-5 text-[#EAEAEB] line-clamp-3">
            {description}
          </p>
        </div>
        <Link
          className="flex items-center gap-4 pt-4"
          href={`/blog/${slug}` || "#"}
        >
          <p className="text-base leading-8 text-white">Continue Reading</p>
          <ArrowIcon
            width={16}
            height={16}
            className="cursor-pointer hover:translate-x-2 transition-all rotate-[45deg]"
          />
        </Link>
      </div>
    </article>
  );
}
