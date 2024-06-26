"use client";

import { useState } from "react";
import useContactForm from "@/hooks/contact";
import { toast } from "react-toastify";
import Image from "next/image";

export default function ContactForm({ className }) {
  const { submitContact } = useContactForm();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact({ firstName, email, message });
      toast.success("Response Submitted!", {
        theme: "dark",
      });
      setFirstName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err, "error");
    }
  };

  return (
    <div className={`relative flex flex-col-reverse lg:flex-row ${className}`}>
      <div className="relative lg:w-3/5 w-full">
        <div>
          <div className="flex items-center gap-2 pb-5">
            <h5 className="text-center text-white uppercase text-base font-medium leading-[22px] tracking-[6px]">
              – Contact us –
            </h5>
          </div>
          <div className="w-full">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] md:leading-10 leading-8 lg:leading-[52px] uppercase font-semibold -tracking-[0.02rem] text-white pb-5">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white w-full lg:w-[80%]">
              We work in-person to ensure we are accessible, collaborative and
              stay as innovative and focused on our work as possible.
            </p>
          </div>
          <form className="w-full lg:w-[80%]" onSubmit={handleSubmit}>
            <div className="mt-8 lg:mt-12">
              <div className="flex flex-col xl:flex-row gap-4 pb-6">
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
                      className="px-3.5 py-2.5 text-white bg-transparent border border-white/10 rounded-sm outline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
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
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="px-3.5 py-2.5 bg-transparent border text-white border-white/10 rounded-sm outline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                  className="px-3.5 py-3 resize-none text-white bg-transparent border border-white/10 rounded-sm outline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="w-full cursor-pointer rounded-lg shadow-xs py-3 px-5 text-center font-semibold text-base text-white bg-[#151515] border border-[#292929]"
            />
          </form>
        </div>
      </div>
      <div className="relative flex flex-col w-full lg:w-2/5 justify-center col-span-1 mb-10 lg:mb-0">
        <Image
          className="relative h-full w-full object-cover"
          src="/images/contact/main.jpg"
          alt="Contact Image"
          layout="fill"
        />
      </div>
    </div>
  );
}
