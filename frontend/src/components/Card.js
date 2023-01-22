import React from "react";

const Card = ({ size, description, title, profile, bg }) => {
  return (
    <div className="w-1/2">
      {/* Banner  */}
      <div className="h-40 flex w-full">
        <img
          src={bg}
          className="rounded-t-[0.8rem] object-cover w-full"
          alt="banner area"
        />
      </div>
      <div className="bg-[#292B2F] relative h-[11.5rem] px-[1rem] rounded-b-[0.8rem]">
        {/* Profile Pic */}
        <div className="absolute -top-8 left-4 w-16 h-16 flex rounded-[1rem]">
          <img
            className="object-cover rounded-[1rem] p-1 bg-[#292B2F]"
            src={profile}
            alt="cover area"
          />
        </div>
        {/* Title */}
        <p className="text-white font-bold text-[17px] pt-9">{title}</p>
        {/* Description */}
        <p className="text-gray-400 font-medium text-[15px] pt-1">
          {description}
        </p>
        {/* Size */}
        <p className="text-gray-400 font-medium text-[13.5px] pt-2 pb-4">
          {size}
        </p>
      </div>
    </div>
  );
};

export default Card;
