'use client';

import { aboutus } from "@/components/consts/about-us";
import { useModal } from "@/providers/modalProvider";

export default function AboutUs() {
  const { openModal } = useModal();

  return (
    <section
      className="relative border-b  mx-auto border-white/10"
      id="about-us"
    >
      <div className="relative z-0 ">
        <video
          src={'https://firebasestorage.googleapis.com/v0/b/mjv-landing.appspot.com/o/video%2Fabout.mp4?alt=media&token=f16ef0bc-0b39-420b-9c4e-6e197bc9a7ea'}
          className="lg:h-full h-[412px] bg-cover w-full"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent/0" />
      </div>
      <div className="max-w-screen-lg mx-auto lg:-mt-56 -mt-40 z-10 relative">
        <div className="max-w-[906px] m-16 mx-auto w-full flex flex-col gap-3 lg:px-0 px-3">
          {/* <h5 className="text-center text-base text-white font-medium leading-[22px] tracking-[0.5px]">
            About Us
          </h5> */}
          <h1 className="text-center text-white md:text-[52px] text-2xl font-semibold md:leading-relaxed leading-0">
            THE MJV STORY{" "}
          </h1>
          <h5 className="text-center text-base text-white font-thin leading-[22px] tracking-[0.5px] pb-3">
            Outcome Driven | Innovation First | Builder Led
          </h5>
          <p className="text-center text-base font-light text-white lg:leading-6 leading-5 text-[#919191]">
            MJV exist to help forward thinking organizations embed AI Agents
            across their team. We are a team of interdisciplinary engineers
            laser-focused on supporting our partners in navigating the ongoing
            AI revolution. We are your trusted partner in building impactful AI
            products that solve critical problems for you, your team and your
            customers.
          </p>
        </div>
        <div>
          <div className="my-16 mx-0">
            <h5 className="text-xl text-center text-white">
              How We Collaborate with You
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 lg:px-0 px-3">
              {aboutus.map((element, index) => {
                const { title, description } = element;
                return (
                  <div
                    key={index}
                    className="py-8 px-6 space-y-4 bg-[#151515] border border-[#292929]"
                  >
                    <h4 className="uppercase text-white">{title}</h4>
                    <p className="text-[#A5A5A1]">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pb-10 text-center px-3 lg:px-0">
            <button onClick={openModal} className="py-3 px-8 lg:max-w-max w-full rounded-lg text-white bg-[#151515] border border-[#292929]">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
