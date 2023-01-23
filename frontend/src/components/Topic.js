import React from "react";

const Topic = ({ title, icon }) => {
  return (
    <div className="">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Topic;
