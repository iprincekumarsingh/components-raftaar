"use client";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

import Image from "next/image";

interface Props {}

const Faq = ({ ...faqData }) => {
  const faqs = [
    {
      question: "How to install it with Windows Server?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    },
    {
      question: "How to use it with other integrations?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    },
    {
      question: "How to download it?",
      answer: "Another answer.",
    },
    {
      question: "How to use extensions?",
      answer: "Another answer.",
    },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:pt-40  lg:mt-10 flex  flex-col justify-center items-center px-6 lg:px-[79px]  bg-[#DFE8F7] md:bg-white mx-auto  py-8">
      <div className="w-full  mb-2 text-2xl text-start md:text-center text-slate-900 md:text-5xl font-normal font-['Larken-Bold']">
        {faqData.title}
      </div>
      <div className="lg:w-[903px] text-start md:text-center text-slate-900 text-sm md:text-2xl font-normal font-['Larken-Regular'] leading-9">
        {faqData.subTitle}
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row gap-11">
        <div className="flex justify-center">
          <img
            src={faqData.mainImage}
            className="rounded"
            width={606}
            height={614}
            alt="FAQ"
          />
        </div>
        <div className=" w-full md:w-[600px] full">
          {faqData.faqs &&
            faqData.faqs.map(
              (
                faq: {
                  question:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                  answer:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  className={`mb-4  rounded-md overflow-hidden ${openIndex === index ? "bg-white border" : "bg-gray-100"}`}
                >
                  <div
                    className="w-full flex items-center justify-between cursor-pointer p-4"
                    onClick={() => handleToggle(index as number)}
                  >
                    <h2
                      className={`text-lg md:text-xl font-bold ${openIndex === index ? "text-[#3CC7F5]" : ""}`}
                    >
                      {faq.question}
                    </h2>
                    <span>
                      {openIndex === index ? (
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12.7916H19"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5.63605V19.636M5 12.636H19"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="p-4 text-sm md:text-base">{faq.answer}</p>
                  )}
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
