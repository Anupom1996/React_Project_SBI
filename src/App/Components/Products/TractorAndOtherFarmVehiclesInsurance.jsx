import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'

class TractorAndOtherFarmVehiclesInsurance extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Bonus, Motor_Vehicle_Insurance, Motor_Tractor_Key_Feature,
      Motor_Tractor_Coverage, Motor_Tractor_Bonus, Motor_Tractor_Exclusion, Heading_Mobile_Version
      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'].content_en;
      Motor_Vehicle_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_INSURENCE_POLICY'].content_en;
      Motor_Tractor_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_KEY_FEATURES'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_KEY_FEATURES'].content_en;
      Motor_Tractor_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_COVERAGE'].content_en;

      Motor_Tractor_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_BONUS'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_BONUS'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;

      Motor_Tractor_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_EXCLUSION'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'].content_hi;
      Motor_Vehicle_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_INSURENCE_POLICY'].content_hi;
      Motor_Tractor_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_KEY_FEATURES'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_KEY_FEATURES'].content_hi;

      Motor_Tractor_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_COVERAGE'].content_hi;
      Motor_Tractor_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_BONUS'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_BONUS'].content_hi;
      Motor_Tractor_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TRACTOR_EXCLUSION'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
    }
    return (
      <div>

        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="TractorAndOtherFarmVehiclesInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Motor_Vehicle_Insurance}</h1>
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
                    <img src={require("../../assets/images/motor-banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Motor_Vehicle_Insurance}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
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
          )
          }

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

                  <Nav className="tabmainProduct" variant="pills" >
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure> <img src={require("../../assets/images/key-feature-icon.svg")} alt="" /></figure>
                          {key_feature}
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
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" /></figure>
                          {Bonus}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        {ReactHtmlParser(Motor_Tractor_Key_Feature)}

                      </Scrollbars>
                    </Tab.Pane>

                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        {ReactHtmlParser(Motor_Tractor_Coverage)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Bonus}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        {ReactHtmlParser(Motor_Tractor_Bonus)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        {ReactHtmlParser(Motor_Tractor_Exclusion)}

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
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">{locate_us}</h5>
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

export default TractorAndOtherFarmVehiclesInsurance;