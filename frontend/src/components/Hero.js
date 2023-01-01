import React from "react";
import hero from "./assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[17rem] mx-8 mt-6   rounded-[.3rem]">
      {/* Background Image */}
      <div className="absolute flex w-full">
        <img
          src={hero}
          className="object-cover w-full rounded-[.3rem] h-[17rem]"
          alt="hero"
        />
      </div>
      {/* Search Box */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full font-bold text-white pb-4">
        <p className="text-[22px] font-black">Find your community on Discord</p>
        <p className="pb-2 text-[15px]">
          From gaming, to music, to study, there's a place for you.{" "}
        </p>
        <input
          type="search"
          className="rounded-[.3rem] pl-3 placeholder: text-[14px] placeholder:text-gray-600 outline-0 w-full max-w-[70vw] mb-4"
          placeholder="Explore servers"
        />
      </div>
    </div>
  );
};

export default Hero;
