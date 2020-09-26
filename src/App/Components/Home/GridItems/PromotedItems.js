import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-grid.css";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        toast("Something went wrong", { type: "warning" });
      });
  };

  render() {
    let start, end;
    if (this.state.data.length > 0) {
      start = this.state.data.length - 6;
      end = this.state.data.length;
    } else {
      start = 0;
      end = 6;
    }
    return (
      <div>
        {/* displays only for > 768px */}
        {this.state.width > 780 ? (
          <div>
            <div className="th-grid-items-header mb-1 mt-2">Promoted Items</div>
            <div className="mb-4">
              <Slider {...Settings}>
                {this.state.data.length > 0 &&
                  this.state.data.slice(start, end).map((item, index) => {
                    return (
                      <div key={index}>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            height: "22.5rem",
                            width: "30rem",
                          }}
                        >
                          <img
                            src={item.photo.path}
                            alt=""
                            style={{
                              height: "100%",
                              maxWidth: "95%",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        ) : (
          <div className="mb-1 mt-2">
            <div className="th-grid-items-header">Promoted Items</div>
            <div className="mb-4">
              <Slider {...Settings}>
                {this.state.data.length > 0 &&
                  this.state.data.slice(start, end).map((item, index) => {
                    return (
                      <div style={{ height: "300px" }} key={index}>
                        <div className="d-flex justify-content-center">
                          <img
                            src={item.photo.path}
                            alt=""
                            style={{ width: "180px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PromotedItems;
