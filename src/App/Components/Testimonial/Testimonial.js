import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialsCard from "./card";
import Akshat from "../../Assets/Images/team/Akshat.jpg";
import Mayuresh from "../../Assets/Images/team/Mayuresh.jpg";
import Prajwal from "../../Assets/Images/team/Prajwal.jpg";
import Pranish from "../../Assets/Images/team/Pranish.jpg";
import Shakti from "../../Assets/Images/team/Shakti.JPG";
import Shreya from "../../Assets/Images/team/Shreya.jpg";
import Siddharth from "../../Assets/Images/team/Siddharth.jpg";

const data = [
  {
    src: Shakti,
    content:
      "Highly professional brand design and implementation, a perfect example of a strategic and engaging website.",
    author: "Shakti",
  },
  {
    src: Akshat,
    content:
      "Collaboration with Beccho enables us to connect to more people virtually and is positively impacting our business.",
    author: "Akshat",
  },
  {
    src: Mayuresh,
    content:
      "It is extremely easy to search a particular product on the website giving phenomenal results as it has a user friendly environment.",
    author: "Mayuresh",
  },
  //
  {
    src: Prajwal,
    content:
      "Bechho’s innovative strategy of campaigning helps reach new users efficiently.",
    author: "Prajwal",
  },
  {
    src: Pranish,
    content:
      "I highly recommend to visit the website at least once because of the innovative idea on which Bechho is based.",
    author: "Pranish",
  },
  {
    src: Shreya,
    content:
      "I highly recommend to use the website to sell your stuff as they provide fair bids and you can actually sell your thing in just 36 hours.",
    author: "Shreya",
  },
  {
    src: Siddharth,
    content:
      "Easy to use from the very start and great service, far less complex than other websites.",
    author: "Siddharth",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: false,
        speed: 850,
      },
    },
  ],
};

class Testimonial extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="th-testimonial-root ">
          <div className="th-testimonial-header">Testimonials</div>
          <Slider {...settings} className="th-testimonial-mainSlider">
            {data.map((item) => {
              return (
                <TestimonialsCard
                  content={item.content}
                  author={item.author}
                  image={item.src}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Testimonial;
