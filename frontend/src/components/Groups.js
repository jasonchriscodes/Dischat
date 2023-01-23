import React from "react";
import img1 from "../components/assets/img1.png";
import img2 from "../components/assets/img2.png";
import img3 from "../components/assets/img3.png";
import img4 from "../components/assets/img4.png";
import dc from "../components/assets/dc.png";
import { FiPlus } from "react-icons/fi";
import { AiFillCompass } from "react-icons/ai";
import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [img1, img2, img3, img4, img1];
  return (
    <div className="hidden sm:flex bg-[#212226] w-[6rem] shrink-0 h-screen sticky top-0 pt-6">
      <div className="flex flex-col items-center w-full space-y-4">
        {/* Discord */}
        <Link to="/">
          <div className="bg-[#36393f] p-1 rounded-[1.3rem] cursor-pointer">
            <img
              src={dc}
              className="w-12 h-12 rounded-full text-white brightness-[80%]"
              alt="group-logo"
            />
          </div>
        </Link>

        {/* Compass */}
        <div className="bg-[#7289dc] p-3 rounded-[1.3rem] cursor-pointer">
          <AiFillCompass
            src={img4}
            className="w-8 h-8 rounded-full text-white"
            alt="group-logo"
          />
        </div>
        {/* Groups */}
        <div className="space-y-2 pt-4">
          {groups.map((group) => (
            <div className="w-14 h-14 flex cursor-pointer" key={group}>
              <img
                src={group}
                className="object-cover rounded-full"
                alt="group-logo"
              />
            </div>
          ))}
        </div>

        {/* Plus */}
        <div className="bg-[#36393f] p-4 rounded-full">
          <FiPlus
            src={img4}
            className="w-6 h-6 rounded-full text-green-700 cursor-pointer"
            alt="group-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Groups;
