import React from "react";
import image from "../assets/Group 189935.png";
import shield from "../assets/Group 104556.png";
import sym1 from "../assets/Group 105500.png";
import sym2 from "../assets/Group 105501.png";
import sym3 from "../assets/Group 105497.png";

const Trrust = () => {
  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[20px]">
            Trusted by{" "}
            <span className="text-blue-600 font-semibold">20,00,000+</span>
          </h1>
          <h1 className="text-[25px] font-bold">Users Every Month</h1>
        </div>
        <img src={shield} alt="shield" className="w-[50px]" />
      </div>
      <div className="flex items-center justify-around flex-wrap mt-[20px]">
        <div className="flex items-center mr-[5px]">
          <img src={sym1} alt="sym" />
          <div className="ml-[10px]">
            <h1>200+ Approved Diagonstic Centers</h1>
          </div>
        </div>
        <div className="flex items-center mr-[5px]">
          <img src={sym3} alt="sym" />
          <div className="ml-[10px]">
            <h1>1200+ Lab Tests Offered</h1>
          </div>
        </div>
        <div className="flex items-center">
          <img src={sym2} alt="sym" />
          <div className="ml-[10px]">
            <h1>1200+ Approved Covered</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trrust;
