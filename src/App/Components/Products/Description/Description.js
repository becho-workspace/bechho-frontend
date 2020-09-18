import React, { Component } from "react";

const data = [
  {
    question: "What is the condition of the phone screen",
    answer: "Option 1",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 2",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 3",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 4",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 1",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 2",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 3",
  },
  {
    question: "What is the condition of the phone screen",
    answer: "Option 4",
  },
];

class Description extends Component {
  state = { width: window.innerWidth };
  render() {
    return (
      <div>
        <div className="container mt-5 mb-4">
          <p className="th-prod-description-title">Product Description</p>
          <div className="th-prod-description-box">
            {data.map((item, index) => {
              return (
                <ul className="th-description-list">
                  <li className="th-list-item-ques">Q) {item.question}?</li>
                  <li className="th-list-item-ans ">{item.answer} </li>
                </ul>
              );
            })}
          </div>
        </div>
        {this.state.width < 780 ? <hr className="th-hr-line" /> : null}
      </div>
    );
  }
}

export default Description;
