import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser';

class ErrorsAndOmission extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Errors_Omission, Insureds_legal_liability, Policy_cover,
      Limitof_Indemnity, Fines_penalties, Deliberate_willful, Pollution_Nuclear, Text_Delay, Text_Pending, Text_Ipr,
      Criminal_Wrongs, Insured_Insured, Bodily_Injury, Adjustment_Inspection, Heading_Mobile_Version, Aviation_Liability,
      Failure_provide, Contractual_Liability, Liability_Coverage;
    if (lang_name === 'en') {
      Text_Delay = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DELAY'] &&
        sbiHomeData['PRODUCTS_LIABILITY_DELAY'].content_en;
      Text_Pending = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_PRIOR_PENDING'] &&
        sbiHomeData['PRODUCTS_LIABILITY_PRIOR_PENDING'].content_en;
      Text_Ipr = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_IPR'] &&
        sbiHomeData['PRODUCTS_LIABILITY_IPR'].content_en;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Errors_Omission = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT1'].content_en;
      Insureds_legal_liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT2'].content_en;
      Policy_cover = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT3'].content_en;
      Limitof_Indemnity = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT4'].content_en;
      Fines_penalties = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT5'].content_en;
      Deliberate_willful = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT6'].content_en;
      Pollution_Nuclear = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT7'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT7'].content_en;
      Criminal_Wrongs = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT8'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT8'].content_en;
      Insured_Insured = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'].content_en;
      Bodily_Injury = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'].content_en;
      Adjustment_Inspection = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT11'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT11'].content_en;
      Aviation_Liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT12'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT12'].content_en;
      Failure_provide = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT13'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT13'].content_en;
      Contractual_Liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT14'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT14'].content_en;
      Liability_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_COVERAGE_TEXT'] && sbiHomeData['PRODUCTS_LIABILITY_COVERAGE_TEXT'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
    }
    else {



      Text_Delay = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DELAY'] &&
        sbiHomeData['PRODUCTS_LIABILITY_DELAY'].content_hi;
      Text_Pending = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_PRIOR_PENDING'] &&
        sbiHomeData['PRODUCTS_LIABILITY_PRIOR_PENDING'].content_hi;
      Text_Ipr = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_IPR'] &&
        sbiHomeData['PRODUCTS_LIABILITY_IPR'].content_hi;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Errors_Omission = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT1'].content_hi;
      Insureds_legal_liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT2'].content_hi;
      Policy_cover = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT3'].content_hi;
      Limitof_Indemnity = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT4'].content_hi;
      Fines_penalties = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT5'].content_hi;
      Deliberate_willful = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT6'].content_hi;
      Pollution_Nuclear = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT7'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT7'].content_hi;
      Criminal_Wrongs = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT8'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT8'].content_hi;
      Insured_Insured = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'].content_hi;
      Bodily_Injury = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'].content_hi;
      Adjustment_Inspection = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT11'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT11'].content_hi;
      Aviation_Liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT12'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT12'].content_hi;
      Failure_provide = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT13'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT13'].content_hi;
      Contractual_Liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT14'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT14'].content_hi;
      Liability_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_COVERAGE_TEXT'] && sbiHomeData['PRODUCTS_LIABILITY_COVERAGE_TEXT'].content_hi;
    }
    return (
      <div>

        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="ErrorsAndOmission" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Errors_Omission}</h1>
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
                    <h1>{Errors_Omission}</h1>
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
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{key_feature}</h5>
                        <p>{Insureds_legal_liability}</p>
                        <p>{Policy_cover}</p>
                        <p>{Limitof_Indemnity}</p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Coverage}</h5>
                        {ReactHtmlParser(Liability_Coverage)}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Exclusion}</h5>

                        <p>{Fines_penalties}</p>
                        <p>{Deliberate_willful} </p>
                        <p>{Pollution_Nuclear}</p>
                        <p>{Criminal_Wrongs}</p>
                        <p>{Insured_Insured}</p>
                        <p>{Bodily_Injury}</p>
                        <p>{Adjustment_Inspection}</p>
                        <p>{Aviation_Liability}</p>
                        <p>{Failure_provide}</p>
                        <p>{Contractual_Liability}</p>
                        <p>{Text_Delay}</p>
                        <p>{Text_Pending}</p>
                        <p>{Text_Ipr}</p>
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

export default ErrorsAndOmission;