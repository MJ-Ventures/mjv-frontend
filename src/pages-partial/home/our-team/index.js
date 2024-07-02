import LinkedInIcon from "@/assets/svgs/linkedin-icon";
import { team } from "@/components/consts/team";
import { useModal } from "@/providers/modalProvider";
import Link from "next/link";

export default function OurTeam() {
  const { openModal } = useModal();

  return (
    <section
      className="w-full lg:py-12 py-6 max-w-[1440px] mx-auto lg:px-0 px-3 border-b border-white/10"
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
          Our small but passionate team is ready to help you bring your AI
          vision to life.
          <br className="hidden lg:inline" /> We are excited to get to know you,
          so here’s a little bit about us!
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-between md:gap-4 gap-4">
        {team.map((item, index) => {
          const { imgSrc, fullName, designation , linkedinUrl } = item;
          return (
            <div key={index} className="flex flex-col gap-6">
              <div className="bg-[#151515] rounded-lg md:mx-5 mx-0">
                <img src={imgSrc} />
              </div>
              <div className="text-center py-2">
                <p className="lg:text-2xl flex items-center gap-2 justify-center md:text-lg text-base leading-10 font-semibold text-white">
                  {fullName}
                  <Link href={linkedinUrl} target="_blank">
                    <LinkedInIcon />
                  </Link>
                </p>
                <p className="text-base lg:leading-6 pt-2 leading-5 text-[#838381]">
                  {designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-12 text-center">
        <button onClick={openModal} className="py-3 px-8 lg:max-w-max w-full rounded-lg text-white bg-[#151515] border border-[#292929]">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
