import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import {  Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

import ReactHtmlParser from 'react-html-parser'
class IndividualPersonalAccident extends Component {

  constructor(props) {
    super(props);

    this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true
    };
}

  openInNewTab = slug => {
    //UTM Source Catch
    let sourceParam = AppConstant.getUTMSource();
    let utm_source = sourceParam["utm_source"];
    let utm_medium = sourceParam["utm_medium"];
    let utm_campaign = sourceParam["utm_campaign"];
    let utm_uniqueid = sourceParam["utm_uniqueid"];
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+ '&itm_uniqueid='+utm_uniqueid;
      var win = window.open(url, "_blank");
      win.focus();
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
}


componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
   // console.log(currentScrollPos + "   " + visible);
    this.setState({
        prevScrollpos: currentScrollPos,
        visible
    });
};

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, Major_Exclusion, locate_us, Individual_Personal_Accident, Policy_Offer, Important_Note,
      Renew_Policy, Intimate_Claim, Policy_Download, Plan_Option, Designed_Self, Add_Covers, Cumulative_Bonus, Permanent_Disability,
      Comprehensive_Coverage, Our_personal, accident_insurance, Accidental_death,Mobile_Heading, Permanent_Total_Disability, Permanent_partial_Disability, Temporary_Total_Disability, attempted_suicide, Self_inflicted, inebriated, attempted_felony,
      Participation_hazardous, Committing_breach, Minimum_coverage,Get_Quote;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] && sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_en;
      Individual_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_P_A_INDIVIDUAL'] && sbiHomeData['PRODUCTS_P_A_INDIVIDUAL'].content_en;
      Renew_Policy = sbiHomeData && sbiHomeData['PRODUCTS_P_A_RENEW_POLICY'] && sbiHomeData['PRODUCTS_P_A_RENEW_POLICY'].content_en;
      Intimate_Claim = sbiHomeData && sbiHomeData['PRODUCTS_P_A_INTIMATE_CLAIM'] && sbiHomeData['PRODUCTS_P_A_INTIMATE_CLAIM'].content_en;
      Policy_Download = sbiHomeData && sbiHomeData['PRODUCTS_P_A_POLICY'] && sbiHomeData['PRODUCTS_P_A_POLICY'].content_en;
      Plan_Option = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT20'] && sbiHomeData['PRODUCTS_P_A_TEXT20'].content_en;
      Designed_Self = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT1'] && sbiHomeData['PRODUCTS_P_A_TEXT1'].content_en;
      Add_Covers = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT2'] && sbiHomeData['PRODUCTS_P_A_TEXT2'].content_en;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'].content_en;
      Cumulative_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT3'] && sbiHomeData['PRODUCTS_P_A_TEXT3'].content_en;
      Permanent_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT4'] && sbiHomeData['PRODUCTS_P_A_TEXT4'].content_en;
      Comprehensive_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT5'] && sbiHomeData['PRODUCTS_P_A_TEXT5'].content_en;
      Our_personal = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT7'] && sbiHomeData['PRODUCTS_P_A_TEXT7'].content_en;
      accident_insurance = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT8'] && sbiHomeData['PRODUCTS_P_A_TEXT8'].content_en;
      Accidental_death = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT9'] && sbiHomeData['PRODUCTS_P_A_TEXT9'].content_en;
      Permanent_Total_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT10'] && sbiHomeData['PRODUCTS_P_A_TEXT10'].content_en;
      Policy_Offer = sbiHomeData && sbiHomeData['PRODUCTS_POLICY_OFFER'] && sbiHomeData['PRODUCTS_POLICY_OFFER'].content_en;
      Permanent_partial_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT11'] && sbiHomeData['PRODUCTS_P_A_TEXT11'].content_en;
      Temporary_Total_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT12'] && sbiHomeData['PRODUCTS_P_A_TEXT12'].content_en;
      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_IMPORTANT_NOTE'] && sbiHomeData['PRODUCTS_IMPORTANT_NOTE'].content_en;
      attempted_suicide = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT14'] && sbiHomeData['PRODUCTS_P_A_TEXT14'].content_en;
      Self_inflicted = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT15'] && sbiHomeData['PRODUCTS_P_A_TEXT15'].content_en;
      inebriated = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT16'] && sbiHomeData['PRODUCTS_P_A_TEXT16'].content_en;
      attempted_felony = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT17'] && sbiHomeData['PRODUCTS_P_A_TEXT17'].content_en;
      Participation_hazardous = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT18'] && sbiHomeData['PRODUCTS_P_A_TEXT18'].content_en;
      Committing_breach = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT19'] && sbiHomeData['PRODUCTS_P_A_TEXT19'].content_en;
      Minimum_coverage = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT22'] && sbiHomeData['PRODUCTS_P_A_TEXT22'].content_en;
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_hi;
      Policy_Offer = sbiHomeData && sbiHomeData['PRODUCTS_POLICY_OFFER'] && sbiHomeData['PRODUCTS_POLICY_OFFER'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] && sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_hi;
      Individual_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_P_A_INDIVIDUAL'] && sbiHomeData['PRODUCTS_P_A_INDIVIDUAL'].content_hi;
      Renew_Policy = sbiHomeData && sbiHomeData['PRODUCTS_P_A_RENEW_POLICY'] && sbiHomeData['PRODUCTS_P_A_RENEW_POLICY'].content_hi;
      Intimate_Claim = sbiHomeData && sbiHomeData['PRODUCTS_P_A_INTIMATE_CLAIM'] && sbiHomeData['PRODUCTS_P_A_INTIMATE_CLAIM'].content_hi;
      Policy_Download = sbiHomeData && sbiHomeData['PRODUCTS_P_A_POLICY'] && sbiHomeData['PRODUCTS_P_A_POLICY'].content_hi;
      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_IMPORTANT_NOTE'] && sbiHomeData['PRODUCTS_IMPORTANT_NOTE'].content_hi;
      Plan_Option = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT20'] && sbiHomeData['PRODUCTS_P_A_TEXT20'].content_hi;
      Designed_Self = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT1'] && sbiHomeData['PRODUCTS_P_A_TEXT1'].content_hi;
      Add_Covers = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT2'] && sbiHomeData['PRODUCTS_P_A_TEXT2'].content_hi;
      Cumulative_Bonus = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT3'] && sbiHomeData['PRODUCTS_P_A_TEXT3'].content_hi;
      Permanent_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT4'] && sbiHomeData['PRODUCTS_P_A_TEXT4'].content_hi;
      Comprehensive_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT5'] && sbiHomeData['PRODUCTS_P_A_TEXT5'].content_hi;
      Our_personal = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT7'] && sbiHomeData['PRODUCTS_P_A_TEXT7'].content_hi;
      accident_insurance = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT8'] && sbiHomeData['PRODUCTS_P_A_TEXT8'].content_hi;
      Accidental_death = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT9'] && sbiHomeData['PRODUCTS_P_A_TEXT9'].content_hi;
      Permanent_Total_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT10'] && sbiHomeData['PRODUCTS_P_A_TEXT10'].content_hi;
      Permanent_partial_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT11'] && sbiHomeData['PRODUCTS_P_A_TEXT11'].content_hi;
      Temporary_Total_Disability = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT12'] && sbiHomeData['PRODUCTS_P_A_TEXT12'].content_hi;
      attempted_suicide = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT14'] && sbiHomeData['PRODUCTS_P_A_TEXT14'].content_hi;
      Self_inflicted = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT15'] && sbiHomeData['PRODUCTS_P_A_TEXT15'].content_hi;
      inebriated = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT16'] && sbiHomeData['PRODUCTS_P_A_TEXT16'].content_hi;
      attempted_felony = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT17'] && sbiHomeData['PRODUCTS_P_A_TEXT17'].content_hi;
      Participation_hazardous = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT18'] && sbiHomeData['PRODUCTS_P_A_TEXT18'].content_hi;
      Committing_breach = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT19'] && sbiHomeData['PRODUCTS_P_A_TEXT19'].content_hi;
      Minimum_coverage = sbiHomeData && sbiHomeData['PRODUCTS_P_A_TEXT22'] && sbiHomeData['PRODUCTS_P_A_TEXT22'].content_hi;
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_hi;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'].content_hi;
      
    }



    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="IndividualPersonalAccident" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Individual_Personal_Accident}</h1>
                <div className="healgth-productBtnMain">
                          
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=IPA")} className="d-flex color-03">
                      <figure>
                        <img
                          src={require("../../assets/images/renew-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>{Renew_Policy}</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Individual Personal Accident Insurance Policy" } }} className="d-flex color-03">
                      <figure>
                        <img
                          src={require("../../assets/images/claim-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>{Intimate_Claim}</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={e => this.openInNewTab("/policyprint/others")} className="d-flex color-03">
                      <figure>
                        <img
                          src={require("../../assets/images/policy-download-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>{Policy_Download}</p>
                    </Link>
                  </div>
                  
                </div>
                <div className="healgth-list">
                {ReactHtmlParser(Mobile_Heading)}
                 
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
                    <img src={require("../../assets/images/PAI-banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Individual_Personal_Accident}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                    <div className="healgth-productBtnMain">
                      <div className="healgth-productBtn pl-0">
                        <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=IPA")} className="d-flex color-purple">
                          <figure>
                            <img
                              src={require("../../assets/images/renew-policy-icon.svg")}
                              alt=""
                            />
                          </figure>
                          <p>{Renew_Policy}</p>
                        </Link>
                      </div>
                      <div className="healgth-productBtn pl-0">
                        <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Individual Personal Accident Insurance Policy" } }} className="d-flex color-purple">
                          <figure>
                            <img
                              src={require("../../assets/images/claim-policy-icon.svg")}
                              alt=""
                            />
                          </figure>
                          <p>{Intimate_Claim}</p>
                        </Link>
                      </div>
                      <div className="healgth-productBtn pl-0">
                        <Link to={'#'} onClick={e => this.openInNewTab("/policyprint/others")} className="d-flex color-purple">
                          <figure>
                            <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                          </figure>
                          <p>{Policy_Download}</p>
                        </Link>
                      </div>
                     
                    </div>
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                  <img
                    src={require("../../assets/images/PAI-right-side.svg")}
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
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {key_feature}
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
                          {Major_Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/plan-option-icon.svg")} alt="" />
                          </figure>
                          {Plan_Option}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <ul>
                        <li>
                          {Designed_Self}  </li>
                        <li>
                          {Add_Covers}
                        </li>
                        <li>{Cumulative_Bonus}</li>
                        <li>{Permanent_Disability}</li>
                        <li>
                          {Comprehensive_Coverage}
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <p>
                        {Our_personal}{" "}
                        <strong>
                          <i>{accident_insurance}</i>
                        </strong>{" "}
                        {ReactHtmlParser(Policy_Offer)}:

                      </p>
                      <ul>
                        <li>{Accidental_death}</li>
                        <li>
                          {Permanent_Total_Disability}
                        </li>
                        <li>
                          {Permanent_partial_Disability}
                        </li>
                        <li>
                          {Temporary_Total_Disability}
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Major_Exclusion}</h5>
                      <ul>
                        <li>{attempted_suicide}</li>
                        <li>{Self_inflicted}</li>
                        <li>
                          {inebriated}                        </li>
                        <li>
                          {attempted_felony}
                        </li>
                        <li>
                          {Participation_hazardous}
                        </li>
                        <li>{Committing_breach}</li>
                      </ul>
                      <p>
                        {ReactHtmlParser(Important_Note)}


                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Plan_Option}</h5>
                      <ul>
                        <li>
                          {Minimum_coverage}
                        </li>
                      </ul>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />
          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper">
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

export default IndividualPersonalAccident;
