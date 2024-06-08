import { ArrowIcon, BulbIcon } from "@/assets/svgs";

const data = [
  {
    title: "Generative AI Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
  {
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
  {
    title: "UX/UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
  {
    title: "Product Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
    icon: <BulbIcon />,
  },
];

export default function OurServices() {
  return (
    <section className="py-12" id="services">
      <div>
        <h5 className=" text-base text-white font-medium leading-[22px] tracking-[6px]">
          – OUR SERVICES
        </h5>
        <h5 className="font-semibold text-3xl md:text-4xl leading-[52px] text-white mt-3">
          HOW WE CAN <br /> HELP YOU
        </h5>
        <div className="flex justify-between items-center mt-4">
          <p className="text-base w-[65%] font-normal text-white leading-8">
            Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue.
            Lacus eget enim cras sollicitudin. Viverra pharetra lorem sit nulla
            ultrices integer risus. Massa placerat leo vitae accumsan.
          </p>
        </div>
        <div className="py-4">
          <button className="py-3 px-8 rounded-lg bg-[#151515] text-white border border-[#292929]">
            Get a Free Consultation!
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((element, index) => {
            const { description, icon, title } = element;
            return (
              <div
                key={index}
                className="h-full px-5 py-8 rounded-lg shadow-sm bg-center duration-300 outline outline-2 outline-transparent hover:bg-[#484847] cursor-pointer border border-[#292929] hover:outline-gray-200"
              >
                <div className="border border-white rounded h-12 w-12 flex items-center justify-center">
                  {icon}
                </div>
                <div className="!mt-6 spac-y-3">
                  <h3 className="text-[28px] text-white">{title}</h3>
                  <p className="mt-2 text-[#EAEAEB]">{description}</p>
                  <div className="flex items-center gap-4 pt-4">
                    <p className="text-base leading-8 text-white">Get Started</p>
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="cursor-pointer hover:translate-x-2 transition-all rotate-[45deg]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
