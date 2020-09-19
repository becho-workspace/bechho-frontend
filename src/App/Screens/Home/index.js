import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import HomeTop from "../../Components/Home/HomeTop/HomeTop";
import GridItems from "../../Components/Home/GridItems";
// import Brands from "../../Components/Home/Brands/Brands";
import NewProducts from "../../Components/Home/Products/NewProducts";
import OldProducts from "../../Components/Home/Products/OldProducts";
import Locations from "../../Components/Home/Location/Locations";
// import BechoTales from "../../Components/Home/Tales/BechoTale";
// import Adds from "../../Components/Home/Adds/Adds";
class HomeMain extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <div>
          <HomeTop />
          <Locations />
          <Container className="th-container">
            <GridItems />
            {/* <Brands /> */}
            <NewProducts />
            <OldProducts />
          </Container>
          {/* {this.state.width > 992 ? (
            <div>
              <BechoTales />
              <Container className="th-container">
                <Adds />
              </Container>
            </div>
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default HomeMain;
