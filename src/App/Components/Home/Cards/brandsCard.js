import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class BrandsCard extends Component {
  render() {
    return (
      <div className="">
        <div className="th-brands-card border-0 ">
          <Card.Img
            variant="top"
            src="https://circleofcricket.com/post_image/post_image_f2b3264.jpg"
            className="th-brands-card-image"
          />
          <div className="pt-2 pb-2 pr-3 pl-3 th-card-box">
            <Card.Text className="mb-0 th-brands-title ">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-0 th-brands-description">
              {this.props.description}
            </Card.Text>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsCard;
