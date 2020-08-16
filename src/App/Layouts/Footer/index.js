import React, { Component } from "react";
import "../../Assets/css/layouts/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../Assets/Images/Footer/Logo.png";
import Facebook from "../../Assets/Images/Footer/facebook.png";
import Twitter from "../../Assets/Images/Footer/twitter.png";
import LinkedIn from "../../Assets/Images/Footer/linkedin.png";

export class Footer extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div className="th-footer-container">
        <Container className="mt-2 text-center">
          <div className="pt-lg-4 pb-lg-5">
            {this.state.width > 780 ? (
              <Row className="pt-lg-2">
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-5"
                >
                  <div>
                    <img src={Logo} alt="" />
                  </div>

                  <p className="mt-lg-2 th-beccho-about">
                    Lorem ipsum dolor sit amet, consecteturstas nulla sapien
                    laoreet id ac quam. Leo sapien eu quisque at feugiat platea
                    convallis. Duirna quam.
                  </p>
                </Col>
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-4 pl-lg-4"
                >
                  <div className="th-footer-list-title mt-lg-2">Contact Us</div>
                  <div className="d-flex justify-content-around mt-lg-2">
                    <span>
                      <img src={Twitter} alt="" style={{ width: "20px" }} />{" "}
                    </span>
                    <span>
                      <img src={LinkedIn} alt="" style={{ width: "20px" }} />{" "}
                    </span>
                    <span>
                      <img src={Facebook} alt="" style={{ width: "20px" }} />{" "}
                    </span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-4 pl-lg-4"
                >
                  <div className="th-footer-list-title mt-lg-2">Know More</div>
                  <div className="th-footer-list mt-lg-2">
                    <li>About Us </li>
                    <li>Blogs</li>
                    <li>Faq's</li>
                    <li>Carrers</li>
                    <li>Privacy Poliicy</li>
                    <li>Return Poliicy</li>
                    <li>Terms and Conditionss</li>
                  </div>
                </Col>
                <Col lg={3} className="th-footer-col">
                  <div className="th-footer-list-title mt-lg-2">
                    Make money with us
                  </div>
                  <div className="th-footer-list mt-lg-2">
                    <li>Buyer terms </li>
                    <li>Seller terms</li>
                    <li>Sell with Bechho</li>
                    <li>Become an affiliate</li>
                    <li>Advertise with us</li>
                    <li>Become a partner</li>
                  </div>
                </Col>
              </Row>
            ) : (
              <div>
                <Row className="pt-2 th-footer-mob-col">
                  <div className="th-footer-col mt-2" sm={3}>
                    <img src={Logo} alt="" className="th-footer-logo" />
                  </div>
                  <div className="th-footer-col " sm={9}>
                    <div className=" mt-2">
                      <span className="th-footer-list-title"> Contact Us</span>
                      <span className="mr-1 ml-3">
                        <img src={Twitter} alt="" style={{ width: "16px" }} />{" "}
                      </span>
                      <span className="mr-1 ml-1">
                        <img src={LinkedIn} alt="" style={{ width: "16px" }} />{" "}
                      </span>
                      <span className="mr-1 ml-1">
                        <img src={Facebook} alt="" style={{ width: "16px" }} />{" "}
                      </span>
                    </div>
                  </div>
                </Row>
                <div className="th-footer-hr">
                  <hr className="th-footer-border-bottom" />
                </div>

                <Row className="th-footer-mob-row">
                  <Col className="">
                    <div className="th-footer-list-title mt-2">Know More</div>
                    <div className="th-footer-list mt-2">
                      <li>About Us </li>
                      <li>Blogs</li>
                      <li>Faq's</li>
                      <li>Carrers</li>
                      <li>Privacy Poliicy</li>
                      <li>Return Poliicy</li>
                      <li>Terms and Conditionss</li>
                    </div>
                  </Col>
                  <Col className="text-align-left">
                    <div className="th-footer-list-title mt-2">
                      Make money with us
                    </div>
                    <div className="th-footer-list mt-2">
                      <li>Buyer terms </li>
                      <li>Seller terms</li>
                      <li>Sell with Bechho</li>
                      <li>Become an affiliate</li>
                      <li>Advertise with us</li>
                      <li>Become a partner</li>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
