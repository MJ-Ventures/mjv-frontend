import { navigation } from "@/components/consts/footer";
import { useModal } from "@/providers/modalProvider";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-white">
      <div className="max-w-5xl py-10 lg:py-20 mx-auto px-4">
        <p className="text-lg sm:text-3xl md:text-[52px] leading-tight md:leading-[67px] font-semibold uppercase text-center text-[#151515]">
          MJ VENTURES IS a company THAT IS inspired by the future
        </p>
        <div className="py-8 lg:py-12 text-center">
          <button onClick={openModal} className="py-3 px-10 sm:px-16 rounded-lg text-white bg-[#292929] border border-[#292929]">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden w-full pb-10">
        <p className="text-3xl sm:text-4xl md:text-8xl w-full font-bold uppercase animate-scroll text-[#292929] whitespace-nowrap">
          Software Development + Generative AI Solutions + Web App Development +
          Mobile App Development + Product Strategy + UI/UX Design + Product
          Management + Data Science
        </p>
      </div>
      <div className="max-w-7xl mx-auto pb-10 px-4">
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 justify-center md:justify-end md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 text-base flex flex-col items-center md:flex-row gap-4 justify-center md:justify-start leading-5 text-[#292929] md:order-1">
            <a href="tel:+17737106387" className="font-medium">
              +1 (773) 710-6387
            </a>
            <a href="mailto:support@mjventures.org" className="font-medium">
              support@mjventures.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
