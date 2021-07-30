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

class ArogyaPlus extends Component {
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
      let redirectUrl = '';
      if (slug.indexOf('http') !== -1) {
        redirectUrl = slug;
      } else {
        if (slug.indexOf('?') === -1) {
          url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' +utm_campaign + '&itm_uniqueid='+utm_uniqueid;
        } else {
          url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' +utm_campaign + '&itm_uniqueid='+utm_uniqueid;
        }
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
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'arogya_plus_product_page_4_product_features_click',
      'product_name': 'Arogya Plus',
      'pagetype': 'arogya_plus_product_page',
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
          <HelmetData pageComponentType="ArogyaPlus" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Arogya Plus Policy</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page/")} className="d-flex color-01" >
                      <figure>
                        <img
                          src={require("../../assets/images/buy-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=APL")} className="d-flex color-02">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link
                      to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Plus Policy" } }}
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
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")} className="d-flex color-01">
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
                        alt="Arogya Plus Policy"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Arogya Plus Policy</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=APL")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Renew Policy</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Plus Policy" } }}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
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
                      alt="Arogya Plus Policy"
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
                    <div className="innerHead">Arogya Plus Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")}>Buy Now</Link>

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
                  <CallBackFormRetail  />
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Sum Insured')}>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" />
                          </figure>
                          Sum Insured
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <ul>
                        <li>No medical check-up up to 55 years if you don’t have any medical history</li>
                        <li>Multiple coverages: Individual, Family Floater</li>
                        <li>142 Day Care expenses covered</li>
                        <li>Comprehensive coverage: Pre and Post-Hospitalisation</li>
                        <li>Multiple Sum Insured options: INR 1, 2, &amp; 3 Lakhs</li>
                        <li>IT Exemption: Under Sec 80 D </li>
                        <li>Outpatient Treatment Covered PD</li>
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
                        <h5 className="htitle">Coverage</h5>
                        <p>
                          This Health Insurance policy covers the following
                          subject to the terms and conditions:
                        </p>
                        <ul>
                          <li>Your hospital room rent, boarding expenses and doctor fees</li>
                          <li>Operation Theatre and Intensive Care charges</li>
                          <li>Nursing expenses</li>
                          <li>Medicines that you consume during the hospital stay</li>
                          <li>Pre and Post hospitalisation expenses up to 60 and 90 days respectively</li>
                          <li>Alternative treatment taken in accredited or recognised hospitals</li>
                          <li>Domiciliary hospitalisation.</li>
                          <li>Outpatient Treatment </li>
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
                        <h5 className="htitle">Major Exclusion</h5>
                        <ul>
                          <li>Pre existing diseases from inception of the policy up to 4 years of this Policy being in force continuously.</li>
                          <li>Treatment of illnesses such as Ulcers, Tonsillectomy, Hernia, Cataract, Sinusitis, Gall Bladder Stones, Chronic Renal Failure during the first year of operation of the policy.</li>
                          <li>Treatment taken outside India</li>
                          <li>Stay in a hospital without undertaking any active regular treatment by the medical practitioner</li>
                          <li>Experimental and unproven treatment.</li>
                        </ul>
                        <p>
                          <strong>
                            Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings.
                          </strong>
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">Sum Insured</h5>
                      <p>Age:Minimum entry age is 3 months and maximum entry age is 65 years. There is no exit age.</p>
                      <p>Insured:Individual/ Family (For Family Insurance Policy - Family means the spouse, dependent children, parents and parents in law. For Family Floater Insurance Policy - Family means the spouse and dependent children)</p>
                      <p>Policy Term:1, 2 and 3 years.</p>
                      <p>Sum Insured:Hospitalisation sum insured options are 1, 2 and 3 Lakhs. OPD sum insured will depend on the age, premium and family type. Sum Insured of dependents will either be less than or equal to Proposer/ Primary Insured’s Sum Insured.</p>
                      <p>Premium:The premium for this product is flat Rs. 8,900, Rs. 13,350 or Rs. 17,800 per annum respectively for a sum Insured of 1, 2 or 3 lakhs.</p>
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
          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default ArogyaPlus;
