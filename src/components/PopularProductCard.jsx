import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ name, price, imgURL }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <img src={imgURL} alt="" className="w-[280px] h-[280px]" />
      <div className="flex  mt-4 justify-start w-full gap-2">
        <img src={star} alt="" />
        <p className="text-slate-gray">(4.5)</p>
      </div>
      <div className="flex flex-col justify-start w-full">
        <h3 className="mt-3 text-2xl font-semibold ">{name}</h3>
        <p className="text-coral-red font-semibold mt-2 text-lg">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
