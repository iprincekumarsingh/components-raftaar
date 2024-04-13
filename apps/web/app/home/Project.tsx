import { NextPage } from "next";
import { useEffect, useRef } from "react";

interface Props {}

const Project: NextPage<Props> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const maxScrollLeft = scrollWidth - clientWidth;
        const newScrollLeft = scrollLeft >= maxScrollLeft ? 0 : scrollLeft + 1;
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    };

    const intervalId = setInterval(scroll, 50); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden  h-[1533px flex flex-col items-center m">
      <div
        ref={containerRef}
        className="w-full overflow-hidden  flex justify-center items-center py-3"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="w-[202px] h-[57px] px-6 py-4 bg-blue-800 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-semibold font-['Archivo'] leading-[25px]">
          View All Projects
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="flex-col px-4 justify-start items-start gap-5 inline-flex  py-10">
      <img
        className="w-[330px] lg:w-[1253px] h-[301px] lg:h-[602px] relative"
        src="https://via.placeholder.com/1253x602"
      />
      <div className=" w-[330px]  self-stretch  flex-col justify-start items-start flex">
        <div className="self-stretch  flex-col justify-start items-start flex">
          <div className="text-slate-600 text-base font-normal font-['Figtree'] leading-relaxed">
            Name of Work
          </div>
          <div className="text-2xl  text-blue-800 md:text-5xl font-normal font-['Larken-Bold']">
            Jal Jeevan Mission
          </div>
        </div>
      </div>
      <div className="text-xs lg:w-[1253px] text-slate-600 md:text-2xl font-normal font-['Figtree'] leading-9">
        Jal Jeevan Mission project generally consists of a water collection
        unit, conveyance system, and units for treatment, purification, and
        distribution. It is necessary to plan, prepare, and design the entire
        water supply scheme before constructing the units.
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="h-[57px] px-6 py-4 bg-white rounded-lg border border-gray-200 flex justify-center items-center gap-2.5">
          <div className="text-slate-900 text-xl font-semibold font-['Archivo'] leading-[25px]">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
