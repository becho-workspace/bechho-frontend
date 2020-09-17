import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser, setUserLoading } from "../../../redux/actions/authActions";
import Cross from "../../Assets/Images/Auth/cross.png";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      submitted: false,
      // loading: false,
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

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to Home page when they login
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    this.props.loginUser(userData); // since we handle the redirect within our component,
    //we don't need to pass in this.props.history as a parameter
    // settting loading true to display the loader
    this.props.setUserLoading();
  };

  render() {
    const { errors } = this.state;
    console.log(this.props.auth.loading);
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
              <p className="text-center right-box-header">Login</p>
              {/* signin form */}
              <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                <input
                  className="input-item"
                  type="email"
                  maxLength={36}
                  placeholder="Email"
                  errors={errors.email}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="input-item mb-4"
                  type="password"
                  placeholder="Password"
                  errors={errors.password}
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <button className="btn submit" type="submit">
                  Continue
                </button>
              </form>
              {/* form ends */}
              <div
                className="d-flex justify-content-center mt-3 mb-3"
                style={{ alignItems: "baseline" }}
              >
                <span className="query">Don't have an account?</span>{" "}
                <Link to="/signup">
                  <span className="login ml-1">Signup</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  setUserLoading: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, setUserLoading })(Signin);
