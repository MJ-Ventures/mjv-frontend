"use client";
import { data } from "@/components/consts/hero";
import { useEffect, useState } from "react";

const TextCounter = () => {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(3);
  const [nextIndex , setNextIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
      setItems((prevItem) => {
        const tempData = [...prevItem];
        tempData.push(prevItem[nextIndex]);
        return tempData;
      });
      setNextIndex((prevIndex) => prevIndex + 1 % data?.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [index]);

  const getStyle = (idx) => {
    const distance = Math.abs((idx % items.length) - (index % items.length));
    if (distance === 0) {
      return "lg:text-[4.1rem] md:text-4xl text-3xl opacity-100 leading-tight font-light";
    } else if (distance === 1) {
      return "text-4xl text-3xl opacity-30 leading-tight font-light";
    } else {
      return "text-2xl text-xl opacity-10 leading-tight font-light";
    }
  };

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-start justify-center">
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


/* 

"use client";
import { data } from "@/components/consts/hero";
import { useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

const TextCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center justify-center gap-5">
      {data.map((item, idx) => {
        const distance = Math.min(
          Math.abs((idx - index + data.length) % data.length),
          Math.abs((index - idx + data.length) % data.length)
        );

        const opacity = 1 - Math.min(distance * 0.3, 1);

        const { transform, fontSize } = useSpring({
          transform: `translateY(${(idx - index) * 100}%)`,
          fontSize: distance === 0 ? "4.1rem" : distance === 1 ? "2.5rem" : "1.5rem",
          config: config.gentle,
        });

        return (
          <animated.div
            key={idx}
            className="absolute flex h-10 items-center text-white justify-center text-start transition-opacity duration-700"
            style={{
              transform,
              opacity,
              fontSize,
            }}
          >
            {item}
          </animated.div>
        );
      })}
    </div>
  );
};

export default TextCarousel;



*/