import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import BaseComponent from "../../BaseComponent";
import { Container } from "react-bootstrap";
import Axios from "../../../Services/Shared/Axios";
import ReactHtmlParser from "react-html-parser";
import HelmetData from "../../Common/HelmetData";

class CmsPage extends Component {
  constructor(props) {
    super(props);

    let currPath = this.props.location.pathname;
    let actpath = currPath.split("/");

    this.state = {
      path: actpath[1],
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    this.getPageContent(this.state.path);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname &&
      this.props.location.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.getPageContent(this.props.location.pathname.split("/")[1]);
    }
  }

  getPageContent = pathName => {
    let url = "/pages?slug=" + pathName;
    Axios({
      method: "get",
      url: url
    })
      .then(res => {
        //console.log(res);
        this.setState({
          pageData: res.data,
          title: res.data[0].title,
          description: res.data[0].description,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  render() {
    return (
      <BaseComponent>
        {/* <Helmet> */}

        {this.props.hemetDataSetFor ? (
          <HelmetData pageComponentType={this.props.hemetDataSetFor} />
        ) : null}

        {/* Header Start */}
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>{this.state.title}</h1>
              {/* For Mobule */}
            </div>
          </section>
        ) : (
            <section className="container-with-no-padding container">
              <div className="innerpageBanner row">
                <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img
                      src={require("../../../assets/images/common_banner.svg")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{this.state.title}</h1>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../../assets/images/general_product_bottom_icon.svg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        {/* Header End */}
        <Container className="privacyPolicy">
          <div className="cms-page-content">
            {ReactHtmlParser(this.state.description)}
          </div>
        </Container>
      </BaseComponent>
    );
  }
}

export default CmsPage;
