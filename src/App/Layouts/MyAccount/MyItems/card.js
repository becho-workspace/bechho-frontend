import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

class MyItemsCard extends Component {
  state = { width: window.innerWidth };

  render() {
    let mobile;

    if (this.state.width < 780) {
      mobile = true;
    } else {
      mobile = false;
    }

    let { BidList } = this.props;

    return (
      <div>
        <div className="th-myitems-card border-0 ">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="th-myitems-card-image"
          />
          <div className="th-myitems-card-box">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ flexWrap: mobile ? "wrap" : "null" }}
            >
              <div className="mb-md-1 th-myitems-title">{this.props.title}</div>
              <div className="mb-md-1">
                <span className="th-myitems-ask-price">Ask Price:</span>
                <span className="th-myitems-price ">{this.props.askPrice}</span>
              </div>
            </div>
            <div className="th-myitems-bids-offerd mb-2">Bids Offered</div>
            <div className="th-myitems-bidlist">
              {BidList.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-lg-flex align-items-lg-center">
                      <p className="th-myitems-offered-price mr-md-2 ml-md-2 mb-0">
                        {item.offeredPrice}
                      </p>
                      <p className="th-myitems-bidder mr-md-2 ml-md-2 mb-0">
                        {item.bidder}
                      </p>
                      <Link to="">
                        <p className="th-myitems-bid-details ml-md-2 mb-0">
                          View details
                        </p>
                      </Link>
                    </div>
                    <div
                      className="d-flex"
                      style={{ flexDirection: mobile ? "column" : "null" }}
                    >
                      <button
                        type="submit "
                        className="mr-lg-4 th-myitems-bid-approve"
                      >
                        Approve
                      </button>
                      <button type="submit" className="th-myitems-bid-decline">
                        Decline
                      </button>
                    </div>
                  </div>
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
