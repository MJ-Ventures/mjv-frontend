export default function CaseStudiesMain() {
  return (
    <section>
      <div className="py-16 px-20 max-w-[1440px] mx-auto">
        <div className="flex gap-10">
          <img
            src="/images/case-studies/1.png"
            className="rounded-md"
            height={325}
            width={515}
          />
          <div className="space-y-3">
            <h1 className="text-2xl leading-9">Smart Money AI</h1>
            <p className="text-[#838381] text-lg leading-7">
              Smart Money AI, developed by MJ Ventures, is designed to transform
              personal finance management using advanced artificial
              intelligence. It provides personalized financial advice, automates
              budgeting, and optimizes investments, making it a revolutionary
              tool for individuals seeking financial stability and growth.{" "}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-base">Industry</h4>
                <p className="text-base text-[#838381]">Fintech</p>
              </div>
              <div>
                <h4 className="text-base">Duration</h4>
                <p className="text-base text-[#838381]">4 Months</p>
              </div>
              <div>
                <h4 className="text-base">Client</h4>
                <p className="text-base text-[#838381]">Jane Smith</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 lg:pt-0 pt-3">
                <p className="md:py-2.5 md:px-4 p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white">
                  Data Anaylsis
                </p>
                <p className="md:py-2.5 md:px-4 p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white">
                  Data Anaylsis
                </p>
                <p className="md:py-2.5 md:px-4 p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white">
                  UI/UX Design
                </p>
                <p className="md:py-2.5 md:px-4 p-1 md:text-base text-sm border rounded-md hover:bg-white hover:text-[#292929] cursor-pointer border-white">
                  Software Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
