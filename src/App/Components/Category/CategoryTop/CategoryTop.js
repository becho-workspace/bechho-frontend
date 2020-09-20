import React, { Component } from "react";
import CategoryCard from "../Cards/CategoryCard";
import axios from "axios";
import { API } from "../../../../backend";

const data = [
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "1",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "2",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "3",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "4",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "5",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "6",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "7",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "8",
    description:
      "Super Cool Tshirt- Best quality cotton fabric starting from ₹ 500 ",
  },
];

class CategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      data: [],
    };
  }

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
    return (
      <div>
        <div className="th-category-title">Mobile and Laptops</div>
        <div className="mt-lg-3">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between">
              {this.state.data.map((item, index) => {
                return (
                  <CategoryCard
                    src={item.photo.path}
                    title={
                      item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    }
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryTop;
