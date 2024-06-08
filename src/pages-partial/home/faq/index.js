import { ArrowIcon } from "@/assets/svgs";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function FaqSection() {
  return (
    <section className="w-full border-y border-white/10">
      <div className="py-[120px] px-[160px] w-full flex flex-col gap-6">
        <div className="flex ">
          <div className="w-3/4 space-y-4 flex-1">
            <h1 className="text-[52px] uppercase text-white leading-[67px] font-bold">
              Frequently asked questions ?
            </h1>
            <p className="uppercase text-lg text-white leading-7">
              You’ve got question? <br />
              Here are some of the answers and answers from <br /> MJV TEAM
            </p>
            <button className="py-4 my-6 px-14 text-white rounded-lg bg-[#151515] border border-[#292929]">
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
                <ArrowIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
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
                <ArrowIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
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
                <ArrowIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
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
                <ArrowIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                Some content here.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
}
