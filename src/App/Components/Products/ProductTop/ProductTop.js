import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapPin } from "react-feather";
import PopUp from "../Popup/popup";

class ProductTop extends Component {
  state = {
    width: window.innerWidth,
    show: false,
  };

  handleShowModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="d-flex">
                {this.state.width > 768 ? (
                  <div
                    className="d-flex flex-column"
                    style={{ marginRight: "3rem" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                      className="th-left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      className="th-left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="th-left-img"
                    />
                    <img
                      src="https://images.pexels.com/photos/810036/pexels-photo-810036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="th-left-img"
                    />
                  </div>
                ) : null}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1468083684825-012f39547b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    className="th-right-img"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="th-prod-box">
                <p className="th-title">Sample Product</p>
                <div className="mb-2 d-flex align-items-center th-price-location-box">
                  <div className="d-flex align-items-center">
                    <div className="mr-3 th-price">2999</div>
                    <div className="d-flex align-items-center">
                      <MapPin className="mr-2" size={20} color="#332a7c" />
                      <div className="th-location"> Delhi</div>
                    </div>
                  </div>
                  {/* for mobile screen */}
                  {this.state.width < 780 ? (
                    <Link to={"/products-offer"}>
                      <div className="th-offer text-center">Make an offer</div>
                    </Link>
                  ) : null}
                  {/*  */}
                </div>
                <div className="th-description">
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
                {/* for laptop/tabs */}
                {this.state.width > 780 ? (
                  <div className="d-flex justify-content-center mt-5">
                    <div
                      className="th-offer text-center"
                      onClick={this.handleShowModal}
                    >
                      Make an offer
                    </div>
                  </div>
                ) : null}
                {/*  */}
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.width < 780 ? <hr className="th-hr-line" /> : null}
        {/* Modal */}
        <Modal show={this.state.show} size="lg" onHide={this.handleCloseModal}>
          <Modal.Body className="shadow bg-white p-0 rounded">
            <PopUp show={this.state.show} closed={this.handleCloseModal} />
          </Modal.Body>
        </Modal>
        {/*  */}
      </div>
    );
  }
}

export default ProductTop;
