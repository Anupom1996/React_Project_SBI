import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'

class MotorActOnly extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Act_Only_Insurance, Addons, Motor_Garage, Branch,
      Act_Only_Addons, Act_Only_Coverage, Heading_Mobile


      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Act_Only_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT1'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT1'].content_en;
      Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'].content_en;
      Motor_Garage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT3'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT3'].content_en;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT4'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT4'].content_en;
      Act_Only_Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_ADDONS'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_ADDONS'].content_en;
      Act_Only_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_COVERAGE'].content_en;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Act_Only_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT1'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT1'].content_hi;
      Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'].content_hi;
      Motor_Garage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT3'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT3'].content_hi;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT4'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT4'].content_hi;
      Act_Only_Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_ADDONS'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_ADDONS'].content_hi;
      Act_Only_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_COVERAGE'].content_hi;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_hi;

    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorActOnly" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>{Act_Only_Insurance}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Heading_Mobile)}
                </div>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
            <section className="container-with-no-padding container">
              {/* <div className="rotateit">
                  <div className="skewbg"></div>
                  <div className="skewbg-light"></div>
                  <div className="bgtextureProduct"></div>
                </div> */}
              <div className="innerpageBanner row">
                <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../assets/images/motor-banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Act_Only_Insurance}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>
                        Save Big with our Award winning Car Insurance 24*7
                        Roadside assurance across India
                    </li>
                    </ul>
                  </div> */}
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                  <img
                    src={require("../../assets/images/motor-right-side.svg")}
                    alt=""
                  />
                </div>
              </div>
            </section>
          )}

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail />
                </Col>
              </Row>
            </Container>
          </section>

          {/*Coverage Main */}
          <section className="coverageWrapper">
            <Container>
              <div className="coverageBase">
                <Tab.Container defaultActiveKey="tabmain_1">
                  <Nav className="tabmainProduct" variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/coverage-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={250}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Addons}</h5>

                        {ReactHtmlParser(Act_Only_Addons)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={250}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>

                        {ReactHtmlParser(Act_Only_Coverage)}

                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMotoWrapper">
            <Container>
              <div className="conatctpage">
                <h2 className="titleclose pb-3">
                  {locate_us}
                </h2>
                <div className="weAreMain">
                  <Tab.Container defaultActiveKey="tabmain_1">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_1">
                          <div>
                            <figure>
                              <img
                                src={require("../../assets/images/Maintenance.svg")}
                                alt=""
                              />
                            </figure>
                            <span>{Motor_Garage}</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_2">
                          <div>
                            <figure>
                              <img
                                src={require("../../assets/images/bank.svg")}
                                alt=""
                              />
                            </figure>
                            <span>{Branch}</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="tabmain_1">
                        {/*** Garage Component***/}
                        <Garage />
                      </Tab.Pane>

                      <Tab.Pane eventKey="tabmain_2">
                        {/***** Branch Locator Component */}
                        <BranchLocator />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default MotorActOnly;
