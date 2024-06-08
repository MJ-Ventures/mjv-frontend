import { navigation } from "./data";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl py-20 mx-auto">
        <p className="text-[52px] leading-[67px] font-semibold uppercase text-center text-[#151515]">
          MJ VENTURES IS a company THAT IS inspired by the future
        </p>
        <div className="py-12 text-center">
          <button className="py-3 px-16 rounded-lg text-white bg-[#292929] border border-[#292929]">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden w-full pb-10">
        <p className="text-8xl w-full font-bold uppercase animate-scroll text-[#292929]">
          Software Development + Generative AI Solutions + Web App Development +
          Mobile App Development + Product Strategy + UI/UX Design + Product
          Management + Data Science
        </p>
      </div>
      <div className="max-w-7xl mx-auto pb-10">
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 text-base flex gap-10 leading-5 text-[#292929] md:order-1 md:mt-0">
            <a href="tel:+17737106387" className="font-medium">+1 (773) 710-6387</a>
            <a href="mailto:support@mjventures.org" className="font-medium">support@mjventures.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
