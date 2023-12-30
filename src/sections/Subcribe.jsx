import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const Subcribe = () => {
  return (
    <section className="text-center max-container p-12 flex flex-col  items-center">
      <div className="text-4xl font-bold">
        <h1>
          Sign Up from
          <span className="text-coral-red"> Updates</span> & Newsletter
        </h1>
      </div>
      <div
        className=" w-full mt-12 flex justify-center items-center  p-2  lg:max-w-[60%]  max-sm:flex-col
      sm:border sm:border-slate-gray rounded-full "
      >
        <input type="text" className="input" placeholder="subscribe@nike.com" />
        <div className="flex max-sm:justify-center max-sm:mt-4 items-end max-sm:w-full">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
