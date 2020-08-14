import React, { Component } from "react";
import Slider from "react-slick";
import BrandsCard from "../Cards/brandsCard";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import Data from "../Data/brands";
const settings = {
  slidesToShow: 3.5,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  arrows: true,
  infinite: false,
  nextArrow: <RightArrow to="next" />,
  prevArrow: <LeftArrow to="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

class Brands extends Component {
  render() {
    return (
      <div className="mb-md-5">
        <div className="d-flex justify-content-between mb-md-2 mt-md-3">
          <span className="pl-md-1 th-brand-header">Brands</span>
          <span className="th-brand-all-btn">See All</span>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          {Data.map((item, index) => {
            return (
              <BrandsCard
                src={item.src}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Brands;
