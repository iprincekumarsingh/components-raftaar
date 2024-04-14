"use client";
import { NextPage } from "next";
import { Key, useState } from "react";

import Fabrication from "./Fabrication";
import Project from "./Project";
import Card from "../../ProductCard";

interface Props {}

const Product: NextPage<Props> = ({ ...productData }) => {
  const [activeTab, setActiveTab] = useState((productData as { tabs: any[] })?.tabs[0]?.tabTitles);
  console.log(productData);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className=" flex flex-col justify-center items-center mt-2 mb-2 overflow-hidden">
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        <div className="text-center text-4xl sm:text-5xl text-slate-900 font-normal font-['Larken-Bold'] mb-8">
          {(productData as { heading: string })?.heading}
        </div>
        <div className="text-center text-lg sm:text-2xl text-slate-600 font-normal font-['Figtree']">
          {(productData as { subheading: string })?.subheading}
        </div>
      </div>
      <div className="mt-10 border-b border-gray-200">
        <div className="flex justify-center gap-5">
          <div className="flex justify-between gap-5 w-full max-w-screen-md">
            {((productData as { tabs: any[] })?.tabs || []).map(
              (tab, index) => (
                <div
                  key={index}
                  className={`px-1.5 pb-2 justify-center items-center flex cursor-pointer ${
                    activeTab === tab.tabTitles
                      ? "border-b-2 border-blue-800 text-blue-800"
                      : "border-b-2 border-transparent"
                  }`}
                  onClick={() => handleTabClick(tab.tabTitles)}
                >
                  <div
                    className={`text-sm md:text-2xl  font-normal leading-9 ${
                      activeTab === tab.tabTitles
                        ? "text-blue-800"
                        : "text-gray-500"
                    }`}
                  >
                    {tab.tabTitles}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {activeTab === "Fabrication" && (
        <Fabrication
          fabrication={(productData as { fabrication: any })?.fabrication}
        />
      )}
      {activeTab === "Projects" && (
        <Project
          projectData={(productData as { projectData: any[] }).projectData}
        />
      )}

      {activeTab === "Steel Staging" && (
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-5 mx-2">
            {(productData as { steelStaging: any[] })?.steelStaging.map(
            (item: {
              id: Key | null | undefined;
              productName: string;
              productDescription: string;
              imageUrl: string;
            }) => (
              <div key={item.id} className="w-full sm:w-1/3 mx-2">
                <Card
                  productName={item.productName}
                  productDescription={item.productDescription}
                  imageUrl={item.imageUrl}
                  onClick={() => {}}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
