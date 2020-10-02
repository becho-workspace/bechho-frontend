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
    let flag;
    if (this.props.BidList.length > 1) {
      flag = 1;
    } else {
      flag = 0;
    }

    console.log(this.props.BidList);
    return (
      <div>
        <div className="th-myitems-card border-0 pt-3">
          <div
            className="d-flex justify-content-center"
            style={{
              height: "352px",
            }}
          >
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
                <span className="th-myitems-price ">
                  ₹ {this.props.askPrice}
                </span>
              </div>
            </div>
            <div className="th-myitems-bids-offerd mb-2">Bids Offered</div>

            <div className="th-myitems-bidlist">
              {flag ? (
                <div>
                  {this.props.BidList &&
                    this.props.BidList.map((item, index) => {
                      return (
                        <BidCard
                          price={item.offeredprice}
                          status={item.status}
                          prodId={this.props.prodId}
                          bidderId={item.userBidding}
                          bidder={item.name}
                        />
                      );
                    })}
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center mt-4">
                  {/* {this.props.BidList[0].status ? (
                    <span className="th-bidlist-accept-msg ">
                      {this.props.BidList[0].status}{" "}
                    </span>
                  ) : ( */}
                  <span className="th-bidlist-empty-msg">
                    No current bids available
                  </span>
                  {/* )} */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyItemsCard;
