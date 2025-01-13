// How it works section

import React from "react";
import img1 from "../assets/msg.png";
import img2 from "../assets/scooty.png";
import img3 from "../assets/Group 105500.png";
const HowItWorks = () => {
  return (
    <div className="p-[20px]">
      <h1 className="text-[20px] font-bold">How it Works?</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center p-[10px]">
          <img src={img3} alt="img" className="w-[50px] mr-[20px]" />
          <p>
            Search for required Lab tests and select Diagnostic centre of your
            choice. Add prescription, patient details and address to complete
            the booking.
          </p>
        </div>
        <div className="flex items-center p-[10px]">
          <img src={img2} alt="img" className="w-[50px] mr-[20px]" />
          <p>
            Visit the lab centre as per your booking. For home sample
            collection, certified professional will collect the samples at your
            home.
          </p>
        </div>
        <div className="flex items-center p-[10px]">
          <img src={img1} alt="img" className="w-[50px] mr-[20px]" />
          <p>
            We will email you the reports. You can also access your reports
            within your account on the MediBuddy App.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
