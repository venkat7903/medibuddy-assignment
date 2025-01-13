// Rendered problems faced by people

import React from "react";
import img1 from "../assets/lifestyle/Frame 189963.png";
import img2 from "../assets/lifestyle/Frame 190046.png";
import img3 from "../assets/lifestyle/Frame 190047.png";
import img4 from "../assets/lifestyle/Frame 190048.png";

const LifeStyle = () => {
  return (
    <div className="p-[20px]">
      <h1 className="text-[20px] font-bold">
        Lifestyle Health Check-up Packages
      </h1>
      <div className="flex items-center flex-wrap">
        <img src={img1} alt="img" className="mr-[40px] mb-[10px]" />
        <img src={img2} alt="img" className="mr-[40px] mb-[10px]" />
        <img src={img3} alt="img" className="mr-[40px]" />
        <img src={img4} alt="img" />
      </div>
    </div>
  );
};

export default LifeStyle;
