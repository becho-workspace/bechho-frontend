import React, { Component } from "react";
import Home from "../../Components/Home/Home";
import Button from "react-bootstrap/Button";
class HomeMain extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Home></Home>
      </div>
    );
  }
}

export default HomeMain;
