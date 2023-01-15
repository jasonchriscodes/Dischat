import React from "react";

const Card = ({ size, description, title, profile, bg }) => {
  return (
    <div className="w-1/2">
      {/* Banner  */}
      <div className="h-52 flex">
        <img
          src={bg}
          className="rounded-t-[1.5rem] object-cover"
          alt="banner area"
        />
      </div>
      <div className="bg-[#292B2F] relative">
        {/* Profile Pic */}
        <div className="absolute -top-8 left-4 w-16 h-16 flex rounded-[0.4rem]">
          <img
            className="object-cover rounded-[0.4rem]"
            src={profile}
            alt="cover area"
          />
        </div>
        {/* Title */}
        {/* Description */}
        {/* Size */}
      </div>
    </div>
  );
};

export default Card;
