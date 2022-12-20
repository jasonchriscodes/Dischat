import React from "react";
import hero from "./assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[6rem] mx-2 mt-2 rounded-[.3rem]">
      {/* Background Image */}
      <div className="absolute flex w-full">
        <img
          src={hero}
          className="object-cover w-full rounded-[.3rem] h-[6rem]"
          alt="hero"
        />
      </div>
      {/* Search Box */}
      <div className="relative z-10">hi</div>
    </div>
  );
};

export default Hero;
