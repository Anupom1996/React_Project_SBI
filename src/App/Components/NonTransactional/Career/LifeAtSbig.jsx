import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import Axios from "../../../Services/Shared/Axios";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";

class LifeAtSbig extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      showLoader: true
    };
  }

  getPageContent = () => {
    Axios({
      method: "get",
      url: "/pages?slug=life-at-sbig"
    })
      .then(res => {
        this.setState({
          pageData: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount() {
    this.getPageContent();
  }

  render() {
    const { pageData } = this.state;
    return (
      <>

        {/* <Helmet> */}
        <HelmetData pageComponentType="LifeAtSbig" />
        {this.state.showLoader ? null : (
          <BaseComponent pageTitle="life-at-sbig">
            {/* Header Start */}
            {isMobile ? (
              <section className="topform product-header">
                <div className="insuTab">
                  <h1>Life at SBIG</h1>
                  {/* For Mobule */}
                </div>
              </section>
            ) : (
                <section className="container-with-no-padding container">
                  <div className="innerpageBanner row">
                    <div className="col-4">
                      <figure className="justify-content-between align-items-center">
                        <img src={require("../../../assets/images/banners/life_at_sbig.svg")} alt="" />
                      </figure>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="flex-column">
                        <h1>Life at SBIG</h1>
                      </div>
                      {/* For Desktop */}
                    </div>
                    <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../../assets/images/banners/life_at_sbig_bottom.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                </section>
              )}
            {/* Header End */}
            <Container>
              <section className="life-at-sbig-section">
                <div className="cms-page-content">
                  {ReactHtmlParser(pageData[0].description)}
                </div>
              </section>
            </Container>
          </BaseComponent>
        )}
      </>
    );
  }
}

export default LifeAtSbig;
