import { ArrowIcon } from "@/assets/svgs";

export default function BlogsHeader() {
  return (
    <div className="p-20 bg-[#151515]">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-start text-base font-medium text-white leading-[22px] tracking-[6px]">
            – WELCOME TO OUR BLOG
          </h5>
          <h1 className="text-start md:text-[44px] text-xl font-semibold text-white leading-relaxed">
            Discover the Wonders of Artificial Intelligence
          </h1>
        </div>
        <div>
          <button className="py-3 px-8 lg:max-w-max w-full flex items-center gap-3 rounded-lg text-white bg-[#151515] border border-[#292929]">
            View All Blogs <ArrowIcon height={10} width={10} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
