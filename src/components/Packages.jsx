import React from "react";
import Package from "./Package";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const Packages = (props) => {
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
    slidesToScroll: 2,
    arrows: false,
    draggable: true,
  };

  const { packages } = props;
  return (
    <div>
      <div className="md:hidden mt-[20px]">
        {packages.length !== 1 ? (
          <Slider {...settings}>
            {packages.map((each) => {
              return <Package key={uuidv4()} packagi={each} />;
            })}
          </Slider>
        ) : (
          <Package key={uuidv4()} packagi={packages[0]} />
        )}
      </div>
      <div className="xs:hidden md:block mt-[20px]">
        {packages.length !== 1 ? (
          <Slider {...settings2}>
            {packages.map((each) => {
              return <Package key={uuidv4()} packagi={each} />;
            })}
          </Slider>
        ) : (
          <Package key={uuidv4()} packagi={packages[0]} />
        )}
      </div>
    </div>
  );
};

export default Packages;
