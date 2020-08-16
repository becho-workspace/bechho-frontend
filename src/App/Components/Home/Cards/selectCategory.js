import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <Card className="border-0 mr-3 mb-3 ">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="rounded  th-category-small-img"
          />
          <p className="mb-0 th-category-name">{this.props.brand}</p>
        </Card>
      </div>
    );
  }
}

export default CategoryCard;
