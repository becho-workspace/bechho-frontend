import React, { Component } from "react";
import ProdsCard from "../Cards/productsCard";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";

const settings = {
  slidesToShow: 4,
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
        slidesToShow: 4,
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

class OldProducts extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between mb-md-2 mt-md-3">
          <span className="pl-md-1 th-old-product-header">Old Products</span>
          <span className="th-old-product-all-btn">See All</span>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          <ProdsCard />
          <ProdsCard />
          <ProdsCard />
          <ProdsCard />
          <ProdsCard />
          <ProdsCard />
          <ProdsCard />
        </Slider>
      </div>
    );
  }
}

export default OldProducts;
