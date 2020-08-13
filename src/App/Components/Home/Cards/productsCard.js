import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProductsCard extends Component {
  render() {
    return (
      <div>
        <Card className="th-products-card">
          <Card.Img
            variant="top"
            src="https://circleofcricket.com/post_image/post_image_f2b3264.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductsCard;
