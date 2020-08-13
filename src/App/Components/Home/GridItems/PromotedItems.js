import React, { Component } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        fade: false,
        autoplay: false,
      },
    },
  ],
};

const data = [
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_511ff50.jpg",
  },
  {
    src:
      "https://www.mykhel.com/img/2020/04/rohit-sharma-ipl-trophy-1587290453.jpg",
  },
  {
    src:
      "https://www.cricket.com.au/~/media/News/2016/08/9SmithMace.ashx?la=en&hash=EED44718B6445AB6EDCE51CD8791564E17B08844",
  },
  {
    src: "https://images.financialexpress.com/2019/12/1-95.jpg",
  },
  {
    src:
      "https://staticg.sportskeeda.com/editor/2020/02/0fbb8-15814056665281-800.jpg",
  },
];

class PromotedItems extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <div className="th-grid-items-header mb-1 mt-2">Promoted Items</div>
        <div className="mb-4">
          <Slider {...Settings} className="th-promote-slider-container">
            {data.map((item, index) => {
              return (
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src={item.src}
                    style={{
                      height: this.state.width < 768 ? "16rem" : "21rem",
                    }}
                    className="rounded th-promoted-items-image"
                  />
                </Card>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default PromotedItems;
