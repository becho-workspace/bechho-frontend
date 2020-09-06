import React from "react";
import { Tv, Home, ShoppingCart, List } from "react-feather";
import { Link } from "react-router-dom";

class BottomNav extends React.Component {
  render() {
    return (
      <div className="th-bottomNav th-hidden-md container-fluid shadow-sm">
        <div>
          <div className="row">
            <div className="col-3 py-2 text-center">
              <Link className="th-link" to={`/`}>
                <p className="mb-0 ">
                  <Home size={20} />
                </p>
                <p className="mb-0 th-link-title">Home</p>
              </Link>
            </div>
            <div className="col-3 py-2 text-center">
              <Link className="th-link" to={`/category`}>
                <p className="mb-0">
                  <List size={20} />
                </p>
                <p className="mb-0 th-link-title">Category</p>
              </Link>
            </div>
            <div className="col-3 py-2 text-center">
              <Link className="th-link" to={`/sell`}>
                <p className="th-link mb-0">
                  <ShoppingCart size={20} />
                </p>
                <p className="mb-0 th-link-title">Sell</p>
              </Link>
            </div>
            <div className="col-3 py-2 text-center">
              <Link className="th-link" to={`/my-bids`}>
                <p className="mb-0">
                  <Tv size={20} />
                </p>
                <p className="mb-0 th-link-title">Bechho Tales</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomNav;
