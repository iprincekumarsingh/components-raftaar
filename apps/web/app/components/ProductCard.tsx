import { NextPage } from "next";
import React from "react";

interface CardProps {
  productName: string;
  productDescription: string;
  imageUrl: string;
  onClick: () => void;
}

const Card: NextPage<CardProps> = ({
  productName,
  productDescription,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="w-[390px] h-[482px] p-6 bg-white border border-gray-300 flex-col justify-start items-start gap-4 inline-flex">
      <img className="w-[342px] h-[261px] rounded-xl" src={imageUrl} />
      <div className="self-stretch h-[116px] flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch text-slate-900 text-2xl font-normal font-['Larken-Medium'] leading-9">
          {productName}
        </div>
        <div className="self-stretch text-slate-600 text-base font-normal font-['Figtree']">
          {productDescription}
        </div>
      </div>
      <div className="bg-white justify-center items-center gap-1 inline-flex">
        <div
          className="text-blue-800 text-base font-semibold font-['Archivo'] leading-[25px]"
          onClick={onClick}
        >
          Get Quote
        </div>
      </div>
    </div>
  );
};

export default Card;
