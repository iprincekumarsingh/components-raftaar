"use client";
import { NextPage } from "next";
import { useState } from "react";
import Card from "../components/page";
import Fabrication from "./Fabrication";
import Project from "./Project";

interface Props {}

const Product: NextPage<Props> = ({}) => {
  const [activeTab, setActiveTab] = useState("Fabrication");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const steelStaging = [
    {
      id: 1,
      productName: "Fabrication 1",
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imageUrl: "/client1.png",
    },
    {
      id: 2,
      productName: "Fabrication 1",
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imageUrl: "/client1.png",
    },
    {
      id: 3,
      productName: "Fabrication 1",
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imageUrl: "/client1.png",
    },
    // Add more steel staging data if needed
  ];

  return (
    <div className=" flex flex-col justify-center items-center mt-2 mb-2">
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        <div className="text-center text-4xl sm:text-5xl text-slate-900 font-normal font-['Larken-Bold'] mb-8">
          How can we help you?
        </div>
        <div className="text-center text-lg sm:text-2xl text-slate-600 font-normal font-['Figtree']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </div>
      </div>
      <div className="mt-10 border-b border-gray-200">
        <div className="flex justify-center gap-5">
          <div className="flex justify-between gap-5 w-full max-w-screen-md">
            <div
              className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                activeTab === "Fabrication"
                  ? "border-b-2 border-blue-800 text-blue-800"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleTabClick("Fabrication")}
            >
              <div
                className={`text-sm md:text-2xl  font-normal leading-9 ${
                  activeTab === "Fabrication"
                    ? "text-blue-800"
                    : "text-gray-500"
                }`}
              >
                Fabrication
              </div>
            </div>
            <div
              className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                activeTab === "Projects"
                  ? "border-b-2 border-blue-800 text-blue-800"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleTabClick("Projects")}
            >
              <div
                className={`text-sm md:text-2xl  font-normal leading-9 ${
                  activeTab === "Projects" ? "text-blue-800" : "text-gray-500"
                }`}
              >
                Projects
              </div>
            </div>
            <div
              className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                activeTab === "Steel Staging"
                  ? "border-b-2 border-blue-800 text-blue-800"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleTabClick("Steel Staging")}
            >
              <div
                className={`text-sm md:text-2xl  font-normal leading-9 ${
                  activeTab === "Steel Staging"
                    ? "text-blue-800"
                    : "text-gray-500"
                }`}
              >
                Steel Staging
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeTab === "Fabrication" && <Fabrication />}
      {activeTab === "Projects" && <Project />}
      {activeTab === "Steel Staging" && (
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-5 mx-2">
          {steelStaging.map((item) => (
            <div key={item.id} className="w-full sm:w-1/3 mx-2">
              <Card
                productName={item.productName}
                productDescription={item.productDescription}
                imageUrl={item.imageUrl}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
