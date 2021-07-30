import React, { Component } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import CallBackForm from "./CallBackForm";

import ReactHtmlParser from 'react-html-parser'
class OilEnergy extends Component {

  render() {

    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Feature_Description,
      Coverage_Description, Footer, Heading_Mobile_Version
      ;
    if (lang_name === 'en') {

      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;


      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OIL_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_OIL_FEATURE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OIL_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_OIL_COVERAGE'].content_en;




    } else {
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;

      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OIL_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_OIL_FEATURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OIL_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_OIL_COVERAGE'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;



    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="OilEnergy" />
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
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/general_product_bottom_icon.svg")}
                      alt=""
                    />
                  </div>
                </div>
                {/* For Desktop */}
              </div>
            </section>
          )
          }

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

                  <Nav className="tabmainProduct" variant="pills" >
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure> <img src={require("../../assets/images/key-feature-icon.svg")} alt="" /></figure>
                          {Key_Feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={270} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Key_Feature}</h5>
                        {ReactHtmlParser(Feature_Description)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={270} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Coverage}</h5>
                        {ReactHtmlParser(Coverage_Description)}

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
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">{Footer}</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />

        </BaseComponent>

      </div>
    );
  }
}

export default OilEnergy;