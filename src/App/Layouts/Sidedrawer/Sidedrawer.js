import React, { Component } from "react";
import Logo from "../../Assets/Images/Header/bechho-logo.png";
import {
  X,
  // Power,
  ArrowDownCircle,
  ArrowUpCircle,
  Twitter,
  Linkedin,
  Facebook,
  User,
} from "react-feather";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  state = {
    shown: false,
    width: window.innerWidth,
  };

  handleShow = () => {
    this.setState({
      shown: !this.state.shown,
    });
  };

  render() {
    let drawerClasses = "th-side_drawer";
    if (this.props.show) {
      drawerClasses = "th-side_drawer open";
    }
    return (
      <div>
        <nav className={drawerClasses}>
          <div className="d-flex justify-content-around align-items-center">
            <Link to="/" onClick={this.props.clicked}>
              <img src={Logo} alt="" className="th-sidebar-logo" />
            </Link>
            <X
              size={this.state.width > 320 ? 20 : 16}
              onClick={this.props.clicked}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <User size={this.state.width > 320 ? 24 : 16} />
            {/* <Link> */}
            <span className="ml-3" style={{ color: "#333" }}>
              My Account
            </span>
            {/* </Link> */}
          </div>
          <hr className="th-sidebar-hr" />
          <div className="pt-0 pb-0 pl-5 pr-5">
            <div>
              <div className="d-flex justify-content-between">
                <p className="th-sidebar-list-item">Categories</p>
                {this.state.shown ? (
                  <ArrowUpCircle
                    size={this.state.width > 320 ? 24 : 16}
                    onClick={this.handleShow}
                    className="th-sidebar-arrow"
                  />
                ) : (
                  <ArrowDownCircle
                    size={this.state.width > 320 ? 24 : 16}
                    onClick={this.handleShow}
                    className="th-sidebar-arrow"
                  />
                )}
              </div>
              {this.state.shown ? (
                <div className="pl-3">
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Fashion</p>
                  </Link>
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Shoes</p>
                  </Link>
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Gifts</p>
                  </Link>
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Eateries</p>
                  </Link>
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Bags</p>
                  </Link>
                  <Link to="#" onClick={this.props.clicked}>
                    <p className="th-sidebar-list-item">Accesories</p>
                  </Link>
                </div>
              ) : null}
            </div>
            <Link to="/sell" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Sell a product</p>
            </Link>
            {/* show only if user is authenticated */}
            <Link to="my-bids" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">My Bids</p>
            </Link>
            <Link to="my-items" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">My Items</p>
            </Link>
            {/* show only if user is authenticated */}
            <Link to="/carrers" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Carrers</p>
            </Link>
            <Link to="/blogs" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Blogs</p>
            </Link>
          </div>
          <hr className="th-sidebar-hr" />
          <div className="pt-0 pb-0 pl-5 pr-5">
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Twitter size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Twitter</p>
            </Link>
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Linkedin size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Linkedin</p>
            </Link>
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Facebook size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Facebook</p>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideDrawer;
