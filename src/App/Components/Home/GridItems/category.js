import React, { Component } from "react";
import CategoryCard from "../Cards/selectCategory";

const data = [
  {
    src:
      "https://www.nextbigbrand.in/wp-content/uploads/2019/03/Screen-Shot-2019-03-22-at-2.25.31-PM.png",
    brand: "Levi's",
  },
  {
    src:
      "https://i.pinimg.com/originals/6d/3b/3b/6d3b3be4d1add6129c4209821be4b1e3.jpg",
    brand: "Allen Solly",
  },
  {
    src:
      "https://www.youthpagelive.com/wp-content/uploads/2017/08/page_1_thumb_large.jpg",
    brand: "van housen",
  },
  {
    src:
      "https://seeklogo.com/images/P/peter-england-logo-CAA89E9287-seeklogo.com.png",
    brand: "Peter England",
  },
  {
    src:
      "https://sgp1.digitaloceanspaces.com/quickcompany/trademark/241ff7027292ebd0.jpg",
    brand: "park avenue",
  },
  {
    src:
      "https://images.squarespace-cdn.com/content/v1/57c95f912994ca33e8410394/1473433215876-VACPQ3VCSJIN1GLV47ON/ke17ZwdGBToddI8pDm48kLauA-DAtZa8rxFxHR1_m00UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcM4ZZh_i2MpC47xJm_VRgldATpLxWP2zT5Q5sgWR5cEsfR5ESeekW32GRF7hoFOLh/logo-lee-cooper1.jpg",
    brand: "Lee copper",
  },
];

class Category extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <div className="th-grid-items-header mb-1 mt-2">Select a Category</div>
        {this.state.width > 768 ? (
          <div>
            <div className="d-flex justify-content-center">
              {data.slice(0, 3).map((item) => {
                return <CategoryCard src={item.src} brand={item.brand} />;
              })}
            </div>
            <div className="d-flex justify-content-center">
              {data.slice(3, 6).map((item) => {
                return <CategoryCard src={item.src} brand={item.brand} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-center">
              {data.slice(0, 2).map((item) => {
                return <CategoryCard src={item.src} brand={item.brand} />;
              })}
            </div>
            <div className="d-flex justify-content-center">
              {data.slice(2, 4).map((item) => {
                return <CategoryCard src={item.src} brand={item.brand} />;
              })}
            </div>
            <div className="d-flex justify-content-center">
              {data.slice(4, 6).map((item) => {
                return <CategoryCard src={item.src} brand={item.brand} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Category;
