import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser';
// import RelatedProducts from "./RelatedProducts";
import { Sticky } from "react-sticky";

class CovidKavach extends Component {
  state = {
    faqcategory: "",
    subcategoryList: [],
    prevScrollpos: window.pageYOffset,
    visible: true,
  };

  openInNewTab = (slug) => {
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      let redirectUrl = "";
      if (slug.indexOf("http") !== -1) {
        redirectUrl = slug;
      } else {
        redirectUrl = url + slug;
      }
      // return redirectUrl;
      var win = window.open(redirectUrl, "_blank");
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
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };
  
    gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'corona_kavach_product_page_4_product_features_click',
      'product_name': 'Corona Kavach',
      'pagetype': 'corona_kavach_product_page',
      'client_id': gaUserId,
      'click_text': click_text,
      'timestamp': AppConstant.gtmCurrentTime(),
      'quote_no': 'NA',
      'lead_no': 'NA',
      'policy_no': 'NA'
    };
    window.dataLayer.push(data);
  }
  


  
  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'portal_product_page_4_product_features_click',
      'product_name': 'Corona Kavach',
      'pagetype': 'corona_kavach_product_page',
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
    let Corona_Kavach, key_feature, Coverage, Major_Exclusion, Tax_Deduction, locate_us, No_medical_checkup,
      Room_rent, hospital_room_rent, Home_Care_Expenses, Newborn_cover, PrePost_hospitalization, Nursing_expenses,
      Medicines_consume, Road_Ambulance_Charges, Hospital_Daily_Cash, Expenses_related, Diagnosis_treatment,
      claim_Covid19, Testing_diagnostic, covers_policy,Mobile_Heading ,Corona_Kavach_Policy, Buy_Now,Get_Quote,Policy_Cover_Term,Important_Note,
      Rest_cure;

    if (lang_name === 'en') {
      
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_en;
      Corona_Kavach = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH'].content_en;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_en;
      Tax_Deduction = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'] && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'].content_en;
      No_medical_checkup = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_MEDICAL'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_MEDICAL'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] && sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_en;
      Room_rent = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT2'].content_en;
      Home_Care_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT3'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT3'].content_en;
      Newborn_cover = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT4'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT4'].content_en;
      hospital_room_rent = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT7'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT7'].content_en;
      Nursing_expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT8'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT8'].content_en;
      Medicines_consume = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT9'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT9'].content_en;
      Road_Ambulance_Charges = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT10'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT10'].content_en;
      PrePost_hospitalization = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT11'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT11'].content_en;
      Hospital_Daily_Cash = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT12'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT12'].content_en;
      Expenses_related = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'].content_en
      Diagnosis_treatment = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT15'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT15'].content_en
      claim_Covid19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT16'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT16'].content_en
      Testing_diagnostic = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT17'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT17'].content_en
      covers_policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT18'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT18'].content_en
      Rest_cure = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT19'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT19'].content_en
      Buy_Now = sbiHomeData && sbiHomeData['BUY_NOW'] && sbiHomeData['BUY_NOW'].content_en;
      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'] && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'].content_en;
      Policy_Cover_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'] && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'].content_en;
      Corona_Kavach_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'].content_en;
    }
    else {
      
      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'] && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'].content_hi;
      Policy_Cover_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'] && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'].content_hi;
      Buy_Now = sbiHomeData && sbiHomeData['BUY_NOW'] && sbiHomeData['BUY_NOW'].content_hi;
      Corona_Kavach_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'].content_hi;
      Corona_Kavach = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH'].content_hi;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_hi;
      Tax_Deduction = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'] && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'].content_hi;
      No_medical_checkup = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_MEDICAL'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_MEDICAL'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] && sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_hi;
      Room_rent = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT2'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT2'].content_hi;
      Home_Care_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT3'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT3'].content_hi;
      Newborn_cover = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT4'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT4'].content_hi;
      hospital_room_rent = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT7'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT7'].content_hi;
      Nursing_expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT8'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT8'].content_hi;
      Medicines_consume = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT9'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT9'].content_hi;
      Road_Ambulance_Charges = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT10'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT10'].content_hi;
      PrePost_hospitalization = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT11'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT11'].content_hi;
      Hospital_Daily_Cash = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT12'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT12'].content_hi;
      Expenses_related = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'].content_hi;
      Diagnosis_treatment = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT15'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT15'].content_hi;
      claim_Covid19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT16'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT16'].content_hi;
      Testing_diagnostic = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT17'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT17'].content_hi;
      covers_policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT18'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT18'].content_hi;
      Rest_cure = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT19'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT19'].content_hi;
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_hi;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_RETAIL_MOBILE_HEADING'].content_hi;
      

    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="CovidKavach" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>
                  {Corona_Kavach}
                </h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={(e) =>
                        this.openInNewTab(
                          "/covid/display_page?itm_source=direct&itm_medium=none&itm_campaign="
                        )
                      }
                      className="d-flex color-01"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/buy-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>{Get_Quote}</p>
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
                    <img
                      src={require("../../assets/images/Corona_Kavach_Policy.svg")}
                      alt="Covid Kavach"
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>
                      {Corona_Kavach}
                    </h1>
                    <div className="healgth-productBtnMain">
                      <div className="healgth-productBtn pl-0">
                        <Link
                          to={"#"}
                          onClick={(e) =>
                            this.openInNewTab("/covid/display_page?itm_source=direct&itm_medium=none&itm_campaign=")
                          }
                          className="d-flex color-purple"
                        >
                          <figure>
                            <img
                              src={require("../../assets/images/buy-policy-icon.svg")}
                              alt=""
                            />
                          </figure>
                          <p>{Get_Quote}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                  <img
                    src={require("../../assets/images/general_product_bottom_icon.svg")}
                    alt="Covid Kavach"
                  />
                </div>
              </div>
            </section>
          )}
          {/*sticky button */}
          <div
            className="stickyWrapper"
            style={{
              display: this.state.prevScrollpos > 296 ? "block" : "none",
            }}
          >
            <Sticky topOffset={274}>
              {({ style }) => (
                <div style={{ zIndex: 999, ...style }} id="stickyNav">
                  <div className="retailHealthButtonWRapper">
                    <div className="retailHealthStaticBtn">
                      <div className="innerHead">{Corona_Kavach_Policy}</div>
                      <Link
                        to={"#"}
                        onClick={(e) =>
                          this.openInNewTab("/covid/display_page?itm_source=direct&itm_medium=none&itm_campaign=")
                        }
                      >
                        {Buy_Now}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Sticky>
          </div>

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources
                  productType={this.props.location.pathname.split("/")[1]}
                />
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Key Feature')}>
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Major Exclusion')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/exclusions-iocn.svg")}
                              alt=""
                            />
                          </figure>
                          {Major_Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <ul>
                        <li>{No_medical_checkup}</li>
                        <li>{Room_rent}</li>
                        <li>{Home_Care_Expenses}</li>
                        <li>{Newborn_cover}</li>
                        <li>{Tax_Deduction}</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={475}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>
                        <p>
                        {ReactHtmlParser(Policy_Cover_Term)}
                       
                        </p>
                        <ul>
                          <li>
                            {hospital_room_rent}
                          </li>
                          <li>
                            {Nursing_expenses}
                          </li>
                          <li>
                            {Medicines_consume}
                          </li>
                          <li>{Road_Ambulance_Charges}</li>
                          <li>
                            {PrePost_hospitalization}
                          </li>
                          <li>
                            {Hospital_Daily_Cash}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={475}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Major_Exclusion}</h5>
                        <ul>
                          <li>
                            {Expenses_related}
                          </li>
                          <li>
                            {Diagnosis_treatment}
                          </li>
                          <li>
                            {claim_Covid19}
                          </li>
                          <li>
                            {Testing_diagnostic}
                          </li>
                          <li>
                            {covers_policy}
                          </li>
                          <li>{Rest_cure}</li>
                        </ul>
                        <p>
                          <strong>
                          {ReactHtmlParser(Important_Note)}
                         
                          </strong>
                         
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResources
            productType={this.props.location.pathname.split("/")[1]}
          />
          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper">
            <Container>
              <h5 className="htitle text-center">
                {locate_us}
              </h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance
            productType={this.props.location.pathname.split("/")[1]}
          />
          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split("/")[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default CovidKavach;
