"use client";
import React from "react";
import { NextPage } from "next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../ProductCard";

interface Product {
  productName: string;
  productDescription: string;
  imageUrl: string;
}

interface SingleProductData {
  singleProduct: {
    images: {
      original: string;
      thumbnail: string;
    }[];
    productDescription: string;
    productName: string;
    productCompany: string;
    productTotalSold: number;
    productRating: number;
    productReviews: number;
  }[];
  bestSeller: Product[];
  relatedProducts: Product[];
}

interface Props {
  productData: SingleProductData;
}

const ProductSingle: NextPage<Props> = ({ productData }) => {
  const [deviceType, setDeviceType] = React.useState("desktop");
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full flex bg-[#F0F5FC] flex-col justify-center items-center gap-12">
      <div className="mt-12 max-w-screen-xl w-full px-6 flex flex-col gap-6">
        {/* Navigation */}
        <div className="w-full flex flex-col items-center md:flex-row gap-5">
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            Home
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            &gt;&gt;
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            Products
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-[25px]">
            &gt;&gt;
          </div>
          <div className="text-slate-900 text-xl font-normal font-['Larken-Medium'] leading-9">
            {productData.singleProduct[0].productName}
          </div>
        </div>

        {/* Product details */}
        <div className="lg:w-[1277px] flex flex-col gap-[43px]6">
          <div className="lg:w-[500px] flex flex-col md:flex-row gap-[43px]">
            {/* Carousel */}
            <div className="md:w-[569px] md:h-[768px] flex flex-col gap-[43px]6">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-4-px"
              >
                {/* Carousel items */}
                {productData.singleProduct[0].images.map((image, index) => (
                  <div key={index} className="w-full h-[768px]">
                    <img
                      className="w-full h-full"
                      src={image}
                      alt="Product Image"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            {/* Product information */}
            <div className="w-full lg:w-[500px] md:w-[665px] flex flex-col justify-center items-start gap-5">
              <div className="w-full text-slate-900 text-4xl font-normal font-['Larken-Medium']">
                {productData.singleProduct[0].productName}
              </div>
              <div className="w-full lg:w-[500px] flex justify-around items-center gap">
                <div className="text-black flex gap-2 text-xl font-normal font-['Figtree']">
                  <img
                    className="w-[27px] h-[27px]"
                    src="/star.png"
                    alt="Star"
                  />
                  <img src="/star.png" alt="Star" />
                  <img src="/star.png" alt="Star" />
                  <h1>4.5</h1>
                </div>
                <div className="text-black text-xl font-normal font-['Figtree']">
                  {productData.singleProduct[0].productReviews} Reviews
                </div>
                <div className="text-blue-800 text-xl font-normal font-['Figtree']">
                  {productData.singleProduct[0].productTotalSold} Sold
                </div>
              </div>
              <div className="w-full lg:w-[500px] flex flex-col gap-5">
                <div className="text-black text-xl font-normal font-['Figtree']">
                  Description
                </div>
                <div className="text-slate-700 text-opacity-70 text-xl font-normal font-['Figtree']">
                  {productData.singleProduct[0].productDescription}
                </div>
              </div>
              <div className="w-[143px] h-[57px] px-6 py-4 bg-blue-800 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-semibold font-['Archivo'] leading-[25px]">
                  Get Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Seller */}
      <div className="max-w-screen-xl w-full px-6 flex flex-col gap-6">
        <div className="text-start text-slate-900 text-5xl font-bold leading-63.75px">
          Best seller
        </div>
        <div className="text-start text-slate-700 text-opacity-70 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start lg:gap-5">
          {productData.bestSeller.map((product, index) => (
            <Card
              key={index}
              productName={product.productName}
              productDescription={product.productDescription}
              imageUrl={product.imageUrl}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-screen-xl w-full px-6 flex flex-col gap-6">
        <div className="text-start text-slate-900 text-5xl font-bold leading-63.75px">
          Related Products
        </div>
        <div className="text-center text-slate-700 text-opacity-70 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start lg:gap-5">
          {productData.relatedProducts.map((product, index) => (
            <Card
              key={index}
              productName={product.productName}
              productDescription={product.productDescription}
              imageUrl={product.imageUrl}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
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

export default ProductSingle;
