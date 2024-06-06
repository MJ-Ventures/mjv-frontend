export default function AboutUs() {
  return (
    <section className="relative border-b border-white/10" id="about-us">
      <div className="relative z-0">
        <img src="/images/about-us/1.png" />
        <div className="h-14 w-full bg-black  backdrop-blur-lg absolute bottom-0"></div>
      </div>
      <div className="max-w-screen-lg mx-auto -mt-56 z-10 relative">
        <div className="max-w-[906px] m-16 mx-auto w-full flex flex-col gap-3">
          <h5 className="text-center text-base font-medium leading-[22px] tracking-[6px]">
            – ABOUT US –
          </h5>
          <h1 className="text-center text-[52px] font-semibold leading-relaxed">
            THE MJV STORY{" "}
          </h1>
          <p className="text-center text-base font-normal leading-8">
            Founded in 2023 by longtime friends and developers from Chicago, MJ
            Ventures brings over a decade of experience to our projects. Our
            passion for building impactful products has driven us to work on
            diverse projects, from political campaigns to non-profits.
          </p>
        </div>
        <div>
          <div className="my-16 mx-0">
            <h5 className="text-xl text-center">How We Collaborate with You</h5>
            <div className="grid grid-cols-2 gap-8 pt-8">
              {Array(4)
                .fill()
                .map((ele,index) => {
                  return (
                    <div key={index} className="py-8 px-6 space-y-4 bg-[#151515] border border-[#292929]">
                      <h4>Visionary Planning</h4>
                      <p className="text-[#A5A5A1]">
                        Lorem ipsum dolor sit amet consectetur. Dignissim dictum
                        scelerisque dictumst integer purus pharetra felis.
                        Mauris suspendisse molestie nisl mattis viverra eget
                        tempus nunc sit. Maecenas augue pellentesque{" "}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="pb-10 text-center">
            <button className="py-3 px-8 rounded-lg bg-[#151515] border border-[#292929]">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
