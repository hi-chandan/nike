import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const superQuality = () => {
  return (
    <section
      id="super-quility"
      className="flex justify-center  lg:ml-12 items-center max-lg:flex-col w-full gap-10"
    >
      <div className="capitalize">
        <h1 className=" font-palanquin text-4xl max-sm:text-[62px] font-bold max-sm:leading-[72px]  ">
          <span className="">we provide you </span>
          <span className="text-coral-red ">super</span>
          <br />
          <span className="text-coral-red  ">quality </span>
          shoes
        </h1>
        <p className="info-text lg:max-w-lg mt-4">
          ensuring preminum confort and style, our meticulously crafted footwear
          is designed to elvate your experience, providing you with unmatched
          quility innovation ,and a touch of elegance.
        </p>
        <p className="info-text lg:max-w-lg mt-6">
          Our dedication to detail to provid quility with value to million of
          costumer
        </p>
        <div className="mt-10"></div>
      </div>
      <div className="flex  flex-1 justify-center items-center">
        <img src={shoe8} alt="show8" width={570} height={522} />
      </div>
    </section>
  );
};

export default superQuality;
