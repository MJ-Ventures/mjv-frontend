import { ArrowIcon, Logo } from "@/assets/svgs";
import Link from "next/link";

const navMenu = [
  { text: "about us", link: "/#about-us" },
  { text: "services", link: "/#services" },
  { text: "our team", link: "/#our-team" },
  { text: "projects", link: "/#projects" },
  { text: "blog", link: "/blogs" },
];

export default function Header() {
  return (
    <header className="flex sticky top-0 items-center backdrop-blur-md z-50 justify-between">
      <Logo />
      <div className="flex gap-6">
        {navMenu.map((item, index) => {
          const { text, link } = item;
          return (
            <div
              key={index}
              className="flex gap-1.5 items-center cursor-pointer"
            >
              <p className="capitalize text-white"><Link href={link}>{text}</Link></p>
              {text === "blog" && <ArrowIcon className="" />}
            </div>
          );
        })}
      </div>
      <button className="py-3 px-8 text-white rounded-lg bg-[#151515] border border-[#292929]">
        Contact Us
      </button>
    </header>
  );
}
