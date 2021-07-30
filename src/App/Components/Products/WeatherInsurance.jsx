import React, { Component } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import CallBackForm from "./CallBackForm";

import ReactHtmlParser from 'react-html-parser'
class WeatherInsurance extends Component {

  render() {

    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Exclusion, Feature_Description,
      Coverage_Description, Exclusion_Description, Footer, Heading_Mobile
      ;
    if (lang_name === 'en') {

      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_en;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_en;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_FEATURE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_COVERAGE'].content_en;
      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_EXCLUSION'].content_en;



    } else {
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_hi;

      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_FEATURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_COVERAGE'].content_hi;

      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_WEATHER_EXCLUSION'].content_hi;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_hi;


    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="WeatherInsurance" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>{Heading}</h1>
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
                    <img src={require("../../assets/images/common_banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Heading}</h1>
                    {/* <div className="healgth-list">
                        <ul>
                          <li>Wide Network of 10,000 plus Garages</li>
                          <li>
                            Save Big with our Award winning Car Insurance 24*7
                            Roadside assurance across India
                          </li>
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
          <section className="protectWrapper motor-protectWrapper">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">

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
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {Key_Feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{Key_Feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(Feature_Description)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(Coverage_Description)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(Exclusion_Description)}

                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResourses productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMotoWrapper">
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

export default WeatherInsurance;
