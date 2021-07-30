import React, { Component } from "react";
import BaseComponent from "../BaseComponent";
import HelmetData from "../Common/HelmetData";

class Explore extends Component {
  render() {
    return (
      <BaseComponent>

      {/* <Helmet> */}
      <HelmetData pageComponentType = "Explore"/>

        <p>This is Explore..</p>
      </BaseComponent>
    );
  }
}

export default Explore;
