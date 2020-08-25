import React, { Component } from "react";
import Cross from "../../Assets/Images/Auth/cross.png";
import Google from "../../Assets/Images/Auth/google.png";
import Facebook from "../../Assets/Images/Auth/facebook.png";

class SignupMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      width: window.innerWidth,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    // console.log(formData);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let form_data = new FormData();
    // form_data.append("name", this.state.formData.name);
    // form_data.append("contact", this.state.formData.contact);
    // form_data.append("password", this.state.formData.password);
    console.log(this.state.formData);
  };

  render() {
    const { formData } = this.state;

    const enabled =
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length > 0;

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
                  name="name"
                  value={formData.name}
                  onChange={this.handleChange}
                />
                <input
                  className="input-item"
                  type="email"
                  maxLength={36}
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={this.handleChange}
                />
                <span className="text-right mb-2 change-method">
                  Sign up with Phone Number
                </span>
                <input
                  className="input-item mb-4"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={this.handleChange}
                />
                <button className="btn submit" type="submit" disabled={enabled}>
                  Continue
                </button>
              </form>
              {/* form ends */}
              <div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <span className="query">Have an account?</span>{" "}
                  <span className="login ml-1">Log in</span>
                </div>
                <p className="text-center signup-option">Or Sign up with</p>
                <div className="d-flex justify-content-around btn-wraper">
                  <div className="d-flex align-items-center btn-box">
                    <img className="mr-3" src={Google} alt="google" />{" "}
                    <span className="google">Google</span>
                  </div>
                  <div className="d-flex align-items-center btn-box">
                    <img className="mr-3" src={Facebook} alt="facebook" />{" "}
                    <span className="facebook">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupMail;
