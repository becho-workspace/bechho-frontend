import React, { Component } from "react";
import CategoryCard from "../Cards/selectCategory";
import Mobile from "../../../Assets/Images/Home/category/Mobile.png";
import Tablets from "../../../Assets/Images/Home/category/Tablet.png";
import Laptop from "../../../Assets/Images/Home/category/Laptop.png";
import Furniture from "../../../Assets/Images/Home/category/Furniture.png";
import HomeAppliance from "../../../Assets/Images/Home/category/HomeAppliance.png";
import Accesories from "../../../Assets/Images/Home/category/Accesories.png";

const data = [
  {
    src: Mobile,
    brand: "Mobiles",
  },
  {
    src: Tablets,
    brand: "Tablets",
  },
  {
    src: Laptop,
    brand: "Laptops",
  },
  {
    src: Furniture,
    brand: "Furniture",
  },
  {
    src: HomeAppliance,
    brand: "Home Appliances",
  },
  {
    src: Accesories,
    brand: "Accesories",
  },
];

class Category extends Component {
  render() {
    return (
      <div>
        <div className="th-grid-items-header mb-1 mt-2">Select a Category</div>
        <div>
          <div className="d-flex justify-content-md-end">
            {data.slice(0, 3).map((item) => {
              return <CategoryCard src={item.src} brand={item.brand} />;
            })}
          </div>
          <div className="d-flex justify-content-md-end">
            {data.slice(3, 6).map((item) => {
              return <CategoryCard src={item.src} brand={item.brand} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
