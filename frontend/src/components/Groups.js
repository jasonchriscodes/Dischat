import React from "react";
import img1 from "../components/assets/img1.png";
import img2 from "../components/assets/img2.png";
import img3 from "../components/assets/img3.png";
import img4 from "../components/assets/img4.png";
import { FiPlus } from "react-icons/fi";

const Groups = () => {
  const groups = [img1, img2, img3, img4, img1];
  return (
    <div className="hidden sm:flex bg-[#212226] w-[6rem] shrink-0 h-screen sticky">
      {/* Groups */}
      <div className="flex flex-col items-center w-full space-y-4">
        {groups.map((group) => (
          <div className="w-14 h-14 flex ">
            <img
              src={group}
              className="object-cover rounded-full"
              alt="group-logo"
            />
          </div>
        ))}
        <div className="bg-[#36393f] p-4 rounded-full">
          <FiPlus
            src={img4}
            className=" w-6 h-6 rounded-full text-green-700"
            alt="group-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Groups;
