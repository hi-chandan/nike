import React from "react";
import { products } from "../components";
import PopularProductCard from "../components/PopularProductCard";
const PopularProduct = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold max-sm:pt-20 ">
          Our
          <span className="text-coral-red"> Popular </span>
          Product
        </h1>
        <p className="lg:max-w-md font-montserrat text-slate-gray pt-5">
          Experience top-notch quality and style with our sought after
          selections, Discover a world of comofort design, and value.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 sm:gap-4 ">
        {products?.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
