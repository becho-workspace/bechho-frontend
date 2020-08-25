import React, { Component } from "react";
import CategoryTop from "../../Components/Category/CategoryTop/CategoryTop";
import Other from "../../Components/Category/OtherCategory/OtherCategories";

class CategoryHome extends Component {
  render() {
    return (
      <div>
        <CategoryTop />
        <Other />
      </div>
    );
  }
}

export default CategoryHome;
