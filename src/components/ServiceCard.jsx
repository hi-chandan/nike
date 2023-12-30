import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 shadow-2xl border-2  w-full py-16 px-10">
      <div className="flex  justify-center bg-coral-red w-11 h-11 items-center rounded-full">
        <img src={imgURL} alt="" width={23} height={24} />
      </div>
      <h3 className="leading-normal mt-4 font-palanquin text-3xl font-bold">
        {label}
      </h3>
      <p className="font-montserrat  break-words text-lg mt-3 leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
