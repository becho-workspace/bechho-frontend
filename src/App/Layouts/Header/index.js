import React, { Component } from "react";
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
import "../../Assets/css/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="shadow th-font">
          <Navbar.Collapse id="responsive-navbar-nav" className="mr-5 ml-5">
            <Nav.Item className="ml-5 mr-5">
              <img src={Logo} alt="Logo" style={{ width: "180px" }} />
            </Nav.Item>
            <Nav.Item className="mr-4">
              Buy
              <span className="ml-1">
                <img src={Arrow} alt="" />
              </span>
            </Nav.Item>
            <NavDropdown>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mr-4">
              Sell
              <span className="ml-1">
                <img src={Arrow} alt="" />
              </span>
            </Nav.Item>
            <NavDropdown>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="d-flex align-items-center mr-4">
              Bechho Tales{" "}
              <span className="ml-1 mb-1">
                <img src={TV} alt="" />
              </span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mr-5 ml-2 th-location-btn">
              Delhi
              <span className="ml-4 mb-1">
                <img src={Location} alt="" />
              </span>
            </Nav.Item>
            <Form className="ml-3">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 th-searchbar"
              />
            </Form>
            <InputGroup.Append>
              <span style={{ left: "-135%", position: "relative" }}>
                <img src={Search} alt="" />
              </span>
            </InputGroup.Append>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav.Item className="d-flex align-items-center mr-5 ml-5">
              Profile
              <span className="ml-1 mb-1 ">
                <img src={Person} alt="" />
              </span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mr-5">
              Cart
              <span className="ml-1 mb-1">
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
