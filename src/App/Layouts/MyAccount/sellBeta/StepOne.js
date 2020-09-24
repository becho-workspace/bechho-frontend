import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Form from "react-bootstrap/Form";
import ProgCirlce from "./ProgressCircle";
import StepTwo from "./StepTwo";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      category: "electronics",
      sub_category: "",
      product_name: "",
      description: "",
      address: "",
      city: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 1 ? 2 : null;
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
        <div className="d-flex justify-content-center mb-4">
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
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Sell" />
        <div className="container">
          <div className="mt-4 mt-lg-5 mb-5 th-sell-mob-div">
            <div className="mb-lg-3 ml-lg-3">{this.backButton()}</div>
            {/* top progress circle */}
            <ProgCirlce currentStep={this.state.currentStep} />
            {/* top progress circle ends */}
          </div>
          {/* step one starts */}
          {this.state.currentStep === 1 ? (
            <form>
              <div className="th-sell-form-item-wraper">
                <div className="th-sell-form-item-header">Select a Product</div>
                <div className="d-lg-flex justify-content-between mt-lg-4">
                  <Form.Group className="form-group d-flex align-items-center">
                    <span className="th-sell-form-input-label mr-3 mr-lg-4">
                      Category
                    </span>
                    <Form.Control
                      as="select"
                      className="th-sell-form-input"
                      name="category"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group d-flex align-items-center">
                    <span className="th-sell-form-input-label mr-4">
                      Product
                    </span>
                    <Form.Control
                      as="select"
                      className="th-sell-form-input"
                      name="sub_category"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Select Product</option>
                      <option value="mobile">Mobile</option>
                      <option value="tablet">Tablet</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              {/* <hr /> */}
              <div className="th-sell-form-item-wraper">
                <div className="th-sell-form-item-header">Product Name</div>
                <div className="mt-lg-3">
                  <Form.Group className="form-group d-flex">
                    <Form.Control
                      type="text"
                      className="th-sell-form-textarea"
                      onChange={this.handleChange}
                      name="product_name"
                      value={this.state.product_name}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              {/* <hr /> */}
              <div className="th-sell-form-item-wraper">
                <div className="th-sell-form-item-header">
                  Breif Description
                </div>
                <div className="mt-lg-3">
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="4"
                      className="th-sell-form-textarea"
                      placeholder="Start typing..."
                      onChange={this.handleChange}
                      name="description"
                      value={this.state.description}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="th-sell-form-item-wraper">
                <div className="th-sell-form-item-header">Your Address</div>
                <div className="mt-lg-3">
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="4"
                      className="th-sell-form-textarea"
                      placeholder="Start typing..."
                      onChange={this.handleChange}
                      name="address"
                      value={this.state.address}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="th-sell-form-item-wraper">
                <div className="th-sell-form-item-header">Enter Your City</div>
                <div className="mt-lg-3">
                  <Form.Group>
                    <Form.Control
                      as="select"
                      className="th-sell-form-textarea"
                      name="city"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida </option>
                      <option value="Gurgram">Gurgram</option>
                      <option value="Bangalore">Bangalore</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
            </form>
          ) : (
            <StepTwo
              currentStep={this.state.currentStep}
              category={this.state.category}
              sub_category={this.state.sub_category}
              product_name={this.state.product_name}
              description={this.state.description}
              address={this.state.description}
              city={this.state.city}
            />
          )}
          {/* step one ends */}
          {this.continueButton()}
        </div>
      </div>
    );
  }
}

export default StepOne;
