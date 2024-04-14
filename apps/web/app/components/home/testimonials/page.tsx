import { NextPage } from "next";

interface Testimonial {
  name: string;
  designation: string;
  image: string;
  testimonial: string;
}

interface Props {
  title: string;
  subHeading: string;
  testimonials: Testimonial[];
}

const Testimonials: NextPage<Props> = ({ title, subHeading, testimonials }) => {
  const halfIndex = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, halfIndex);
  const secondHalf = testimonials.slice(halfIndex);

  return (
    <div className="md:h-[700.78px] md:overflow-hidden md:py-20">
      <div
        className="flex bg-[#D9D9D9] flex-col md:flex-row mx-auto md:w-[1440px] px-5 overs md:h-[697.78px] lg:px-[79px] lg:py-[79px] lg:pt-[113px] pb-[92px] gap-28 justify-center items-center"
        style={{
          background: "url('https://s3-alpha-sig.figma.com/img/db1f/dafa/120fc5ed7b1583e72c5b1d87baa4c234?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZH5z2S18BefqfFGKftpim2rMMNvChvYbRTL99cY96PByNCugXASCCMYS7LUbo1xUW4vg5sAKUnDDlTEKEfwNdFlW3kN7wUHoWaukN1F3~gdcQLHzfcXsiP6zFho5OMyOFzPswdGwtt0pjuZarvziQMTfMSH6-bm5L5dxTd4foN9MCW4OpZQUP7vp5dYBpXFFg3SqrYYfmPBv10q51BkjxHOYdQKpDQRDlkoC8zItsd8kzpd4LioWOsht82JkSgOiOafUnp61dbBSAvN0SF6V5A-JuYIYiJNcGcxhy82Yybj0OtNLweOE1NjVinXuDmyubUdw6L-HdEUBme9O6544Q__')",
        }}
      >
        <div className="flex-col justify-start items-start flex">
          <div className="justify-center items-start inline-flex">
            <div className="grow shrink basis-0 self-stretch md:pb-[72.78px] flex-col justify-start items-center gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-72 pt-[11px] pb-4 justify-center items-start inline-flex">
                  <div className="grow shrink basis-0 pb-[0.50px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-sky-400 text-[22px] font-normal font-['LarkenVariable'] uppercase leading-relaxed">
                      {title}
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-[11px] flex">
                  <div className="text-zinc-900 text-[38px] font-normal font-['Larken-Bold'] leading-[44px]">
                    Our Happy Clients
                  </div>
                  <div className="text-zinc-900 text-[38px] font-normal font-['Larken-Bold'] leading-[44px]">
                    Says About Us
                  </div>
                </div>

                <div className="text-neutral-500 text-sm font-normal font-['Larken-Regular'] leading-relaxed">
                  {subHeading}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex-col justify-start items-start flex gap-4 max-hd ">
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </div>
        <div className="hidden md:block gap-20 ">
          <div className="flex flex-col w-[770px] h-[492.78px] relative">
            <div className="flex flex-col w-[385px] left-[385px] top-[-207.40px] absolute justify-center items-start gap-2.5 ">
              <div className="px-3 pb-[30px] flex-col justify-start items-start flex gap-4 max-h-d infinite-scroll">
                {secondHalf.map((testimonial, index) => (
                  <Card key={index} {...testimonial} />
                ))}
              </div>
            </div>
            <div className="w-[385px] left-0 top-[5.60px] absolute flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="px-3 pb-[30px] flex-col justify-start items-start flex gap-4 infinite-scroll">
                {firstHalf.map((testimonial, index) => (
                  <Card key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<Testimonial> = ({ name, designation, image, testimonial }) => {
  return (
    <div className="self-stretch h-[240.30px] px-6 pt-[25.30px] pb-[33px] bg-white rounded-[3px] shadow flex-col justify-start items-start flex">
      <div className="self-stretch h-[148px] flex-col justify-start items-start gap-4 flex">
        <div className="w-[331px] pb-[0.50px] justify-start items-start gap-4 inline-flex">
          <img className="w-11 h-11 rounded-full" src={image} alt={`${name}'s profile`} />
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-zinc-900 text-[22px] font-semibold font-['Rubik'] leading-relaxed">
              {name}
            </div>
            <div className="text-neutral-500 text-base font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              {designation}
            </div>
          </div>
        </div>
        <div className="self-stretch h-[90.50px] pr-[54.33px] pb-[0.50px] flex-col justify-start items-start flex">
          <div className="text-neutral-500 text-base font-normal font-['Rubik'] leading-relaxed">
            {testimonial}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
