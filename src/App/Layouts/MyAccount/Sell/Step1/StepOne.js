import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class StepOne extends Component {
  render() {
    return (
      <div className="container">
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Select a Product</div>
          <div className="d-lg-flex justify-content-between mt-4">
            <Form.Group className="d-flex align-items-center">
              <span className="th-sell-form-input-label mr-4">Category</span>
              <Form.Control as="select" className="th-sell-form-input">
                <option>Mobile and Laptops</option>
                <option>Shoes</option>
                <option>Jeans</option>
                <option>Sports</option>
                <option>Diary</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="d-flex align-items-center">
              <span className="th-sell-form-input-label mr-4">Product</span>
              <Form.Control as="select" className="th-sell-form-input">
                <option>Mobile and Laptops</option>
                <option>Shoes</option>
                <option>Jeans</option>
                <option>Sports</option>
                <option>Diary</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        {/* <hr /> */}
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Upload Product Images</div>
          <div className="d-flex align-items-center mt-4">
            <div className="th-sell-form-image-box mr-4"></div>
            <div className="th-sell-from-img-upload-btn">
              <span className="th-sell-from-img-upload-circle"> + </span>
              <Form.File lang="en" custom />
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Breif Description</div>
          <div className="mt-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="4"
                className="th-sell-form-textarea"
                placeholder="Start typing..."
              />
            </Form.Group>
          </div>
        </div>
        {/* <hr /> */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="th-sell-from-continue">
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default StepOne;
