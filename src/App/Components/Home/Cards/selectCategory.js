import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <div className="border-0 mr-3 mb-3 ">
          <div className="th-category-small-img">
            <img src={this.props.src} alt="" />
          </div>
          <p className="mb-0 mt-2 th-category-name">{this.props.brand}</p>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
