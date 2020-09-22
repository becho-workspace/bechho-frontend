import React, { Component } from "react";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MyBidsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod_image: "",
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.fetchProdImage({ id: this.props.prodId });
  }

  fetchProdImage = (params = {}) => {
    axios
      .get(`${API}/product`, {
        params: { ...params },
      })
      .then((res) => {
        console.log(res.data.photo);
        this.setState({
          prod_image: res.data.photo,
        });
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="th-mybids-card border-0 d-flex">
          <div className="p-lg-4 p-3 th-mybids-img-div">
            <img
              src={this.state.prod_image.path}
              alt=""
              style={{ maxWidth: this.state.width > 780 ? "500px" : "320px" }}
            />
          </div>
          <div className="th-mybids-card-box">
            <div className="mb-md-1 th-mybids-title">{this.props.title}</div>
            <div className="mb-md-1">
              <span className="th-ask-price">Ask Price:</span>
              <span className="th-mybids-price ">₹ {this.props.askPrice}</span>
            </div>
            <div className="mb-md-1">
              <span className="th-offered-price">Offer Price:</span>
              <span className="th-mybids-price ">
                ₹ {this.props.offerPrice}
              </span>
            </div>
            <div className="th-mybid-status-chk">
              <div className="mb-md-1">
                <span className="th-bid-status">Status:</span>
                {this.props.status === "Rejected" ||
                this.props.status === "Accepted" ? (
                  <span
                    className="th-mybids-status"
                    style={{
                      color:
                        this.props.status === "Accepted"
                          ? "#00980F"
                          : "#F25767",
                    }}
                  >
                    {this.props.status}
                  </span>
                ) : (
                  <span
                    className="th-mybids-status"
                    style={{ color: "#DD8B00" }}
                  >
                    Pending
                  </span>
                )}
              </div>
              {/* {this.props.status ? (
                <div className="th-paynow-btn">
                  <span className="th-paynow">Done</span>
                </div>
              ) : null} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBidsCard;
