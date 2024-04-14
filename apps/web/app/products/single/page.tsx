"use client";
import { NextPage } from "next";
import Card from "../../components/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import ProductSingle from "../../components/productSingle/page";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [deviceType, setDeviceType] = useState("desktop");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productSingleData = {
    singleProduct: [
      {
        images: [
         "https://source.unsplash.com/random/800x600",
         "https://source.unsplash.com/random/800x600",
         "https://source.unsplash.com/random/800x600"
        ],
        productDescription: "Weight (in kg): 6471.468",
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productCompany: "Company Name",
        productTotalSold: 100,
        productRating: 4.5,
        productReviews: 2343,
      },
    ],
    bestSeller: [
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      },
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      },
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      }
      // Add more best-selling products here as needed
    ],
    relatedProducts: [
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      },
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      },
      {
        productName: "GRP 10KL-16MTR MS Steel Structure (3x2x2)",
        productDescription: "Weight (in kg): 6471.468",
        imageUrl: "https://source.unsplash.com/random/800x600",
      },
      // Add more related products here as needed
    ],
  };
  

  return <ProductSingle productData={productSingleData} />;
};

export default Page;
