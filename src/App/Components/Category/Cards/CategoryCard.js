import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <div className="th-brands-card border-0 ">
          <Link to={`/products/${this.props.id}`}>
            <Card.Img
              variant="top"
              src={this.props.src}
              className="th-brands-card-image"
            />
          </Link>
          <div className="pt-2 pb-2 th-card-box">
            <div className="d-flex justify-content-between mb-md-1">
              <Card.Text className="mb-md-1 th-brands-title">
                ₹ {this.props.price}
              </Card.Text>
              <Card.Text className="mb-md-1 th-brands-title">
                <span>{this.props.location} </span>
              </Card.Text>
            </div>
            <Card.Text className="mb-md-1 th-brands-title ">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-md-1 th-brands-description">
              {this.props.description}
            </Card.Text>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
