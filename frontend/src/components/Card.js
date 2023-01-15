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
        {/* Title */}
        {/* Description */}
        {/* Size */}
      </div>
    </div>
  );
};

export default Card;
