import BlogCard from "@/components/cards/blog";
import Link from "next/link";

export default function BlogSection({ count }) {
  return (
    <section className="lg:py-12 py-4 px-3 max-w-[1440px] mx-auto relative border-b border-white/10">
      <div className="max-w-[906px] mx-auto lg:pb-12 pb-6 w-full flex flex-col gap-3">
        <h5 className="text-center text-base text-white font-medium leading-[22px] tracking-[6px]">
          – BLOG –
        </h5>
        <h1 className="text-center md:text-[52px] text-xl text-white font-semibold leading-relaxed">
          OUR LATEST THOUGHTS
        </h1>
        <p className="text-center text-base text-white font-normal leading-8">
          Our team has spent years building software products for political
          campaigns and non-profits. <br className="lg:inline hidden" /> We’ve
          learned, sometimes the hard way, that small orgs need to build smarter
          tech to stay competitive.{" "}
        </p>
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
