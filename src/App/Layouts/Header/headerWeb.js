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
import {
  setCurrentCityFromUserAuth,
  setCurrentCityByUser,
} from "../../../redux/actions/locationActions";
import { API } from "../../../backend";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const cities = [
  { city: "DELHI" },
  { city: "NOIDA" },
  { city: "BANGALORE" },
  { city: "GURUGRAM" },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "DELHI",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // setting city name based on user input in the store whether logged in or not
    this.props.setCurrentCityByUser(e.target.value);
    // console.log(e.target.value);
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    // fetching this data only if user is logged in
    // setting city name based on user input in the store
    if (this.props.auth.user._id) {
      axios
        .get(`${API}/user/${this.props.auth.user._id}`, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((res) => {
          this.setState({
            city: res.data.city,
          });
          // console.log(res.data.city);
          this.props.setCurrentCityFromUserAuth(res.data.city.toUpperCase());
        })
        .catch((err) => {
          // console.log(err);
          toast(err.response.data.error, { type: "warning" });
        });
    }
  };

  render() {
    // calling user from store
    const { user } = this.props.auth;

    const city_list = cities.map((item, index) => {
      return (
        <option key={index} value={item.city}>
          {item.city}
        </option>
      );
    });

    return (
      <div>
        <Navbar className="shadow">
          <Navbar.Collapse className="mr-lg-4 ml-lg-5">
            <Nav.Item className="ml-lg-4 mr-lg-4">
              <Link to="/">
                <img src={Logo} alt="Logo" style={{ width: "180px" }} />{" "}
              </Link>
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
              {this.props.city ? (
                <span>{this.props.city}</span>
              ) : (
                <span>{this.state.city} </span>
              )}
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
              <div className="dropdown">
                <Nav.Item
                  className="d-flex align-items-center mr-lg-4 ml-lg-4"
                  style={{ color: "#332a7c", cursor: "pointer" }}
                >
                  <span className="mr-lg-2">Profile</span>
                  <User size={20} />
                </Nav.Item>
                {/* dropdown elements */}
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/my-profile">
                    My Address
                  </Link>
                  <Link className="dropdown-item" to="/my-items">
                    My Items
                  </Link>
                  <Link className="dropdown-item" to="/my-bids">
                    My Bids
                  </Link>
                </div>
                {/* dropdown ends */}
              </div>
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
  setCurrentCityFromUserAuth: PropTypes.func.isRequired,
  setCurrentCityByUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  city: state.location.city,
});

export default connect(mapStateToProps, {
  logoutUser,
  setCurrentCityFromUserAuth,
  setCurrentCityByUser,
})(Header);
