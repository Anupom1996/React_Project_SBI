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
// import RelatedProducts from "./RelatedProducts";
import ReactHtmlParser from 'react-html-parser'
import { Sticky } from 'react-sticky';

class CoronaRakshak extends Component {
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
      'event': 'portal_product_page_4_product_features_click',
      'product_name': 'Corona Rakshak',
      'pagetype': 'corona_rakshak_product_page',
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
    let Corona_Rakshak, key_feature, Coverage, Major_Exclusion, No_medical_checkup, Lumpsum_benefit, policy_commencement_date, Tax_Deduction, Lumpsum_benefit_equal, Investigation_Evaluation, Expenses,
      diagnostic_expenses, Get_Quote, Policy_Cover_Term, Mobile_Heading,
      diagnosis_incidental, Testing_diagnostic, claim_COVID19, Cover_Policy, locate_us, Important_Note, Rakshak_Policy, Buy_Now
      ;

    if (lang_name === 'en') {

      Corona_Rakshak = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK'].content_en;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_en;
      No_medical_checkup = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT1'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT1'].content_en;
      Lumpsum_benefit = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'] && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'].content_en;
      policy_commencement_date = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COMMENCEMENT'] && sbiHomeData['PRODUCTS_RETAIL_COMMENCEMENT'].content_en;
      Tax_Deduction = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'] &&
        sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'].content_en;
      Lumpsum_benefit_equal = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'] &&
        sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'].content_en;
      Investigation_Evaluation = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_INVESTIGATION'] &&
        sbiHomeData['PRODUCTS_RETAIL_INVESTIGATION'].content_en;

      Expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXPENSES'] &&
        sbiHomeData['PRODUCTS_RETAIL_EXPENSES'].content_en;

      diagnostic_expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'] &&
        sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'].content_en;

      diagnosis_incidental = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT1'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT1'].content_en;

      Testing_diagnostic = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT2'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT2'].content_en;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] &&
        sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_en;
      claim_COVID19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT3'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT3'].content_en;
      Cover_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT4'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT4'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_en;
      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'] &&
        sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'].content_en;
      Rakshak_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'] &&
        sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'].content_en;
      Buy_Now = sbiHomeData && sbiHomeData['BUY_NOW'] &&
        sbiHomeData['BUY_NOW'].content_en;
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] &&
        sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_en;
      Policy_Cover_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'] &&
        sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'].content_en;


    }
    else {
      Corona_Rakshak = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK'].content_hi;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Major_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_MAJOR_EXCLUSION'].content_hi;
      No_medical_checkup = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT1'] && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT1'].content_hi;
      Lumpsum_benefit = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'] && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'].content_hi;
      policy_commencement_date = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COMMENCEMENT'] && sbiHomeData['PRODUCTS_RETAIL_COMMENCEMENT'].content_hi;
      Tax_Deduction = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'] &&
        sbiHomeData['PRODUCTS_RETAIL_TAX_DEDUCTION'].content_hi;
      Lumpsum_benefit_equal = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'] &&
        sbiHomeData['PRODUCTS_RETAIL_LUMPSUM'].content_hi;
      Expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXPENSES'] &&
        sbiHomeData['PRODUCTS_RETAIL_EXPENSES'].content_hi;

      diagnostic_expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'] &&
        sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'].content_hi;

      diagnostic_expenses = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'] &&
        sbiHomeData['PRODUCTS_RETAIL_KAVACH_TEXT14'].content_hi;
      diagnosis_incidental = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT1'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT1'].content_hi;
      Testing_diagnostic = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT2'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT2'].content_hi;

      claim_COVID19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT3'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT3'].content_hi;
      Cover_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT4'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT4'].content_hi;

      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TEXT5'] &&
        sbiHomeData['PRODUCTS_RETAIL_TEXT5'].content_hi;





      Important_Note = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'] &&
        sbiHomeData['PRODUCTS_RETAIL_IMPORTANT_NOTE'].content_hi;
      Rakshak_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'] &&
        sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'].content_hi;
      Buy_Now = sbiHomeData && sbiHomeData['BUY_NOW'] &&
        sbiHomeData['BUY_NOW'].content_hi;
      Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'] &&
        sbiHomeData['PRODUCTS_RETAIL_GET_QUOTE'].content_hi;
      Policy_Cover_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'] &&
        sbiHomeData['PRODUCTS_RETAIL_POLICY_COVER_TERM'].content_hi;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] &&
        sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_hi;





    }


    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="CoronaRakshak" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Corona_Rakshak}</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={(e) =>
                        this.openInNewTab(
                          "/coronarakshak/display_page?itm_source=direct&itm_medium=none&itm_campaign="
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
                    <h1>{Corona_Rakshak}</h1>
                    <div className="healgth-productBtnMain">
                      <div className="healgth-productBtn pl-0">
                        <Link
                          to={"#"}
                          onClick={(e) =>
                            this.openInNewTab(
                              "/coronarakshak/display_page?itm_source=direct&itm_medium=none&itm_campaign="
                            )
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
                    alt="Corona Rakshak"
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
                      <div className="innerHead">{Rakshak_Policy}</div>
                      <Link
                        to={"#"}
                        onClick={(e) =>
                          this.openInNewTab(
                            "/coronarakshak/display_page?itm_source=direct&itm_medium=none&itm_campaign="
                          )
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
                    <Nav.Item onClick={e => this.gtmClickHandler(' Major Exclusion')}>
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
                        <li>
                          {Lumpsum_benefit}
                        </li>
                        <li>
                          {policy_commencement_date}
                        </li>
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
                        {ReactHtmlParser(Policy_Cover_Term)}

                        <ul>
                          <li>
                            {Lumpsum_benefit_equal}
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
                            <strong>{Investigation_Evaluation}</strong>
                            <ul>
                              <li>
                                {Expenses}
                              </li>
                              <li>
                                {diagnostic_expenses}
                              </li>
                            </ul>
                          </li>
                          <li>
                            {diagnosis_incidental}
                          </li>
                          <li>
                            {Testing_diagnostic}
                          </li>
                          <li>
                            {claim_COVID19}
                          </li>
                          <li>
                            {Cover_Policy}
                          </li>
                        </ul>
                        {ReactHtmlParser(Important_Note)}
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

export default CoronaRakshak;
