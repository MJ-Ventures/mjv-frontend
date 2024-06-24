import { ArrowIcon } from "@/assets/svgs";
import clsx from "clsx";
import Link from "next/link";

export default function CaseStudiesCard({ content, className, imgClasses }) {
  const { title, description, imgSrc, tags } = content;

  return (
    <article
      className={clsx(
        "border border-[#292929] bg-[#151515] rounded-sm",
        className
      )}
    >
      <div className="flex flex-col md:p-8 p-4 nd:gap-4 gap-5">
        <img src={imgSrc} className={imgClasses} />
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium leading-8">{title}</h4>
          <p className="md:text-sm text-xs md:leading-7 leading-5 text-[rgb(234,234,235)]">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 lg:pt-0 pt-3">
            {tags.map((item, index) => {
              return (
                <p
                  key={index}
                  className="md:py-2.5 md:px-4 text-white p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <Link
          className="flex items-center gap-4 pt-4"
          href={"/case-studies/smart-money-ai"}
        >
          <p className="text-base leading-8 text-white">See Case Study</p>
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
