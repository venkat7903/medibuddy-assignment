import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const Banners = (props) => {
  const { banners } = props;
  const banner = banners.props;

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
