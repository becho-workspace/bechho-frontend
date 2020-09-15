import React, { Component } from "react";
import Delhi from "../../../Assets/Images/Home/Delhi.png";
import Noida from "../../../Assets/Images/Home/Noida.png";
import Gurgaon from "../../../Assets/Images/Home/Gurgaon.png";
import Bangalore from "../../../Assets/Images/Home/Bangalore.png";
// import Pune from "../../../Assets/Images/Home/Pune.png";
// import Kolkata from "../../../Assets/Images/Home/Kolkata.png";

class LocationMob extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        {this.state.width < 768 ? (
          <div className="">
            <h4 className="text-center mb-3 th-mob-location-title">
              Preferred Location
            </h4>
            <div>
              <div className="row">
                <div className="col-6 text-center" onClick={this.props.clicked}>
                  <img src={Delhi} alt="" className="th-location-mob-circle" />
                  <p className="mt-2 th-mob-location-city">Delhi</p>
                </div>
                <div className="col-6 text-center" onClick={this.props.clicked}>
                  <img src={Noida} alt="" className="th-location-mob-circle" />
                  <p className="mt-2 th-mob-location-city">Noida</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-center" onClick={this.props.clicked}>
                  <img
                    src={Gurgaon}
                    alt=""
                    className="th-location-mob-circle"
                  />
                  <p className="mt-2 th-mob-location-city">Gurugram</p>
                </div>
                <div className="col-6 text-center" onClick={this.props.clicked}>
                  <img
                    src={Bangalore}
                    alt=""
                    className="th-location-mob-circle"
                  />
                  <p className="mt-2 th-mob-location-city">Bangalore</p>
                </div>
              </div>
            </div>
            {/* <div className="col-4 text-center">
              <img src={Pune} alt="" className="th-location-mob-circle" />
              <p className="mt-2 th-mob-location-city ">Pune</p>
            </div>
            <div className="col-4 text-center">
              <img src={Kolkata} alt="" className="th-location-mob-circle" />
              <p className="mt-2 th-mob-location-city ">Kolkata</p>
            </div> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default LocationMob;
