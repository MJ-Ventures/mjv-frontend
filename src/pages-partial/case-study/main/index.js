import { SinglecaseStudy } from "@/components/consts/case-studies";

export default function CaseStudiesMain() {
  return (
    <section className="border-b border-[#262626]">
      <div className="max-w-[1440px] mx-auto py-4">
        {SinglecaseStudy.map((caseStudy) => (
          <div key={caseStudy.id}>
            <div className="lg:p-16 p-4">
              <div className="flex lg:flex-row flex-col gap-10">
                <img
                  src={`/images/case-studies/${caseStudy.id}.png`}
                  className="rounded-md max-h-[325px]"
                  height={325}
                  width={515}
                  alt={caseStudy.title}
                />
                <div className="space-y-3 flex flex-col justify-between">
                  <h1 className="text-2xl leading-9">{caseStudy.title}</h1>
                  <p className="text-[#838381] text-lg leading-7">
                    {caseStudy.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="text-base">Industry</h4>
                      <p className="text-base text-[#838381]">{caseStudy.industry}</p>
                    </div>
                    <div>
                      <h4 className="text-base">Duration</h4>
                      <p className="text-base text-[#838381]">{caseStudy.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-base">Client</h4>
                      <p className="text-base text-[#838381]">{caseStudy.client}</p>
                    </div>
                  </div>
                  <div className="py-5 lg:py-0">
                    <div className="flex flex-wrap gap-2 lg:pt-0 pt-3">
                      {caseStudy.tags.map((tag, index) => (
                        <p key={index} className="py-2.5 px-4 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white">
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
                <h4 className="text-[22px] font-semibold">{caseStudy.title}</h4>
                <p>{caseStudy.description}</p>
                <ul className="list-disc text-base pl-5">
                  {caseStudy.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold">Development Journey</h4>
                {caseStudy.developmentJourney.map((step, index) => (
                  <div key={index}>
                    <p className="font-normal">
                      <span className="font-semibold">
                        {step.title} <br />
                      </span>
                      {step.description}
                    </p>
                    {step.items && (
                      <ul className="list-disc text-base pl-5">
                        {step.items.map((item, subIndex) => (
                          <li key={subIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold">Impact and User Stories</h4>
                <p className="font-normal">
                  <span className="font-semibold">
                    Transforming Financial Lives <br />
                  </span>
                  Smart Money AI has made a tangible impact on user&apos;s financial
                  lives, empowering them to take control of their finances. Here are
                  a few success stories:
                </p>
                {caseStudy.impactStories.map((story, index) => (
                  <p key={index}>{story}</p>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold">Market Reception and Growth</h4>
                <p className="font-normal">{caseStudy.marketReception}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold">Future Directions</h4>
                <p className="font-normal">
                  <span className="font-semibold">
                    Enhancements and New Features <br />
                  </span>
                </p>
                <ul>
                  {caseStudy.futureDirections.map((direction, index) => (
                    <li key={index}>{direction}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[22px] font-semibold">Conclusion</h4>
                <p className="font-normal">{caseStudy.conclusion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
