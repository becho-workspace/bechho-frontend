import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import ProductCard from "../../Home/Cards/productsCard";

const data = [
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool Tshirt- Best quality",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
    location: "Locations",
    price: "₹ 599",
  },
];

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
  render() {
    return (
      <div className="mb-5 container ">
        <div className="mb-3 mt-5">
          <span className="th-similar-product-title">Similar Products</span>
        </div>
        <div className="th-similar-prod-box">
          <Slider {...settings} className="px-0">
            {data.map((item, index) => {
              return (
                <ProductCard
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  location={item.location}
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
