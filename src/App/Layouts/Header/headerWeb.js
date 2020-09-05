import React, { Component, createRef } from "react";
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
import { Link } from "react-router-dom";

const cities = [
  { city: "Jaipur" },
  { city: "Noida" },
  { city: "Bangalore" },
  { city: "gurugram" },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Jaipur",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { city } = this.state;
    console.log("city is: " + city);
  };

  render() {
    const city_list = cities.map((item, index) => {
      return <option id={index}>{item.city}</option>;
    });

    return (
      <div>
        <Navbar className="shadow">
          <Navbar.Collapse className="mr-lg-5 ml-lg-5">
            <Nav.Item className="ml-lg-5 mr-lg-5">
              <img src={Logo} alt="Logo" style={{ width: "180px" }} />
            </Nav.Item>
            <Link to="/" style={{ color: "#332a7c" }}>
              <Nav.Item className="mr-lg-5">Buy</Nav.Item>
            </Link>

            <Link to="/sell" style={{ color: "#332a7c" }}>
              <Nav.Item className="mr-lg-5">Sell</Nav.Item>
            </Link>

            <Nav.Item className="d-flex align-items-center mr-lg-4">
              Bechho Tales{" "}
              <span className="ml-lg-1 mb-2">
                <img src={TV} alt="" />
              </span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center ml-lg-2 th-location-btn">
              {this.state.city}
              <span className="ml-lg-3">
                <img src={Location} alt="" />
              </span>
            </Nav.Item>
            {/* search location  */}
            <Form
              className="ml-lg-5 d-flex align-items-center"
              onSubmit={this.handleSubmit}
            >
              <span className="mr-2">Select a City</span>
              <Form.Control
                as="select"
                name="city"
                onChange={this.handleChange}
                className="mr-lg-sm-2 th-searchbar"
                style={{ width: "200px" }}
              >
                {city_list}
              </Form.Control>
            </Form>
            {/* <InputGroup.Append>
              <span style={{ left: "-135%", position: "relative" }}>
                <img src={Search} alt="" />
              </span>
            </InputGroup.Append> */}
            {/* search location ends */}
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav.Item className="d-flex align-items-center mr-lg-5 ml-lg-5">
              Profile
              <span className="ml-lg-1 mb-1 ">
                <img src={Person} alt="" />
              </span>
            </Nav.Item>
            {/* <Nav.Item className="d-flex align-items-center mr-lg-5">
              Cart
              <span className="ml-lg-1 mb-1">
                <img src={Cart} alt="" />
              </span>
            </Nav.Item> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
