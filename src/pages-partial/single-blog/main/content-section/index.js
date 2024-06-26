import { ArrowIcon } from "@/assets/svgs";
import { useState } from "react";

const ContentSection = ({ children, className }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const gradientClass = readMore ? "hidden" : "block";
  const arrowRotation = readMore ? "-rotate-[45deg]" : "rotate-[135deg]";
  const buttonMargin = readMore ? "mb-3" : "mb-12";
  const containerHeight = readMore ? "h-auto" : "h-screen";

  return (
    <section className={className}>
      <div className={`relative overflow-hidden ${readMore ? "" : "pb-10"}`}>
        <div className={`relative ${containerHeight} overflow-hidden transition-all duration-1000 px-4 lg:px-0`}>
          {children}
          <div className={`absolute bottom-0 left-0 w-full h-56 read-more-gradient ${gradientClass}`}></div>
        </div>
        <div className={`absolute ${readMore ? 'bottom-0' : 'bottom-14 lg:bottom-0' } left-0 w-full flex justify-center` }>
          <button
            onClick={toggleReadMore}
            className={`lg:py-2 py-3 px-6 flex justify-center items-center gap-2 max-w-max rounded-lg text-white bg-[#151515] border border-[#292929] ${buttonMargin}`}
          >
            {readMore ? `Read Less` : `Read Full Blog`}
            <ArrowIcon className={`h-2.5 w-2.5 ${arrowRotation}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
