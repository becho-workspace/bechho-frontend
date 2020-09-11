import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class MyBidsCard extends Component {
  render() {
    let bid_status = "";
    if (this.props.status) {
      bid_status = "approved";
    } else {
      bid_status = "pending";
    }

    return (
      <div>
        <div className="th-mybids-card border-0 d-flex">
          <div>
            <Card.Img
              variant="top"
              src={this.props.src}
              className="th-mybids-card-image"
            />
          </div>
          <div className="th-mybids-card-box">
            <div className="mb-md-1 th-mybids-title">{this.props.title}</div>
            <div className="mb-md-1">
              <span className="th-ask-price">Ask Price:</span>
              <span className="th-mybids-price "> {this.props.askPrice}</span>
            </div>
            <div className="mb-md-1">
              <span className="th-offered-price">Offer Price:</span>
              <span className="th-mybids-price ">{this.props.offerPrice}</span>
            </div>
            <div className="th-mybid-status-chk">
              <div className="mb-md-1">
                <span className="th-bid-status">Status:</span>
                <span
                  className="th-mybids-status"
                  style={{
                    color: this.props.status ? "#00980F" : "#DD8B00",
                  }}
                >
                  {bid_status}
                </span>
              </div>
              {this.props.status ? (
                <div className="th-paynow-btn">
                  <span className="th-paynow">Done</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBidsCard;
