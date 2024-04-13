"use client";
import { NextPage } from "next";
import Card from "../../components/page";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [deviceType, setDeviceType] = useState("desktop");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full flex bg-[#F0F5FC]  flex-col justify-center items-center gap-12">
      <div className="mt-12 max-w-screen-xl w-full px-6 flex flex-col gap-6">
        <div className="w-full flex flex-col items-center md:flex-row gap-5">
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            Home
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            &gt;&gt;
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            Products
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            &gt;&gt;
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-9">
            GRP 10KL-16MTR MS Steel Structure (3x2x2)
          </div>
        </div>
        <div className="lg:w-[1277px]  flex flex-col gap-[43px]6  ">
          <div className="lg:w-[500px] flex flex-col md:flex-row gap-[43px]">
            <div className="md:w-[569px] md:h-[768px] flex flex-col gap-[43px]6">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-4-px"
              >
                {/* Carousel items */}
                <img
                  className="w-full md:max-w-none md:w-[569px] lg:h-[768px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/ec89/6bf4/273f53f5f6048b8247c223b0ae3247b4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EbaJrZExbmOn1CuMm99mYpf~O-pwU3XLGWulPz1x43p-3jzYwIu5jRuEp4Vkmb5qtLqwb9kbv~OmxivZ-ROctsh5i9fYvOjd-RQRwzg06KcQvudnk9QxWFv-nRCX0JpSK84~Tsd-g8VrxiAq3DxnwoPoqlIen0fFk5nzCKTubSOeOLA1JrNZMuycfPlzV5qtmZxX~5pb3aUnQBcQMz5Y0VtuMYY9zkIkzAlFnHkjmNuexQ3wMqH6WAKEVqTmzWUGj2hXWSi5FSswUI4rxSN0zG5RQe~gChAY~I1iT7Q~5Q3PfxXSgbCoaLreyx8PNurIpmq72wJzK0quZUp-XLsozA__"
                  alt="Product Image"
                />
                <img
                  className=" md:max-w-none md:w-[569px] lg:h-[768px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/afb0/adc8/ade83b9de70ed265a54a4130b186e7b9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHfipMlpt41WnJM6q9TXuGVxkGOdhwhRTKgY0lKpEwiuDt-rU7dsJGgOg8UYTL5MnNLhrPLDQEjoG5kZgEcq3d89lWFVAGw~Lh7qwqlf8Rvca2ovpqDqnRggSikkKjMayJTNJPoeVe3B-tsDDJ5EfFTBtoyg2oDlxWecVvef-AJPnKwWpwvR5BMSCRH7RELGt726h8Dhket64XwxMtNuNTGUPMatX5aJS5DsBNBJ19~7CG-UTrgG9-Y1RJIhZ9uVEie-h50uCNVnb3cVBvfM0CxpMjdbqy0himjvZqcJN4CdGMS-FpNUv3WxJzW5enIfh8zMRA-tyB-0VY3JBhfNcQ__"
                  alt="Product Image"
                />
              </Carousel>
            </div>
            <div className="w-full lg:w-[500px]   md:w-[665px] flex flex-col justify-center items-start gap-5">
              <div className="w-full text-slate-900 text-4xl font-normal font-['Larken-Medium']">
                GRP 10KL-16MTR MS Steel Structure (3x2x2)
              </div>

              <div className="w-full lg:w-[500px]  flex  justify-around items-center gap">
                <div className="text-black flex gap-2 text-xl font-normal font-['Figtree']">
                  <img className="w-[27px] h-[27px" src="/star.png" alt="" />
                  <img src="/star.png" alt="" />
                  <img src="/star.png" alt="" />
                  <h1>4.5</h1>
                </div>
                <div className="text-black text-xl font-normal font-['Figtree']">
                  2347 Reviews
                </div>
                <div className="text-blue-800 text-xl font-normal font-['Figtree']">
                  547 Sold
                </div>
              </div>
              <div className="w-full lg:w-[500px] flex flex-col gap-5">
                <div className="text-black text-xl font-normal font-['Figtree']">
                  Description
                </div>
                <div className="text-slate-700  text-opacity-70 text-xl font-normal font-['Figtree']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  diam. Maecenas ligula massa, varius a, semper congue, euismod
                  non, mi.
                </div>
              </div>
              <div className="w-[143px] h-[57px] px-6 py-4 bg-blue-800 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-semibold font-['Archivo'] leading-[25px]">
                  Get Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl w-full px-6 flex flex-col gap-6">
        <div className="text-start text-slate-900 text-5xl font-bold leading-63.75px">
          Best seller
        </div>
        <div className="text-start text-slate-700 text-opacity-70 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start lg:gap-5">
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="max-w-screen-xl w-full px-6 flex flex-col gap-6">
        <div className="text-start text-slate-900 text-5xl font-bold leading-63.75px">
          Related Products
        </div>
        <div className="text-center text-slate-700 text-opacity-70 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start lg:gap-5">
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
          <Card
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            imageUrl="https://via.placeholder.com/342x261"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
