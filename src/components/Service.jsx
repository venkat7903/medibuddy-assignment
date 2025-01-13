// Service component - sub-component of Services
// Renders logo and corresponding service name

import React from "react";

const Service = (props) => {
  const { serviceDetails } = props;
  return (
    <li className="cursor-pointer flex flex-col items-center border-[0px] text-center mt-[10px] mx-[10px] w-[120px] min-h-[90px]">
      <img
        src={serviceDetails[1]}
        className="w-[70px], h-[70px]"
        alt={serviceDetails[0]} // Service Logo
      />
      {/* service name */}
      <p className="font-semibold text-[14px]">{serviceDetails[0]}</p>{" "}
    </li>
  );
};

export default Service;
