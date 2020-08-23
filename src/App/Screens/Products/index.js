import React, { Component } from "react";
import ProductTop from "../../Components/Products/ProductTop/ProductTop";
import Description from "../../Components/Products/Description/Description";
import SimilarProduct from "../../Components/Products/SimilarProduts/SimilarProducts";
import Popup from "../../Components/Products/Popup/popup";
class ProductHome extends Component {
  render() {
    return (
      <div className="mt-4 mb-5">
        {/* <ProductTop />
        <Description />
        <SimilarProduct /> */}
        <Popup></Popup>
      </div>
    );
  }
}

export default ProductHome;
