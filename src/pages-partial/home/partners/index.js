import {
  BoltShiftIcon,
  FeatherDevIcon,
  GlobalBankIcon,
  LightBoxIcon,
  SpheruleIcon,
} from "@/assets/svgs";

export default function PartnerSection() {
  return (
    <section className="w-full border-y border-white/10">
      <div className="py-[100px] px-[120px] w-full flex flex-col gap-6 ">
        <h5 className="text-center text-lg text-white">Partners in Innnovation</h5>
        <div className="flex justify-between items-center">
          <BoltShiftIcon />
          <LightBoxIcon />
          <FeatherDevIcon />
          <SpheruleIcon />
          <GlobalBankIcon />
        </div>
      </div>
    </section>
  );
}
