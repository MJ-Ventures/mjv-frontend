import { team } from "@/components/consts/team";

export default function OurTeam() {
  return (
    <section
      className="w-full lg:py-12 py-6 lg:px-0 px-3 border-b border-white/10"
      id="our-team"
    >
      <div className="lg:py-[100px] py-10 lg:px-[120px] w-full flex flex-col lg:gap-6 gap-3">
        <h5 className="text-center text-base font-medium text-white leading-[22px] tracking-[6px]">
          – OUR TEAM –
        </h5>
        <h1 className="text-center md:text-[52px] text-xl font-semibold text-white leading-relaxed">
          MEET THE MJV TEAM{" "}
        </h1>
        <p className="text-center text-base font-normal text-white lg:leading-8 leading-6">
          Our team has spent years building software products for political
          campaigns and non-profits. <br className="hidden lg:inline" /> We’ve
          learned, sometimes the hard way, that small orgs need to build smarter
          tech to stay competitive.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between md:gap-4 gap-4">
        {team.map((item, index) => {
          const { imgSrc, fullName, designation } = item;
          return (
            <div key={index} className="flex flex-col gap-6">
              <div className="bg-[#151515] rounded-lg md:mx-5 mx-0">
                <img src={imgSrc} />
              </div>
              <div className="text-center py-2">
                <p className="lg:text-2xl md:text-lg text-base leading-10 font-semibold text-white">
                  {fullName}
                </p>
                <p className="lg:text-xl md:text-base text-sm lg:leading-7 leading-5 text-[#838381]">
                  {designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-12 text-center">
        <button className="py-3 px-8 lg:max-w-max w-full rounded-lg text-white bg-[#151515] border border-[#292929]">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
