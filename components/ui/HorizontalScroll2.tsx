"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;

      gsap.to(scrollContainer, {
        xPercent: -50, // Move content to the left
        duration: 10, // Duration of the scroll animation
        ease: "none",
        repeat: -1, // Infinite repeat
        modifiers: {
          x: gsap.utils.unitize(
            (x) => parseFloat(x) % scrollContainer.offsetWidth
          ), // Wrap scrolling
        },
      });
    }
  }, []);

  return (
    <div className="overflow-hidden w-fit p-2 h-fit flex">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        <h1 className="text-[15vw]"> Dhanush Prabakaran </h1>
        <h1 className="text-[15vw]"> Dhanush Prabakaran </h1>
        <h1 className="text-[15vw]"> Dhanush Prabakaran </h1>
      </div>
    </div>
  );
};

export default HorizontalScroll;
