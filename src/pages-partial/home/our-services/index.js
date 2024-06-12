import {
  ArrowIcon,
} from "@/assets/svgs";
import { services } from "@/components/consts/services";


export default function OurServices() {
  return (
    <section className="py-12 lg:px-2 px-0" id="services">
      <div>
        <h5 className="text-base text-white lg:text-start text-center font-medium lg:leading-[22px] leading-4 tracking-[6px]">
          – OUR SERVICES <span className="lg:hidden inline">–</span>
        </h5>
        <h5 className="font-semibold lg:text-3xl text-xl lg:text-start text-center md:text-4xl lg:leading-[52px] leading-8 text-white mt-3">
          HOW WE CAN <br className="lg:inline hidden" /> HELP YOU
        </h5>
        <div className="flex justify-between items-center mt-4 lg:px-0 px-3">
          <p className="text-base lg:w-[65%] w-full font-normal lg:text-start text-center text-white lg:leading-8 leading-6">
            Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue.
            Lacus eget enim cras sollicitudin. Viverra pharetra lorem sit nulla
            ultrices integer risus. Massa placerat leo vitae accumsan.
          </p>
        </div>
        <div className="py-4 lg:px-0 px-3">
          <button className="py-3 px-8 lg:max-w-max w-full rounded-lg bg-[#151515] text-white border border-[#292929]">
            Get a Free Consultation!
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 mt-8 lg:px-0 px-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((element, index) => {
            const { description, icon, title } = element;
            return (
              <div
                key={index}
                className="h-full px-5 py-8 rounded-lg shadow-sm bg-center duration-300 outline outline-2 outline-transparent hover:bg-[#484847] cursor-pointer border border-[#292929] hover:outline-gray-200"
              >
                <div className="border border-white rounded h-12 w-12 flex items-center justify-center">
                  {icon}
                </div>
                <div className="!mt-6 spac-y-3">
                  <h3 className="text-[28px] text-white">{title}</h3>
                  <p className="mt-2 text-[#EAEAEB]">{description}</p>
                  <div className="flex items-center gap-4 pt-4">
                    <p className="text-base leading-8 text-white">
                      Get Started
                    </p>
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
      </div>
    </section>
  );
}
