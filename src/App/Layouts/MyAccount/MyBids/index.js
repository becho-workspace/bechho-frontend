import React, { Component } from "react";
import MyBidsCard from "./card";
import Loader from "../../../Loader/spinner";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
  constructor(props) {
    super(props);
    this.state = {
      myBids: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchMyBids();
  }

  fetchMyBids = () => {
    axios
      .get(`${API}/product/getbids/${this.props.user._id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          // myBids: res.data.products,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        toast(err.response.data.error, { type: "warning" });
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="container mt-4 th-my-mids-mob">
            <p className="th-mybids-header">Used Products Bids</p>
            <div className="">
              <div className=" d-lg-flex flex-wrap justify-content-lg-between th-mybids-col">
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
        )}
      </div>
    );
  }
}

MyBids.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MyBids);
