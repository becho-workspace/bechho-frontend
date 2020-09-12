import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Logo from "../../Assets/Images/Header/Logo.png";
import { Menu, User, MapPin } from "react-feather";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import BackDrop from "../Sidedrawer/Backdrop";
import Location from "../../Components/Home/Location/LocationMob";

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      show_modal: false,
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

  handleShowModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickhandler} />;
    }

    return (
      <div>
        <div className="pr-3 pl-3 pt-2 pb-2 shadow-sm th-mob-header">
          <div className="d-flex justify-content-between align-items-center">
            <Menu
              size={28}
              className="mr-4"
              onClick={this.drawerToggleClickHandler}
            />
            <img src={Logo} alt="logo" style={{ width: "100px" }} />
            <div>
              <MapPin
                size={24}
                className="mr-3"
                onClick={this.handleShowModal}
              />
              {/* <User size={24} className="mr-3" /> */}
            </div>
          </div>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clicked={this.drawerToggleClickHandler}
          />
          {backdrop}
        </div>
        <Modal
          size="md"
          show={this.state.show_modal}
          centered
          onHide={this.handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <Location clicked={this.handleCloseModal} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default HeaderMobile;
