import { ArrowIcon } from "@/assets/svgs";

export default function BlogSection() {
  return (
    <section className="py-12 border-b border-white/10">
      <div className="max-w-[906px] m-16 mx-auto w-full flex flex-col gap-3">
        <h5 className="text-center text-base font-medium leading-[22px] tracking-[6px]">
          – BLOG –
        </h5>
        <h1 className="text-center text-[52px] font-semibold leading-relaxed">
          OUR LATEST THOUGHTS
        </h1>
        <p className="text-center text-base font-normal leading-8">
          Our team has spent years building software products for political
          campaigns and non-profits. <br /> We’ve learned, sometimes the hard
          way, that small orgs need to build smarter tech to stay competitive.{" "}
        </p>
      </div>
      <div className="flex gap-10 items-center">
        {Array(3)
          .fill()
          .map((item, index) => {
            return (
              <div key={index} className="rounded-sm">
                <div className="flex flex-col p-8 gap-4">
                  <img src={"/images/blogs/1.jpg"} className="rounded-sm" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-3xl font-medium leading-8 py-4">
                      Artem - Digital Marketing campaign
                    </h4>
                    <p className="text-sm leading-7 text-[#EAEAEB]">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <p className="text-base leading-8">Continue Reading</p>
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="cursor-pointer hover:translate-x-2 transition-all rotate-[45deg]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="py-12 text-center">
        <button className="py-3 px-8 rounded-lg bg-[#151515] border border-[#292929]">
          View All Blogs
        </button>
      </div>
    </section>
  );
}
