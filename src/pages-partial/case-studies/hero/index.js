import { Logo, LogoSecondary } from "@/assets/svgs";
import { aboutus } from "@/components/consts/about-us";

export default function CaseStudiesHero() {
  return (
    <section className="lg:bg-[#151515] bg-transparent">
      <div className="lg:p-20 p-4 pt-14 space-y-12 max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col lg:items-center items-start lg:gap-9 gap-4">
          <Logo className="w-44 h-12 lg:block hidden" />
          <LogoSecondary className="lg:hidden block" />
          <div className="space-y-5 text-white">
            <h1 className="lg:text-[44px] text-[28px] font-medium lg:leading-[58px] leading-9 tracking-[3%]">
              Get Insight Into The Many Possibilities!
            </h1>
            <p className="text-balance text-sm">
              Learn how AI Agents are enpowering organizations to leverage Gen
              AI to drive effeciency and innovation.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 bg-[#151515] border border-white/10 rounded-[10px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {aboutus.map((element, index) => {
              const { title } = element;
              return (
                <div
                  key={index}
                  className="p-6 space-y-4 bg-[#151515] border border-[#292929] rounded-[10px]"
                >
                  <h4 className="uppercase text-white text-xl">{title}</h4>
                  <p className="text-[#A5A5A1] text-sm">
                    Lorem ipsum dolor sit amet consectetur. Dignissim dictum
                    scelerisque dictumst integer purus pharetra felis. Mauris
                    suspendisse molestie nisl mattis viverra eget tempus nunc
                    sit. Maecenas augue pellentesque{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
