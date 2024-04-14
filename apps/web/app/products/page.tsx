"use client";
import { NextPage } from "next";
import ProductPage from "../components/products/ProductPage";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const productData = [
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
  ];
  return (
    <div>
      <ProductPage productData={productData} />
    </div>
  );
};

export default Page;
