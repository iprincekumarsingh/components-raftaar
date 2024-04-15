// Project.tsx
"use client";
import React from "react";

interface ProjectData {
  ongoingProjects: {
    title: string;
    description: string;
    image: string;
    status: string;
  }[];
  completedProjects: {
    title: string;
    description: string;
    image: string;
    status: string;
  }[];
}

const Project: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  const [activeTab, setActiveTab] = React.useState("Completed");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex w-full flex-col px-2 m-4 gap-10 justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center mt-2 mb-2">
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
            <div className="flex flex-col justify-center gap-10">
              {projectData.completedProjects.map((project, index) => (
                <CardProject
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  flip={index % 2 === 0}
                />
              ))}
            </div>
          )}
          {activeTab === "Ongoing" && (
            <div className="flex flex-col justify-center gap-10">
              {projectData.ongoingProjects.map((project, index) => (
                <CardProject
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  flip={index % 2 === 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardProject: React.FC<{
  title: string;
  description: string;
  image: string;
  flip: boolean;
}> = ({ title, description, image, flip }) => {
  const cardClass = flip ? "flipped-card" : "";

  const imageSection = (
    <div
      className={`md:w-[569px] w-full md:h-[753px] relative  md:left-2 rounded-xl flex justify-center items-center  `}
    >
      <div
        className={`w-[203px] h-[374px] md:w-[569px] md:h-[866px] relative md:absolute ${
          flip
            ? "left-[33px] md:left-[74px] relative md:right-[-px]  md:top-[-58.50px] bg-blue-800 rounded-r-3xl"
            : "relative -left-[33px] md:left-[-65px] md:top-[-56.56px]  rounded-l-3xl bg-[#3CC7F5]"
        } flex-col justify-center items-center`}
      />
      <div
        className={`w-[262.62px] md:w-[569px] h-[347.12px] md:h-[818.45px] left-0 md:top-[-35.5px] absolute flex-col justify-center items-center inline-flex ${
          flip
            ? "md:left-0 -left-14 md:top-[-50.50px]"
            : "left-30 md:top-[-50.50px]"
        }`}
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

  const content = flip
    ? [textSection, imageSection]
    : [imageSection, textSection];

  return (
    <div
      className={`w- h-auto flex flex-col mx-4 md:w-[1280px] md:h-[865px] h p-4 md:p-14 rounded-3xl shadow border border-gray-200 md:flex-row justify-center items-center gap-14 ${cardClass}`}
    >
      {content.map((section, index) => (
        <React.Fragment key={index}>{section}</React.Fragment>
      ))}
    </div>
  );
};

export default Project;
