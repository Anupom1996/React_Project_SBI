import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import ReactHtmlParser from "react-html-parser";

import { isMobile } from "react-device-detect";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";

import Objectives from "./Objectives";
import JointVentures from "./JointVentures";
import HelmetData from "../../Common/HelmetData";

class AboutSbi extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      showMore: false,
      showLoader: true
    };
  }

  showMoreContent = () => {
    this.setState({
      showMore: true
    });
  };

  showLessContent = () => {
    this.setState({
      showMore: false
    });
  };

  getPageContent = () => {
    Axios({
      method: "get",
      url: "/pages?slug=about-sbig"
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
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    
    return (
      <>
        <HelmetData pageComponentType="AboutSbiContent" />
        {this.state.showLoader ? (
          <div className="PDTabCont">
            <div className="statementSec"></div>
          </div>
        ) : (
          <>
            <Row className="m-b-35">
              <Col lg={7}>
                <h2>
                {(lang_name === 'en')
                                    ? pageData[0].title_en ? pageData[0].title_en : pageData[0].title
                                    :  pageData[0].title_hi ? pageData[0].title_hi : pageData[0].title}
                  </h2>


                {pageData[0].banner ? (
                  <div className="imgWrap aboutimgWrap">
                    <img
                      className="img-fluid"
                      src={AppConstant.IMG_BASE_URL + pageData[0].banner.url}
                      alt=""
                    />
                  </div>
                ) : null}
                <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={253}>
                  {!isMobile ? (
                    <div className="p-r-10 displayContLg">
                     
                      {ReactHtmlParser((lang_name === 'en')
                                    ? pageData[0].description_en ? pageData[0].description_en : pageData[0].description
                                    :  pageData[0].description_hi ? pageData[0].description_hi : pageData[0].description)}
                    </div>
                  ) : (
                    <div className="displayContMd">
                      <div
                        className={
                          this.state.showMore
                            ? "readlessContentHide"
                            : "readlessContentShow"
                        }
                      >
                        <span>
                          
                           {ReactHtmlParser((lang_name === 'en')
                                    ? pageData[0].description_en ? pageData[0].description_en.substr(0, 200) : pageData[0].description.substr(0, 200)
                                    :  pageData[0].description_hi ? pageData[0].description_hi.substr(0, 200) : pageData[0].description.substr(0, 200))}
                          &nbsp;&nbsp;
                          <Link
                            className="linkStyle"
                            to={"#!"}
                            onClick={this.showMoreContent}
                          >
                            Read More
                          </Link>
                        </span>
                      </div>
                      <div
                        className={
                          this.state.showMore
                            ? "readMoreContentShow"
                            : "readMoreContentHide"
                        }
                      >
                        <div className="aboutMoreContent">
                        {ReactHtmlParser((lang_name === 'en')
                                    ? pageData[0].description_en ? pageData[0].description_en : pageData[0].description
                                    :  pageData[0].description_hi ? pageData[0].description_hi : pageData[0].description)}
                        </div>
                        <p>
                          <Link
                            className="linkStyle"
                            to={"#!"}
                            onClick={this.showLessContent}
                          >
                            Read Less
                          </Link>
                        </p>
                      </div>
                    </div>
                  )}
                </Scrollbars>
              </Col>
              <Objectives />
            </Row>
            <Row>
              <JointVentures />
              <Col sm={5}>
                <div className="imgShadow displayContLg">
                  <img
                    className="img-fluid"
                    src={require("./../../../assets/images/addsafeGuard.svg")}
                    alt=""
                  />
                </div>
                <div className="displayContMd text-center">
                  <img
                    className="img-fluid"
                    src={require("./../../../assets/images/addsafeGuardSm.svg")}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </>
        )}
      </>
    );
  }
}

export default AboutSbi;
