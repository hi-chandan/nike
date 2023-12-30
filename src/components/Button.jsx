import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`bg-coral-red flex  font-bold p-4 gap-2 rounded-full justify-center items-center text-lg  font-montserrat ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "text-white border border-coral-red"
      } `}
    >
      {label}
      <img
        src={iconURL}
        alt="arrow right w-5 h-5"
        className="ml-2 rounded-full"
      />
    </button>
  );
};

export default Button;
