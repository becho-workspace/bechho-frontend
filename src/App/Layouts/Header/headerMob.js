import React, { Component } from "react";
import Menu from "../../Assets/Images/Header/menu.png";
import Logo from "../../Assets/Images/Header/Logo.png";
import Cart from "../../Assets/Images/Header/cart.png";
import Person from "../../Assets/Images/Header/person.png";
import Search from "../../Assets/Images/Header/search.png";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import BackDrop from "../Sidedrawer/Backdrop";

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickhandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickhandler} />;
    }

    return (
      <div>
        <div
          className="d-flex justify-content-between align-items-center 
                     pr-3 pl-3 pt-3 pb-3 shadow-sm mb-5"
        >
          <div>
            <img
              src={Menu}
              alt="menu"
              style={{ width: "28px" }}
              className="mr-4"
              onClick={this.drawerToggleClickHandler}
            />
            <img src={Logo} alt="logo" style={{ width: "100px" }} />
          </div>
          <div>
            <img
              style={{ width: "24px" }}
              src={Search}
              alt="search"
              className="mr-3"
            />
            <img
              style={{ width: "24px" }}
              src={Person}
              alt="person"
              className="mr-3"
            />
            <img
              style={{ width: "24px" }}
              src={Cart}
              alt="cart"
              className="mr-3"
            />
          </div>
        </div>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default HeaderMobile;
