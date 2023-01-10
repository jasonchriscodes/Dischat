import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";

const MainComponent = () => {
  return (
    <div className="bg-[#363940] w-full px-5 pt-4">
      {/* Hero  */}
      <Hero />
      {/* Featured Servers */}
      <Featured />
    </div>
  );
};

export default MainComponent;
