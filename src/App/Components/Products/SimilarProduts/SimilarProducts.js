import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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
    // console.log(this.props.city);
    axios
      .get(`${API}/products${this.props.city}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
        toast(err.response.data.error, { type: "warning" });
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
                <Card className="th-brands-card border-0" key={index}>
                  <Link to={`/products/${item._id}`}>
                    {/* <Card.Img
                      variant="top"
                      
                      className="th-prods-card-image"
                    /> */}
                    <div className="d-flex justify-content-center th-prods-card-image">
                      <img src={item.photo.path} alt="" />
                    </div>
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
                        {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
                      </span>
                      <span className="th-prods-price">₹ {item.price}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withRouter(SimilarProducts);
