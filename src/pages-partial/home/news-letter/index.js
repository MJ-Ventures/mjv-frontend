export default function NewsLetter() {
  return (
    <div className="bg-[#151515] py-12 px-4 sm:px-8 relative" id="newsletter">
      <h2 className="text-2xl sm:text-3xl pb-4 text-white">
        Subscribe to our Newsletter
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">
        <p className="lg:col-span-3 col-span-5 text-white">
          Lorem ipsum dolor sit amet consectetur. Nulla netus porta montes eget
          laoreet sit vitae. Lorem ipsum dolor sit amet consectetur. Nulla netus
          porta
        </p>
        <div className="lg:col-span-2 col-span-5 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            className="bg-transparent border border-white/10 px-4 py-3.5 rounded-md outline-none w-full md:w-full sm:w-auto"
            placeholder="Email address"
          />
          <button className="text-black bg-white text-sm py-4 px-8 rounded-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
