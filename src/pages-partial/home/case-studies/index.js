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
  const slidesPerView = 3;

  return (
    <div className="py-24 bg-black text-white">
      <div className="relative">
        <div>
          <h5 className=" text-base font-medium leading-[22px] tracking-[6px]">
            – OUR CASE STUDIES
          </h5>
          <h5 className="font-semibold text-3xl md:text-4xl leading-[52px] text-white mt-3">
            GET INSIGHT INTO THE MANY POSSIBILITIES!
          </h5>
          <div className="flex justify-between items-center mt-4">
            <p className="text-base font-normal leading-8">
              Our team has spent years building software products for political
              campaigns and non-profits. <br /> We’ve learned, sometimes the
              hard way, that small orgs need to build smarter tech to stay
              competitive.{" "}
            </p>
            <div className="flex items-center gap-x-8">
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
            ${
              activeIndex === data?.length - slidesPerView
                ? "opacity-20"
                : "opacity-100"
            }
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
        }}
        className="mt-16"
        slidesPerView={slidesPerView}
      >
        {data.map((ele, index) => {
          const { title, description, imgSrc, tags } = ele;
          return (
            <SwiperSlide key={index}>
              <div className="border border-[#292929] bg-[#151515] rounded-sm ">
                <div className="flex flex-col p-8 gap-4">
                  <img src={imgSrc} />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-3xl font-medium leading-8">{title}</h4>
                    <p className="text-sm leading-7 text-[#EAEAEB]">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((item, index) => {
                        return (
                          <p
                            key={index}
                            className="py-2.5 px-4 border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white"
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
      <div className="pt-16 text-center">
        <button className="py-3 px-8 rounded-lg bg-[#151515] border border-[#292929]">
          View all Case Studies
        </button>
      </div>
    </div>
  );
}
