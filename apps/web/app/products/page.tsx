"use client";
import { NextPage } from "next";
import Card from "../components/page";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 bg-blue-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <Card
              productName="GRP 10KL-16MTR MS Steel Structure (3x2x2)"
              productDescription="Weight (in kg): 6471.468"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            <Card
              productName="Projects"
              productDescription="We provide project services"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            <Card
              productName="Projects"
              productDescription="We provide project services"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            <Card
              productName="Fabrication"
              productDescription="We provide fabrication services"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            <Card
              productName="Projects"
              productDescription="We provide project services"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            <Card
              productName="Projects"
              productDescription="We provide project services"
              imageUrl="https://source.unsplash.com/random/800x600"
              onClick={() => {}}
            />
            {/* Add more cards here */}
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-[556px] relative bg-blue-800 py-10">
        <div className="h-[301px] left-[79px] top-[127.50px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[584px] h-[301px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-white text-[40px] font-normal font-['Larken-Bold']">
              We make finest architectural design with great passion
            </div>
            <div className="self-stretch text-white text-2xl font-normal font-['Figtree'] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.{" "}
            </div>
            <div className="px-6 py-4 bg-blue-800 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-2xl font-bold font-['Archivo'] leading-[25px]">
                Contact Us
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <img
          className="lg:w-[500px] h-[642px] lg:left-[800px] 2xl/2:left-[990px] 3xl:left-[1210px] top-[-126px] absolute border-8 border-white"
          src="https://via.placeholder.com/654x642"
        />
      </div>
    </div>
  );
};

export default Page;
