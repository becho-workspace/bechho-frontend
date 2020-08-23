import React, { Component } from "react";
import Cancel from "../../../Assets/Images/Products/Cancel.png";

class Popup extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div className="mt-4 mb-5 container th-prod-popup-box">
        <div className="d-flex justify-content-around align-items-center th-header-box">
          <div className="th-prod-popup-header">Enter offer price</div>
          <div>
            <span className="th-prod-popup-close-txt mr-3">Close</span>
            <img src={Cancel} alt="" />
          </div>
        </div>
        <div className="th-prod-content-box d-flex justify-content-center">
          Lorem ipsum,
        </div>
      </div>
    );
  }
}

export default Popup;
