import { ArrowIcon, ImagePolityIcon, NewsIcon } from "@/assets/svgs";
import { team } from "@/components/consts/team";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

export default function BlogHeroSection() {
  return (
    <section className="">
      <div className="border-b border-white/10 px-4 sm:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-3 py-5 lg:py-10">
            <p className="md:text-xl text-lg text-white/50">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="text-3xl leading-9 md:leading-[53px] md:text-[55px] text-white">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#EAEAEB] w-full md:text-base text-sm md:leading-6 leading-[21px] lg:w-[85%]">
              Welcome to the epicenter of AI innovation. MJ Ventures is your
              passport to a world where machines think, learn, and reshape the
              future.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="mt-5 lg:pt-28">
              <div className="bg-[#151515] p-1 max-w-max rounded-full md:mx-auto mx-0 lg:mx-0">
                <AvatarGroup>
                  {team.map((item, index) => {
                    const { imgSrc } = item;
                    return (
                      <Avatar
                        imgProps={{ className: "bg-[#292929] cursor-pointer" }}
                        key={index}
                        src={imgSrc}
                      />
                    );
                  })}
                </AvatarGroup>
              </div>
              <div className="py-3 lg:text-left">
                <p className="text-xl text-white flex items-center gap-2 ">
                  The Digital Polity Newsletter. <ImagePolityIcon />
                </p>
                <p className="text-base text-white/50 py-3 w-full lg:w-[85%] mx-auto lg:mx-0">
                  The Digital Polity is the dynamic, in-depth newsletter on the
                  intersection of AI, technology, public policy, & politics.
                </p>
                <div>
                  <button className="py-3 px-8 w-full lg:w-auto flex items-center justify-center lg:justify-start gap-3 rounded-lg text-white bg-[#151515] border border-[#292929]">
                    Subscribe Now
                    <ArrowIcon height={10} width={10} className="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y lg:divide-y-0 lg:divide-x divide-white/10 grid grid-cols-1 lg:grid-cols-3 px-4 sm:px-10">
        <div className="py-10 space-y-4 text-center lg:text-left lg:pl-16">
          <NewsIcon className="mx-auto lg:mx-0" />
          <div>
            <h5 className="text-white">Latest News Updates</h5>
            <p className="text-white/50">Stay Current</p>
          </div>
        </div>
        <div className="py-10 space-y-4 text-center lg:text-left lg:pl-16">
          <NewsIcon className="mx-auto lg:mx-0" />
          <div>
            <h5 className="text-white">Expert Contributors</h5>
            <p className="text-white/50">Trusted Insights</p>
          </div>
        </div>
        <div className="py-10 space-y-4 text-center lg:text-left lg:pl-16">
          <NewsIcon className="mx-auto lg:mx-0" />
          <div>
            <h5 className="text-white">Global Readership</h5>
            <p className="text-white/50">Worldwide Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
