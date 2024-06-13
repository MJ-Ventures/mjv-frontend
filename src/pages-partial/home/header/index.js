import { ArrowIcon, Logo } from "@/assets/svgs";
import MenuIcon from "@/assets/svgs/menu-icon";
import { navMenu } from "@/components/consts/header";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
  return (
    <header className="flex lg:px-2 px-3 sticky top-0 md:bg-transparent bg-[#151515] md:border-0 border border-white/10  items-center backdrop-blur-md z-50 justify-between">
      <Link href='/'>
        <Logo />
      </Link>
      <div className="gap-6 md:flex hidden">
        {navMenu.map((item, index) => {
          const { text, link } = item;
          return (
            <div
              key={index}
              className="flex gap-1.5 items-center cursor-pointer"
            >
              <p className="capitalize text-white">
                <Link href={link}>{text}</Link>
              </p>
              {text === "blog" && <ArrowIcon className="" />}
            </div>
          );
        })}
      </div>
      <button className="py-3 px-8 text-white rounded-lg md:block hidden bg-[#151515] border border-[#292929]">
        Contact Us
      </button>
      <Popover className="group md:hidden block">
        <PopoverButton className="flex items-center gap-2 outline-none">
          <MenuIcon />
        </PopoverButton>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="duration-200 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <PopoverPanel
            anchor="bottom"
            className="flex bg-black h-screen mt-8 origin-top flex-col z-50 px-3 transition w-screen"
          >
            <div className="flex flex-col gap-3 py-10">
              {navMenu.map((item, index) => {
                const { text, link } = item;
                return (
                  <div
                    key={index}
                    className="flex gap-1.5 items-center cursor-pointer"
                  >
                    <p className="capitalize text-white">
                      <Link href={link}>{text}</Link>
                    </p>
                    {text === "blog" && <ArrowIcon className="" />}
                  </div>
                );
              })}
            </div>
            <button className="py-3 px-8 text-white rounded-lg bg-[#151515] border border-[#292929]">
              Contact Us
            </button>
          </PopoverPanel>
        </Transition>
      </Popover>
    </header>
  );
}
