// Banners component to show the available services and new updates

import React from "react";
import Slider from "react-slick"; // Used slider to make carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const Banners = (props) => {
  const { banners } = props;
  const banner = banners.props;

  const settings = {
    // settings control the behaviour of slider
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
    // settings2 control the behaviour of slider in medium and above devices
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 992 ? 3 : 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  return (
    // rendered two sliders one for extra small, small and other for medium & above devices
    <div className="mx-[20px] mt-[40px]">
      <div className="md:hidden">
        <Slider className="w-full cursor-pointer" {...settings}>
          {banner.map((each) => (
            <img
              key={uuidv4()}
              className="h-[190px]"
              src={each.bannerUrl}
              alt="banner"
            />
          ))}
        </Slider>
      </div>
      <div className="hidden md:block">
        <Slider className="w-full cursor-pointer" {...settings2}>
          {banner.map((each) => (
            <div key={uuidv4()} className="px-[7px] border-none outline-none">
              <img className="h-[190px]" src={each.bannerUrl} alt="banner" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banners;
