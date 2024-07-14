'use client';

import { ArrowIcon } from "@/assets/svgs";
import { services } from "@/components/consts/services";
import { useModal } from "@/providers/modalProvider";

export default function OurServices() {
  const { openModal } = useModal();

  return (
    <section
      className="py-12 lg:px-2 px-0 max-w-[1440px] mx-auto"
      id="services"
    >
      <div>
        <h5 className="text-base md:text-start text-center font-regular leading-[16px] tracking-[0px]">
          Our Services
        </h5>
        <h5 className="font-thin  md:text-start text-center text-xl md:text-4xl md:leading-[52px] leading-[30px] text-white mt-3">
          How we can help you
        </h5>
        <div className="flex justify-between items-center mt-4 lg:px-0 px-3">
          <p className="text-base lg:w-[65%] w-full font-normal lg:text-start text-center text-white lg:leading-8 leading-6">
            MJV offers turnkey and custom AI development services to meet the
            needs and budget of forward-thinking organizations looking to grow
            and leverage Generative AI technology.
          </p>
        </div>
        <div className="py-4 lg:px-0 px-3">
          <button className="py-3 px-8 lg:max-w-max w-full rounded-lg bg-[#151515] text-white border border-[#292929]">
            Let&apos;s Talk
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
                onClick={openModal}
                className="h-full px-5 py-8 rounded-lg shadow-sm bg-center duration-300 outline outline-2 outline-transparent hover:bg-[#484847] cursor-pointer border border-[#292929] hover:outline-gray-200"
              >
                <div className="border border-white rounded h-12 w-12 flex items-center justify-center">
                  {icon}
                </div>
                <div className="!mt-6 space-y-3">
                  <h3 className="text-[28px] text-white">{title}</h3>
                  <p className="mt-2 text-[#EAEAEB]">{description}</p>
                  <div className="flex items-center gap-4 mt-auto">
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
