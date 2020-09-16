import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import InputGroup from "react-bootstrap/InputGroup";
import Logo from "../../Assets/Images/Header/Logo.png";
import { MapPin, User, Tv, LogIn, LogOut, Edit } from "react-feather";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";

const cities = [
  { city: "Jaipur" },
  { city: "Noida" },
  { city: "Bangalore" },
  { city: "Gurugram" },
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

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const city_list = cities.map((item, index) => {
      return (
        <option id={index} key={index}>
          {item.city}
        </option>
      );
    });
    // calling user from store
    const { user } = this.props.auth;
    // console.log(user._id);

    return (
      <div>
        <Navbar className="shadow">
          <Navbar.Collapse className="mr-lg-4 ml-lg-5">
            <Nav.Item className="ml-lg-4 mr-lg-4">
              <img src={Logo} alt="Logo" style={{ width: "180px" }} />
            </Nav.Item>
            <Link to="/" style={{ color: "#332a7c" }}>
              <Nav.Item className="mr-lg-4">Buy</Nav.Item>
            </Link>

            <Link to="/sell" style={{ color: "#332a7c" }}>
              <Nav.Item className="mr-lg-4">Sell</Nav.Item>
            </Link>
            <Link to="/testimonials" style={{ color: "#332a7c" }}>
              <Nav.Item className="d-flex align-items-center mr-lg-5">
                Bechho Tales{" "}
                <span className="ml-lg-2 mb-2">
                  <Tv size={20} />
                </span>
              </Nav.Item>
            </Link>
            <Nav.Item className="d-flex align-items-center ml-lg-2 th-location-btn">
              {this.state.city}
              <span className="ml-lg-3">
                <MapPin size={20} color="#332a7c" />
              </span>
            </Nav.Item>
            {/* search location  */}
            <Form
              className="d-flex align-items-center"
              onSubmit={this.handleSubmit}
              style={{ marginLeft: "2rem" }}
            >
              <span className="mr-2" style={{ color: "#332a7c" }}>
                Select a City
              </span>
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
          {/* based on user authnetication display changes */}
          {user._id ? (
            <Navbar.Collapse>
              <Nav.Item
                className="d-flex align-items-center mr-lg-4 ml-lg-4"
                style={{ color: "#332a7c", cursor: "pointer" }}
              >
                <span className="mr-lg-2">Profile</span>
                <User size={20} />
              </Nav.Item>
              <Nav.Item
                className="d-flex align-items-center mr-lg-4 ml-lg-4"
                onClick={this.handleLogout}
                style={{ color: "#332a7c", cursor: "pointer" }}
              >
                <span className="mr-lg-2">Logout</span>
                <LogOut size={20} />
              </Nav.Item>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse>
              <Link to="/signup" style={{ color: "#332a7c" }}>
                <Nav.Item className="d-flex align-items-center mr-lg-4 ml-lg-4">
                  <span className="mr-lg-2"> Signup</span>
                  <Edit size={20} />
                </Nav.Item>
              </Link>
              <Link to="/signin" style={{ color: "#332a7c" }}>
                <Nav.Item className="d-flex align-items-center mr-lg-4 ml-lg-4">
                  <span className="mr-lg-2">Signin</span>
                  <LogIn size={20} />
                </Nav.Item>
              </Link>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
