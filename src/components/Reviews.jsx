// Reviews collection in what our say component

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const Reviews = (props) => {
  let { reviews } = props;
  reviews = reviews.props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 992 ? 3 : 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  return (
    <div className="p-[20px]">
      <h1 className="text-[20px] font-bold">What our Users say</h1>
      <div className="md:hidden">
        <Slider className="mt-[10px]" {...settings}>
          {reviews.map((each) => (
            <div className="p-[5px] pt-[9px]" key={uuidv4()}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-500">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>
                  <p className="text-gray-400 ml-[5px]">{each.days}</p>
                </div>
                <div className="flex items-center ">
                  <CiLocationOn />
                  <p className="text-gray-500 ml-[5px]">Bangalore</p>
                </div>
              </div>
              <p>"{each.content}"</p>
              <div className="flex items-center pt-[5px] mt-[15px] border-t-[1px]">
                <FaRegUser />
                <p className="ml-[10px]">{each.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block">
        <Slider className="mt-[10px]" {...settings2}>
          {reviews.map((each) => (
            <div className="p-[5px] pt-[9px]" key={uuidv4()}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-500">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>
                  <p className="text-gray-400 ml-[5px]">{each.days}</p>
                </div>
                <div className="flex items-center ">
                  <CiLocationOn />
                  <p className="text-gray-500 ml-[5px]">Bangalore</p>
                </div>
              </div>
              <p>"{each.content}"</p>
              <div className="flex items-center pt-[5px] mt-[15px] border-t-[1px]">
                <FaRegUser />
                <p className="ml-[10px]">{each.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
