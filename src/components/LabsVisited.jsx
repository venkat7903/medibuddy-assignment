import React from "react";
import Slider from "react-slick";
import shop1 from "../assets/bang.png";
import shop2 from "../assets/odisha.png";
import { BiLocationPlus } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const LabsVisited = () => {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: true,
  };

  return (
    <div className="px-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold">Labs Visited</h1>
        <p className="cursor-pointer text-blue-600 font-semibold">See All</p>
      </div>
      <Slider {...settings2}>
        <div className="border-gray-400 border-[2px] rounded-3xl">
          <img src={shop1} alt="shop" className="w-full h-[200px]" />
          <div className="p-[10px]">
            <h1 className="font-semibold text-[18px]">Apollo Diagnostics</h1>
            <div className="flex items-center mt-[9px] text-gray-500">
              <BiLocationPlus />
              <p className="ml-[7px]">Karmanangala, Bangalore</p>
            </div>
            <div className="flex items-center mt-[7px] text-gray-500">
              <BsClock />
              <p className="ml-[7px]">Next Slot - 07:30 AM, Tomorrow</p>
            </div>
          </div>
        </div>
        <div className="border-gray-400 border-[2px] rounded-3xl">
          <img
            src={shop2}
            alt="shop"
            className="w-full h-[200px] rounded-3xl rounded-bl-none rounded-br-none"
          />
          <div className="p-[10px]">
            <h1 className="font-semibold text-[18px]">Apollo Diagnostics</h1>
            <div className="flex items-center mt-[9px] text-gray-500">
              <BiLocationPlus />
              <p className="ml-[7px]">Karmanangala, Bangalore</p>
            </div>
            <div className="flex items-center mt-[7px] text-gray-500">
              <BsClock />
              <p className="ml-[7px]">Next Slot - 07:30 AM, Tomorrow</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LabsVisited;
