import React, { Component } from "react";
import Location from "../../../Assets/Images/Header/location.png";
export class LocationMob extends Component {
  render() {
    return (
      <div>
        <div className="mr-3 ml-3">
          <div className="th-location-mob-container d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img src={Location} alt="location" />
              <span className="th-mob-location-title ml-1">
                Preferred Location
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="th-mob-location-city ">Set City</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationMob;
