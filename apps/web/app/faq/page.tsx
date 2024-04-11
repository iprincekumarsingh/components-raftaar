"use client";
import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const faqs = [
    {
      question: "How to install it with Windows Server?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    },
    {
      question: "How to use it with other integrations?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
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
    <div className="container mt-20 bg-[#DFE8F7] md:bg-white mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl leading-7 md:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row gap-11">
        <div className="flex justify-center">
          <Image src="/faq.png" width={500} height={500} alt="FAQ" />
        </div>
        <div className="w-full md:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-[#F2F3F7] rounded-md overflow-hidden"
            >
              <div
                className="flex items-center justify-between cursor-pointer p-4"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-lg md:text-xl font-bold">{faq.question}</h2>
                <span>
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="p-4 text-sm md:text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
