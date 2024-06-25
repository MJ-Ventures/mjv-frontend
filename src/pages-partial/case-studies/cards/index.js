'use client'
import CaseStudiesCard from "@/components/cards/case-studies";
import useFetchCase from "../../../hooks/case-studies";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

export default function CaseStudiesCards() {
  const { getCaseStudies } = useFetchCase();
  const [caseStudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const caseStudies = await getCaseStudies();
      setCaseStudies(caseStudies);
      setIsLoading(false);
    })();
  }, []);

  return (
    <section className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto py-16">
          <h5 className="text-base text-center font-medium leading-[22px] tracking-[6px]">
            – OUR CASE STUDIES{" "}
            <span className="md:hidden inline text-base">–</span>
          </h5>
        </div>
        {isLoading ? (
          <div className="text-base justify-center flex items-center gap-2 mx-auto pt-2 mb-2 text-white">
            <Spinner color="white" size="md" /> Loading Case Studies....{" "}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 grid-cols-1">
            {caseStudies?.map((ele, index) => {
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
        )}
      </div>
    </section>
  );
}
