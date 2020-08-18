import React, { Component } from "react";
import Location from "../../../Assets/Images/Header/location.png";
class Locations extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        {this.state.width > 768 ? (
          <div className="th-locations-container d-flex justify-content-around align-items-center mt-md-5 mb-md-5">
            <div className="th-locations-header">Preferred Locations</div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
            <div className=" text-center">
              <div className="th-locations-circle"></div>
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div>
          </div>
        ) : (
          <div className="mr-3 ml-3 mt-5">
            <div className="th-location-mob-container">
              <div className="th-mob-location-title">Preferred Location</div>
              <div className="d-flex align-items-center">
                <span className="th-mob-location-city mr-2">Delhi</span>
                <img src={Location} alt="location" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Locations;
