import { NextPage } from "next";
import Card from "../ProductCard";

interface Product {
  productName: string;
  productDescription: string;
  imageUrl: string;
}

interface Props {
  productData: Product[];
}

const ProductPage: NextPage<Props> = ({ productData }) => {
  return (
    <div>
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 bg-blue-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {productData.map((product, index) => (
              <Card
                key={index}
                productName={product.productName}
                productDescription={product.productDescription}
                imageUrl={product.imageUrl}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1E5CAB] h-auto  md:h-[706px]   flex flex-col lg:flex-row  items-center justify-center ">
        <div className="w-full md:w-[584px] p-3 mt-10 md:p-10 flex flex-col lg:gap-10">
          <div className="flex flex-col gap-5 justify-start">
            <h1 className="text-white text-2xl md:text-4xl font-bold ">
              We make finest architectural design with great passion
            </h1>
            <p className="text-white text-sm md:text-2xl  font-normal ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium hic impedit omnis minima quaerat eveniet officiis
              rerum est amet necessitatibus.
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
            <div className="relative to-14  lg:px- border-8 border-white">
              <img
                className="w-[380.64px] md:w-[686px] lg:h-[619px]"
                src="https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3PaYpfQ-l14Ja~O-UM4TzWrPCei85bOeXIPFncej6dw-ZxbtFhiujRSVEZZN5vGc4pC8qBdOCELpBvs5iAq3yNa7unp-lC3j4wMXtD7VCqywuCwFV-zwzGiEKeIY2eHpCGnMT8lXVY7rTroiMvoqj-f2w5pLRtTr-eE9iDp3T7fT2rhG234d2k9iLsY9PED6aqN8UZLTduangnPRWg3phTghNLHRLDPjOSLaUQjS~UesQDx1PubXvf6nxdn0U0ANdp3Mv3Xtr9AElJkneYA46FUgXrBjYAgQnARWW0DbW0IPQmVsbY8hmSGyWxLG-sq~zZooTFDzX0-gQTwc0ftaQ__"
                alt="Main Image"
                // width={686}
                // height={619}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
