import { ArrowIcon, MinusIcon, PlusIcon } from "@/assets/svgs";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function FaqSection() {
  return (
    <section className="w-full border-y border-white/10">
      <div className="lg:py-[120px] lg:px-[160px] py-10 px-3 w-full flex flex-col gap-6">
        <div className="flex lg:flex-row flex-col gap-4 ">
          <div className="lg:w-3/4 w-full space-y-4 flex-1">
            <h1 className="lg:text-[52px] text-xl lg:text-start text-center uppercase text-white lg:leading-[67px] leading-8 font-bold">
              Frequently asked questions ?
            </h1>
            <p className="uppercase text-center lg:text-start text-lg text-white leading-7">
              You’ve got question? <br />
              Here are some of the answers and answers from{" "}
              <br className="lg:inline hidden" /> MJV TEAM
            </p>
            <button className="py-4 my-6 px-14 lg:block hidden text-white rounded-lg bg-[#151515] border border-[#292929]">
              Contact Us
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Disclosure
              as="div"
              className="p-5 bg-[#151515] border border-[#292929]"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl text-start w-4/5 uppercase font-medium text-white">
                  What industries do you specialize in for web development
                </span>
                <MinusIcon className="group-data-[open]:inline hidden" />
                <PlusIcon className="group-data-[open]:hidden inline" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                At MJ Ventures, we have extensive experience working with a wide
                range of industries, including e-commerce, healthcare, finance,
                education, and non-profits.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-5 bg-[#151515] border border-[#292929]"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl text-start w-4/5 uppercase font-medium text-white">
                  How long does it typically take to develop a custom web
                  application?
                </span>
                <MinusIcon className="group-data-[open]:inline hidden" />
                <PlusIcon className="group-data-[open]:hidden inline" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                Some content here.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-5 bg-[#151515] border border-[#292929]"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl text-start w-4/5 uppercase font-medium text-white">
                  DO YOU OFFER POST LAUNCH SUPPORT?
                </span>
                <MinusIcon className="group-data-[open]:inline hidden" />
                <PlusIcon className="group-data-[open]:hidden inline" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                At MJ Ventures, we have extensive experience working with a wide
                range of industries, including e-commerce, healthcare, finance,
                education, and non-profits.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-5 bg-[#151515] border border-[#292929]"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl text-start w-4/5 uppercase font-medium text-white">
                  WILL YOU HELP WITH STRATEGY?
                </span>
                <MinusIcon className="group-data-[open]:inline hidden" />
                <PlusIcon className="group-data-[open]:hidden inline" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                Some content here.
              </DisclosurePanel>
            </Disclosure>
          </div>
          <div>
            <button className="py-4 my-6 px-14 lg:hidden block w-full text-white rounded-lg bg-[#151515] border border-[#292929]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
