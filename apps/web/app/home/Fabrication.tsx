import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const Fabrication: NextPage<Props> = ({}) => {
  return (
    <div className="   flex flex-col lg:flex-row  items-center justify-center ">
      <div className="w-full lg:w-1/2 p-3 mt-2 md:p-10 flex flex-col lg:gap-1">
        <div className="flex flex-col gap-5 justify-start relativel lg:mb-32">
          <h1 className="text-black text-2xl md:text-4xl font-bold ">
            We manufacture <br></br> products with utmost <br></br> precision
          </h1>
          <p className="text-black text-sm md:text-2xl  font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
            Sed non risus. Suspendisse lectus tortor, <br></br> dignissim sit
            amet, adipiscing nec, ultricies sed, dolor.
          </p>
          <div className="w-[202px] h-[57px] px-6 py-4 bg-blue-800 justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-2xl font-semibold font-['Archivo'] leading-[25px]">
              Read More
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:mt-4">
          <div className="relative top-14 px-10 lg:px-2">
            <img
              className=" w-[306.64px] lg:w-[686px] h-[276.69px] lg:h-[619px]"
              src="https://via.placeholder.com/686x619"
            />
          </div>

          <div className="relative  lg:bottom-10 md:bottom-24 left-40  w-fit md:left-64">
            <img
              className="w-[210.98px] h-[189.97px] lg:w-[472px] lg:h-[425px]"
              src="https://via.placeholder.com/472x425"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabrication;
