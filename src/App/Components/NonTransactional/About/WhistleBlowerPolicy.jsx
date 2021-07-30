import React, { Component } from "react";

import ReactHtmlParser from "react-html-parser";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class WhistleBlowerPolicy extends Component {
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
      url: "/pages?slug=whistle-blower-policy"
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
        <HelmetData pageComponentType="WhistleBlowerPolicy" />
        {this.state.showLoader ? (
          <div className="PDTabCont">
            <div className="statementSec">&nbsp;</div>
          </div>
        ) : (
          <div className="PDTabCont">
            <div className="statementSec">
              {pageData[0].banner ? (
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src={AppConstant.IMG_BASE_URL + pageData[0].banner.url}
                    alt=""
                  />
                </div>
              ) : null}
              {ReactHtmlParser(pageData[0].description)}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default WhistleBlowerPolicy;
