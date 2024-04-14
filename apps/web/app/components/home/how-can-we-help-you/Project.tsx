import { NextPage } from "next";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  projectData: any[];
}

const Project: NextPage<Props> = ({ projectData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" flex flex-col items-center">
      <div
        ref={containerRef}
        className="w-auto flex justify-center items-center py-3 infinite-scrollX"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            nameOfWork={project.nameOfWork}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            image={project.image}
          />
        ))}
      </div>
      <div className="w-[202px] h-[57px] px-6 py-4 bg-blue-800 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-semibold font-['Archivo'] leading-[25px]">
          View All Projects
        </div>
      </div>
    </div>
  );
};

export default Project;
