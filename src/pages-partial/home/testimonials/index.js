import { CommasIcon } from "@/assets/svgs";

export default function Testimonials() {
  return (
    <section className="md:py-12 py-4 border-b border-white/10">
      <div className="max-w-[906px] md:px-0 px-3 py-10 pb-24 mx-auto w-full flex flex-col gap-3">
        <h5 className="text-center  text-white text-base font-medium leading-[22px] tracking-[6px]">
          – Testimonials –
        </h5>
        <h1 className="text-center text-white md:text-[52px] text-xl font-semibold leading-relaxed">
          WHAT OUR CLIENTS SAY
        </h1>
        <p className="text-center text-white text-base font-normal leading-8">
          View some feeback below made from our esteemed clients
        </p>
      </div>
      <div className="relative overflow-x-hidden w-full">
        <div className="flex gap-2 animate-scroll">
          {Array(6)
            .fill()
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="h-full w-[494px] flex-shrink-0 p-6 rounded-lg shadow-sm duration-300 outline outline-transparent bg-[#151515]"
                >
                  <div className="flex flex-col gap-5">
                    <CommasIcon />
                    <p className="mt-2 text-base text-[#EAEAEB]">
                      Lorem ipsum dolor sit amet consectetur. Mauris netus
                      tristique vitae proin. Vel id montes a id. Egestas elit
                      purus lectus nunc egestas leo orci.
                    </p>
                    <div className="pt-6">
                      <div className="flex gap-3">
                        <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none w-10 h-10 text-tiny  rounded-full ">
                          <img
                            alt="Client Image"
                            width={60}
                            height={60}
                            className="flex object-cover w-full h-full transition-opacity !duration-500"
                            src="/images/testimonials/robert-fox.png"
                          />
                        </span>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-lg font-semibold text-white leading-none">
                            Zoey Lang
                          </h4>
                          <h5 className="text-sm tracking-tight text-[#A5A5A1]">
                          Director at Fort Worth Reports
                          </h5>
                        </div>
                      </div>
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
