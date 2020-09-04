import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class StepTwo extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Product Description</div>
          <div className="th-sell-form-qna-list">
            {this.props.QnA.map((item, index) => {
              return (
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques" id={index}>
                    Q) {item.question}
                  </div>
                  <div className="ml-4">
                    <Form.Check
                      type="radio"
                      inline
                      label={item.opt1}
                      className="mr-5 th-sell-form-qna-ans"
                    />
                    <Form.Check
                      type="radio"
                      inline
                      label={item.opt2}
                      className="mr-5 th-sell-form-qna-ans"
                    />
                    <Form.Check
                      type="radio"
                      inline
                      label={item.opt3}
                      className="mr-5 th-sell-form-qna-ans"
                    />
                    <Form.Check
                      type="radio"
                      inline
                      label={item.opt4}
                      className="mr-5 th-sell-form-qna-ans"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Asked Price</div>
          <div className="mt-3">
            <Form.Group className="d-flex">
              <span className="th-sell-form-input-label mr-4">Enter Price</span>
              <Form.Control
                type="text"
                placeholder="₹"
                className="th-sell-form-input-price"
                onChange={this.props.handleChange}
                name="price"
                value={this.props.price}
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="th-sell-form-post">
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default StepTwo;
