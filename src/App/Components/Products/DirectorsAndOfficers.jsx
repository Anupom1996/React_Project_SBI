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
import ReactHtmlParser from 'react-html-parser'
class DirectorsAndOfficers extends Component {
  state = {
    accordianBtn: false
  };

  toggleAccordianBtn = e => {
    let classAccord = e.target.className;
    let els = document.getElementsByClassName("accordianBtn btn btn-link");
    if (els) {
      while (els[0]) {
        els[0].classList.remove("accordianBtn");
      }
    }
    if (classAccord.indexOf("accordianBtn") > -1) {
      e.target.className = "btn btn-link";
    } else {
      e.target.className = "accordianBtn btn btn-link";
    }
  };

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Directors_Officers, Insured_legal_liability, Heading_Mobile_Version,Director_Officer,
      Cover_provided,Exclusion_Text, additional_premium, Fines_penalties, Deliberate_willful, Insured_Insured, Bodily_Injury,
      Limit_of_Indemnity, future_Directors, Directors_Officers_Coverage, protect_Directors, required_by_law, AddOn_Covers, On_payment, Outside_Directorship, Pollution_Defence, Crisis_Communication, Legal_Representation, Risk_Management_Extension, Auto_Inclusion;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
        Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT30'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Directors_Officers = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'].content_en;
      Insured_legal_liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'].content_en;
      Cover_provided = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      additional_premium = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'].content_en;
      Fines_penalties = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'].content_en;
      Deliberate_willful = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'].content_en;
      Insured_Insured = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'].content_en;
      Bodily_Injury = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'].content_en;
      Director_Officer = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'].content_en;
      Auto_Inclusion = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'].content_en;
      Limit_of_Indemnity = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT27'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT27'].content_en;
      future_Directors = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT28'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT28'].content_en;
      Directors_Officers_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'].content_en;
      protect_Directors = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'].content_en;
      required_by_law = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'].content_en;
      AddOn_Covers = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'].content_en;
      On_payment = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'].content_en;
      Outside_Directorship = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'].content_en;
      Pollution_Defence = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'].content_en;
      Crisis_Communication = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'].content_en;
      Legal_Representation = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'].content_en;
      Risk_Management_Extension = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'].content_en;
      Auto_Inclusion = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Directors_Officers = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'].content_hi;
      Insured_legal_liability = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'].content_hi;
      Cover_provided = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'].content_hi;
      additional_premium = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'].content_hi;
      Fines_penalties = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'].content_hi;
      Deliberate_willful = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'].content_hi;
      Insured_Insured = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT9'].content_hi;
      Bodily_Injury = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT10'].content_hi;
      
      Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_ERROR_TEXT30'].content_hi;
      Limit_of_Indemnity = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT27'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT27'].content_hi;
      future_Directors = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT28'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT28'].content_hi;
      Directors_Officers_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'].content_hi;
      protect_Directors = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'].content_hi;
      required_by_law = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'].content_hi;
      AddOn_Covers = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'].content_hi;
      On_payment = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'].content_hi;
      Outside_Directorship = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'].content_hi;
      Pollution_Defence = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'].content_hi;
      Crisis_Communication = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'].content_hi;
      Legal_Representation = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'].content_hi;
      Risk_Management_Extension = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      
     Director_Officer = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'].content_hi;
      Auto_Inclusion = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'].content_hi;
    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="DirectorsAndOfficers" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Directors_Officers}</h1>
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
                    <h1>{Directors_Officers}</h1>
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
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{key_feature}</h5>
                        <p>
                          {Insured_legal_liability}
                        </p>
                        <p>
                          {Cover_provided}
                        </p>
                        <p>
                          {additional_premium}
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>

                        <p>
                          {Director_Officer}
                        </p>
                        <p>
                          <strong>
                            {Directors_Officers_Coverage}
                          </strong>{" "}
                          {protect_Directors}
                        </p>
                        {required_by_law}
                        <p>{Limit_of_Indemnity}
                        </p>
                        <p>
                          {future_Directors}
                        </p>
                        <p>
                          <strong>{AddOn_Covers}</strong>
                        </p>
                        <p>
                          {On_payment}
                        </p>
                        <p>{Outside_Directorship}</p>
                        <p>{Pollution_Defence}</p>
                        <p>{Crisis_Communication}</p>
                        <p>{Legal_Representation}</p>
                        <p>{Risk_Management_Extension}</p>
                        <p>{Auto_Inclusion}</p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>

                        <p>
                          {Fines_penalties}
                        </p>
                        <p>
                          {Deliberate_willful}
                        </p>
                        <p>Seepage &amp; Pollution;</p>
                        <p>Proved Criminal Wrongs, Dishonesty &amp; Fraud;</p>
                        <p>Major Shareholder (typically 10%) exclusion;</p>
                        <p>Personal/Improper gains;</p>
                        <p>{Insured_Insured}</p>
                        <p>{Bodily_Injury}</p>
                        <p>Prior and Pending Act/Claims;</p>
                        {ReactHtmlParser(Exclusion_Text)}
                      </Scrollbars>
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

export default DirectorsAndOfficers;
