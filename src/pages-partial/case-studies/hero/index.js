import { Logo } from "@/assets/svgs";
import { aboutus } from "@/components/consts/about-us";

export default function CaseStudiesHero() {
  return (
    <section className="bg-[#151515]">
      <div className="p-20 space-y-12 max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-9">
          <Logo className="w-44 h-12" />
          <div className="space-y-5">
            <h1 className="text-[44px] font-medium leading-[58px] tracking-[3%]">
              Get Insight Into The Many Possibilities!
            </h1>
            <p>
              Our team has spent years building software products for political
              campaigns and non-profits. <br /> We’ve learned, sometimes the
              hard way, that small orgs need to build smarter tech to stay
              competitive.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 border border-white/10 rounded-[10px]">
          <div className="grid grid-cols-4 gap-4">
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
