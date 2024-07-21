"use client";
import useFetchCase from "@/hooks/case-studies";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CaseStudiesMain({ id }) {
  const { push } = useRouter();
  const { getSingleCaseStudy } = useFetchCase();
  const { data } = useQuery({
    queryKey: ["case-study"],
    queryFn: () => getSingleCaseStudy(id),
  });
  const {
    imgSrc,
    title,
    description,
    industry,
    duration,
    client,
    tags,
    features,
    developmentJourney,
    impactStories,
    futureDirections,
    marketReception,
    conclusion,
    error,
  } = data || {};

  if (error) {
    push("/case-studies");
  }

  return (
    <section className="border-b border-[#262626]">
      <div className="max-w-[1440px] mx-auto py-4">
        <div>
          <div className="lg:p-16 p-4">
            <div className="flex lg:flex-row flex-col gap-10">
              <img
                src={imgSrc}
                className="rounded-md max-h-[325px]"
                height={325}
                width={515}
                alt={title}
              />
              <div className="space-y-3 flex flex-col justify-between">
                <h1 className="text-2xl leading-9 text-white">{title}</h1>
                <p className="text-[#838381] text-lg leading-7">
                  {description}
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-base text-white">Industry</h4>
                    <p className="text-base text-[#838381]">{industry}</p>
                  </div>
                  <div>
                    <h4 className="text-base text-white">Duration</h4>
                    <p className="text-base text-[#838381]">{duration}</p>
                  </div>
                  <div>
                    <h4 className="text-base text-white">Client</h4>
                    <p className="text-base text-[#838381]">{client}</p>
                  </div>
                </div>
                <div className="py-5 lg:py-0">
                  <div className="flex flex-wrap gap-2 lg:pt-0 pt-3">
                    {tags?.map((tag, index) => (
                      <p
                        key={index}
                        className="py-2.5 px-4 md:text-base text-sm border rounded-md text-white hover:bg-white hover:text-[#292929] cursor-pointer border-white"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:py-8 py-4 lg:pl-16 p-4 lg:pr-[60px] space-y-6">
            <div className="space-y-4">
              <h4 className="text-[22px] font-semibold text-white">{title}</h4>
              <p>{description}</p>
              {features?.length && (
                <ul className="list-disc text-base pl-5">
                  {features?.map((feature, index) => (
                    <li className="text-white" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {developmentJourney?.length && (
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold text-white">
                  Development Journey
                </h4>
                {console.log(developmentJourney , "developmentJourney")}
                {developmentJourney?.map((step, index) => (
                  <div key={index}>
                    <p className="font-normal text-white">
                      <span className="font-semibold text-white">
                        {step.title} <br />
                      </span>
                      {step.description}
                    </p>
                    {step.items?.length 
                     && (
                      <ul className="list-disc text-base pl-5">
                        {step.items.map((item, subIndex) => (
                          <li className="text-white" key={subIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
            {impactStories?.length && (
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold text-white">
                  Impact and User Stories
                </h4>
                <p className="font-normal text-white">
                  <span className="font-semibold text-white">
                    Transforming Financial Lives <br />
                  </span>
                  Smart Money AI has made a tangible impact on user&apos;s
                  financial lives, empowering them to take control of their
                  finances. Here are a few success stories:
                </p>
                {impactStories?.map((story, index) => (
                  <p className="text-white" key={index}>
                    {story}
                  </p>
                ))}
              </div>
            )}
            {marketReception && (
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold text-white">
                  Market Reception and Growth
                </h4>
                <p className="font-normal text-white">{marketReception}</p>
              </div>
            )}
            {futureDirections?.length && (
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold text-white">
                  Future Directions
                </h4>
                <p className="font-normal text-white">
                  <span className="font-semibold text-white">
                    Enhancements and New Features <br />
                  </span>
                </p>
                <ul>
                  {futureDirections?.map((direction, index) => (
                    <li className="text-white" key={index}>
                      {direction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {conclusion && (
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold text-white">
                  Conclusion
                </h4>
                <p className="font-normal text-white">{conclusion}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
