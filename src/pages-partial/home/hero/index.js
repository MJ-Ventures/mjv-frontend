import TextCounter from "./counter";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mx-4 lg:h-[70vh] 2xl:h-[60vh] h-full border-y border-white/5">
        <div className="flex-2 flex flex-col h-full justify-center">
          <p className="md:text-[4.1rem] text-3xl font-semibold md:leading-[55px] lg:leading-[80px] leading-10 text-white uppercase lg:pt-[90px] pt-10 lg:mb-10 mb-2">
            BUILDING AI AGENTS for
          </p>
          <div className="h-[50px] lg:hidden block mb-4">
            <TextCounter />
          </div>
          <button className="py-3 px-8 rounded-lg lg:w-80 w-full bg-white text-black border border-[#292929]">
            Let&apos;s Discuss
          </button>
        </div>
        <div className="flex-1 h-full hidden lg:block">
          <TextCounter />
        </div>
      </div>
    </section>
  );
}
