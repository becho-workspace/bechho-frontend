import React, { Component } from "react";
import ProductTop from "../../Components/Products/ProductTop/ProductTop";
import Description from "../../Components/Products/Description/Description";
import SimilarProduct from "../../Components/Products/SimilarProduts/SimilarProducts";
class ProductHome extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-5 th-products-container">
        <ProductTop />
        <Description />
        <SimilarProduct />
      </div>
    );
  }
}

export default ProductHome;
