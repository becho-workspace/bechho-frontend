import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProductsCard extends Component {
  render() {
    return (
      <div>
        <Card className="th-brands-card border-0">
          <Card.Img
            variant="top"
            src="https://circleofcricket.com/post_image/post_image_f2b3264.jpg"
            className="th-prods-card-image"
          />
          <div className="pt-2 pb-2 pr-3 pl-3 th-card-box">
            <Card.Text className="mb-0 th-prods-title">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-0 th-prods-description">
              {this.props.description}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <span className="th-prods-location">{this.props.location} </span>
              <span className="th-prods-price">{this.props.price} </span>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductsCard;
