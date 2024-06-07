"use client";
// components/TextCounter.js
import { useEffect, useState } from "react";
import { data } from "./data";

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
      return {
        fontSize: "60px",
        opacity: 1,
      };
    } else if (distance === 1) {
      return {
        fontSize: "40px",
        opacity: 0.7,
      };
    } else {
      return {
        fontSize: "30px",
        opacity: 0.5,
      };
    }
  };

  return (
    <div className="relative h-full nax-w-max overflow-hidden flex flex-col items-center justify-center">
      {items.map((item, idx) => {
        const distance = Math.abs(idx - index);
        const isVisible = distance <= 3; // Check if the item is within 3 positions from the active index
        return (
          <div
            key={idx}
            className={`absolute flex h-[13%] items-center justify-center text-start transition-transform duration-700 ${
              isTransitioning ? "transition-transform" : ""
            }`}
            style={{
              transform: `translateY(${(idx - index) * 100}%)`,
              transition: isTransitioning
                ? "transform 0.7s ease-in-out, font-size 0.7s ease-in-out, opacity 0.7s ease-in-out"
                : "none",
              ...getStyle(idx),
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
