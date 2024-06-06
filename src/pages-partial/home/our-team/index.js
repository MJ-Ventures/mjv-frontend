const team = [
  {
    fullName: "Marley Rosario",
    designation: "Chief Executive Officer",
    imgSrc: "/images/team/marley-rosario.png",
  },
  {
    fullName: "Martyna Paruch",
    designation: "Chief Technology Officer",
    imgSrc: "/images/team/martyna-paruch.png",
  },
  {
    fullName: "Forrest Haydon",
    designation: "Chief Product Officer",
    imgSrc: "/images/team/forrest-haydon.png",
  },
  {
    fullName: "Jacob Salazar",
    designation: "Chief Operating Officer",
    imgSrc: "/images/team/jacob-salazar.png",
  },
  {
    fullName: "Sam Aguilar",
    designation: "Chief Design Officer",
    imgSrc: "/images/team/sam-aguilar.png",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full py-12" id="our-team">
      <div className="py-[100px] px-[120px] w-full flex flex-col gap-6">
        <h5 className="text-center text-base font-medium leading-[22px] tracking-[6px]">
          – OUR TEAM –
        </h5>
        <h1 className="text-center text-[52px] font-semibold leading-relaxed">
          MEET THE MJV TEAM{" "}
        </h1>
        <p className="text-center text-base font-normal leading-8">
          Our team has spent years building software products for political
          campaigns and non-profits. <br /> We’ve learned, sometimes the hard
          way, that small orgs need to build smarter tech to stay competitive.{" "}
        </p>
      </div>
      <div className="flex justify-between gap-4">
        {team.map((item, index) => {
          const { imgSrc, fullName, designation } = item;
          return (
            <div key={index} className="flex flex-col gap-6">
              <div className="bg-[#151515] rounded-lg mx-5">
                <img src={imgSrc} />
              </div>
              <div className="text-center py-2">
                <p className="text-2xl leading-10 font-semibold">{fullName}</p>
                <p className="text-xl leading-7 text-[#838381]">
                  {designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-24 text-center">
        <button className="py-3 px-8 rounded-lg bg-[#151515] border border-[#292929]">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
