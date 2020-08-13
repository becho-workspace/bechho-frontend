import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <Card className="border-0 mr-md-3 mr-3 mb-md-3 mb-3 ">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="rounded  th-category-small-img"
          />
        </Card>
      </div>
    );
  }
}

export default CategoryCard;
