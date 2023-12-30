import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        className="rounded-full"
        width={140}
        height={140}
        alt="rating"
      />
      <p className="text-center info-text mt-6 max-w-md ">{feedback}</p>
      <div className="flex mt-6 gap-2">
        <img src={star} alt="" />
        <h1>({rating})</h1>
      </div>
      <h1 className="text-3xl font-palanquin font-bold">{customerName}</h1>
    </div>
  );
};

export default ReviewCard;
