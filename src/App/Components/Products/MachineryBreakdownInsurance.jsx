import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

import ReactHtmlParser from 'react-html-parser'
class MachineryBreakdownInsurance extends Component {
  render() {

    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Exclusion, Feature_Description,Addons,
      Coverage_Description, Exclusion_Description, Footer, Sum_Insured, Sum_Insured_Description, Heading_Mobile_Version
      ;


    if (lang_name === 'en') {

      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_en;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_en;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_MB_FEATURE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_MB_COVERAGE'].content_en;
      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_MB_EXCLUSION'].content_en;
      Sum_Insured_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_SUM_INSURED'] && sbiHomeData['PRODUCTS_CORPORATE_MB_SUM_INSURED'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'].content_en;

    } else {
      Addons = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_ACT_ONLY_TEXT2'].content_hi;
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_hi;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_hi;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_MB_FEATURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_MB_COVERAGE'].content_hi;
      Sum_Insured_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_SUM_INSURED'] && sbiHomeData['PRODUCTS_CORPORATE_MB_SUM_INSURED'].content_hi;
      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MB_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_MB_EXCLUSION'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;


    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MachineryBreakdownInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Heading}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Heading_Mobile_Version)}
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
                    <img src={require("../../assets/images/common_banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Heading}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/general_product_bottom_icon.svg")}
                      alt=""
                    />
                  </div>
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
                  <CallBackForm />
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
                          {Key_Feature}
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
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/exclusions-iocn.svg")}
                              alt=""
                            />
                          </figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/sum-insured-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {Sum_Insured}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{Addons}</h5>
                      {ReactHtmlParser(Feature_Description)}

                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      {ReactHtmlParser(Coverage_Description)}

                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      {ReactHtmlParser(Exclusion_Description)}

                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Sum_Insured}</h5>
                      {ReactHtmlParser(Sum_Insured_Description)}

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">{Footer}</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
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

export default MachineryBreakdownInsurance;
