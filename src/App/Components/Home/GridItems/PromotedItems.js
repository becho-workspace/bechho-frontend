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
      .get(`${API}/products`)
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
    if (this.state.data.length > 0) {
      start = this.state.data.length - 6;
      end = this.state.data.length;
    } else {
      start = end = 6;
    }
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
            {this.state.data.slice(start, end).map((item, index) => {
              return (
                <Card className="border-0" key={index}>
                  <Card.Img
                    variant="top"
                    src={item.photo.path}
                    style={{
                      height: this.state.width < 768 ? "16rem" : "22.75rem",
                    }}
                    className="rounded"
                  />
                  {/* <p>{item.name}</p> */}
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
