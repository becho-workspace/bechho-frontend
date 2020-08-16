import React, { Component } from "react";
import "../../Assets/css/Home.css";
import Container from "react-bootstrap/Container";
import GridItems from "../../Components/Home/GridItems";
import Brands from "../../Components/Home/Brands/Brands";
import NewProducts from "../../Components/Home/Products/NewProducts";
import OldProducts from "../../Components/Home/Products/OldProducts";
import Locations from "../../Components/Home/Location/Locations";
import BechoTales from "../../Components/Home/Tales/BechoTale";
import Adds from "../../Components/Home/Adds/Adds";
class HomeMain extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        {/* <Locations /> */}
        <Container className="th-container">
          <GridItems />
          <Brands />
          <NewProducts />
          <OldProducts />
        </Container>
        {this.state.width > 992 ? (
          <div>
            <BechoTales />
            <Container className="th-container">
              <Adds />
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HomeMain;
