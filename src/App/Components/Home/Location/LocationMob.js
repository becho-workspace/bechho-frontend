import React, { Component } from "react";
import { MapPin } from "react-feather";
class LocationMob extends Component {
  render() {
    return (
      <div>
        <div className="mr-3 ml-3">
          <div className="th-location-mob-container d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <MapPin size={20} color="#332a7c" />
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
