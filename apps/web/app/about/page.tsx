import { NextPage } from "next";
import Image from "next/image";
import Index from "../faq/page";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="bg-white w-f h-[300px] z-20">
      <div className="flex justify-center items-center h-full">
      
      </div>
      <Service />
      <Index/>
      
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-[#1E5CAB]   md:h-[556px] flex flex-col lg:flex-row  items-center justify-center ">
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
          <div className="relative top-14 px-10 lg:px-2">
            <Image
              src="/image1.png"
              width={800}
              height={400} // Adjust the height as per your image aspect ratio
              alt="Image 1"
              className="w-full"
            />
          </div>

          <div className="relative  bottom-10 md:bottom-24 left-44  w-fit md:left-80">
            <img
              src="/image2.png"
           
              alt="Image 2"
              className="w-[250px]  md:w-[200px]  lg:w-[400px]"
              //className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
