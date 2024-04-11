"use client";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current as unknown as HTMLDivElement; // Add type assertion

    const scroll = () => {
      container?.scrollTo({
        left: container.scrollLeft + 1, // Adjust the value to control the scrolling speed
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(scroll, 50); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full overflow-x-hidden h-auto px-8 pt-12 pb-24 flex flex-col justify-center items-center">
      <div className=" w-full">
        <div className="text-center text-sky-400 text-[22px] font-normal font-['Larken-Medium'] uppercase leading-relaxed">
          Our Blogs
        </div>
        <div className="text-center text-zinc-900 text-[38px] font-normal font-['Larken-Bold'] leading-[44px]">
          Read Our Latest Articles
        </div>
        <div
          className="w-full no-scrollbar overflow-x-auto scroll-auto whitespace-no-wrap bg-slate-300"
          ref={containerRef}
        >
          <div className="flex flex-nowrap space-x-4 ">
            {/* Render multiple instances of BlogCard component */}
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = () => {
  return (
    <div className="self-stretch px-3 flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-[440.34px] px-[30px] pt-[37px] pb-12 bg-white shadow flex-col justify-start items-start flex">
        <div className="w-[356px] h-[355.34px] relative">
          <div className="h-[106px] pb-[30px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            <div className="pr-[13.58px] justify-start items-start inline-flex">
              <div className="text-gray-950 text-xl font-normal font-['Larken-Bold'] leading-[38px]">
                Digital Privacy Changes Impact On The
                <br />
                Advertising
              </div>
            </div>
          </div>
          <div className="w-[356px] h-[27px] left-0 top-[106px] absolute">
            <div className="left-0 top-[4.13px] absolute justify-start items-start inline-flex">
              <div className="w-[17px] h-[17px] relative" />
            </div>
            <div className="w-[89.31px] h-[26px] left-[27px] top-[1px] absolute text-neutral-500 text-[15px] font-normal font-['Larken-Regular'] leading-relaxed">
              15 Nov, 2024
            </div>
            <div className="left-[130.97px] top-[4.13px] absolute justify-start items-start inline-flex">
              <div className="w-[17px] h-[17px] relative" />
            </div>
            <div className="w-[87.77px] h-[26px] left-[161.66px] top-[1px] absolute text-neutral-500 text-[15px] font-normal font-['Larken-Regular'] leading-relaxed">
              12 Comment
            </div>
          </div>
          <div className="h-[127px] pr-[24.75px] pb-[31px] left-0 top-[153px] absolute border-b border-neutral-200 flex-col justify-start items-start inline-flex">
            <div className="text-neutral-500 text-lg font-normal font-['Larken-Regular'] leading-loose">
              Dolor sed maecenas quis faucibus justo
              <br />
              nibh ultricies praesent justo dolorIf you
              <br />
              are going to use
            </div>
          </div>
          <div className="pt-[10.20px] left-[55px] top-[310px] absolute justify-center items-start inline-flex">
            <div className="grow shrink basis-0 pb-[0.79px] flex-col justify-start items-start inline-flex">
              <div className="text-gray-950 text-lg font-normal font-['Larken-Medium'] leading-snug">
                Admin
              </div>
            </div>
          </div>
          <img
            className="w-10 h-10 left-[5px] top-[312.22px] absolute rounded-full"
            src="https://via.placeholder.com/40x40"
          />
          <div className="pb-[0.50px] left-[181px] top-[318.50px] absolute justify-start items-center inline-flex">
            <div className="text-gray-950 text-base font-normal font-['Larken-Medium'] leading-relaxed">
              Learn More
            </div>
            <div className="justify-start items-start flex">
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
