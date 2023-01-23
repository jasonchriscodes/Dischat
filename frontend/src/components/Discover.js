import React from "react";
import { AiFillCompass } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import {
  BsMusicNoteBeamed,
  BsFillPlayCircleFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { TbAtom } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import Topic from "./Topic";

const Discover = () => {
  const topics = [
    { title: "Home", icon: <AiFillCompass /> },
    { title: "Gaming", icon: <GiConsoleController /> },
    { title: "Music", icon: <BsMusicNoteBeamed /> },
    { title: "Education", icon: <FaGraduationCap /> },
    { title: "Science & tech", icon: <TbAtom /> },
    { title: "Content Creator", icon: <BsFillPlayCircleFill /> },
    { title: "Anime & Manga", icon: <BsFillEmojiSmileFill /> },
    { title: "Movies & TV", icon: <FiMonitor /> },
  ];
  return (
    <div className="text-white hidden xl:flex flex-col bg-[#303136] w-[18rem] shrink-0 p-4">
      {/* Title */}
      <p className="text-white font-bold text-[25px]">Discover</p>
      {/* Topics */}
      <div className="mt-4 space-y-4">
        {topics.map((topic) => (
          <Topic title={topic.title} icon={topic.icon} />
        ))}
      </div>
      {/* ProfileSettings */}
    </div>
  );
};

export default Discover;
