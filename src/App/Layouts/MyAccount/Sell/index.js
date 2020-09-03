import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import StepOne from "./Step1/StepOne";
import StepTwo from "./Step2/StepTwo";

class SellHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      category: "",
      product: "",
      image: "",
      description: "",
      qna: [],
      price: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  continueButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <div className="d-flex justify-content-center">
          <span className="th-sell-form-continue" onClick={this._next}>
            Continue
          </span>
        </div>
      );
    }
    return null;
  }

  backButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 2) {
      return (
        <span className="th-sell-form-back-btn" onClick={this._prev}>
          Back
        </span>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container mt-4 mt-lg-5 mb-5">
        <Form onSubmit={this.handleSubmit}>
          {/* button to go back in fisrt step */}
          <div className="mb-lg-4 ml-lg-3">{this.backButton()}</div>
          {/*  */}
          <div>breadcrumbs</div>
          <div className="d-flex justify-content-center align-items-center mb-lg-4">
            <div
              className="th-sell-form-step-circle"
              style={{
                borderColor:
                  this.state.currentStep === 1 ? "#ffb02c" : "#0CCE42",
              }}
            >
              <span className="th-sell-form-step">Step 1</span>
            </div>
            <div
              className="th-sell-form-step-line"
              style={{
                borderColor:
                  this.state.currentStep === 1 || this.state.currentStep === 2
                    ? "#ffb02c"
                    : "",
              }}
            ></div>
            <div
              className="th-sell-form-step-circle"
              style={{
                borderColor:
                  this.state.currentStep === 1 || this.state.currentStep === 2
                    ? "#ffb02c"
                    : "",
              }}
            >
              <span className="th-sell-form-step">Step 2</span>
            </div>
          </div>
          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            category={this.state.category}
            product={this.state.product}
            image={this.state.image}
            description={this.state.description}
          />
          <StepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            qna={this.state.qna}
            price={this.state.price}
          />
          {this.continueButton()}
        </Form>
      </div>
    );
  }
}

export default SellHome;
