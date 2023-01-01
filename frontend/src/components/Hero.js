import React from "react";
import hero from "./assets/hero2.webp";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-[15rem] mx-8 mt-6   rounded-[.3rem] z-10">
      {/* Background Image */}
      <div className="absolute flex w-full">
        <img
          src={hero}
          className="object-cover w-full rounded-[.3rem] h-[15rem]"
          alt="hero"
        />
      </div>
      {/* Overlay */}
      <div className="absolute flex w-full h-full bg-black/23 z-10"></div>
      {/* Search Box */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full font-bold text-white pb-0">
        <p className="text-[22px] font-black">Find your community on Discord</p>
        <p className="pb-2 text-[15px]">
          From gaming, to music, to study, there's a place for you.{" "}
        </p>
        <div className="relative flex items-center mb-4">
          <input
            type="search"
            className="rounded-[.3rem] pl-3 placeholder: text-[14px] placeholder:text-gray-600 outline-0 w-full max-w-[70vw] py-1.5 w-[25rem]"
            placeholder="Explore servers"
          />
          <FiSearch className="absolute text-black right-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
