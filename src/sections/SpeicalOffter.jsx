import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const speicalOffter = () => {
  return (
    <section className="flex  flex-wrap max-lg::flex-col-reverse items-center gap-12">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="capitalize">
        <h1 className=" font-palanquin text-4xl max-sm:text-[62px] font-bold max-sm:leading-[72px]  ">
          <span className="text-coral-red ">speical </span>
          offer
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
        <div className="mt-10 flex gap-10">
          <Button label="view details" iconURL={arrowRight} />
          <Button
            label="view details"
            backgroundColor={"bg-white"}
            borderColor={"border-2 border-slate-gray"}
            textColor="text-slate-gray"
            iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default speicalOffter;
