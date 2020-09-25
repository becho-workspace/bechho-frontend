import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../../redux/actions/authActions";
import { XCircle } from "react-feather";
import Modal from "react-bootstrap/Modal";
import Logo from "../../../Assets/Images/Logo.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      city: "",
      address: "",
      email: "",
      password: "",
      show_modal: true,
      width: window.innerWidth,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCloseModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
    this.props.history.push("/");
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      city: this.state.city,
      address: this.state.address,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { name, contact, city, email, password, address } = this.state;

    return (
      <div>
        <Modal
          size="lg"
          show={this.state.show_modal}
          centered
          onHide={this.handleCloseModal}
          className="th-auth-modal-background"
        >
          <Modal.Body className="p-0">
            {/* signup starts */}
            <div className="d-flex justify-content-center th-auth-container">
              <div className="left-box">
                <p className="text-center mt-lg-5 mb-0 left-box-header">
                  Welcome
                </p>
                {this.state.width > 780 ? (
                  <div className="text-center" style={{ marginTop: "4.8rem" }}>
                    <img src={Logo} alt="" style={{ width: "240px" }} />
                  </div>
                ) : null}
              </div>
              <div className="right-box">
                {this.state.width > 780 ? (
                  <div className="float-right mt-2 mr-3">
                    <XCircle size={20} onClick={this.handleCloseModal} />
                  </div>
                ) : null}
                <div className="wraper">
                  <p className="text-center right-box-header">
                    Create Your Account
                  </p>
                  {/* signup form */}
                  <form
                    className="d-flex flex-column"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      className="input-item mb-4"
                      type="text"
                      required
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                    <input
                      className="input-item mb-4"
                      type="text"
                      required
                      maxLength={10}
                      placeholder="Contact"
                      name="contact"
                      value={contact}
                      onChange={this.handleChange}
                    />
                    <select
                      className="input-item mb-4"
                      // type="text"
                      required
                      // maxLength={16}
                      placeholder="City"
                      name="city"
                      value={city}
                      onChange={this.handleChange}
                      style={{ background: "#fff" }}
                    >
                      <option value="">Select Your City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida </option>
                      <option value="Gurgram">Gurgram</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                    <input
                      className="input-item mb-4"
                      type="text"
                      required
                      maxLength={50}
                      placeholder="Your Address"
                      name="address"
                      value={address}
                      onChange={this.handleChange}
                    />

                    <input
                      className="input-item mb-4"
                      type="email"
                      required
                      maxLength={36}
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <input
                      className="input-item mb-4"
                      required
                      type="password"
                      placeholder="Password"
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
                    <div
                      className="d-flex justify-content-center mt-3"
                      style={{ alignItems: "baseline" }}
                    >
                      <span className="query">Have an account?</span>{" "}
                      <Link to="/signin">
                        <span className="login ml-1">Signin</span>
                      </Link>
                    </div>
                  </div>
                  {this.state.width < 780 ? (
                    <div
                      className="d-flex justify-content-center mt-2"
                      onClick={this.handleCloseModal}
                    >
                      <span className="th-auth-modal-back">Go Back</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* signup ends */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
