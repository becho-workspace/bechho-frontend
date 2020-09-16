import React, { Component } from "react";
import ProdsCard from "../Cards/productsCard";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import Data from "../Data/products";

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
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};

class OldProducts extends Component {
  render() {
    let start = Data.length - 10;
    let end = Data.length;
    return (
      <div className="mb-5">
        <div className="d-flex justify-content-between mb-2 mt-4">
          <span className="pl-md-1 th-old-product-header">
            Most Demanded Products
          </span>
          <span className="th-old-product-all-btn">See All</span>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          {Data.slice(start, end).map((item, index) => {
            return (
              <ProdsCard
                src={item.src}
                title={item.title}
                description={item.description}
                location={item.location}
                price={item.price}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default OldProducts;
