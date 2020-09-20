import React, { Component } from "react";
import MyItemsCard from "./card";
import data from "./itemsData";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myItems: [],
    };
  }

  componentDidMount() {
    this.fetchMyItms();
  }

  fetchMyItms = () => {
    axios
      .get(`${API}/product/getuserproducts/${this.props.user._id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          // myItems:res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container mt-4 th-my-items-mob">
        {/* <div>breadcrumbs</div> */}
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

MyItems.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MyItems);
