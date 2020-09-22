import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
      .get(`${API}/products`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
        toast(err.response.data.error, { type: "warning" });
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

    console.log(
      this.state.data.length,
      this.state.total,
      start,
      end,
      this.props.city
    );
    return (
      <div className="mb-5">
        <div className="d-flex justify-content-between mb-2 mt-4">
          <span className="pl-md-1 th-new-product-header">Latest Products</span>
          <Link to="/category" className="th-new-product-all-btn">
            See All
          </Link>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          {this.state.data.length > 0 &&
            this.state.data.slice(start, end).map((item, index) => {
              return (
                <div key={index}>
                  <Card className="th-brands-card border-0">
                    <Link to={`/products/${item._id}`}>
                      <Card.Img
                        variant="top"
                        src={item.photo.path}
                        className="th-prods-card-image"
                      />
                    </Link>
                    <div className="pt-2 th-card-box">
                      <Card.Text className="mb-md-1 th-prods-title">
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Card.Text>
                      <Card.Text className="mb-md-1 th-prods-description">
                        {item.description}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <span className="th-prods-location">
                          {item.city.charAt(0).toUpperCase() +
                            item.city.slice(1)}
                        </span>
                        <span className="th-prods-price">₹ {item.price} </span>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

NewProducts.propTypes = {
  city: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.location.city,
});

export default connect(mapStateToProps)(NewProducts);
