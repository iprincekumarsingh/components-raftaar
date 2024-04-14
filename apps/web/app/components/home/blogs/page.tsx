"use client";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

interface BlogData {
  title: string;
  subTitle: string;
  date: string;
  comment: string;
  description: string;
  admin: string;
}

interface Props {
  blogData: BlogData[];
}

const Blog: NextPage<Props> = ({ blogData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      container?.scrollTo({
        left: container.scrollLeft + 1,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full overflow-x-hidden h-auto px-8 pt-12 pb-24 flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="text-center text-sky-400 text-[22px] pt-[11px] font-normal font-['Larken-Medium'] uppercase leading-relaxed">
          Our Blogs
        </div>
        <div className="text-center text-zinc-900 text-[38px] font-bold font-['Larken-Bold'] leading-[44px]">
          Read Our Latest Articles
        </div>
        <div className="w-full mt-10 no-scrollbar overflow-x-auto scroll-auto whitespace-no-wrap bg-[#D9D9D9]" ref={containerRef}>
          <div className="flex flex-nowrap space-x-4">
            {blogData.map((data, index) => (
              <BlogCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogData> = ({ title, subTitle, date, comment, description, admin }) => {
  return (
    <div className="w-[416px] h-[440.34px] px-[30px] pt-[37px] pb-12 bg-white shadow flex-col justify-start items-start inline-flex">
      <div className="w-[356px] h-[355.34px] relative">
        <div className="h-[106px] pb-[30px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="pr-[13.58px] justify-start items-start inline-flex">
            <div className="text-gray-950 text-xl font-bold font-['Larken-Bold'] leading-[38px]">
              {title} {subTitle}
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-start h-[27px] left-0 top-[106px] absolute">
          <div className="flex items-center gap-2 h-[26px] top-[1px] absolute text-[#747474] text-[15px] font-normal font-['Larken-Regular'] leading-relaxed">
            <img src="/__before.png" className="w-[17px] h-[17px]" alt="" /> {date}
          </div>
          <div className="flex items-center gap-2 h-[26px] left-[161.66px] top-[1px] absolute text-[#747474] text-[15px] font-normal font-['Larken-Regular'] leading-relaxed">
            <img src="/__comment.png" className="w-[17px] h-[17px]" alt="" /> {comment}
          </div>
        </div>
        <div className="h-[127px] pr-[24.75px] pb-[31px] left-0 top-[153px] absolute border-b border-neutral-200 flex-col justify-start items-start inline-flex">
          <div className="text-[#747474] text-lg font-medium font-['Larken-Regular'] leading-loose">
            {description}
          </div>
        </div>
        <div className="pt-[10.20px] left-[55px] top-[310px] absolute justify-center items-start inline-flex">
          <div className="grow shrink basis-0 pb-[0.79px] flex-col justify-start items-start inline-flex">
            <div className="// Admin text-gray-950 text-lg font-normal font-['Larken-Medium'] leading-snug">
              {admin}
            </div>
          </div>
        </div>
        <img className="w-10 h-10 left-[5px] top-[312.22px] absolute rounded-full" src="https://via.placeholder.com/40x40" alt="" />
        <div className="pb-[0.50px] left-[181px] top-[318.50px] absolute justify-start items-center inline-flex">
          <div className="flex items-center justify-center gap-4 text-gray-950 text-base font-normal font-['Larken-Medium'] leading-relaxed">
            Learn More <img src="./Icon.png" className="w-4 h-4" alt="" />
          </div>
          <div className="justify-start items-start flex">
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;