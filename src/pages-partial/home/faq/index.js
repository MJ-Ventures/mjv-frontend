"use client";

import { MinusIcon, PlusIcon } from "@/assets/svgs";
import { disclosureItems } from "@/components/consts/faq";
import { useModal } from "@/providers/modalProvider";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function FaqSection() {
  const { openModal } = useModal();

  return (
    <section className="w-full border-y max-w-[1440px] mx-auto border-white/10">
      <div className="max-w-[1120px] lg:py-20 mx-auto py-10 w-full flex flex-col gap-6">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="w-full space-y-4 flex-1">
            <h1 className="lg:text-5xl text-xl lg:text-start text-center uppercase text-white lg:!leading-[67px] leading-8 font-bold">
              Frequently Asked Questions
            </h1>
            <button onClick={openModal} className="py-4 my-6 px-14 lg:block hidden text-white rounded-lg bg-[#151515] border border-[#292929]">
              Contact Us
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {disclosureItems.map((item, index) => (
              <Disclosure
                key={index}
                as="div"
                className="p-5 bg-[#151515] border border-[#292929]"
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-xl text-start w-[91%] uppercase font-medium text-white">
                    {item.title}
                  </span>
                  <MinusIcon className="group-data-[open]:inline hidden" />
                  <PlusIcon className="group-data-[open]:hidden inline" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-lg leading-7 text-white">
                  {item.content}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
          <div>
            <button onClick={openModal} className="py-4 my-6 px-14 lg:hidden block w-full text-white rounded-lg bg-[#151515] border border-[#292929]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
