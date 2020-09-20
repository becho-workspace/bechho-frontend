import React, { Component } from "react";
import ProdsCard from "../Cards/productsCard";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import axios from "axios";
import { API } from "../../../../backend";

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
        arrows: true,
        dots: false,
      },
    },
  ],
};

class NewProducts extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetch_products();
  }

  fetch_products = () => {
    axios
      .get(`${API}/products/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let start, end;
    start = 0;
    if (this.state.data.length >= 20) {
      end = 15;
    } else if (this.state.data.length < 20 && this.state.data.length >= 10) {
      end = 10;
    } else if (this.state.data.length < 10 && this.state.data.length >= 6) {
      end = 6;
    } else {
      end = this.state.data.length;
    }

    console.log(this.state.data.length, this.state.total, start, end);
    return (
      <div className="mb-5">
        <div className="d-flex justify-content-between mb-2 mt-4">
          <span className="pl-md-1 th-new-product-header">Latest Products</span>
          <span className="th-new-product-all-btn">See All</span>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          {this.state.data.slice(start, end).map((item, index) => {
            return (
              <ProdsCard
                src={item.photo.path}
                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                description={item.description}
                location={
                  item.city.charAt(0).toUpperCase() + item.city.slice(1)
                }
                price={item.price}
                // key={index}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default NewProducts;
