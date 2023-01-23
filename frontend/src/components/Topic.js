import React from "react";

const Topic = ({ title, icon }) => {
  return (
    <div className="flex text-white/50 items-center text-[20px] ">
      <button className="flex items-center hover:bg-[#728ade] hover:text-white focus:bg-[#728ade] focus:text-white duration-100 ease-out w-full py-2.5 rounded-[0.4rem] font-semibold">
        <div className="pl-4 text-[25px]"> {icon}</div>
        <p className="ml-2">{title}</p>
      </button>
    </div>
  );
};

export default Topic;
