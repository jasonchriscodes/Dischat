import React from "react";
import Discover from "./components/Discover";
import Groups from "./components/Groups";
import MainComponent from "./components/MainComponent";

const Home = () => {
  return (
    <div className="flex bg-[#363940] ">
      {/* Friends + Groups */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Main Content */}
      <MainComponent />
      {/* Hero */}
      {/* Featured */}
    </div>
  );
};

export default Home;
