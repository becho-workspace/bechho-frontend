import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Location from "../../../Assets/Images/Header/location.png";

class ProductTop extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="d-flex justify-content-around">
                {this.state.width > 768 ? (
                  <div className="d-flex flex-column">
                    <img
                      src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                      className="left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      className="left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/810036/pexels-photo-810036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="left-img"
                    />
                  </div>
                ) : null}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1468083684825-012f39547b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    className="right-img"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="prod-box">
                <p className="title">Sample Product</p>
                <div className="mb-2 d-flex align-items-center price-location-box">
                  <div className="d-flex align-items-center">
                    <div className="mr-3 price">2999</div>
                    <div className="d-flex align-items-center">
                      <img src={Location} alt="location" className="mr-2" />{" "}
                      <div className="location"> Delhi</div>
                    </div>
                  </div>
                  {this.state.width < 780 ? (
                    <div className="offer text-center">Make an offer</div>
                  ) : null}
                </div>
                <div className="description">
                  <span className="mr-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae quam eum odit sequi officia illo laboriosam laborum
                    facilis non dignissimos vero quo ipsum quis in nihil quia,
                    consectetur nisi totam. Lorem ipsum dolor sit.
                  </span>
                  <span style={{ color: "#63AFFF", cursor: "pointer" }}>
                    See More
                  </span>
                </div>
                {this.state.width > 780 ? (
                  <div className="d-flex justify-content-center mt-5">
                    <div className="offer text-center">Make an offer</div>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.width < 780 ? <hr className="hr-line" /> : null}
      </div>
    );
  }
}

export default ProductTop;
