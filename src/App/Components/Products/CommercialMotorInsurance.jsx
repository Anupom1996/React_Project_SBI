import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import * as AppConstant from "../AppConstant";
import ReactHtmlParser from 'react-html-parser'

class CommercialMotorInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'commercial_motor_product_page_4_product_features_click',
      'product_name': 'Commercial Motor Insurance',
      'pagetype': 'commercial_motor_product_page',
      'client_id': gaUserId,
      'click_text': click_text,
      'timestamp': AppConstant.gtmCurrentTime(),
      'quote_no': 'NA',
      'lead_no': 'NA',
      'policy_no': 'NA'
    };
    window.dataLayer.push(data);
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Bonus, Motor_key_feature, Motor_Exclusion,
      Motor_Coverage, Motor_Bonus, Motor_Trailer_Insurance, Heading_Mobile_Version,Text_para,Commercial_Trailer_Insurance

      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'].content_en;
      Text_para = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'].content_en;
      Motor_key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAI_MOTOR_KEY_FEATURES'] && sbiHomeData['PRODUCTS_RETAI_MOTOR_KEY_FEATURES'].content_en;
      Motor_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COVERAGE'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Motor_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS'].content_en;
      Commercial_Trailer_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COMMERCIAL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_COMMERCIAL_TRIAL_INSURENCE'].content_en;

      Motor_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_EXCLUSION'].content_en;
      Motor_Trailer_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'].content_en;
    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS1'].content_hi;
      Motor_key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAI_MOTOR_KEY_FEATURES'] && sbiHomeData['PRODUCTS_RETAI_MOTOR_KEY_FEATURES'].content_hi;
      Motor_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COVERAGE'].content_hi;
      Motor_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_BONUS'].content_hi;
      Motor_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_EXCLUSION'].content_hi;
      Motor_Trailer_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'].content_hi;
      Commercial_Trailer_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COMMERCIAL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_COMMERCIAL_TRIAL_INSURENCE'].content_hi;
      Text_para = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="CommercialMotorInsurance" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Commercial_Trailer_Insurance}</h1>
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
                    <h1>{Commercial_Trailer_Insurance}</h1>
                    <div className="healgth-list">
                    {/* {ReactHtmlParser(Text_para)} */}
                    {ReactHtmlParser(Heading_Mobile_Version)}
                   
                    </div>
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Key Feature')}>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Bonus')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" />
                          </figure>
                          {Bonus}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Exclusion')}>
                      <Nav.Link eventKey="tabmain_4">
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
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={700}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{key_feature}</h5>
                        {ReactHtmlParser(Motor_key_feature)}
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={700}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>
                        {ReactHtmlParser(Motor_Coverage)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={700}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Bonus}</h5>
                        {ReactHtmlParser(Motor_Bonus)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={700}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>
                        {ReactHtmlParser(Motor_Exclusion)}

                      </Scrollbars>
                    </Tab.Pane>{" "}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

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

export default CommercialMotorInsurance;
