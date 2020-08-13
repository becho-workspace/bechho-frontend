import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Category from "./category";
import PromotedItems from "./PromotedItems";

export class GridComponents extends Component {
  render() {
    return (
      <div className="mt-md-4 mt-sm-2 mb-md-4 mb-sm-2">
        <Container>
          <Row className="text-center">
            <Col md={5}>
              <PromotedItems />
            </Col>
            <Col md={7}>
              <Category />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridComponents;
