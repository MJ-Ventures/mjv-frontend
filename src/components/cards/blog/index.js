import { ArrowIcon } from "@/assets/svgs";

export default function BlogCard() {
  return (
    <div className="rounded-sm">
      <div className="flex flex-col md:gap-4 gap-2">
        <img src={"/images/blogs/1.jpg"} className="rounded-sm" />
        <div className="flex flex-col gap-2">
          <h4 className="md:text-3xl text-xl font-medium text-white leading-8 py-4">
            Artem - Digital Marketing campaign
          </h4>
          <p className="text-sm md:leading-7 leading-5 text-[#EAEAEB]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod
          </p>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <p className="text-base leading-8 text-white">Continue Reading</p>
          <ArrowIcon
            width={16}
            height={16}
            className="cursor-pointer hover:translate-x-2 transition-all rotate-[45deg]"
          />
        </div>
      </div>
    </div>
  );
}
