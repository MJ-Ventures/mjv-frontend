"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowIcon } from "@/assets/svgs";
import { caseStudies } from "@/components/consts/case-studies";
import CaseStudiesCard from "@/components/cards/case-studies";
import { useRouter } from "next/navigation";

export default function CaseStudies() {
  const { push } = useRouter();
  const swiperRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-24 bg-black px-2 max-w-[1440px] mx-auto">
      <div className=" text-white">
        <div className="relative">
          <div>
            <h5 className="text-base md:text-start text-center font-medium leading-[22px] tracking-[6px]">
              – OUR CASE STUDIES{" "}
              <span className="md:hidden inline text-base">–</span>
            </h5>
            <h5 className="font-semibold  md:text-start text-center text-xl md:text-4xl md:leading-[52px] leading-[30px] text-white mt-3">
              GET INSIGHT INTO THE MANY POSSIBILITIES!
            </h5>
            <div className="flex md:flex-row flex-col justify-between items-center mt-4">
              <p className="text-base font-normal md:text-start text-center md:leading-8 leading-6">
                Learn how AI Agents are enpowering organizations to leverage Gen
                AI to drive effeciency and innovation.
              </p>
              <div className="flex items-center md:pt-0 pt-6 gap-x-8">
                <div
                  onClick={() => {
                    if (activeIndex !== 0) {
                      swiperRef?.current?.swiper?.slidePrev();
                    }
                  }}
                  className={`${
                    activeIndex === 0 ? "opacity-20" : "opacity-100"
                  } cursor-pointer flex justify-center items-center`}
                >
                  <ArrowIcon
                    width="24"
                    height="24"
                    className="rotate-[225deg]"
                  />
                </div>
                <div
                  onClick={() => {
                    if (activeIndex !== caseStudies?.length - 1) {
                      swiperRef?.current?.swiper?.slideNext();
                    }
                  }}
                  className={`
            ${isEnd ? "opacity-20" : "opacity-100"}
            cursor-pointer flex justify-center items-center`}
                >
                  <ArrowIcon
                    width="24"
                    height="24"
                    className="rotate-[45deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          onSlideChange={(e) => {
            setactiveIndex(e.activeIndex);
            setIsEnd(e.isEnd);
          }}
          className="md:mt-16 mt-6"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          slidesPerView={1}
        >
          {caseStudies.map((ele, index) => {
            return (
              <SwiperSlide key={index}>
                <CaseStudiesCard content={ele} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="lg:pt-16 pt-8 text-center">
          <button
            className="py-3 px-8 w-full lg:max-w-max rounded-lg bg-[#151515] border border-[#292929]"
            onClick={() => push("/case-studies")}
          >
            View all Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
