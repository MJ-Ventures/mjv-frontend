import CaseStudiesCard from "@/components/cards/case-studies";
import { caseStudies } from "@/components/consts/case-studies";

export default function CaseStudiesCards() {
  return (
    <section className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto py-16">
          <h5 className="text-base text-center font-medium leading-[22px] tracking-[6px]">
            – OUR CASE STUDIES{" "}
            <span className="md:hidden inline text-base">–</span>
          </h5>
        </div>
        <div className="grid grid-cols-2 ">
          {caseStudies.map((ele, index) => {
            return (
              <CaseStudiesCard
                key={index}
                content={ele}
                className="!border-0 bg-transparent"
                imgClasses="rounded-md h-[331px]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
