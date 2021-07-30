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
import RelatedProducts from "./RelatedProducts";
import { Sticky } from 'react-sticky';

class ArogyaTopup extends Component {
  state = {
    faqcategory: "",
    subcategoryList: [],
    prevScrollpos: window.pageYOffset,
    visible: true
  };

  openInNewTab = slug => {
    //UTM Source Catch
    let sourceParam = AppConstant.getUTMSource();
    let utm_source = sourceParam["utm_source"];
    let utm_medium = sourceParam["utm_medium"];
    let utm_campaign = sourceParam["utm_campaign"];
    let utm_uniqueid = sourceParam["utm_uniqueid"];
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      if (slug.indexOf('?') === -1) {
        url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+ '&itm_uniqueid='+utm_uniqueid;
      } else {
        url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+ '&itm_uniqueid='+utm_uniqueid;
      }
      let redirectUrl = '';
      if (slug.indexOf('http') !== -1) {
        redirectUrl = slug;
      } else {
        redirectUrl = url;
      }
      var win = window.open(redirectUrl, '_blank');
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
    //console.log(currentScrollPos + "   " + visible);
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'arogya_topup_product_page_4_product_features_click',
      'product_name': 'Arogya Topup',
      'pagetype': 'arogya_topup_product_page',
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
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="ArogyaTopup" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Arogya Top Up Policy</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/arogyatopup/display")} className="d-flex color-01">
                      <figure>
                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=AT")} className="d-flex color-02">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link
                      to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Top up Policy" } }}
                      className="d-flex color-03"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/claim-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Intimate Claim</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-04">
                      <figure>
                        <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div>
                <div className="healgth-list">
                  <ul>
                    <li>142 days care procedures</li>
                    <li>Individual and Family Floater options</li>
                    <li>Cashless Treatment at over 3000 network hospitals</li>
                  </ul>
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
                        src={require("../../assets/images/retail-head-icon.svg")}
                        alt="Arogya Top Up Policy"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Arogya Top Up Policy</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/arogyatopup/display")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=AT")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Renew Policy</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Top up Policy" } }}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img
                                src={require("../../assets/images/claim-policy-icon.svg")}
                                alt=""
                              />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-purple">
                            <figure>
                              <img
                                src={require("../../assets/images/policy-download-icon.svg")}
                                alt=""
                              />
                            </figure>
                            <p>Policy Download</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                      alt="Arogya Top Up Policy"
                    />
                  </div>
                </div>
              </section>
            )}

          { /*sticky button */}
          <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
            <Sticky topOffset={274} >
              {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                <div className="retailHealthButtonWRapper">
                  <div className="retailHealthStaticBtn">
                    <div className="innerHead">Arogya Top Up Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/arogyatopup/display")}>Buy Now</Link>

                  </div>
                </div>
              </div>}
            </Sticky>
          </div>

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
                    <Nav.Item onClick={e => this.gtmClickHandler('Key Feature')}>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Major Exclusion')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          Major Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded >
                        <h5 className="htitle">Key Feature</h5>
                        <ul>
                          <li>
                            No medical check-up if you don’t have any medical history: till 55 years
                          </li>
                          <li>142 Daycare expenses.</li>
                          <li>
                            Comprehensive Coverage: Pre- and post- Hospitalisation.
                          </li>
                          <li>
                            Wide coverage: Sum Insured from Rs 1,00,000 to Rs 50,00,000
                          </li>
                          <li>IT exemption: Under Sec 80D</li>

                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Coverage</h5>
                        <p>
                          Our <strong>Top-up Health Insurance</strong> covers:
                        </p>
                        <ul>
                          <li>Room rent, Doctor Fees, ICU charges, Nursing Costs</li>
                          <li>Drugs, medicines and consumables</li>
                          <li>Pre-hospitalisation expenses up to 60 days for each hospitalisation, Post-hospitalisation expenses up to 90 days.</li>
                          <li>Day Care expenses for 142 daycare procedures.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Major Exclusion</h5>
                        <ul>
                          <li>
                            Pre-existing diseases for the first 4 years
                          </li>
                          <li>
                            Specified conditions during the first year
                          </li>
                          <li>Treatment taken outside India.</li>
                          <li>
                            Outpatient department treatment.
                          </li>
                          <li>Experimental treatment</li>
                        </ul>
                        <p><strong>Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings.</strong></p>
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
          <section className="weAreWrapper">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Related Products Main */}
          <RelatedProducts category="health" productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default ArogyaTopup;
