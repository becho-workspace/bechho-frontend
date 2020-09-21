import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class BidCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show_bids_modal: false,
      bid_offered: 0,
      sell_price: 0,
      s_charge: 0,
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

  handleBidAccept = (status) => {
    console.log(
      status,
      this.props.price,
      this.props.prodId,
      this.props.bidderId
    );

    // this one is for bidding a product

    axios
      .patch(
        `${API}/product/changestatus/${this.props.prodId}/${this.props.bidderId}`,
        {
          status: status,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast("Successfully Updated", { type: "success" });
          console.log("successs");
        }
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
        console.log(err.response.data.error);
      });

    this.setState({
      show_bids_modal: false,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-lg-flex align-items-lg-center">
            <p className="th-myitems-offered-price mr-md-2 ml-md-2 mb-0">
              ₹ {this.props.price}
            </p>
            <p className="th-myitems-bidder mr-md-2 ml-md-2 mb-0">
              {this.props.bidder}
            </p>
            <p
              className="th-myitems-bid-details ml-md-2 mb-0"
              onClick={() => this.handleBids(this.props.price)}
              style={{ cursor: "pointer" }}
            >
              View details
            </p>
          </div>
          <div
            className="d-flex"
            style={{
              flexDirection: this.state.width < 780 ? "column" : "null",
            }}
          >
            <button
              //   type="submit"
              className="mr-lg-4 th-myitems-bid-approve"
              onClick={() => this.handleBidAccept("Accepted")}
            >
              Approve
            </button>
            <button
              //   type="submit"
              className="th-myitems-bid-decline"
              onClick={() => this.handleBidAccept("Rejected")}
            >
              Decline
            </button>
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
                  Amount will be paid{" "}
                </p>
                <p className="mt-2 mb-2 th-bids-sell-price">
                  ₹ {this.state.sell_price}{" "}
                </p>
              </div>
              <div
                className="d-flex mt-lg-3 mt-2"
                style={{
                  flexDirection: this.state.width < 780 ? "column" : "null",
                }}
              >
                <button
                  //   type="submit"
                  className="mr-lg-4 th-myitems-bid-approve"
                  onClick={() => this.handleBidAccept("Accepted")}
                >
                  Approve
                </button>
                <button
                  //   type="submit"
                  className="th-myitems-bid-decline"
                  onClick={() => this.handleBidAccept("Rejected")}
                >
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

BidCard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(BidCard);
