interface Props {}

const AboutPage = ({ ...aboutData }) => {
  return (
    <div className="bg-[#1E5CAB]  md:h-[706px]   flex flex-col lg:flex-row  items-center justify-center ">
      <div className="w-full md:w-[584px] p-3 mt-10 md:p-10 flex flex-col lg:gap-10">
        <div className="flex flex-col gap-5 justify-start">
          <h1 className="text-white text-2xl md:text-4xl font-bold ">
            {(aboutData as { title: string })?.title}
          </h1>
          <p className="text-white text-sm md:text-2xl  font-normal ">
            {(aboutData as { subtitle: string })?.subtitle}
          </p>
          <div className="w-[157.50px] h-[43px] px-[18px] py-3 bg-white justify-center items-center gap-[7.50px] inline-flex">
            <div className="text-slate-900 text-lg font-bold font-['Archivo'] leading-[18.75px]">
              Contact Us
            </div>
            <div className="w-[18px] h-[18px] relative">
              <img src="./arrowBlack.svg" alt="" />
              </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col lg:mt-4">
          <div className="relative top-14  lg:px- border-8 border-white">
            <img
              className="w-[306.64px] md:w-[686px] h-[276.69px] lg:h-[619px]"
              src={aboutData.mainImageUrl}
              alt="Main Image"
              // width={686}
              // height={619}
            />
          </div>

          <div className="relative lg:bottom-10 md:bottom-24 left-32 w-fit md:left-64 border-8 border-white">
            <img
              className="w-[210.98px] h-[189.97px] lg:w-[472px] lg:h-[425px]"
              src={aboutData.secondaryImageUrl}
              alt="Secondary Image"
              width={472}
              height={425}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
