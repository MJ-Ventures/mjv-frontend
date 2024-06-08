export default function Contact() {
  return (
    <div className="relative py-40 px-[120px] space-y-10">
      <div className="relative flex">
        <div className="relative w-3/5">
          <div>
            <div className="flex items-center gap-2 pb-5">
              <h5 className="text-center  text-white uppercase text-base font-medium leading-[22px] tracking-[6px]">
                – Contact us –
              </h5>
            </div>
            <div className="w-full">
              <h2 className="text-[52px] leading-8 lg:leading-[52px] uppercase font-semibold -tracking-[0.02rem] text-white pb-5">
                Get in touch with us Today
              </h2>
              <p className="text-xl text-white w-[80%]">
                Lorem ipsum dolor sit amet consectetur. Nulla netus porta montes
                eget laoreet sit vitae.
              </p>
            </div>
            <form className="w-[80%]">
              <div className="mt-12">
                <div className="flex xl:items-center flex-col xl:flex-row gap-4 pb-6">
                  <div className="w-full">
                    <div className="flex flex-col gap-1.5 w-full">
                      <label
                        htmlFor="firstName"
                        className="text-base font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="px-3.5 py-2.5 bg-transparent border border-white/10 rounded-sm ouline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base "
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full pb-6">
                  <div className="flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-white"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="px-3.5 py-2.5 bg-transparent border border-white/10 rounded-sm ouline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base "
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 w-full pb-6">
                  <label
                    htmlFor="Message"
                    className="text-base font-medium text-white"
                  >
                    Your Inquiry
                  </label>
                  <textarea
                    name="message"
                    id="Message"
                    rows={4}
                    placeholder="Leave us a message ..."
                    className="px-3.5 py-3 resize-none border bg-transparent border-white/10 rounded-sm ouline-none focus:outline-none placeholder:text-gray-400 placeholder:text-base"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button className="w-full cursor-pointer rounded-lg shadow-xs py-3 px-5 text-center font-semibold text-base text-white bg-[#151515] border border-[#292929]">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div
          className="relative flex flex-col w-2/5 justify-center col-span-1"
          aria-hidden="true"
        >
          <img
            className="relative h-[80%] bg-contain"
            src="/images/contact/main.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#151515] py-12 px-8 relative">
        <h2 className="text-3xl pb-4 text-white">Subscribe to our Newsletter</h2>
        <div className="grid grid-cols-5 gap-20">
          <p className="col-span-3 text-white">
            Lorem ipsum dolor sit amet consectetur. Nulla netus porta montes
            eget laoreet sit vitae. Lorem ipsum dolor sit amet consectetur.
            Nulla netus porta
          </p>
          <div className="col-span-1 flex items-center gap-4">
            <input
              type="text"
              className="bg-transparent border border-white/10 px-4 outline-none py-3.5 rounded-md"
              placeholder="Email address"
            />
            <button className="text-black bg-white text-sm py-4 px-8 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
