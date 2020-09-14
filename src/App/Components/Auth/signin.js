import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser } from "../../../redux/actions/authActions";
import Cross from "../../Assets/Images/Auth/cross.png";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      submitted: false,
      width: window.innerWidth,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to hmoe
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to Home page when they login
    }
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
    this.props.loginUser(userData); // since we handle the redirect within our component,
    //we don't need to pass in this.props.history as a parameter
  };

  render() {
    const enabled =
      this.state.email.length > 0 && this.state.password.length > 0;
    const { errors } = this.state;

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
                />
                <input
                  className="input-item mb-4"
                  type="password"
                  placeholder="Password"
                  errors={errors.password}
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button className="btn submit" type="submit" disabled={enabled}>
                  Continue
                </button>
              </form>
              {/* form ends */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Signin);

// function mapStateToProps(state) {
//   const { loggingIn } = state.authentication;
//   return { loggingIn };
// }

// const actionCreators = {
//   login: userActions.login,
//   logout: userActions.logout,
// };

// export default connect(mapStateToProps, actionCreators)(Signin);
