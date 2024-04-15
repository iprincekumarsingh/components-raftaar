import { NextPage } from "next";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  projectData: any[];
}

const Project: NextPage<Props> = ({ projectData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1; // Increase the scrollLeft property to scroll right
        // Loop the scrolling animation
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    // Start scrolling animation
    scroll();

    // Clean up animation frame on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className=" w-full flex justify-center items-center">
      <div
        ref={containerRef}
        className="w-full flex overflow-hidden py-3 "
        style={{ scrollBehavior: "smooth" }}
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
    </div>
  );
};

export default Project;
