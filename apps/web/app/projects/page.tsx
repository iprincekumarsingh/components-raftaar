"use client";
import React from "react";
import { NextPage } from "next";
import { Props } from "next/script";
import Image from "next/image";

const Page: NextPage<Props> = ({}) => {
  const [activeTab, setActiveTab] = React.useState("Completed");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex w-full flex-col  px2 m- gap-10 justify-center items-center">
      <div className=" flex flex-col justify-center items-center mt-2 mb-2">
        <div className="mt-10 border-b border-gray-200">
          <div className="flex justify-center gap-5">
            <div className="flex justify-between gap-5 w-full max-w-screen-md mb-10">
              <div
                className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                  activeTab === "Completed"
                    ? " border-blue-800 text-white"
                    : " border-transparent"
                }`}
                onClick={() => handleTabClick("Completed")}
              >
                <div
                  className={`w-[153px] h-[62px] ${
                    activeTab === "Completed" ? "bg-blue-800" : "bg-transparent"
                  } px-8 py-4 rounded-[500px] border border-blue-800 justify-center items-center gap-2.5 inline-flex`}
                >
                  <div
                    className={`text-blue-800 ${
                      activeTab === "Completed" ? "text-white" : "text-blue-800"
                    } text-2xl font-normal font-['Larken-Medium'] leading-[30px]`}
                  >
                    Completed
                  </div>
                </div>
              </div>
              <div
                className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                  activeTab === "Ongoing"
                    ? " border-blue-800 text-white"
                    : " border-transparent"
                }`}
                onClick={() => handleTabClick("Ongoing")}
              >
                <div
                  className={`w-[153px] h-[62px] ${
                    activeTab === "Ongoing" ? "bg-blue-800" : "bg-transparent"
                  } px-8 py-4 rounded-[500px] border border-blue-800 justify-center items-center gap-2.5 inline-flex`}
                >
                  <div
                    className={`text-blue-800 ${
                      activeTab === "Ongoing" ? "text-white" : "text-blue-800"
                    } text-2xl font-normal font-['Larken-Medium'] leading-[30px]`}
                  >
                    Ongoing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          {activeTab === "Completed" && (
            <div className="flex flex-col justify-center gap-10 ">
              <CardProject
                title="Project 1"
                description="EPC stands for Engineering, Procurement, and Construction. The basic concept of EPC/Turn-Key Power Plant is that a single contractor takes up the complete responsibility of designing, procurement, installation, and commissioning of the project. The outcome for the EPC Power Plant project is a power generating solution that operates in pre-defined parameters to deliver the desired output of steam and electric power. "
                image="https://s3-alpha-sig.figma.com/img/afb0/adc8/ade83b9de70ed265a54a4130b186e7b9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHfipMlpt41WnJM6q9TXuGVxkGOdhwhRTKgY0lKpEwiuDt-rU7dsJGgOg8UYTL5MnNLhrPLDQEjoG5kZgEcq3d89lWFVAGw~Lh7qwqlf8Rvca2ovpqDqnRggSikkKjMayJTNJPoeVe3B-tsDDJ5EfFTBtoyg2oDlxWecVvef-AJPnKwWpwvR5BMSCRH7RELGt726h8Dhket64XwxMtNuNTGUPMatX5aJS5DsBNBJ19~7CG-UTrgG9-Y1RJIhZ9uVEie-h50uCNVnb3cVBvfM0CxpMjdbqy0himjvZqcJN4CdGMS-FpNUv3WxJzW5enIfh8zMRA-tyB-0VY3JBhfNcQ__"
                flip={true} // Set flip prop to false for the first card
              />
              <CardProject
                title="Project 2"
                description="Building construction means any physical activity on the site involved in the erection of a structure, cladding, external finish, formwork, fixture, fitting of service installation, and the unloading of plant, machinery, materials, or the like."
                image="https://via.placeholder.com/569x751"
                flip={false} // Set flip prop to true for the second card
              />
              <CardProject
                title="Project 3"
                description="Description 3"
                image="https://via.placeholder.com/569x751"
                flip={true} // Set flip prop to false for the third card
              />
            </div>
          )}
          {activeTab === "Ongoing" && (
            <div className="flex  flex-col justify-center gap-10 ">
              <CardProject
                title="Project 3"
                description="EPC stands for Engineering, Procurement, and Construction. The basic concept of EPC/Turn-Key Power Plant is that a single contractor takes up the complete responsibility of designing, procurement, installation, and commissioning of the project. The outcome for the EPC Power Plant project is a power generating solution that operates in pre-defined parameters to deliver the desired output of steam and electric power. "
                image="https://via.placeholder.com/569x751"
                flip={true} // Set flip prop to false for the first card
              />
              <CardProject
                title="Project 2"
                description="Building construction means any physical activity on the site involved in the erection of a structure, cladding, external finish, formwork, fixture, fitting of service installation, and the unloading of plant, machinery, materials, or the like."
                image="https://via.placeholder.com/569x751"
                flip={false} // Set flip prop to true for the second card
              />
              <CardProject
                title="Project 3"
                description="Description 3"
                image="https://via.placeholder.com/569x751"
                flip={true} // Set flip prop to false for the third card
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#1E5CAB] mt-20  w-full overflow-hidden md:h-[556px]  flex flex-col lg:flex-row  items-center justify-center ">
        <div className="w-full lg:w-1/2 p-3 mt-10 md:p-10 flex flex-col lg:gap-10">
          <div className="flex flex-col gap-5 justify-start">
            <h1 className="text-white text-2xl md:text-4xl font-bold ">
              We make finest architectural <br></br> design with great passion
            </h1>
            <p className="text-white text-sm md:text-2xl  font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Sed non risus. Suspendisse lectus tortor, <br></br> dignissim sit
              amet, adipiscing nec, ultricies sed, dolor.
            </p>
            <div className="text-2xl flex  items-center justify-center md:justify-start gap-3 font-bold text-black md:text-white bg-white md:bg-transparent w-1/2 ">
              <h1 className="text-center">Contact us</h1>
              <img src="/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col lg:mt-4">
            <div className="relative mt-20 md:mt-0 md:-top-20 px-10 lg:px-2">
              <img
                src="/image1.png"
                width={800}
                height={400} // Adjust the height as per your image aspect ratio
                alt="Image 1"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CardProject = ({
  title,
  description,
  image,
  flip,
}: {
  title: string;
  description: string;
  image: string;
  flip: boolean;
}) => {
  // Define a variable to hold the CSS class based on the value of flip prop
  const cardClass = flip ? "flipped-card" : "";

  // Define JSX for image and text sections
  const imageSection = (
    <div className="md:w-[569px] w-full  md:h-[753px] relative left-20  md:left-0 rounded-xl flex justify-center items-center ">
      <div
        className={`w-[203px] h-[374px] md:w-[569px]   md:h-[866px] relative md:absolute   ${flip ? "md:left-[64px] relative md:right-[-15px] -left-14 md:top-[-58.50px] bg-blue-800 rounded-r-3xl" : " relative -left-[140px] md:left-[-56px]  md:top-[-58.50px]  rounded-l-3xl bg-[#3CC7F5]"} flex-col justify-center items-center`}
      />
      <div
        className={`w-[262.62px] md:w-[569px]  h-[347.12px]  md:h-[818.45px] left-0 md:top-[-35.50px] absolute flex-col justify-center items-center inline-flex
        ${flip ? "md:left-0 -left-14 md:top-[-50.50px]" : "-left-5 md:top-[-50.50px]"}
      `}
      >
        <img
          className="w-[262.62px] h-[347.12px] md:w-[569px] grow shrink basis-0 rounded-xl shadow border-8 border-white"
          src={image}
        />
      </div>
    </div>
  );

  const textSection = (
    <div className="w-full md:w-auto grow shrink basis-0 self-stretch flex-col justify-center md:mr-6 items-start gap-8 inline-flex">
      <div className="md:h-[98px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch md:h-[98px] flex-col justify-start items-start gap-2 flex">
          <div className="text-slate-600 text-base font-normal font-['Figtree'] leading-relaxed">
            Name of Work
          </div>
          <div className="self-stretch text-blue-800 text-5xl font-normal font-['Larken-Bold']">
            {title}
          </div>
        </div>
      </div>
      <div className="self-stretch md:h-[324px] flex-col justify-start items-start gap-8 mr-2 flex">
        <div className="self-stretch md:h-[324px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-slate-600 text-2xl font-normal font-['Figtree'] leading-9">
            {description}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-blue-800 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-semibold font-['Archivo'] leading-[25px]">
          Read More
        </div>
      </div>
    </div>
  );

  // Alternate the order of image and text sections based on flip prop
  const content = flip
    ? [textSection, imageSection]
    : [imageSection, textSection];

  return (
    <div
      className={` w- h-auto flex flex-col mx-4 md:w-[1280px] md:h-[865px] h p-4 md:p-14 rounded-3xl shadow border border-gray-200 md:flex-row justify-center items-center gap-14 ${cardClass}`}
    >
      {content.map((section, index) => (
        <React.Fragment key={index}>{section}</React.Fragment>
      ))}
    </div>
  );
};

export default Page;
