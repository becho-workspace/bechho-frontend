import React, { Component } from "react";
import MyBidsCard from "./card";

const data = [
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: false,
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: false,
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: true,
  },
  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: false,
  },

  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: true,
  },

  {
    src: "https://circleofcricket.com/post_image/post_image_f2b3264.jpg",
    title: "Super Cool T-Shirt-Best Qaulity",
    askPrice: "₹ 2999",
    offerPrice: "₹ 1599",
    status: false,
  },
];

class MyBids extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div>breadcrumbs</div>
        <div>
          <p className="th-mybids-header">Used Products Bids</p>
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-md-between th-mybids-col">
              {data.map((item, index) => {
                return (
                  <MyBidsCard
                    src={item.src}
                    title={item.title}
                    askPrice={item.askPrice}
                    offerPrice={item.offerPrice}
                    status={item.status}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBids;
