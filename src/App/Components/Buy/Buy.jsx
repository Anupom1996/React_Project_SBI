import React, { Component } from "react";
import BaseComponent from "../BaseComponent";
import HelmetData from "../Common/HelmetData";

class Buy extends Component {
  render() {
    return (
      <BaseComponent>

      {/* <Helmet> */}
      <HelmetData pageComponentType = "Buy"/>

        <p>This is Buy..</p>
      </BaseComponent>
    );
  }
}

export default Buy;
