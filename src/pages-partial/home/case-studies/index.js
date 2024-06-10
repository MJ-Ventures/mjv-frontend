"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowIcon } from "@/assets/svgs";

export default function CaseStudies() {
  const data = [
    {
      title: "Mapping Data AI",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  ",
      imgSrc: "/images/case-studies/1.png",
      tags: [
        "Data Analysis",
        "Data Analysis",
        "UI/UX Design",
        "Software Development",
      ],
    },
    {
      title: "Smart Media AI",
      imgSrc: "/images/case-studies/2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  ",
      tags: [
        "Data Analysis",
        "Data Analysis",
        "UI/UX Design",
        "Software Development",
      ],
    },
    {
      title: "Cooking AI",
      imgSrc: "/images/case-studies/1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  ",
      tags: [
        "Data Analysis",
        "Data Analysis",
        "UI/UX Design",
        "Software Development",
      ],
    },
    {
      title: "Image Reader AI",
      imgSrc: "/images/case-studies/2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras  ",
      tags: [
        "Data Analysis",
        "Data Analysis",
        "UI/UX Design",
        "Software Development",
      ],
    },
  ];
  const swiperRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const slidesPerView = 3;

  return (
    <div className="py-24 bg-black px-2 text-white">
      <div className="relative">
        <div>
          <h5 className="text-base md:text-start text-center font-medium leading-[22px] tracking-[6px]">
            – OUR CASE STUDIES{" "}
            <span className="md:hidden inline text-base">–</span>
          </h5>
          <h5 className="font-semibold  md:text-start text-center text-xl md:text-4xl nd:leading-[52px] leading-[30px] text-white mt-3">
            GET INSIGHT INTO THE MANY POSSIBILITIES!
          </h5>
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <p className="text-base font-normal md:text-start text-center md:leading-8 leading-6">
              Our team has spent years building software products for political
              campaigns and non-profits. <br className="md:inline hidden" />{" "}
              We’ve learned, sometimes the hard way, that small orgs need to
              build smarter tech to stay competitive.{" "}
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
                <ArrowIcon width="24" height="24" className="rotate-[225deg]" />
              </div>
              <div
                onClick={() => {
                  if (activeIndex !== data?.length - 1) {
                    swiperRef?.current?.swiper?.slideNext();
                  }
                }}
                className={`
            ${isEnd ? "opacity-20" : "opacity-100"}
            cursor-pointer flex justify-center items-center`}
              >
                <ArrowIcon width="24" height="24" className="rotate-[45deg]" />
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
        {data.map((ele, index) => {
          const { title, description, imgSrc, tags } = ele;
          return (
            <SwiperSlide key={index}>
              <div className="border border-[#292929] bg-[#151515] rounded-sm ">
                <div className="flex flex-col md:p-8 p-4 nd:gap-4 gap-5">
                  <img src={imgSrc} />
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
                            className="md:py-2.5 md:px-4 p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <p className="text-base leading-8">See Case Study</p>
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="cursor-pointer hover:translate-x-2 transition-all rotate-[45deg]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="lg:pt-16 pt-8 text-center">
        <button className="py-3 px-8 w-full lg:max-w-max rounded-lg bg-[#151515] border border-[#292929]">
          View all Case Studies
        </button>
      </div>
    </div>
  );
}
