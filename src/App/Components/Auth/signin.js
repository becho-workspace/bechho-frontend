import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions/index";
import Cross from "../../Assets/Images/Auth/cross.png";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      email: "",
      password: "",
      submitted: false,
      width: window.innerWidth,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.email);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  };

  render() {
    // const enabled =
    //   this.state.email.length > 0 && this.state.password.length > 0;

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
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item mb-4"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  className="btn submit"
                  type="submit"
                  // disabled={enabled}
                >
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

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
};

export default connect(mapStateToProps, actionCreators)(Signin);
