import React from "react";
import { reviews } from "../components";
import ReviewCard from "../components/ReviewCard";

const CustumerReviews = () => {
  return (
    <section className="max-container  ">
      <div className="flex flex-col  items-center">
        <h3 className="text-4xl  font-palanquin font-bold">
          What Our
          <br className="sm:hidden" />
          <span className="text-coral-red"> Customer </span>
          Say?
        </h3>
        <p className="info-text   mt-4 max-w-lg text-center  ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews?.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustumerReviews;
