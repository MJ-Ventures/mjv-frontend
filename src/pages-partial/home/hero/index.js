import TextCounter from "./counter";

export default function Hero() {
  return (
    <section className="flex items-center mx-4 h-[70vh] border-y border-white/5">
      <div className="flex-2 flex flex-col h-full justify-center">
        <p className="text-[56px] uppercase pt-[90px] mb-10">
          BUILDING CUSTOM AI AGENTS for
        </p>
        <button className="py-3 px-8 rounded-lg w-80 bg-white text-black border border-[#292929]">
          Let&apos;s Discuss
        </button>
      </div>
      <div className="flex-1 h-full">
        <TextCounter />
      </div>
    </section>
  );
}
