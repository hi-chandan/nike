import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handlclick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
     ${
       bigShoeImage === imgURL.bigShoe
         ? "border-coral-red"
         : "border-transparent"
     } cursor-pointer max-sm:flex`}
      onClick={handlclick}
    >
      <div
        className="bg-card flex border- justify-center items-center bg-center
      bg-cover sm:w-40 rounded-xl max-sm:p-8 sm:p-4 "
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
