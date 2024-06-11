import { ArrowIcon, NewsIcon } from "@/assets/svgs";
import { team } from "@/components/consts/team";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
export default function BlogHeroSection() {
  return (
    <section className="">
      <div className="border-b border-white/10 px-10 py-14">
        <div className="grid grid-cols-5">
          <div className="col-span-3 py-10">
            <p className="text-xl text-white/50">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="text-[55px] text-white">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#EAEAEB] w-[85%]">
              Welcome to the epicenter of AI innovation. MJ Ventures is your
              passport to a world where machines think, learn, and reshape the
              future.{" "}
            </p>
          </div>
          <div className="col-span-2">
            <div className="pt-36">
              <div className="bg-[#151515] p-1 max-w-max rounded-full">
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
              <div className="py-3">
                <p className="text-xl text-white">
                  The Digital Polity Newsletter.
                </p>
                <p className="text-base text-white/50 py-3 w-[85%]">
                  The Digital Polity is the dynamic, in-depth newsletter on the
                  intersection of AI, technology, public policy, & politics
                </p>
                <div>
                  <button className="py-3 px-8 lg:max-w-max w-full flex items-center gap-3 rounded-lg text-white bg-[#151515] border border-[#292929]">
                    Subscribe Now{" "}
                    <ArrowIcon height={10} width={10} className="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-x divide-white/10 grid grid-cols-3 px-10">
        <div className="py-10 space-y-4 pl-16">
          <NewsIcon />
          <div>
            <h5 className="text-white">Latest News Updates</h5>
            <p className="text-white/50">Stay Current</p>
          </div>
        </div>
        <div className="py-10 space-y-4 pl-16">
          <NewsIcon />
          <div>
            <h5 className="text-white">Expert Contributors</h5>
            <p className="text-white/50">Trusted Insights</p>
          </div>
        </div>
        <div className="py-10 space-y-4 pl-16">
          <NewsIcon />
          <div>
            <h5 className="text-white">Global Readership</h5>
            <p className="text-white/50">Worldwide Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
