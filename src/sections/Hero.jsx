import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../components";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [oldimg, newimg] = useState(bigShoe1);
  return (
    <section className="w-full min-h-screen flex flex-col xl:flex-row  gap-10  ">
      <div className=" relative  xl:w-3/5 flex flex-col  justify-center items-start w-full pt-28 padding-x">
        <p className=" text-4xl font-bold font-montserrat text-coral-red">
          Our Winter Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[62px] font-bold max-sm:leading-[72px] ">
          <span className="">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3  pr-10">Nike </span>
          Shoes
        </h1>
        <p className="w-2/4  font-montserrat text-start p-2 text-lg max-md:text-base max-md:w-3/4">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex mt-10 gap-16 justify-start items-start flex-wrap">
          {statistics.map((val) => (
            <div className="" key={val.label}>
              <p className="text-4xl font-bold font-palanquin">{val.value}</p>
              <p className="font-montserrat text-gray-950  ">{val.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex w-full   flex-col top-32  xl:min-h-screen flex-1 justify-center items-center   bg-primary max-xl:py-40  bg-hero bg-cover ">
        <img
          src={oldimg}
          alt="shoe collection"
          width={510}
          height={400}
          className="object-contain z-10 relative"
        />
        <div className="flex absolute w-full justify-center items-center -bottom-[5%] gap-4  ">
          {shoes.map((shoe) => (
            <div className="" key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  newimg(shoe);
                }}
                bigShoeImage={oldimg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
