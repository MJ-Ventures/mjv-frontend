"use client";
import { data } from "@/components/consts/hero";
import { useEffect, useState } from "react";

const TextCounter = () => {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [index]);

  const getStyle = (idx) => {
    const distance = Math.abs((idx % items.length) - (index % items.length));
    if (distance === 0) {
      return "lg:text-6xl md:text-4xl text-3xl opacity-100 leading-tight font-semibold";
    } else if (distance === 1) {
      return "text-4xl text-3xl opacity-50 leading-tight font-semibold";
    } else {
      return "text-2xl text-xl opacity-20 leading-tight font-semibold";
    }
  };

  return (
    <div className="relative h-full nax-w-max overflow-hidden flex flex-col items-start justify-center">
      {items.map((item, idx) => {
        const distance = Math.abs(idx - index);
        const isVisible = distance <= 3; // Check if the item is within 3 positions from the active index
        return (
          <div
            key={idx}
            className={`absolute flex md:h-[78%] lg:h-[13%] h-10 items-center text-white justify-center text-start transition-transform duration-700 ${
              isTransitioning ? "transition-transform" : ""
            } ${getStyle(idx)}`}
            style={{
              transform: `translateY(${(idx - index) * 100}%)`,
              transition: isTransitioning
                ? "transform 0.7s ease-in-out, 0.7s ease-in-out, opacity 0.7s ease-in-out"
                : "none",
              visibility: isVisible ? "visible" : "hidden", // Hide elements outside the visible range
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TextCounter;
