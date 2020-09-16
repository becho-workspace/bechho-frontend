import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProductsCard extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <Card className="th-brands-card border-0" key={this.props.key}>
          <Card.Img
            variant="top"
            src={this.props.src}
            className="th-prods-card-image"
          />
          <div className="pt-2 th-card-box">
            <Card.Text className="mb-md-1 th-prods-title">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-md-1 th-prods-description">
              {this.props.description}
            </Card.Text>

            {/* location and price only visible for screen > 780px */}
            {this.state.width > 780 ? (
              <div className="d-flex justify-content-between">
                <span className="th-prods-location">
                  {this.props.location}{" "}
                </span>
                <span className="th-prods-price">{this.props.price} </span>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductsCard;
