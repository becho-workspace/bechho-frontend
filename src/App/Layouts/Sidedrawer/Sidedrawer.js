import React, { Component } from "react";

class SideDrawer extends Component {
  render() {
    let drawerClasses = "th-side_drawer";
    if (this.props.show) {
      drawerClasses = "th-side_drawer open";
    }
    return (
      <div>
        <nav className={drawerClasses}>side drawer</nav>
      </div>
    );
  }
}

export default SideDrawer;
