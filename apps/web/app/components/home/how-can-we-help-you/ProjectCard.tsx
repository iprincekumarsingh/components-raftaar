interface ProjectCardProps {
    nameOfWork: string;
    projectName: string;
    projectDescription: string;
    image: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({
    nameOfWork,
    projectName,
    projectDescription,
    image,
  }) => {
    return (
      <div className="flex-col og px-4 justify-start items-start gap-5 inline-flex py-10">
        <img
          className="w-[330px] lg:w-[1253px] h-[301px] lg:h-[602px] relative"
          src={image}
          alt={projectName}
        />
        <div className="w-[330p] self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch flex-col justify-start items-start flex">
            <div className="w-full  text-slate-600 text-base font-normal font-['Figtree'] leading-relaxed">
              {nameOfWork}
            </div>
            <div className="w-full  text-2xl text-blue-800 md:text-5xl font-normal font-['Larken-Bold']">
              {projectName}
            </div>
          </div>
        </div>
        <div className="text-xs lg:w-[1253px] text-slate-600 md:text-2xl font-normal font-['Figtree'] leading-9">
          {projectDescription}
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
  
  export default ProjectCard;
  