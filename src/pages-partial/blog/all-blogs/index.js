"use client";
import { ArrowIcon } from "@/assets/svgs";
import PaginationWrapper from "@/components/pagination-wrapper";
import { transformData } from "@/components/utils";
import {  Tab, Tabs } from "@nextui-org/react";
import moment from "moment";
import { usePathname, useRouter } from "next/navigation";

function BlogsHeader() {
  return (
    <div className="p-6 lg:p-20 bg-[#151515] border-y border-[#292929]">
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
        <div className="space-y-4">
          <h5 className="lg:text-start text-center text-base font-medium text-white leading lg:leading-[22px] lg:tracking-[6px] tracking-widest">
            – WELCOME TO OUR BLOG <span className="lg:inline hidden">–</span>
          </h5>
          <h1 className="lg:text-start text-center text-xl md:text-3xl lg:text-[44px] lg:leading-[57px] font-semibold text-white leading-relaxed">
            Discover the Wonders of Artificial Intelligence
          </h1>
        </div>
        <div className="">
          <button className="py-3 px-4 text-base mx-auto lg:px-8 w-full lg:w-auto flex items-center gap-3 rounded-lg text-white bg-[#151515] border border-[#292929]">
            <div className="flex items-center gap-2 mx-auto">
              View All Blogs <ArrowIcon height={10} width={10} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function BlogsList({ data }) {
  const { push } = useRouter();
  const pathName = usePathname();
  return (
    data &&
    data?.map((blog, index) => {
      const { date, title, description, slug } = blog;
      return (
        <article key={index} className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-12">
            <div className="col-span-9 space-y-3">
              <p className="text-[#838381] text-lg">
                {moment(date).format("LL")}
              </p>
              <h3 className="text-[22px] text-white">{title}</h3>
              <p className="text-base text-[#838381]">{description}</p>
            </div>
            <div className="col-span-3 flex flex-col justify-center items-end">
              <button
                className="py-3 px-8 w-full lg:w-auto flex cursor-pointer lg:max-w-max items-center justify-center lg:justify-start gap-3 rounded-lg text-white bg-[#151515] border border-[#292929]"
                onClick={() => push(`${pathName}/${slug}`)}
              >
                View Blog
                <ArrowIcon height={10} width={10} className="" />
              </button>
            </div>
          </div>
        </article>
      );
    })
  );
}

function BlogsTabs({ data }) {
  return (
    <div className="flex w-full flex-col pt-10 space-y-10 ">
      <Tabs
        aria-label="Options"
        className="w-full"
        classNames={{
          tabList: "bg-transparent max-w-7xl mx-auto",
          tab: "py-6 px-5 min-w-52 border border-[#292929]",
          cursor: "bg-[#151515]",
          tabContent: "group-data-[selected=true]:text-white",
        }}
      >
        {data?.map((tab) => (
          <Tab key={tab.title} title={tab.category}>
            <PaginationWrapper data={tab.data} itemsPerPage={5}>
              {(currentItems) => <BlogsList data={currentItems} />}
            </PaginationWrapper>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default function AllBlogSection({ data }) {
  return (
    <>
      <BlogsHeader />
      <BlogsTabs data={transformData(data)} />
    </>
  );
}
