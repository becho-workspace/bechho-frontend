import React, { Component } from "react";
import FaqCard from "./faq";
import data from "./data";

class FAQ extends Component {
  render() {
    const FaqList = data.map((item, index) => {
      return <FaqCard question={item.question} answer={item.answer} />;
    });

    return (
      <div className="mt-lg-5 mb-lg-5 th-faq-container">
        <div>
          <h4 className="text-center mb-4">FAQ's</h4>
        </div>
        <div className="th-faq-box-wraper">{FaqList}</div>
      </div>
    );
  }
}

export default FAQ;
