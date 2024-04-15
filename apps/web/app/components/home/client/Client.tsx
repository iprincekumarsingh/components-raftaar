"use client";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

interface Props {}

const ClientCard: NextPage<Props> = ({ ...clientImages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 300; // Width of each image

  const handleArrowClick = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const { scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;
      const newPosition =
        direction === "left"
          ? scrollPosition - imageWidth
          : scrollPosition + imageWidth;
      if (newPosition < 0) {
        setScrollPosition(0);
      } else if (newPosition > maxScrollLeft) {
        setScrollPosition(maxScrollLeft);
      } else {
        setScrollPosition(newPosition);
      }
    }
  };

  const handleDotClick = (index: number) => {
    const newPosition = index * imageWidth;
    setScrollPosition(newPosition);
  };

  useEffect(() => {
    const container = containerRef.current;
    const scroll = () => {
      if (container) {
        const newPosition = container.scrollLeft + imageWidth;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const nextPosition = newPosition > maxScrollLeft ? 0 : newPosition;
        container.scrollTo({
          left: nextPosition,
          behavior: "smooth",
        });
        setScrollPosition(nextPosition);
      }
    };

    const intervalId = setInterval(scroll, 3000); // Adjust scroll interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-[#DFE8F7] w-full h-auto md:h-[606.64px] py-10">
      <div className="flex flex-col gap-5 items-center w-full justify-center py-2 mb-2">
        <h1 className="text-xl text-[#1E5CAB] font-normal uppercase">
          Our Clients
        </h1>
        <h1 className="text-[#18191D] text-4xl font-normal">
          Organizations whom we have helped
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 h-auto">
        <div className="flex justify-center items-center w-full gap-2">
          <img
            className="absolute left-0 z-10 cursor-pointer hidden md:block"
            src="/arrowLeft.png"
            alt="Left Arrow"
            onClick={() => handleArrowClick("left")}
          />
          <div
            ref={containerRef}
            className="flex md:mx-5 lg:mx-20 overflow-x-hidden items-center gap-5"
            id="imageWrapper"
          >
            {/* Your image components */}

            {clientImages.images.map((image, index) => (
              <img
                key={index}
                className="w-56 h-32 md:w-72 md:h-40"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <img
            className="absolute right-0 z-10 cursor-pointer hidden md:block"
            src="/arrowRight.png"
            alt="Right Arrow"
            onClick={() => handleArrowClick("right")}
          />
        </div>
        <div className="flex gap-4 mt-20">
          {clientImages.images.map((image, index) => (
            <div
              key={index}
              className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                index * imageWidth === scrollPosition
                  ? "bg-[#3CC7F5]"
                  : "border border-black"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
