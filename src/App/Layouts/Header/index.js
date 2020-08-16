import React, { Component, createRef } from "react";
import "../../Assets/css/layouts/header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "../../Assets/Images/Header/Logo.png";
import Arrow from "../../Assets/Images/Header/arrow-down.png";
import Cart from "../../Assets/Images/Header/cart.png";
import Person from "../../Assets/Images/Header/person.png";
import TV from "../../Assets/Images/Header/tv.png";
import Search from "../../Assets/Images/Header/search.png";
import Location from "../../Assets/Images/Header/location.png";

class Header extends Component {
  state = {
    show: false,
    target: null,
  };

  handleBuy = (e) => {
    this.setState({
      show: !this.state.show,
      target: e.target,
    });
  };

  handleSell = (e) => {
    this.setState({
      show: !this.state.show,
      target: e.target,
    });
  };

  render() {
    return (
      <div>
        <Navbar expand="lg" className="shadow th-font">
          <Navbar.Collapse className="mr-lg-5 ml-lg-5">
            <Nav.Item className="ml-lg-5 mr-lg-5">
              <img src={Logo} alt="Logo" style={{ width: "180px" }} />
            </Nav.Item>
            <Nav.Item>Buy</Nav.Item>
            <NavDropdown className="mr-lg-4" as="div">
              <NavDropdown.Item>Buy Item 1</NavDropdown.Item>
              <NavDropdown.Item>But Itam 2</NavDropdown.Item>
              <NavDropdown.Item>Buy Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Buy Item 4</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>Sell</Nav.Item>
            <NavDropdown className="mr-lg-4">
              <NavDropdown.Item>Sell Item 1</NavDropdown.Item>
              <NavDropdown.Item>Sell Item 2</NavDropdown.Item>
              <NavDropdown.Item>Sell Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sell Item 4</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item className="d-flex align-items-center mr-lg-4">
              Bechho Tales{" "}
              <span className="ml-lg-1 mb-2">
                <img src={TV} alt="" />
              </span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mr-lg-4 ml-lg-2 th-location-btn">
              Delhi
              <span className="ml-lg-4">
                <img src={Location} alt="" />
              </span>
            </Nav.Item>
            <Form className="ml-lg-3">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-lg-sm-2 th-searchbar"
              />
            </Form>
            <InputGroup.Append>
              <span style={{ left: "-135%", position: "relative" }}>
                <img src={Search} alt="" />
              </span>
            </InputGroup.Append>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav.Item className="d-flex align-items-center mr-lg-5 ml-lg-5">
              Profile
              <span className="ml-lg-1 mb-1 ">
                <img src={Person} alt="" />
              </span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mr-lg-5">
              Cart
              <span className="ml-lg-1 mb-1">
                <img src={Cart} alt="" />
              </span>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
