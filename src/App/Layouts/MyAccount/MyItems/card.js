import React, { Component } from "react";
import BidCard from "./bidCard";

class MyItemsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  render() {
    return (
      <div>
        <div className="th-myitems-card border-0 pt-3">
          <div className="d-flex justify-content-center">
            <img
              src={this.props.src}
              alt=""
              style={{ maxWidth: this.state.width > 780 ? "500px" : "320px" }}
            />
          </div>

          <div className="th-myitems-card-box">
            <div className="d-flex align-items-center justify-content-between">
              <div className="mb-md-1 th-myitems-title">{this.props.name}</div>
              <div className="mb-md-1">
                <span className="th-myitems-ask-price">Ask Price:</span>
                <span className="th-myitems-price ">{this.props.askPrice}</span>
              </div>
            </div>
            <div className="th-myitems-bids-offerd mb-2">Bids Offered</div>
            <div className="th-myitems-bidlist">
              {this.props.BidList &&
                this.props.BidList.map((item, index) => {
                  return (
                    <BidCard
                      price={item.price}
                      status={item.status}
                      prodId={this.props.prodId}
                      bidderId={item.userBidding}
                      bidder={item.name}
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

export default MyItemsCard;
