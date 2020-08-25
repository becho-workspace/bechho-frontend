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
      <div className="container mt-5 mb-4">
        <div className="th-category-title ">Category</div>
        <div>
          {this.state.width > 780 ? (
            <div className="mt-4">
              <div className="d-flex justify-content-between mb-4">
                {data.slice(0, 3).map((item, index) => {
                  return (
                    <CategoryCard
                      src={item.src}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </div>
              <div className="d-flex justify-content-between mb-4">
                {data.slice(3, 6).map((item, index) => {
                  return (
                    <CategoryCard
                      src={item.src}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="">
              <div className="d-flex justify-content-between mb-4">
                {data.slice(0, 2).map((item, index) => {
                  return (
                    <CategoryCard
                      src={item.src}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </div>
              <div className="d-flex justify-content-between mb-4">
                {data.slice(2, 4).map((item, index) => {
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
          )}
        </div>
      </div>
    );
  }
}

export default CategoryTop;
