import React from "react";

const Card = ({ size, description, title, profile, bg }) => {
  return (
    <div className="w-1/2">
      {/* Banner  */}
      <div className="h-40 flex w-full">
        <img
          src={bg}
          className="rounded-t-[1.5rem] object-cover w-full"
          alt="banner area"
        />
      </div>
      <div className="bg-[#292B2F] relative h-[10rem]">
        {/* Profile Pic */}
        <div className="absolute -top-8 left-4 w-16 h-16 flex rounded-[0.4rem]">
          <img
            className="object-cover rounded-[0.4rem] p-1 bg-[#292B2F]"
            src={profile}
            alt="cover area"
          />
        </div>
        {/* Title */}
        <div className="">

        </div>
        {/* Description */}
        {/* Size */}
      </div>
    </div>
  );
};

export default Card;
