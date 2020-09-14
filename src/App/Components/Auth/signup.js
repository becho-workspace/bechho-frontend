import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";

import Cross from "../../Assets/Images/Auth/cross.png";
import Google from "../../Assets/Images/Auth/google.png";
import Facebook from "../../Assets/Images/Auth/facebook.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      city: "",
      email: "",
      password: "",
      errors: {},

      width: window.innerWidth,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      city: this.state.city,
      conatct: this.state.contact,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { name, contact, city, email, password, errors } = this.state;

    return (
      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-center container">
          <div className="left-box">
            <p className="text-center mt-2 left-box-header">Welcome</p>
          </div>
          <div className="right-box">
            {this.state.width > 780 ? (
              <div className="float-right">
                <img src={Cross} alt="" style={{ width: "20px" }} />
              </div>
            ) : null}
            <div className="wraper">
              <p className="text-center right-box-header">
                Create Your Account
              </p>
              {/* signup form */}
              <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                <input
                  className="input-item mb-4"
                  type="text"
                  placeholder="Your Name"
                  error={errors.name}
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item mb-4"
                  type="text"
                  maxLength={10}
                  placeholder="Contact"
                  error={errors.contact}
                  name="contact"
                  value={contact}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item mb-4"
                  type="text"
                  maxLength={16}
                  placeholder="City"
                  error={errors.city}
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item mb-4"
                  type="email"
                  maxLength={36}
                  placeholder="Email"
                  error={errors.email}
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item mb-4"
                  type="password"
                  placeholder="Password"
                  error={errors.password}
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button className="btn submit" type="submit">
                  Continue
                </button>
              </form>
              {/* form ends */}
              <div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <span className="query">Have an account?</span>{" "}
                  <Link to="/signin">
                    <span className="login ml-1">Log in</span>
                  </Link>
                </div>
                {/* <p className="text-center signup-option">Or Sign up with</p>
                <div className="d-flex justify-content-around btn-wraper">
                  <div className="d-flex align-items-center btn-box">
                    <img className="mr-3" src={Google} alt="google" />{" "}
                    <span className="google">Google</span>
                  </div>
                  <div className="d-flex align-items-center btn-box">
                    <img className="mr-3" src={Facebook} alt="facebook" />{" "}
                    <span className="facebook">Facebook</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
