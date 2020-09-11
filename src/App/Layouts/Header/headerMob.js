import React, { Component } from "react";
import Logo from "../../Assets/Images/Header/Logo.png";
import { Menu, User, MapPin } from "react-feather";
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
      <div className="pr-3 pl-3 pt-2 pb-2 shadow-sm th-mob-header">
        <div className="d-flex justify-content-between align-items-center">
          <Menu
            size={28}
            className="mr-4"
            onClick={this.drawerToggleClickHandler}
          />
          <img src={Logo} alt="logo" style={{ width: "100px" }} />
          <div>
            <MapPin size={24} className="mr-3" />
            {/* <User size={24} className="mr-3" /> */}
          </div>
        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          clicked={this.drawerToggleClickHandler}
        />
        {backdrop}
      </div>
    );
  }
}

export default HeaderMobile;
