import React, { Component } from "react";
import "../../Assets/css/Home.css";
import Container from "react-bootstrap/Container";
import GridItems from "../../Components/Home/GridItems";
import Brands from "../../Components/Home/Brands/Brands";
import NewProducts from "../../Components/Home/Products/NewProducts";
import OldProducts from "../../Components/Home/Products/OldProducts";
class HomeMain extends Component {
  render() {
    return (
      <div>
        <Container className="th-container">
          <GridItems />
          <Brands />
          <NewProducts />
          <OldProducts />
        </Container>
      </div>
    );
  }
}

export default HomeMain;
