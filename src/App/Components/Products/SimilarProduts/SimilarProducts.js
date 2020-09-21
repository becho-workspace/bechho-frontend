import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import ProductCard from "../../Home/Cards/productsCard";
import axios from "axios";
import { API } from "../../../../backend";

const settings = {
  slidesToShow: 2.8,
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

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="mb-5 container ">
        <div className="mb-3 mt-5">
          <span className="th-similar-product-title">Similar Products</span>
        </div>
        <div className="th-similar-prod-box">
          <Slider {...settings} className="px-0">
            {this.state.products.map((item, index) => {
              return (
                <ProductCard
                  src={item.photo.path}
                  title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  description={item.description}
                  location={
                    item.city.charAt(0).toUpperCase() + item.city.slice(1)
                  }
                  price={item.price}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SimilarProducts;
