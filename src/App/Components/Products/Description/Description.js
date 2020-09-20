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
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Does your device switch on?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Display and touch screen status?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Device Body (Back Panel / Cover) status?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Main Camera (Camera Glass) status?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">Q) Age of the phone ?</li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Device has undergone repairs?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Does your device have any functional issues?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Select the available accessories
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) OEN/ Brand Warranty utilized ?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Silver Frame / Bezel (Around Screen)?
              </li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">Q) Any Faults?</li>
              <li className="th-list-item-ans ">answer </li>
            </ul>
          </div>
        </div>
        {this.state.width < 780 ? <hr className="th-hr-line" /> : null}
      </div>
    );
  }
}

export default Description;
