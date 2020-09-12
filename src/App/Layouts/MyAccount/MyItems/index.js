import React, { Component } from "react";
import MyItemsCard from "./card";
import data from "./itemsData";

class MyItems extends Component {
  render() {
    return (
      <div className="container mt-4 th-my-items-mob">
        <div>breadcrumbs</div>
        <div>
          <p className="th-myitems-header">My Items</p>
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-md-between th-mybids-col">
              {data.map((item, index) => {
                return (
                  <MyItemsCard
                    src={item.src}
                    title={item.title}
                    askPrice={item.askPrice}
                    BidList={item.bids}
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

export default MyItems;
