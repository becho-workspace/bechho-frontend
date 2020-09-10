import React, { Component } from "react";

class Advertise extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-advertise-container">
        <h2 className="text-center">Advertise with us</h2>
        <div>
          <p className="m-0">
            The advertisements and promotion of products can be done through us.
            We provide this provision through website and our social media
            handles and also through our campus ambassador program.
          </p>
          <p className="mt-2">
            For further details, queries and deals, mail us on
            <span style={{ color: "#3327c5" }} className="ml-1">
              <i>emohanty@bechho.in</i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Advertise;
