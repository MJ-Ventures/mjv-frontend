import Image from "next/image";

const partners = [
  { src: "/images/partners/venti.svg", alt: "Venti" },
  { src: "/images/partners/bantam.svg", alt: "Bantam" },
  { src: "/images/partners/chicagoscholars.svg", alt: "Chicago Scholars" },
  { src: "/images/partners/uchicago.svg", alt: "UChicago" },
  { src: "/images/partners/ground.svg", alt: "Ground" },
];

const RenderImages = () => {
  return partners.map((partner, index) => (
    <div key={index} className="lg:block inline">
      <Image
        src={partner.src}
        alt={partner.alt}
        height={90}
        width={200}
      />
    </div>
  ));
};

export default function PartnerSection() {
  return (
    <section className="bg-[#151515]">
      <div className="w-full max-w-[1440px] mx-auto bg-[#151515] border-y border-white/10">
        <div className="md:py-16 md:px-[120px] py-4 overflow-x-hidden relative lg:px-14 px-2 w-full flex flex-col gap-2 ">
          <h5 className="text-center text-lg text-white">
            Partners in Innnovation
          </h5>
          <div className="flex xl:justify-between lg:gap-10 gap-2 lg:animate-none animate-scroll items-center">
            <RenderImages />
          </div>
          <div className="md:hidden flex justify-between md:gap-0 gap-2 md:animate-none animate-scroll items-center">
            <RenderImages />
          </div>
        </div>
      </div>
    </section>
  );
}
