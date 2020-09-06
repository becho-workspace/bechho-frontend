import React, { Component } from "react";
import CategoryCard from "../Cards/CategoryCard";

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
    };
  }

  render() {
    return (
      <div>
        <div className="th-category-title ">Category</div>
        <div className="mt-lg-3">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between">
              {data.map((item, index) => {
                return (
                  <CategoryCard
                    src={item.src}
                    title={item.title}
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
