import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

class MyItemsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show_bids_modal: false,
      bid_offered: 0,
      sell_price: 0,
      s_charge: 0,
      // delivery_charge: 50,
    };
    this.handleBids = this.handleBids.bind(this);
  }

  handleBids = (price) => {
    let sellPrice, sCharge;
    if (price < 1000) {
      sCharge = 75;
      sellPrice = price - sCharge;
    } else if (price < 2000 && price >= 1000) {
      sCharge = 100;
      sellPrice = price - sCharge;
    } else if (price < 3000 && price >= 2000) {
      sCharge = 150;
      sellPrice = price - sCharge;
    } else if (price < 4000 && price >= 3000) {
      sCharge = 200;
      sellPrice = price - sCharge;
    } else if (price < 5000 && price >= 4000) {
      sCharge = 250;
      sellPrice = price - sCharge;
    } else if (price >= 5000) {
      sCharge = 300;
      sellPrice = price - sCharge;
    }

    this.setState({
      show_bids_modal: !this.state.show_bids_modal,
      sell_price: sellPrice,
      s_charge: sCharge,
      bid_offered: price,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show_bids_modal: !this.state.show_bids_modal,
    });
  };

  render() {
    let mobile;
    if (this.state.width < 780) {
      mobile = true;
    } else {
      mobile = false;
    }

    let { BidList } = this.props;
    console.log(
      this.state.s_charge,
      this.state.sell_price,
      this.state.bid_offered
    );

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
                        ₹ {item.offeredPrice}
                      </p>
                      <p className="th-myitems-bidder mr-md-2 ml-md-2 mb-0">
                        {item.bidder}
                      </p>
                      <p
                        className="th-myitems-bid-details ml-md-2 mb-0"
                        onClick={() => this.handleBids(item.offeredPrice)}
                        style={{ cursor: "pointer" }}
                      >
                        View details
                      </p>
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
        <Modal
          size="lg"
          show={this.state.show_bids_modal}
          centered
          onHide={this.handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div className="p-lg-5 p-3">
              <h3 className="th-myitems-bids-offerd mb-3 text-center">
                Your Bid Details
              </h3>
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-offered-price-title">
                  Bid offerd on this item
                </p>
                <p className="mt-2 mb-2 th-bids-offered-price">
                  ₹ {this.state.bid_offered}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-sCharge-title">
                  Service Charge(incl all taxes)
                </p>
                <p className="mt-2 mb-2 th-bids-s-charge">
                  {" "}
                  - ₹ {this.state.s_charge}{" "}
                </p>
              </div>
              <hr color="#ffa000" className="th-bids-modal-hr" />
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-sell-price-title">
                  Ammount will be paid{" "}
                </p>
                <p className="mt-2 mb-2 th-bids-sell-price">
                  ₹ {this.state.sell_price}{" "}
                </p>
              </div>
              <div
                className="d-flex mt-lg-3 mt-2"
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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MyItemsCard;
