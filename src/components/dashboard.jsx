import React, { Component } from "react";

class DashBoard extends Component {
  render() {
    const { uname } = this.props;
    return <h1>hey there! {uname}</h1>;
  }
}

export default DashBoard;
