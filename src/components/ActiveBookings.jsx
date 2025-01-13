// Active Bookings component shows the confirmed and upcoming apppointments

import React from "react";
import avatar from "../assets/Avatar 2.png";
import tick from "../assets/Success.png";
import arrow from "../assets/arrow.png";

const ActiveBookings = () => {
  return (
    <div className="py-[20px] px-[20px]">
      <div className="flex justify-between items-center mb-[15px]">
        <p className="font-bold text-[20px] ">Your Active Bookings</p>
        <p className="text-blue-700 font-semibold">View All</p>
      </div>
      <div className="border-[2px] p-[15px] rounded-xl max-w-[500px]">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <img src={avatar} alt="avatar" className="mr-[7px]" />
              <p>Mr. Suresh Gaikwad</p>
            </div>
            <div className="flex items-center">
              <img src={tick} alt="tick" className="mr-[7px]" />
              <p className="text-[20px] font-bold">Appointment Confirmed</p>
            </div>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="bg-gray-200 flex justify-between p-[15px] rounded-xl">
          <div className="text-center border-r-gray-300 border-r-[2px] pr-[10px]">
            <h1 className="font-semibold text-[18px]">03 Nov'22</h1>
            <p className="text-gray-500">Wednesday</p>
          </div>
          <div className="text-center border-r-gray-300 border-r-[2px] pr-[10px]">
            <h1 className="font-semibold text-[18px]">09:30-10:30 AM</h1>
            <p className="text-gray-500">Home Sample Collection</p>
          </div>
          <div className="text-center flex items-center">
            <h1 className="font-semibold text-[18px]">03 Lab Tests</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBookings;
