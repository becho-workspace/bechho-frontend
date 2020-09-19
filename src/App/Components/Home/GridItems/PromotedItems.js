import React, { Component } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API } from "../../../../backend";

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
    id: 1,
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
  },
  {
    id: 2,
    src: "https://circleofcricket.com/post_image/post_image_511ff50.jpg",
  },
  {
    id: 3,
    src:
      "https://www.mykhel.com/img/2020/04/rohit-sharma-ipl-trophy-1587290453.jpg",
  },
  {
    id: 4,
    src:
      "https://www.cricket.com.au/~/media/News/2016/08/9SmithMace.ashx?la=en&hash=EED44718B6445AB6EDCE51CD8791564E17B08844",
  },
  { id: 5, src: "https://images.financialexpress.com/2019/12/1-95.jpg" },
  {
    id: 6,
    src:
      "https://staticg.sportskeeda.com/editor/2020/02/0fbb8-15814056665281-800.jpg",
  },
  {
    id: 7,
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
  },
  {
    id: 8,
    src: "https://circleofcricket.com/post_image/post_image_511ff50.jpg",
  },
  {
    id: 9,
    src:
      "https://www.mykhel.com/img/2020/04/rohit-sharma-ipl-trophy-1587290453.jpg",
  },
  {
    id: 10,
    src:
      "https://www.cricket.com.au/~/media/News/2016/08/9SmithMace.ashx?la=en&hash=EED44718B6445AB6EDCE51CD8791564E17B08844",
  },
  { id: 11, src: "https://images.financialexpress.com/2019/12/1-95.jpg" },
  {
    id: 12,
    src:
      "https://staticg.sportskeeda.com/editor/2020/02/0fbb8-15814056665281-800.jpg",
  },
];

class PromotedItems extends Component {
  state = {
    width: window.innerWidth,
    data: [],
  };

  componentDidMount() {
    this.fetch_products();
  }

  fetch_products = () => {
    axios
      .get(`${API}/products`, {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let start, end;
    start = data.length - 6;
    end = data.length;
    return (
      <div>
        {/* displays only for > 768px */}
        {this.state.width > 780 ? (
          <div className="th-grid-items-header mb-1 mt-2">Promoted Items</div>
        ) : (
          <div className="mb-1 mt-4"></div>
        )}
        <div className="mb-4">
          <Slider {...Settings} className="th-promote-slider-container">
            {data.slice(start, end).map((item, index) => {
              return (
                <Card className="border-0" key={index}>
                  <Card.Img
                    variant="top"
                    src={item.src}
                    style={{
                      height: this.state.width < 768 ? "16rem" : "22.75rem",
                    }}
                    className="rounded"
                  />
                  {/* <p>{item.id}</p> */}
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
