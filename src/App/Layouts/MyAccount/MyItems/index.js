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
        console.log(res.data.products[0].photo.path);
        this.setState({
          myItems: res.data.products,
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
              {this.state.myItems.map((item, index) => {
                return (
                  <MyItemsCard
                    src={item.photo.path}
                    title={
                      item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    }
                    askPrice={item.price}
                    BidList={item.bid}
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
