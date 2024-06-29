import {
  BoltShiftIcon,
  FeatherDevIcon,
  GlobalBankIcon,
  LightBoxIcon,
  SpheruleIcon,
} from "@/assets/svgs";

export default function PartnerSection() {
  return (
    <section className="bg-[#151515]">
      <div className="w-full max-w-[1440px] mx-auto bg-[#151515] border-y border-white/10">
        <div className="md:py-[100px] md:px-[120px] py-8 overflow-x-hidden relative px-14 w-full flex flex-col gap-6 ">
          <h5 className="text-center text-lg text-white">
            Partners in Innnovation
          </h5>
          <div className="flex xl:justify-between gap-10 lg:animate-none animate-scroll items-center">
            <div className="block">
              <BoltShiftIcon />
            </div>
            <div className="block">
              <LightBoxIcon />
            </div>
            <div className="block">
              <FeatherDevIcon />
            </div>
            <div className="block">
              <SpheruleIcon />
            </div>
            <div className="block">
              <GlobalBankIcon />
            </div>
          </div>
          <div className="md:hidden flex justify-between md:gap-0 gap-10 md:animate-none animate-scroll items-center">
            <div className="block">
              <LightBoxIcon />
            </div>
            <div className="block">
              <BoltShiftIcon />
            </div>
            <div className="block">
              <SpheruleIcon />
            </div>
            <div className="block">
              <GlobalBankIcon />
            </div>
            <div className="block">
              <FeatherDevIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
