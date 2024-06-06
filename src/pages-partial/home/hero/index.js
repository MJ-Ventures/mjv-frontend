export default function Hero() {
  return (
    <section className="grid grid-cols-4 items-center border-y pt-10 pb-36 border-white/5">
      <div className="col-span-3">
        <p className="text-[56px] uppercase">BUILDING CUSTOM AI AGENTS for</p>
        <button className="py-3 px-8 rounded-lg bg-white text-black border border-[#292929]">
          Let&apos;s Discuss
        </button>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-2">
          <p className="text-5xl">Startups</p>
          <p className="text-5xl">Agency</p>
          <p className="text-5xl">Non-Profit</p>
          <p className="text-[56px]">EVERYONE</p>
          <p className="text-5xl">Government</p>
          <p className="text-5xl">Universities</p>
          <p className="text-5xl">SMBs</p>
        </div>
      </div>
    </section>
  );
}
