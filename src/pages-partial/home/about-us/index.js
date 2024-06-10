const data = [
  {title: 'Visionary Planning'},
  {title: 'INITIAL IMPACT'},
  {title: 'RAPID VALUE CREATION'},
  {title: 'SCALING INNOVATION'},
]

export default function AboutUs() {
  return (
    <section className="relative border-b border-white/10" id="about-us">
      <div className="relative z-0 ">
        <img src="/images/about-us/1.png" className="lg:h-full h-[412px] bg-cover w-full" />
      </div>
      <div className="max-w-screen-lg mx-auto lg:-mt-56 -mt-40 z-10 relative">
        <div className="max-w-[906px] m-16 mx-auto w-full flex flex-col gap-3 lg:px-0 px-3">
          <h5 className="text-center text-base text-white font-medium leading-[22px] tracking-[6px]">
            – ABOUT US –
          </h5>
          <h1 className="text-center text-white md:text-[52px] text-2xl font-semibold md:leading-relaxed leading-0">
            THE MJV STORY{" "}
          </h1>
          <p className="text-center text-base font-normal text-white lg:leading-8 leading-5">
            Founded in 2023 by longtime friends and developers from Chicago, MJ
            Ventures brings over a decade of experience to our projects. Our
            passion for building impactful products has driven us to work on
            diverse projects, from political campaigns to non-profits.
          </p>
        </div>
        <div>
          <div className="my-16 mx-0">
            <h5 className="text-xl text-center text-white">How We Collaborate with You</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 lg:px-0 px-3">
              {data
                .map((element,index) => {
                  const { title} = element
                  return (
                    <div key={index} className="py-8 px-6 space-y-4 bg-[#151515] border border-[#292929]">
                      <h4 className="uppercase text-white">{title}</h4>
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
          <div className="pb-10 text-center px-3 lg:px-0">
            <button className="py-3 px-8 lg:max-w-max w-full rounded-lg text-white bg-[#151515] border border-[#292929]">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
