"use client";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

interface Props {}

const ClientCard: NextPage<Props> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const maxScrollLeft = scrollWidth - clientWidth;
        const newScrollLeft = scrollLeft >= maxScrollLeft ? 0 : scrollLeft + 1;
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    };

    const intervalId = setInterval(scroll, 50); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-[#DFE8F7] w-full py-10">
      <div className="flex flex-col gap-5 items-center w-full justify-center py-2 mb-2">
        <h1 className="text-xl text-[#1E5CAB] font-normal uppercase">
          Our Clients
        </h1>
        <h1 className="text-[#18191D] text-4xl font-normal">
          Organizations whom we have helped
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center gap-2  h-212.64">
        <div className="flex justify-center items-center w-full gap-2 relative overflw-hidden">
          <img
            className={`absolute left-0 z-10 cursor-pointer hidden md:block`}
            src="/arrowLeft.png"
            alt="Left Arrow"
          />

          <div
            ref={containerRef}
            className="flex mx-20 overflow-hidden items-center gap-5" // Make sure this container has a fixed width and overflow set to hidden
            id="imageWrapper"
          >
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="/client1.png"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="/client1.png"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="https://s3-alpha-sig.figma.com/img/94fc/d64d/e1bf9bafecfc7789f10f30cf1dd82fc3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3DMLSLfnUDaD0dsbzN7W0qq~Gjv8eG3wH1EkRW-fXKrACHQu8hVTbl1YKo1tflAg1LGzmICcz0y2cxVPz0dnUHcAPp-b0y9bNYhQtYslyuaLj1t6ElYDwJTpL6a0Z329PS6Xu4mkqdX9qAKoIH8yPcfFY22XBWXG6rwU8~oJQNBWL8ZTJfY6JY~oaFONEp5U~Riqb6O8U8sQfIp0uyDEQB4w86~UL9apRHmqgjt0EyHSWx-RLESl5di4bFLAFlYV6BjV0DF0qMQHM5TndmQYoHdzJGcT2P65OKinSPIC-KSh3BOBJpqp83YLQOdz9CN4Y335HhYxFkmCpoVSXJTDQ__"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="/client1.png"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="https://s3-alpha-sig.figma.com/img/94fc/d64d/e1bf9bafecfc7789f10f30cf1dd82fc3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3DMLSLfnUDaD0dsbzN7W0qq~Gjv8eG3wH1EkRW-fXKrACHQu8hVTbl1YKo1tflAg1LGzmICcz0y2cxVPz0dnUHcAPp-b0y9bNYhQtYslyuaLj1t6ElYDwJTpL6a0Z329PS6Xu4mkqdX9qAKoIH8yPcfFY22XBWXG6rwU8~oJQNBWL8ZTJfY6JY~oaFONEp5U~Riqb6O8U8sQfIp0uyDEQB4w86~UL9apRHmqgjt0EyHSWx-RLESl5di4bFLAFlYV6BjV0DF0qMQHM5TndmQYoHdzJGcT2P65OKinSPIC-KSh3BOBJpqp83YLQOdz9CN4Y335HhYxFkmCpoVSXJTDQ__"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="https://s3-alpha-sig.figma.com/img/94fc/d64d/e1bf9bafecfc7789f10f30cf1dd82fc3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3DMLSLfnUDaD0dsbzN7W0qq~Gjv8eG3wH1EkRW-fXKrACHQu8hVTbl1YKo1tflAg1LGzmICcz0y2cxVPz0dnUHcAPp-b0y9bNYhQtYslyuaLj1t6ElYDwJTpL6a0Z329PS6Xu4mkqdX9qAKoIH8yPcfFY22XBWXG6rwU8~oJQNBWL8ZTJfY6JY~oaFONEp5U~Riqb6O8U8sQfIp0uyDEQB4w86~UL9apRHmqgjt0EyHSWx-RLESl5di4bFLAFlYV6BjV0DF0qMQHM5TndmQYoHdzJGcT2P65OKinSPIC-KSh3BOBJpqp83YLQOdz9CN4Y335HhYxFkmCpoVSXJTDQ__"
              alt="Placeholder"
            />
            <img
              className="w-56 h-32 md:w-72 md:h-40"
              src="https://s3-alpha-sig.figma.com/img/94fc/d64d/e1bf9bafecfc7789f10f30cf1dd82fc3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3DMLSLfnUDaD0dsbzN7W0qq~Gjv8eG3wH1EkRW-fXKrACHQu8hVTbl1YKo1tflAg1LGzmICcz0y2cxVPz0dnUHcAPp-b0y9bNYhQtYslyuaLj1t6ElYDwJTpL6a0Z329PS6Xu4mkqdX9qAKoIH8yPcfFY22XBWXG6rwU8~oJQNBWL8ZTJfY6JY~oaFONEp5U~Riqb6O8U8sQfIp0uyDEQB4w86~UL9apRHmqgjt0EyHSWx-RLESl5di4bFLAFlYV6BjV0DF0qMQHM5TndmQYoHdzJGcT2P65OKinSPIC-KSh3BOBJpqp83YLQOdz9CN4Y335HhYxFkmCpoVSXJTDQ__"
              alt="Placeholder"
            />
            {/* Add more images here */}
          </div>

          <img
            className="absolute right-0 z-10 cursor-pointer hidden md:block"
            src="/arrowRight.png"
            alt="Right Arrow"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-[20px] h-[20px] rounded-full  border border-black "></div>
          <div className="w-[20px] h-[20px] rounded-full bg-red-600"></div>
          <div className="w-[20px] h-[20px] rounded-full bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
